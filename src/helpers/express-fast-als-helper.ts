import { NextFunction, Request, Response } from 'express'
import { FastAlsStrategy } from 'src/session-strategy/fast-als-strategy'

export class ExpressFastAlsHelper {
	protected readonly _fastAlsStrategy: FastAlsStrategy

	constructor(params: { fastAlsStrategy: FastAlsStrategy }) {
		const { fastAlsStrategy } = params
		this._fastAlsStrategy = fastAlsStrategy
	}

	expressMiddleware(_req: Request, _res: Response, next: NextFunction): void {
		this._fastAlsStrategy.createSession(next)
	}
}

export const expressFastAlsHelperFactory = (params: { fastAlsStrategy: FastAlsStrategy }): ExpressFastAlsHelper => {
	return new ExpressFastAlsHelper(params)
}
