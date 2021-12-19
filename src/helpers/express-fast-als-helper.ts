import { FastAlsStrategy } from '../session-strategy/fast-als-strategy'
import { NextFunction, Request, Response } from 'express'

export class ExpressFastAlsHelper {
  protected readonly _fastAlsStrategy: FastAlsStrategy

  public constructor(params: { fastAlsStrategy: FastAlsStrategy }) {
    const { fastAlsStrategy } = params
    this._fastAlsStrategy = fastAlsStrategy
  }

  public expressMiddleware(_req: Request, _res: Response, next: NextFunction): void {
    this._fastAlsStrategy.createSession(next)
  }
}

export const expressFastAlsHelperFactory = (params: { fastAlsStrategy: FastAlsStrategy }): ExpressFastAlsHelper => {
  return new ExpressFastAlsHelper(params)
}
