export class ExpressFastAlsHelper {
    _fastAlsStrategy;
    constructor(params) {
        const { fastAlsStrategy } = params;
        this._fastAlsStrategy = fastAlsStrategy;
    }
    expressMiddleware(_req, _res, next) {
        this._fastAlsStrategy.createSession(next);
    }
}
export const expressFastAlsHelperFactory = (params) => {
    return new ExpressFastAlsHelper(params);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1mYXN0LWFscy1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9leHByZXNzLWZhc3QtYWxzLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLE9BQU8sb0JBQW9CO0lBQ2IsZ0JBQWdCLENBQWlCO0lBRXBELFlBQVksTUFBNEM7UUFDdkQsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFBO0lBQ3hDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFhLEVBQUUsSUFBYyxFQUFFLElBQWtCO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUNEO0FBRUQsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUcsQ0FBQyxNQUE0QyxFQUF3QixFQUFFO0lBQ2pILE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHsgRmFzdEFsc1N0cmF0ZWd5IH0gZnJvbSAnI3NyYy9zZXNzaW9uLXN0cmF0ZWd5L2Zhc3QtYWxzLXN0cmF0ZWd5J1xuXG5leHBvcnQgY2xhc3MgRXhwcmVzc0Zhc3RBbHNIZWxwZXIge1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX2Zhc3RBbHNTdHJhdGVneTogRmFzdEFsc1N0cmF0ZWd5XG5cblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IGZhc3RBbHNTdHJhdGVneTogRmFzdEFsc1N0cmF0ZWd5IH0pIHtcblx0XHRjb25zdCB7IGZhc3RBbHNTdHJhdGVneSB9ID0gcGFyYW1zXG5cdFx0dGhpcy5fZmFzdEFsc1N0cmF0ZWd5ID0gZmFzdEFsc1N0cmF0ZWd5XG5cdH1cblxuXHRleHByZXNzTWlkZGxld2FyZShfcmVxOiBSZXF1ZXN0LCBfcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5fZmFzdEFsc1N0cmF0ZWd5LmNyZWF0ZVNlc3Npb24obmV4dClcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZXhwcmVzc0Zhc3RBbHNIZWxwZXJGYWN0b3J5ID0gKHBhcmFtczogeyBmYXN0QWxzU3RyYXRlZ3k6IEZhc3RBbHNTdHJhdGVneSB9KTogRXhwcmVzc0Zhc3RBbHNIZWxwZXIgPT4ge1xuXHRyZXR1cm4gbmV3IEV4cHJlc3NGYXN0QWxzSGVscGVyKHBhcmFtcylcbn1cbiJdfQ==