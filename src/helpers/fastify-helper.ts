import { SessionStrategy } from '../session-strategy/session-strategy'
import fp from 'fastify-plugin'

export class FastifyHelper {
  protected readonly _sessionStrategy: SessionStrategy

  public readonly validHooks = [
    'onRequest',
    'preParsing',
    'preValidation',
    'preHandler',
    'preSerialization',
    'onError',
    'onSend',
    'onResponse',
  ]

  public constructor(params: { sessionStrategy: SessionStrategy }) {
    const { sessionStrategy } = params
    this._sessionStrategy = sessionStrategy
  }

  protected _plugin(fastify: any, opts: any, next: () => void): void {
    const defaults = opts.defaults || {}
    const hook = opts.hook || 'onRequest'

    if (!this.validHooks.includes(hook)) {
      fastify.log.error(`${hook} is not a valid fastify hook. Please use one of the following ${this.validHooks}`)
    }

    fastify.addHook('onRequest', (_req: any, _res: any, done: () => void) => {
      this._sessionStrategy.createSession(() => {
        done()
      }, defaults)
    })
    next()
  }

  public beecodeSessionContextPluginFactory(): any {
    return fp(this._plugin.bind(this), {
      fastify: '3.x',
      name: 'beecode-session-context',
    })
  }
}

export const fastifyHelperFactory = (params: { sessionStrategy: SessionStrategy }): FastifyHelper => {
  return new FastifyHelper(params)
}
