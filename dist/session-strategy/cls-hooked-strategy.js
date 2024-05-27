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
    get(key) {
        this._throwErrorIfInactiveContext();
        return this.NS.get(key);
    }
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
            Object.entries(defaultValue).map(([key, value]) => this.set(key, value));
            callback();
        });
    }
    _throwErrorIfInactiveContext() {
        if (!this.NS.active) {
            throw new Error('No active session found');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xzLWhvb2tlZC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXNzaW9uLXN0cmF0ZWd5L2Nscy1ob29rZWQtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQTtBQUl2RCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyx1Q0FBdUMsQ0FBQTtBQUUxRSxNQUFNLE9BQU8saUJBQWlCO0lBQ1YsR0FBRyxDQUFXO0lBRWpDLGdFQUFnRTtJQUNoRSxJQUFJLEVBQUU7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDaEIsQ0FBQztJQUVELFlBQVksTUFBaUM7UUFDNUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxtQkFBbUIsRUFBRSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUE7UUFDMUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELEdBQUcsQ0FBSSxHQUFXO1FBQ2pCLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFBO1FBRW5DLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFrQixDQUFBO0lBQ3pDLENBQUM7SUFFRCxHQUFHLENBQUksR0FBVyxFQUFFLEtBQVE7UUFDM0IsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUE7UUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQTtRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFvQixFQUFFLE9BQThCO1FBQ2pFLE1BQU0sRUFBRSxZQUFZLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUMzQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUN4RSxRQUFRLEVBQUUsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVTLDRCQUE0QjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDM0MsQ0FBQztJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hbWVzcGFjZSwgY3JlYXRlTmFtZXNwYWNlIH0gZnJvbSAnY2xzLWhvb2tlZCdcblxuaW1wb3J0IHsgQ3JlYXRlU2Vzc2lvbk9wdGlvbnMsIFNlc3Npb25TdHJhdGVneSB9IGZyb20gJyNzcmMvc2Vzc2lvbi1zdHJhdGVneS9zZXNzaW9uLXN0cmF0ZWd5J1xuXG5leHBvcnQgY29uc3QgX2RlZmF1bHROYW1lU3BhY2VJZCA9ICdub2RlLXNlc3Npb24tY29udGV4dC1pZC04OWEyYWYzNGMwYTNmJ1xuXG5leHBvcnQgY2xhc3MgQ2xzSG9va2VkU3RyYXRlZ3kgaW1wbGVtZW50cyBTZXNzaW9uU3RyYXRlZ3kge1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX25zOiBOYW1lc3BhY2VcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5cdGdldCBOUygpOiBOYW1lc3BhY2Uge1xuXHRcdHJldHVybiB0aGlzLl9uc1xuXHR9XG5cblx0Y29uc3RydWN0b3IocGFyYW1zPzogeyBuYW1lU3BhY2VJZD86IHN0cmluZyB9KSB7XG5cdFx0Y29uc3QgeyBuYW1lU3BhY2VJZCA9IF9kZWZhdWx0TmFtZVNwYWNlSWQgfSA9IHBhcmFtcyA/PyB7fVxuXHRcdHRoaXMuX25zID0gY3JlYXRlTmFtZXNwYWNlKG5hbWVTcGFjZUlkKVxuXHR9XG5cblx0Z2V0PFQ+KGtleTogc3RyaW5nKTogVCB8IHVuZGVmaW5lZCB7XG5cdFx0dGhpcy5fdGhyb3dFcnJvcklmSW5hY3RpdmVDb250ZXh0KClcblxuXHRcdHJldHVybiB0aGlzLk5TLmdldChrZXkpIGFzIFQgfCB1bmRlZmluZWRcblx0fVxuXG5cdHNldDxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcblx0XHR0aGlzLl90aHJvd0Vycm9ySWZJbmFjdGl2ZUNvbnRleHQoKVxuXHRcdHRoaXMuTlMuc2V0KGtleSwgdmFsdWUpXG5cdH1cblxuXHRjbGVhcihrZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuX3Rocm93RXJyb3JJZkluYWN0aXZlQ29udGV4dCgpXG5cdFx0dGhpcy5OUy5zZXQoa2V5LCB1bmRlZmluZWQpXG5cdH1cblxuXHRjcmVhdGVTZXNzaW9uKGNhbGxiYWNrOiAoKSA9PiB2b2lkLCBvcHRpb25zPzogQ3JlYXRlU2Vzc2lvbk9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCB7IGRlZmF1bHRWYWx1ZSA9IHt9IH0gPSBvcHRpb25zID8/IHt9XG5cdFx0dGhpcy5OUy5ydW4oKCkgPT4ge1xuXHRcdFx0T2JqZWN0LmVudHJpZXMoZGVmYXVsdFZhbHVlKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gdGhpcy5zZXQoa2V5LCB2YWx1ZSkpXG5cdFx0XHRjYWxsYmFjaygpXG5cdFx0fSlcblx0fVxuXG5cdHByb3RlY3RlZCBfdGhyb3dFcnJvcklmSW5hY3RpdmVDb250ZXh0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5OUy5hY3RpdmUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gYWN0aXZlIHNlc3Npb24gZm91bmQnKVxuXHRcdH1cblx0fVxufVxuIl19