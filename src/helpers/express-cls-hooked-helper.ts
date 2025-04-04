import { type NextFunction, type Request, type Response } from 'express'

import { type ClsHookedStrategy } from '#src/session-strategy/cls-hooked-strategy'

export class ExpressClsHookedHelper {
	protected readonly _clsHookedStrategy: ClsHookedStrategy

	constructor(params: { clsHookedStrategy: ClsHookedStrategy }) {
		const { clsHookedStrategy } = params
		this._clsHookedStrategy = clsHookedStrategy
	}

	expressMiddleware(_req: Request, _res: Response, next: NextFunction): void {
		this._clsHookedStrategy.createSession(next)
	}

	expressMiddlewareBindEmitter(req: Request, res: Response, next: NextFunction): void {
		this._clsHookedStrategy.NS.bindEmitter(req)
		this._clsHookedStrategy.NS.bindEmitter(res)
		next()
	}
}

export const expressClsHookedHelperFactory = (params: { clsHookedStrategy: ClsHookedStrategy }): ExpressClsHookedHelper => {
	return new ExpressClsHookedHelper(params)
}
