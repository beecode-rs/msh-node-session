import { createNamespace } from 'cls-hooked';
export const _defaultNameSpaceId = 'node-session-context-id-89a2af34c0a3f';
export class ClsHookedStrategy {
    _ns;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get NS() {
        return this._ns;
    }
    constructor(params) {
        const { nameSpaceId = _defaultNameSpaceId } = params ?? {};
        this._ns = createNamespace(nameSpaceId);
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
    get(key) {
        this._throwErrorIfInactiveContext();
        return this.NS.get(key);
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
    set(key, value) {
        this._throwErrorIfInactiveContext();
        this.NS.set(key, value);
    }
    clear(key) {
        this._throwErrorIfInactiveContext();
        this.NS.set(key, undefined);
    }
    createSession(callback, options) {
        const { defaultValue = {} } = options ?? {};
        this.NS.run(() => {
            Object.entries(defaultValue).map(([key, value]) => {
                this.set(key, value);
            });
            callback();
        });
    }
    _throwErrorIfInactiveContext() {
        if (!this.NS.active) {
            throw new Error('No active session found');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xzLWhvb2tlZC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXNzaW9uLXN0cmF0ZWd5L2Nscy1ob29rZWQtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQixlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFJNUQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsdUNBQXVDLENBQUE7QUFFMUUsTUFBTSxPQUFPLGlCQUFpQjtJQUNWLEdBQUcsQ0FBVztJQUVqQyxnRUFBZ0U7SUFDaEUsSUFBSSxFQUFFO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxZQUFZLE1BQWlDO1FBQzVDLE1BQU0sRUFBRSxXQUFXLEdBQUcsbUJBQW1CLEVBQUUsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFBO1FBQzFELElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsR0FBRyxDQUFJLEdBQVc7UUFDakIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUE7UUFFbkMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQWtCLENBQUE7SUFDekMsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxHQUFHLENBQUksR0FBVyxFQUFFLEtBQVE7UUFDM0IsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUE7UUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQTtRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFvQixFQUFFLE9BQThCO1FBQ2pFLE1BQU0sRUFBRSxZQUFZLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUMzQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNyQixDQUFDLENBQUMsQ0FBQTtZQUNGLFFBQVEsRUFBRSxDQUFBO1FBQ1gsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRVMsNEJBQTRCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUMzQyxDQUFDO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBOYW1lc3BhY2UsIGNyZWF0ZU5hbWVzcGFjZSB9IGZyb20gJ2Nscy1ob29rZWQnXG5cbmltcG9ydCB7IHR5cGUgQ3JlYXRlU2Vzc2lvbk9wdGlvbnMsIHR5cGUgU2Vzc2lvblN0cmF0ZWd5IH0gZnJvbSAnI3NyYy9zZXNzaW9uLXN0cmF0ZWd5L3Nlc3Npb24tc3RyYXRlZ3knXG5cbmV4cG9ydCBjb25zdCBfZGVmYXVsdE5hbWVTcGFjZUlkID0gJ25vZGUtc2Vzc2lvbi1jb250ZXh0LWlkLTg5YTJhZjM0YzBhM2YnXG5cbmV4cG9ydCBjbGFzcyBDbHNIb29rZWRTdHJhdGVneSBpbXBsZW1lbnRzIFNlc3Npb25TdHJhdGVneSB7XG5cdHByb3RlY3RlZCByZWFkb25seSBfbnM6IE5hbWVzcGFjZVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cblx0Z2V0IE5TKCk6IE5hbWVzcGFjZSB7XG5cdFx0cmV0dXJuIHRoaXMuX25zXG5cdH1cblxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiB7IG5hbWVTcGFjZUlkPzogc3RyaW5nIH0pIHtcblx0XHRjb25zdCB7IG5hbWVTcGFjZUlkID0gX2RlZmF1bHROYW1lU3BhY2VJZCB9ID0gcGFyYW1zID8/IHt9XG5cdFx0dGhpcy5fbnMgPSBjcmVhdGVOYW1lc3BhY2UobmFtZVNwYWNlSWQpXG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtcGFyYW1ldGVyc1xuXHRnZXQ8VD4oa2V5OiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkIHtcblx0XHR0aGlzLl90aHJvd0Vycm9ySWZJbmFjdGl2ZUNvbnRleHQoKVxuXG5cdFx0cmV0dXJuIHRoaXMuTlMuZ2V0KGtleSkgYXMgVCB8IHVuZGVmaW5lZFxuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS10eXBlLXBhcmFtZXRlcnNcblx0c2V0PFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xuXHRcdHRoaXMuX3Rocm93RXJyb3JJZkluYWN0aXZlQ29udGV4dCgpXG5cdFx0dGhpcy5OUy5zZXQoa2V5LCB2YWx1ZSlcblx0fVxuXG5cdGNsZWFyKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5fdGhyb3dFcnJvcklmSW5hY3RpdmVDb250ZXh0KClcblx0XHR0aGlzLk5TLnNldChrZXksIHVuZGVmaW5lZClcblx0fVxuXG5cdGNyZWF0ZVNlc3Npb24oY2FsbGJhY2s6ICgpID0+IHZvaWQsIG9wdGlvbnM/OiBDcmVhdGVTZXNzaW9uT3B0aW9ucyk6IHZvaWQge1xuXHRcdGNvbnN0IHsgZGVmYXVsdFZhbHVlID0ge30gfSA9IG9wdGlvbnMgPz8ge31cblx0XHR0aGlzLk5TLnJ1bigoKSA9PiB7XG5cdFx0XHRPYmplY3QuZW50cmllcyhkZWZhdWx0VmFsdWUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0KGtleSwgdmFsdWUpXG5cdFx0XHR9KVxuXHRcdFx0Y2FsbGJhY2soKVxuXHRcdH0pXG5cdH1cblxuXHRwcm90ZWN0ZWQgX3Rocm93RXJyb3JJZkluYWN0aXZlQ29udGV4dCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuTlMuYWN0aXZlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIGFjdGl2ZSBzZXNzaW9uIGZvdW5kJylcblx0XHR9XG5cdH1cbn1cbiJdfQ==