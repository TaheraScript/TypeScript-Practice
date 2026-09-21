"use strict";
/* Problem statement: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>.
Input: { item: 100 }, { item: "Books" }
Output: Container<number> = { item: 100 }, Container<string> = { item: "Books" }
 */
Object.defineProperty(exports, "__esModule", { value: true });
const container1 = {
    item: 100
};
const container2 = {
    item: "Books"
};
console.log(`Container<number> = { item: ${container1.item} }, Container<string> = { item: "${container2.item}" }`);
//# sourceMappingURL=pblm-6.js.map