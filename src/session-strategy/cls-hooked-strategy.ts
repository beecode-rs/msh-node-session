import { type Namespace, createNamespace } from 'cls-hooked'

import { type CreateSessionOptions, type SessionStrategy } from '#src/session-strategy/session-strategy'

export const _defaultNameSpaceId = 'node-session-context-id-89a2af34c0a3f'

export class ClsHookedStrategy implements SessionStrategy {
	protected readonly _ns: Namespace

	// eslint-disable-next-line @typescript-eslint/naming-convention
	get NS(): Namespace {
		return this._ns
	}

	constructor(params?: { nameSpaceId?: string }) {
		const { nameSpaceId = _defaultNameSpaceId } = params ?? {}
		this._ns = createNamespace(nameSpaceId)
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	get<T>(key: string): T | undefined {
		this._throwErrorIfInactiveContext()

		return this.NS.get(key) as T | undefined
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	set<T>(key: string, value: T): void {
		this._throwErrorIfInactiveContext()
		this.NS.set(key, value)
	}

	clear(key: string): void {
		this._throwErrorIfInactiveContext()
		this.NS.set(key, undefined)
	}

	createSession(callback: () => void, options?: CreateSessionOptions): void {
		const { defaultValue = {} } = options ?? {}
		this.NS.run(() => {
			Object.entries(defaultValue).map(([key, value]) => {
				this.set(key, value)
			})
			callback()
		})
	}

	protected _throwErrorIfInactiveContext(): void {
		if (!this.NS.active) {
			throw new Error('No active session found')
		}
	}
}
