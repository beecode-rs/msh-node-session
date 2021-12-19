import { ClsHooksStrategy } from '../session-strategy/cls-hooks-strategy'
import { NextFunction, Request, Response } from 'express'

export class ExpressClsHooksHelper {
  protected readonly _clsHooksStrategy: ClsHooksStrategy

  public constructor(params: { clsHooksStrategy: ClsHooksStrategy }) {
    const { clsHooksStrategy } = params
    this._clsHooksStrategy = clsHooksStrategy
  }

  public expressMiddleware(_req: Request, _res: Response, next: NextFunction): void {
    this._clsHooksStrategy.createSession(next)
  }

  public expressMiddlewareBindEmitter(req: Request, res: Response, next: NextFunction): void {
    this._clsHooksStrategy.NS.bindEmitter(req)
    this._clsHooksStrategy.NS.bindEmitter(res)
    next()
  }
}

export const clsHooksExpressHelperFactory = (params: { clsHooksStrategy: ClsHooksStrategy }): ExpressClsHooksHelper => {
  return new ExpressClsHooksHelper(params)
}
