import { ClsHookedStrategy } from '#src/session-strategy/cls-hooked-strategy'
import { type SessionStrategy } from '#src/session-strategy/session-strategy'

export class NodeSessionUtil {
	protected readonly _strategy: SessionStrategy

	constructor(props?: { sessionStrategy?: SessionStrategy }) {
		const { sessionStrategy = new ClsHookedStrategy() } = props ?? {}
		this._strategy = sessionStrategy
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	createAsyncSession<T = any>(callback: () => Promise<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			this._strategy.createSession(() => {
				callback().then(resolve).catch(reject)
			})
		})
	}

	createSession(callback: () => void): void {
		this._strategy.createSession(callback)
	}
}
