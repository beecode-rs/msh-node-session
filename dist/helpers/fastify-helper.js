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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdGlmeS1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9mYXN0aWZ5LWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUkvQixNQUFNLE9BQU8sYUFBYTtJQUNOLGdCQUFnQixDQUFpQjtJQUUzQyxVQUFVLEdBQUc7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLFlBQVk7S0FDWixDQUFBO0lBRUQsWUFBWSxNQUE0QztRQUN2RCxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUE7SUFDeEMsQ0FBQztJQUVELDhEQUE4RDtJQUNwRCxPQUFPLENBQUMsT0FBWSxFQUFFLElBQVMsRUFBRSxJQUFnQjtRQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQTtRQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQTtRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksaUVBQWlFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4SCxDQUFDO1FBRUQsOERBQThEO1FBQzlELE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFnQixFQUFFLEVBQUU7WUFDdkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hDLElBQUksRUFBRSxDQUFBO1lBQ1AsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLEVBQUUsQ0FBQTtJQUNQLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsa0NBQWtDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLHlCQUF5QjtTQUMvQixDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE1BQTRDLEVBQWlCLEVBQUU7SUFDbkcsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgZnJvbSAnZmFzdGlmeS1wbHVnaW4nXG5cbmltcG9ydCB7IHR5cGUgU2Vzc2lvblN0cmF0ZWd5IH0gZnJvbSAnI3NyYy9zZXNzaW9uLXN0cmF0ZWd5L3Nlc3Npb24tc3RyYXRlZ3knXG5cbmV4cG9ydCBjbGFzcyBGYXN0aWZ5SGVscGVyIHtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9zZXNzaW9uU3RyYXRlZ3k6IFNlc3Npb25TdHJhdGVneVxuXG5cdHJlYWRvbmx5IHZhbGlkSG9va3MgPSBbXG5cdFx0J29uUmVxdWVzdCcsXG5cdFx0J3ByZVBhcnNpbmcnLFxuXHRcdCdwcmVWYWxpZGF0aW9uJyxcblx0XHQncHJlSGFuZGxlcicsXG5cdFx0J3ByZVNlcmlhbGl6YXRpb24nLFxuXHRcdCdvbkVycm9yJyxcblx0XHQnb25TZW5kJyxcblx0XHQnb25SZXNwb25zZScsXG5cdF1cblxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2Vzc2lvblN0cmF0ZWd5OiBTZXNzaW9uU3RyYXRlZ3kgfSkge1xuXHRcdGNvbnN0IHsgc2Vzc2lvblN0cmF0ZWd5IH0gPSBwYXJhbXNcblx0XHR0aGlzLl9zZXNzaW9uU3RyYXRlZ3kgPSBzZXNzaW9uU3RyYXRlZ3lcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdHByb3RlY3RlZCBfcGx1Z2luKGZhc3RpZnk6IGFueSwgb3B0czogYW55LCBuZXh0OiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSBvcHRzLmRlZmF1bHRzIHx8IHt9XG5cdFx0Y29uc3QgaG9vayA9IG9wdHMuaG9vayB8fCAnb25SZXF1ZXN0J1xuXG5cdFx0aWYgKCF0aGlzLnZhbGlkSG9va3MuaW5jbHVkZXMoaG9vaykpIHtcblx0XHRcdGZhc3RpZnkubG9nLmVycm9yKGAke2hvb2t9IGlzIG5vdCBhIHZhbGlkIGZhc3RpZnkgaG9vay4gUGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyAke3RoaXMudmFsaWRIb29rcy5qb2luKCcsICcpfWApXG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRmYXN0aWZ5LmFkZEhvb2soJ29uUmVxdWVzdCcsIChfcmVxOiBhbnksIF9yZXM6IGFueSwgZG9uZTogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdFx0dGhpcy5fc2Vzc2lvblN0cmF0ZWd5LmNyZWF0ZVNlc3Npb24oKCkgPT4ge1xuXHRcdFx0XHRkb25lKClcblx0XHRcdH0sIGRlZmF1bHRzKVxuXHRcdH0pXG5cdFx0bmV4dCgpXG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRiZWVjb2RlU2Vzc2lvbkNvbnRleHRQbHVnaW5GYWN0b3J5KCk6IGFueSB7XG5cdFx0cmV0dXJuIGZwKHRoaXMuX3BsdWdpbi5iaW5kKHRoaXMpLCB7XG5cdFx0XHRmYXN0aWZ5OiAnMy54Jyxcblx0XHRcdG5hbWU6ICdiZWVjb2RlLXNlc3Npb24tY29udGV4dCcsXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZmFzdGlmeUhlbHBlckZhY3RvcnkgPSAocGFyYW1zOiB7IHNlc3Npb25TdHJhdGVneTogU2Vzc2lvblN0cmF0ZWd5IH0pOiBGYXN0aWZ5SGVscGVyID0+IHtcblx0cmV0dXJuIG5ldyBGYXN0aWZ5SGVscGVyKHBhcmFtcylcbn1cbiJdfQ==