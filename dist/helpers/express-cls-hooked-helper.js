export class ExpressClsHookedHelper {
    _clsHookedStrategy;
    constructor(params) {
        const { clsHookedStrategy } = params;
        this._clsHookedStrategy = clsHookedStrategy;
    }
    expressMiddleware(_req, _res, next) {
        this._clsHookedStrategy.createSession(next);
    }
    expressMiddlewareBindEmitter(req, res, next) {
        this._clsHookedStrategy.NS.bindEmitter(req);
        this._clsHookedStrategy.NS.bindEmitter(res);
        next();
    }
}
export const expressClsHookedHelperFactory = (params) => {
    return new ExpressClsHookedHelper(params);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1jbHMtaG9va2VkLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2V4cHJlc3MtY2xzLWhvb2tlZC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxPQUFPLHNCQUFzQjtJQUNmLGtCQUFrQixDQUFtQjtJQUV4RCxZQUFZLE1BQWdEO1FBQzNELE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUE7SUFDNUMsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQWEsRUFBRSxJQUFjLEVBQUUsSUFBa0I7UUFDbEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsNEJBQTRCLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUMzRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQyxJQUFJLEVBQUUsQ0FBQTtJQUNQLENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLENBQUMsTUFBZ0QsRUFBMEIsRUFBRTtJQUN6SCxPQUFPLElBQUksc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBOZXh0RnVuY3Rpb24sIHR5cGUgUmVxdWVzdCwgdHlwZSBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IHR5cGUgQ2xzSG9va2VkU3RyYXRlZ3kgfSBmcm9tICcjc3JjL3Nlc3Npb24tc3RyYXRlZ3kvY2xzLWhvb2tlZC1zdHJhdGVneSdcblxuZXhwb3J0IGNsYXNzIEV4cHJlc3NDbHNIb29rZWRIZWxwZXIge1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX2Nsc0hvb2tlZFN0cmF0ZWd5OiBDbHNIb29rZWRTdHJhdGVneVxuXG5cdGNvbnN0cnVjdG9yKHBhcmFtczogeyBjbHNIb29rZWRTdHJhdGVneTogQ2xzSG9va2VkU3RyYXRlZ3kgfSkge1xuXHRcdGNvbnN0IHsgY2xzSG9va2VkU3RyYXRlZ3kgfSA9IHBhcmFtc1xuXHRcdHRoaXMuX2Nsc0hvb2tlZFN0cmF0ZWd5ID0gY2xzSG9va2VkU3RyYXRlZ3lcblx0fVxuXG5cdGV4cHJlc3NNaWRkbGV3YXJlKF9yZXE6IFJlcXVlc3QsIF9yZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiB2b2lkIHtcblx0XHR0aGlzLl9jbHNIb29rZWRTdHJhdGVneS5jcmVhdGVTZXNzaW9uKG5leHQpXG5cdH1cblxuXHRleHByZXNzTWlkZGxld2FyZUJpbmRFbWl0dGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5fY2xzSG9va2VkU3RyYXRlZ3kuTlMuYmluZEVtaXR0ZXIocmVxKVxuXHRcdHRoaXMuX2Nsc0hvb2tlZFN0cmF0ZWd5Lk5TLmJpbmRFbWl0dGVyKHJlcylcblx0XHRuZXh0KClcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZXhwcmVzc0Nsc0hvb2tlZEhlbHBlckZhY3RvcnkgPSAocGFyYW1zOiB7IGNsc0hvb2tlZFN0cmF0ZWd5OiBDbHNIb29rZWRTdHJhdGVneSB9KTogRXhwcmVzc0Nsc0hvb2tlZEhlbHBlciA9PiB7XG5cdHJldHVybiBuZXcgRXhwcmVzc0Nsc0hvb2tlZEhlbHBlcihwYXJhbXMpXG59XG4iXX0=