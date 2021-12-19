import { ClsHookedStrategy } from './session-strategy/cls-hooked-strategy'
import { SessionStrategy } from './session-strategy/session-strategy'

export class NodeSessionUtil {
  protected readonly _strategy: SessionStrategy

  public constructor(props?: { sessionStrategy?: SessionStrategy }) {
    const { sessionStrategy = new ClsHookedStrategy() } = props ?? {}
    this._strategy = sessionStrategy
  }

  public createAsyncSession<T = any>(callback: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this._strategy.createSession(() => {
        callback().then(resolve).catch(reject)
      })
    })
  }

  public createSession(callback: () => void): void {
    this._strategy.createSession(callback)
  }
}
