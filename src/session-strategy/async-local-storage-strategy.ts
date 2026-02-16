import { AsyncLocalStorage } from 'node:async_hooks'

import { type CreateSessionOptions, type SessionStrategy } from '#src/session-strategy/session-strategy.js'

export class AsyncLocalStorageStrategy implements SessionStrategy {
	protected readonly _storage = new AsyncLocalStorage<Map<string, unknown>>()

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	get<T>(key: string): T | undefined {
		const store = this._storage.getStore()
		this._throwErrorIfInactiveContext(store)

		return store!.get(key) as T | undefined
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	set<T>(key: string, value: T): void {
		const store = this._storage.getStore()
		this._throwErrorIfInactiveContext(store)
		store!.set(key, value)
	}

	clear(key: string): void {
		const store = this._storage.getStore()
		this._throwErrorIfInactiveContext(store)
		store!.delete(key)
	}

	createSession(callback: () => void, options?: CreateSessionOptions): void {
		const { defaultValue = {} } = options ?? {}
		const store = new Map<string, unknown>(Object.entries(defaultValue))
		this._storage.run(store, callback)
	}

	protected _throwErrorIfInactiveContext(store?: Map<string, unknown>): void {
		if (!store) {
			throw new Error('No active session found')
		}
	}
}
