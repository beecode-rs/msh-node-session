// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CreateSessionOptions = { defaultValue?: { [k: string]: any } }

export interface SessionStrategy {
	get<T>(key: string): T | undefined
	set<T>(key: string, value: T): void
	clear(key: string): void
	createSession(callback: () => void, options?: CreateSessionOptions): void
}
