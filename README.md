[![Build Status](https://beecode.semaphoreci.com/badges/msh-node-session/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-node-session)
[![codecov](https://codecov.io/gh/beecode-rs/msh-node-session/branch/main/graph/badge.svg?token=fHc0YaxEiB)](https://codecov.io/gh/beecode-rs/msh-node-session)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-node-session)](https://github.com/beecode-rs/msh-node-session/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-node-session.png)](https://nodei.co/npm/@beecode/msh-node-session)

# msh-node-session

Micro-service helper: node error

This project is intended to be used in typescript project.

<!-- toc -->

- [Install](#install)
- [Diagram](#diagram)
- [Usage](#usage)

<!-- tocstop -->

## Install

`npm i @beecode/msh-node-session`

## Diagram

![vision-diagram](resource/doc/vision/vision.svg)

## Usage

### Util implementation example

#### Class extension

```typescript
import { NodeSessionUtil } from '@beecode/msh-node-session'
import { cacheUtil } from '@beecode/msh-node-util/lib/cache-util'

export enum SessionData {
  TYPEORM_ENTITY_MANAGER = 'typeorm-entity-manager',
  AUTH_USER = 'auth-user',
}

export class SessionUtil extends NodeSessionUtil {

  public constructor(params: { nodeSessionDao?: NodeSessionDao }) {
    const { nodeSessionDao } = params ?? {}
    super({ nodeSessionDao })
  }

  public getTransactionManager(): EntityManager | undefined {
    try {
      return nodeSessionDao.get<EntityManager>(SessionData.TYPEORM_ENTITY_MANAGER)
    } catch (_err) {
      return undefined
    }
  }

  protected _setTransactionManager(entityManager: EntityManager): void {
    return this._dao.set<EntityManager>(SessionData.TYPEORM_ENTITY_MANAGER, entityManager)
  }
  
  public async startTransaction<T>(callback: (transactionEntityManager: EntityManager) => Promise<T>): Promise<T> {
    return nodeSessionDao.createAsync(() => {
      const existingTransactionManager = this.getTransactionManager()
      if (existingTransactionManager) return callback(existingTransactionManager)
      return databaseService.getConnection().transaction<T>((newTransEntityManager: EntityManager) => {
        this._setTransactionManager(newTransEntityManager)
        return callback(newTransEntityManager)
      })
    })
  }

  public setAuthUser(authUser: JWTPayloadUser): void {
    return this._dao.set<JWTPayloadUser>(SessionData.AUTH_USER, authUser);
  }

  public getAuthUser(): JWTPayloadUser {
    const authUser = nodeSessionDao.get<JWTPayloadUser>(SessionData.AUTH_USER)
    if (!authUser) throw error.server.internalServerError('Missing auth user from session')
    return authUser
  }

  /**
   * Connect to existing transaction, this is only used in migrations files
   * @param {EntityManager} entityManager
   * @param {() => Promise<T>} callback
   * @returns {Promise<T>}
   */
  public async entityManagerSideCall<T>(entityManager: EntityManager, callback: () => Promise<T>): Promise<T> {
    return this._dao.createAsync(async () => {
      this._setTransactionManager(entityManager)
      return callback()
    })
  }
}

export const sessionUtil = cacheUtil.singleton(() => new SessionUtil())

```

#### Factory implementation

```typescript
import { NodeSessionDao, nodeSessionUtilFactory } from '@beecode/msh-node-session'


export enum SessionData {
  TYPEORM_ENTITY_MANAGER = 'typeorm-entity-manager',
  AUTH_USER = 'auth-user',
}

export const sessionUtil = {
  ...nodeSessionUtilFactory(),

  getTransactionManager: (): EntityManager | undefined => {
    try {
      return nodeSessionDao.get<EntityManager>(SessionData.TYPEORM_ENTITY_MANAGER)
    } catch (_err) {
      return undefined
    }
  },

  _setTransactionManager: (entityManager: EntityManager): void =>
    nodeSessionDao.set<EntityManager>(SessionData.TYPEORM_ENTITY_MANAGER, entityManager),

  startTransaction: async <T>(callback: (transactionEntityManager: EntityManager) => Promise<T>): Promise<T> => {
    return nodeSessionDao.createAsync(() => {
      const existingTransactionManager = sessionUtil.getTransactionManager()
      if (existingTransactionManager) return callback(existingTransactionManager)
      return databaseService.getConnection().transaction<T>((newTransEntityManager: EntityManager) => {
        sessionUtil._setTransactionManager(newTransEntityManager)
        return callback(newTransEntityManager)
      })
    })
  },

  setAuthUser: (authUser: JWTPayloadUser): void => nodeSessionDao.set<JWTPayloadUser>(SessionData.AUTH_USER, authUser),

  getAuthUser: (): JWTPayloadUser => {
    const authUser = nodeSessionDao.get<JWTPayloadUser>(SessionData.AUTH_USER)
    if (!authUser) throw error.server.internalServerError('Missing auth user from session')
    return authUser
  },

  /**
   * Connect to existing transaction, this is only used in migrations files
   * @param {EntityManager} entityManager
   * @param {() => Promise<T>} callback
   * @returns {Promise<T>}
   */
  entityManagerSideCall: async <T>(entityManager: EntityManager, callback: () => Promise<T>): Promise<T> => {
    return nodeSessionDao.createAsync(async () => {
      sessionUtil._setTransactionManager(entityManager)
      return callback()
    })
  },
}
```

### Express middleware example

```typescript
import express from 'express'

const expressApp = express()

expressApp.use(sessionUtil.expressMiddleware)
expressApp.use(sessionUtil.expressMiddlewareBindEmitter)
// other middlewares
// expressApp.use(... 
```
