"use strict";
// function getvalue<T>(value : T) {
//     return value;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// getvalue<string>('Hello'); // returns 'Hello'
// getvalue<number>(42);   
// getvalue<boolean>(true); // returns true    
function getResponse(data) {
    return {
        data,
        status: 200,
        message: 'Request successful'
    };
}
console.log(getResponse('Hello')); // returns { data: 'Hello', status: 200, message: 'Request successful' }
console.log(getResponse(42));
//# sourceMappingURL=generics-function.js.map