import { type SessionStrategy } from '#src/session-strategy/session-strategy';
export declare class FastifyHelper {
    protected readonly _sessionStrategy: SessionStrategy;
    readonly validHooks: string[];
    constructor(params: {
        sessionStrategy: SessionStrategy;
    });
    protected _plugin(fastify: any, opts: any, next: () => void): void;
    beecodeSessionContextPluginFactory(): any;
}
export declare const fastifyHelperFactory: (params: {
    sessionStrategy: SessionStrategy;
}) => FastifyHelper;
//# sourceMappingURL=fastify-helper.d.ts.map