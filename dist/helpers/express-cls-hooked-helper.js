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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1jbHMtaG9va2VkLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2V4cHJlc3MtY2xzLWhvb2tlZC1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxPQUFPLHNCQUFzQjtJQUNmLGtCQUFrQixDQUFtQjtJQUV4RCxZQUFZLE1BQWdEO1FBQzNELE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUE7SUFDNUMsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQWEsRUFBRSxJQUFjLEVBQUUsSUFBa0I7UUFDbEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsNEJBQTRCLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUMzRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQyxJQUFJLEVBQUUsQ0FBQTtJQUNQLENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLENBQUMsTUFBZ0QsRUFBMEIsRUFBRTtJQUN6SCxPQUFPLElBQUksc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IENsc0hvb2tlZFN0cmF0ZWd5IH0gZnJvbSAnI3NyYy9zZXNzaW9uLXN0cmF0ZWd5L2Nscy1ob29rZWQtc3RyYXRlZ3knXG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzQ2xzSG9va2VkSGVscGVyIHtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9jbHNIb29rZWRTdHJhdGVneTogQ2xzSG9va2VkU3RyYXRlZ3lcblxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHsgY2xzSG9va2VkU3RyYXRlZ3k6IENsc0hvb2tlZFN0cmF0ZWd5IH0pIHtcblx0XHRjb25zdCB7IGNsc0hvb2tlZFN0cmF0ZWd5IH0gPSBwYXJhbXNcblx0XHR0aGlzLl9jbHNIb29rZWRTdHJhdGVneSA9IGNsc0hvb2tlZFN0cmF0ZWd5XG5cdH1cblxuXHRleHByZXNzTWlkZGxld2FyZShfcmVxOiBSZXF1ZXN0LCBfcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5fY2xzSG9va2VkU3RyYXRlZ3kuY3JlYXRlU2Vzc2lvbihuZXh0KVxuXHR9XG5cblx0ZXhwcmVzc01pZGRsZXdhcmVCaW5kRW1pdHRlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuX2Nsc0hvb2tlZFN0cmF0ZWd5Lk5TLmJpbmRFbWl0dGVyKHJlcSlcblx0XHR0aGlzLl9jbHNIb29rZWRTdHJhdGVneS5OUy5iaW5kRW1pdHRlcihyZXMpXG5cdFx0bmV4dCgpXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGV4cHJlc3NDbHNIb29rZWRIZWxwZXJGYWN0b3J5ID0gKHBhcmFtczogeyBjbHNIb29rZWRTdHJhdGVneTogQ2xzSG9va2VkU3RyYXRlZ3kgfSk6IEV4cHJlc3NDbHNIb29rZWRIZWxwZXIgPT4ge1xuXHRyZXR1cm4gbmV3IEV4cHJlc3NDbHNIb29rZWRIZWxwZXIocGFyYW1zKVxufVxuIl19