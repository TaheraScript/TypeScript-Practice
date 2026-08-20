"use strict";
// interface response {
//     data : any,// not recommended to use any type
//     data : string | number | boolean | object | null | undefined,// not recommended to use union type
//     data : unknown,// not recommended to use unknown type
Object.defineProperty(exports, "__esModule", { value: true });
const response1 = {
    data: 'Success',
    status: 200,
    message: 'Request successful'
};
const response2 = {
    data: 42,
    status: 200,
    message: 'Request successful'
};
const response3 = {
    data: true,
    status: 200,
    message: 'Request successful'
};
//# sourceMappingURL=generics.js.map