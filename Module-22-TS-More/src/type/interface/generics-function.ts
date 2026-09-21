// function getvalue<T>(value : T) {
//     return value;
// }

// getvalue<string>('Hello'); // returns 'Hello'
// getvalue<number>(42);   
// getvalue<boolean>(true); // returns true    

function getResponse<T>(data : T): { data: T; status: number; message: string } {
    return {
        data ,
        status: 200,
        message: 'Request successful'
    };
}
console.log(getResponse<string>('Hello')); // returns { data: 'Hello', status: 200, message: 'Request successful' }
console.log(getResponse<number>(42));

