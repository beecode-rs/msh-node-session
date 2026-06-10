[**@beecode/msh-node-session**](../../../../../README.md)

***

[@beecode/msh-node-session](../../../../../README.md) / [business/service/helper/express-async-local-storage-helper](../README.md) / ExpressAsyncLocalStorageHelper

# Class: ExpressAsyncLocalStorageHelper

Defined in: [business/service/helper/express-async-local-storage-helper.ts:5](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-async-local-storage-helper.ts#L5)

## Constructors

### Constructor

> **new ExpressAsyncLocalStorageHelper**(`params`): `ExpressAsyncLocalStorageHelper`

Defined in: [business/service/helper/express-async-local-storage-helper.ts:8](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-async-local-storage-helper.ts#L8)

#### Parameters

##### params

###### asyncLocalStorageStrategy

[`AsyncLocalStorageStrategy`](../../../session-strategy/async-local-storage-strategy/classes/AsyncLocalStorageStrategy.md)

#### Returns

`ExpressAsyncLocalStorageHelper`

## Properties

### \_asyncLocalStorageStrategy

> `protected` `readonly` **\_asyncLocalStorageStrategy**: [`AsyncLocalStorageStrategy`](../../../session-strategy/async-local-storage-strategy/classes/AsyncLocalStorageStrategy.md)

Defined in: [business/service/helper/express-async-local-storage-helper.ts:6](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-async-local-storage-helper.ts#L6)

## Methods

### expressMiddleware()

> **expressMiddleware**(`_req`, `_res`, `next`): `void`

Defined in: [business/service/helper/express-async-local-storage-helper.ts:13](https://github.com/beecode-rs/msh-node-session/blob/73b72ea9132e5d8ed66cc579b141d30d8bd914ef/src/business/service/helper/express-async-local-storage-helper.ts#L13)

#### Parameters

##### \_req

`Request`

##### \_res

`Response`

##### next

`NextFunction`

#### Returns

`void`
