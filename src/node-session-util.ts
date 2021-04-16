import { nodeSessionDao } from './node-session-dao'
import { NextFunction, Request, Response } from 'express'

export const nodeSessionUtil = {
  createSession: (callback: () => void): void => {
    nodeSessionDao._ns.run(() => callback())
  },
  expressMiddleware: (_req: Request, _res: Response, next: NextFunction): void => {
    nodeSessionUtil.createSession(next)
  },
  expressMiddlewareBindEmitter: (req: Request, res: Response, next: NextFunction): void => {
    nodeSessionDao._ns.bindEmitter(req)
    nodeSessionDao._ns.bindEmitter(res)
    next()
  },
}
