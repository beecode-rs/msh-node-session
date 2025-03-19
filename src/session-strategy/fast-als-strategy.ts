// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import fastAls from 'fast-als'

import { type CreateSessionOptions, type SessionStrategy } from '#src/session-strategy/session-strategy'

export class FastAlsStrategy implements SessionStrategy {
	clear(key: string): void {
		fastAls.set(key, undefined)
	}

	createSession(callback: () => void, options?: CreateSessionOptions): void {
		const { defaultValue = {} } = options ?? {}
		fastAls.runWith(defaultValue, () => {
			callback()
		})
	}

	get<T>(key: string): T | undefined {
		return fastAls.get(key) as T | undefined
	}

	set<T>(key: string, value: T): void {
		fastAls.set(key, value)
	}
}
