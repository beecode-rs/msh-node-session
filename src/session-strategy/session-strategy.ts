// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CreateSessionOptions = { defaultValue?: Record<string, any> }

export interface SessionStrategy {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	get<T>(key: string): T | undefined
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	set<T>(key: string, value: T): void
	clear(key: string): void
	createSession(callback: () => void, options?: CreateSessionOptions): void
}
