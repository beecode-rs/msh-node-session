import { type NextFunction, type Request, type Response } from 'express'

import { type AsyncLocalStorageStrategy } from '#src/session-strategy/async-local-storage-strategy'

export class ExpressAsyncLocalStorageHelper {
	protected readonly _asyncLocalStorageStrategy: AsyncLocalStorageStrategy

	constructor(params: { asyncLocalStorageStrategy: AsyncLocalStorageStrategy }) {
		const { asyncLocalStorageStrategy } = params
		this._asyncLocalStorageStrategy = asyncLocalStorageStrategy
	}

	expressMiddleware(_req: Request, _res: Response, next: NextFunction): void {
		this._asyncLocalStorageStrategy.createSession(next)
	}
}

export const expressAsyncLocalStorageHelperFactory = (params: {
	asyncLocalStorageStrategy: AsyncLocalStorageStrategy
}): ExpressAsyncLocalStorageHelper => {
	return new ExpressAsyncLocalStorageHelper(params)
}
