import { createNamespace } from 'cls-hooked'

export const _nsid = 'node-session-context-id-89a2af34c0a3f'

export const nodeSessionDao = {
  _ns: createNamespace(_nsid),
  _throwErrorIfInactiveContext: (): void => {
    if (!nodeSessionDao._ns || !nodeSessionDao._ns.active) throw new Error('No active session found')
  },
  get: <T>(key: string): T | undefined => {
    nodeSessionDao._throwErrorIfInactiveContext()
    return nodeSessionDao._ns.get(key) as T | undefined
  },
  set: <T>(key: string, value: T): void => {
    nodeSessionDao._throwErrorIfInactiveContext()
    nodeSessionDao._ns.set(key, value)
  },
  clear: (key: string): void => {
    nodeSessionDao._throwErrorIfInactiveContext()
    nodeSessionDao._ns.set(key, undefined)
  },
  createAsync: <T>(callback: () => Promise<T>): Promise<T> => {
    return new Promise((resolve, reject) => {
      try {
        nodeSessionDao._ns.run(async () => {
          const result = await callback()
          resolve(result)
        })
      } catch (err) {
        reject(err)
      }
    })
  },
}
