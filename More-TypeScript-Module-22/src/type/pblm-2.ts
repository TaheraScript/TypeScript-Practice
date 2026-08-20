/* Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required.
 */

let value: string | number = "100";

    let newValue1 = Number(value);
    console.log(newValue1 + 10)
    //  a double assertion (as unknown as) is risky,because it won't convert the value from string to number,it just tricks the compiler to beleiving that '100' is a number.so runtime,its actually a string
    let newValue2 = value as unknown as number
    //console.log(newValue2 + 10) then the output will be string concat('10010') not a number