import { Namespace, createNamespace } from 'cls-hooked'

export const _defaultNameSpaceId = 'node-session-context-id-89a2af34c0a3f'

export class NodeSessionDao {
  protected readonly _ns: Namespace

  public get NS(): Namespace {
    return this._ns
  }

  constructor(params: { nameSpaceId?: string } = {}) {
    const { nameSpaceId = _defaultNameSpaceId } = params
    this._ns = createNamespace(nameSpaceId)
  }

  public get<T>(key: string): T | undefined {
    this._throwErrorIfInactiveContext()
    return this.NS.get(key) as T | undefined
  }

  public set<T>(key: string, value: T): void {
    this._throwErrorIfInactiveContext()
    this.NS.set(key, value)
  }

  public clear(key: string): void {
    this._throwErrorIfInactiveContext()
    this.NS.set(key, undefined)
  }

  protected _throwErrorIfInactiveContext(): void {
    if (!this.NS.active) throw new Error('No active session found')
  }
}
