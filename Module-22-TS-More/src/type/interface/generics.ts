// interface response {
//     data : any,// not recommended to use any type
//     data : string | number | boolean | object | null | undefined,// not recommended to use union type
//     data : unknown,// not recommended to use unknown type

// }

interface Response<T> {
    data: T;
    status: number;
    message: string;
}
const response1: Response<string> = {
    data: 'Success',
    status: 200,
    message: 'Request successful'
};
const response2: Response<number> = {
    data: 42,
    status: 200,
    message: 'Request successful'
};
const response3: Response<boolean> = {
    data: true,
    status: 200,
    message: 'Request successful'
};