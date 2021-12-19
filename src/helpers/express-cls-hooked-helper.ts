import { ClsHookedStrategy } from '../session-strategy/cls-hooked-strategy'
import { NextFunction, Request, Response } from 'express'

export class ExpressClsHookedHelper {
  protected readonly _clsHookedStrategy: ClsHookedStrategy

  public constructor(params: { clsHookedStrategy: ClsHookedStrategy }) {
    const { clsHookedStrategy } = params
    this._clsHookedStrategy = clsHookedStrategy
  }

  public expressMiddleware(_req: Request, _res: Response, next: NextFunction): void {
    this._clsHookedStrategy.createSession(next)
  }

  public expressMiddlewareBindEmitter(req: Request, res: Response, next: NextFunction): void {
    this._clsHookedStrategy.NS.bindEmitter(req)
    this._clsHookedStrategy.NS.bindEmitter(res)
    next()
  }
}

export const expressClsHookedHelperFactory = (params: { clsHookedStrategy: ClsHookedStrategy }): ExpressClsHookedHelper => {
  return new ExpressClsHookedHelper(params)
}
