var MyErrorHandler = (function () {
    function MyErrorHandler() {
    }
    MyErrorHandler.prototype.handleError = function (error) {
        // do something with the exception
        alert("an unexpected error occured");
    };
    return MyErrorHandler;
}());
export { MyErrorHandler };
//# sourceMappingURL=app-error-handler.js.map