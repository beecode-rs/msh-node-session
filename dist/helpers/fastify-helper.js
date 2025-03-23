import fp from 'fastify-plugin';
export class FastifyHelper {
    _sessionStrategy;
    validHooks = [
        'onRequest',
        'preParsing',
        'preValidation',
        'preHandler',
        'preSerialization',
        'onError',
        'onSend',
        'onResponse',
    ];
    constructor(params) {
        const { sessionStrategy } = params;
        this._sessionStrategy = sessionStrategy;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _plugin(fastify, opts, next) {
        const defaults = opts.defaults ?? {};
        const hook = opts.hook ?? 'onRequest';
        if (!this.validHooks.includes(hook)) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            fastify.log.error(`${hook} is not a valid fastify hook. Please use one of the following ${this.validHooks.join(', ')}`);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fastify.addHook('onRequest', (_req, _res, done) => {
            this._sessionStrategy.createSession(() => {
                done();
            }, defaults);
        });
        next();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beecodeSessionContextPluginFactory() {
        return fp(this._plugin.bind(this), {
            fastify: '3.x',
            name: 'beecode-session-context',
        });
    }
}
export const fastifyHelperFactory = (params) => {
    return new FastifyHelper(params);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdGlmeS1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9mYXN0aWZ5LWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUkvQixNQUFNLE9BQU8sYUFBYTtJQUNOLGdCQUFnQixDQUFpQjtJQUUzQyxVQUFVLEdBQUc7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLFlBQVk7S0FDWixDQUFBO0lBRUQsWUFBWSxNQUE0QztRQUN2RCxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUE7SUFDeEMsQ0FBQztJQUVELDhEQUE4RDtJQUNwRCxPQUFPLENBQUMsT0FBWSxFQUFFLElBQVMsRUFBRSxJQUFnQjtRQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQTtRQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQTtRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNyQyw0RUFBNEU7WUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLGlFQUFpRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEgsQ0FBQztRQUVELDhEQUE4RDtRQUM5RCxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBZ0IsRUFBRSxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFO2dCQUN4QyxJQUFJLEVBQUUsQ0FBQTtZQUNQLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxFQUFFLENBQUE7SUFDUCxDQUFDO0lBRUQsOERBQThEO0lBQzlELGtDQUFrQztRQUNqQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSx5QkFBeUI7U0FDL0IsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNEO0FBRUQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxNQUE0QyxFQUFpQixFQUFFO0lBQ25HLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gJ2Zhc3RpZnktcGx1Z2luJ1xuXG5pbXBvcnQgeyB0eXBlIFNlc3Npb25TdHJhdGVneSB9IGZyb20gJyNzcmMvc2Vzc2lvbi1zdHJhdGVneS9zZXNzaW9uLXN0cmF0ZWd5J1xuXG5leHBvcnQgY2xhc3MgRmFzdGlmeUhlbHBlciB7XG5cdHByb3RlY3RlZCByZWFkb25seSBfc2Vzc2lvblN0cmF0ZWd5OiBTZXNzaW9uU3RyYXRlZ3lcblxuXHRyZWFkb25seSB2YWxpZEhvb2tzID0gW1xuXHRcdCdvblJlcXVlc3QnLFxuXHRcdCdwcmVQYXJzaW5nJyxcblx0XHQncHJlVmFsaWRhdGlvbicsXG5cdFx0J3ByZUhhbmRsZXInLFxuXHRcdCdwcmVTZXJpYWxpemF0aW9uJyxcblx0XHQnb25FcnJvcicsXG5cdFx0J29uU2VuZCcsXG5cdFx0J29uUmVzcG9uc2UnLFxuXHRdXG5cblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IHNlc3Npb25TdHJhdGVneTogU2Vzc2lvblN0cmF0ZWd5IH0pIHtcblx0XHRjb25zdCB7IHNlc3Npb25TdHJhdGVneSB9ID0gcGFyYW1zXG5cdFx0dGhpcy5fc2Vzc2lvblN0cmF0ZWd5ID0gc2Vzc2lvblN0cmF0ZWd5XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRwcm90ZWN0ZWQgX3BsdWdpbihmYXN0aWZ5OiBhbnksIG9wdHM6IGFueSwgbmV4dDogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0gb3B0cy5kZWZhdWx0cyA/PyB7fVxuXHRcdGNvbnN0IGhvb2sgPSBvcHRzLmhvb2sgPz8gJ29uUmVxdWVzdCdcblxuXHRcdGlmICghdGhpcy52YWxpZEhvb2tzLmluY2x1ZGVzKGhvb2spKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXRlbXBsYXRlLWV4cHJlc3Npb25zXG5cdFx0XHRmYXN0aWZ5LmxvZy5lcnJvcihgJHtob29rfSBpcyBub3QgYSB2YWxpZCBmYXN0aWZ5IGhvb2suIFBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgJHt0aGlzLnZhbGlkSG9va3Muam9pbignLCAnKX1gKVxuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0ZmFzdGlmeS5hZGRIb29rKCdvblJlcXVlc3QnLCAoX3JlcTogYW55LCBfcmVzOiBhbnksIGRvbmU6ICgpID0+IHZvaWQpID0+IHtcblx0XHRcdHRoaXMuX3Nlc3Npb25TdHJhdGVneS5jcmVhdGVTZXNzaW9uKCgpID0+IHtcblx0XHRcdFx0ZG9uZSgpXG5cdFx0XHR9LCBkZWZhdWx0cylcblx0XHR9KVxuXHRcdG5leHQoKVxuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0YmVlY29kZVNlc3Npb25Db250ZXh0UGx1Z2luRmFjdG9yeSgpOiBhbnkge1xuXHRcdHJldHVybiBmcCh0aGlzLl9wbHVnaW4uYmluZCh0aGlzKSwge1xuXHRcdFx0ZmFzdGlmeTogJzMueCcsXG5cdFx0XHRuYW1lOiAnYmVlY29kZS1zZXNzaW9uLWNvbnRleHQnLFxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGZhc3RpZnlIZWxwZXJGYWN0b3J5ID0gKHBhcmFtczogeyBzZXNzaW9uU3RyYXRlZ3k6IFNlc3Npb25TdHJhdGVneSB9KTogRmFzdGlmeUhlbHBlciA9PiB7XG5cdHJldHVybiBuZXcgRmFzdGlmeUhlbHBlcihwYXJhbXMpXG59XG4iXX0=