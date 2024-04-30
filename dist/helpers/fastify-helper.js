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
        const defaults = opts.defaults || {};
        const hook = opts.hook || 'onRequest';
        if (!this.validHooks.includes(hook)) {
            fastify.log.error(`${hook} is not a valid fastify hook. Please use one of the following ${this.validHooks}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdGlmeS1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9mYXN0aWZ5LWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUkvQixNQUFNLE9BQU8sYUFBYTtJQUNOLGdCQUFnQixDQUFpQjtJQUUzQyxVQUFVLEdBQUc7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLFlBQVk7S0FDWixDQUFBO0lBRUQsWUFBWSxNQUE0QztRQUN2RCxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUE7SUFDeEMsQ0FBQztJQUVELDhEQUE4RDtJQUNwRCxPQUFPLENBQUMsT0FBWSxFQUFFLElBQVMsRUFBRSxJQUFnQjtRQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQTtRQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQTtRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksaUVBQWlFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO1FBQzdHLENBQUM7UUFFRCw4REFBOEQ7UUFDOUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFTLEVBQUUsSUFBUyxFQUFFLElBQWdCLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtnQkFDeEMsSUFBSSxFQUFFLENBQUE7WUFDUCxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksRUFBRSxDQUFBO0lBQ1AsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxrQ0FBa0M7UUFDakMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUseUJBQXlCO1NBQy9CLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsTUFBNEMsRUFBaUIsRUFBRTtJQUNuRyxPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcCBmcm9tICdmYXN0aWZ5LXBsdWdpbidcblxuaW1wb3J0IHsgU2Vzc2lvblN0cmF0ZWd5IH0gZnJvbSAnI3NyYy9zZXNzaW9uLXN0cmF0ZWd5L3Nlc3Npb24tc3RyYXRlZ3knXG5cbmV4cG9ydCBjbGFzcyBGYXN0aWZ5SGVscGVyIHtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9zZXNzaW9uU3RyYXRlZ3k6IFNlc3Npb25TdHJhdGVneVxuXG5cdHJlYWRvbmx5IHZhbGlkSG9va3MgPSBbXG5cdFx0J29uUmVxdWVzdCcsXG5cdFx0J3ByZVBhcnNpbmcnLFxuXHRcdCdwcmVWYWxpZGF0aW9uJyxcblx0XHQncHJlSGFuZGxlcicsXG5cdFx0J3ByZVNlcmlhbGl6YXRpb24nLFxuXHRcdCdvbkVycm9yJyxcblx0XHQnb25TZW5kJyxcblx0XHQnb25SZXNwb25zZScsXG5cdF1cblxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2Vzc2lvblN0cmF0ZWd5OiBTZXNzaW9uU3RyYXRlZ3kgfSkge1xuXHRcdGNvbnN0IHsgc2Vzc2lvblN0cmF0ZWd5IH0gPSBwYXJhbXNcblx0XHR0aGlzLl9zZXNzaW9uU3RyYXRlZ3kgPSBzZXNzaW9uU3RyYXRlZ3lcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdHByb3RlY3RlZCBfcGx1Z2luKGZhc3RpZnk6IGFueSwgb3B0czogYW55LCBuZXh0OiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSBvcHRzLmRlZmF1bHRzIHx8IHt9XG5cdFx0Y29uc3QgaG9vayA9IG9wdHMuaG9vayB8fCAnb25SZXF1ZXN0J1xuXG5cdFx0aWYgKCF0aGlzLnZhbGlkSG9va3MuaW5jbHVkZXMoaG9vaykpIHtcblx0XHRcdGZhc3RpZnkubG9nLmVycm9yKGAke2hvb2t9IGlzIG5vdCBhIHZhbGlkIGZhc3RpZnkgaG9vay4gUGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyAke3RoaXMudmFsaWRIb29rc31gKVxuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0ZmFzdGlmeS5hZGRIb29rKCdvblJlcXVlc3QnLCAoX3JlcTogYW55LCBfcmVzOiBhbnksIGRvbmU6ICgpID0+IHZvaWQpID0+IHtcblx0XHRcdHRoaXMuX3Nlc3Npb25TdHJhdGVneS5jcmVhdGVTZXNzaW9uKCgpID0+IHtcblx0XHRcdFx0ZG9uZSgpXG5cdFx0XHR9LCBkZWZhdWx0cylcblx0XHR9KVxuXHRcdG5leHQoKVxuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0YmVlY29kZVNlc3Npb25Db250ZXh0UGx1Z2luRmFjdG9yeSgpOiBhbnkge1xuXHRcdHJldHVybiBmcCh0aGlzLl9wbHVnaW4uYmluZCh0aGlzKSwge1xuXHRcdFx0ZmFzdGlmeTogJzMueCcsXG5cdFx0XHRuYW1lOiAnYmVlY29kZS1zZXNzaW9uLWNvbnRleHQnLFxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGZhc3RpZnlIZWxwZXJGYWN0b3J5ID0gKHBhcmFtczogeyBzZXNzaW9uU3RyYXRlZ3k6IFNlc3Npb25TdHJhdGVneSB9KTogRmFzdGlmeUhlbHBlciA9PiB7XG5cdHJldHVybiBuZXcgRmFzdGlmeUhlbHBlcihwYXJhbXMpXG59XG4iXX0=