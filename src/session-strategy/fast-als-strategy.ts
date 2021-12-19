import { CreateSessionOptions, SessionStrategy } from './session-strategy'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fastAls from 'fast-als'

export class FastAlsStrategy implements SessionStrategy {
  public clear(key: string): void {
    fastAls.set(key, undefined)
  }

  public createSession(callback: () => void, options?: CreateSessionOptions): void {
    const { defaultValue = {} } = options ?? {}
    fastAls.runWith(defaultValue, () => {
      callback()
    })
  }

  public get<T>(key: string): T | undefined {
    return fastAls.get(key) as T | undefined
  }

  public set<T>(key: string, value: T): void {
    fastAls.set(key, value)
  }
}
