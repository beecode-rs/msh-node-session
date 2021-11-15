import { NodeSessionDao } from './node-session-dao'
import { NextFunction, Request, Response } from 'express'

export class NodeSessionUtil {
  protected readonly _dao: NodeSessionDao

  constructor(props: { nodeSessionDao?: NodeSessionDao } = {}) {
    const { nodeSessionDao = new NodeSessionDao() } = props
    this._dao = nodeSessionDao
  }

  public createAsyncSession<T = any>(callback: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this._dao.NS.run(() => {
        callback().then(resolve).catch(reject)
      })
    })
  }

  public createSession(callback: () => void): void {
    this._dao.NS.run(() => callback())
  }

  public expressMiddleware(_req: Request, _res: Response, next: NextFunction): void {
    this.createSession(next)
  }

  public expressMiddlewareBindEmitter(req: Request, res: Response, next: NextFunction): void {
    this._dao.NS.bindEmitter(req)
    this._dao.NS.bindEmitter(res)
    next()
  }
}

export const nodeSessionUtilFactory = (params: { nodeSessionDao?: NodeSessionDao } = {}): NodeSessionUtil => {
  return new NodeSessionUtil(params)
}
