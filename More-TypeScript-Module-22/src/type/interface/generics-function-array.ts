function getResult<T>(arr: T[]): T[] {
    return arr;
}   
getResult<string>(['Hello', 'World']); // returns ['Hello', 'World']
getResult<number>([1, 2, 3]);   
getResult<boolean>([true, false]); // returns [true, false] 