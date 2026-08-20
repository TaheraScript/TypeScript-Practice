"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElement(elements) {
    return elements.input[elements.input.length - 1];
}
const output1 = {
    input: [10, 20, 30]
};
const output2 = {
    input: ["a", "b", "c"]
};
console.log(getLastElement(output1));
console.log(getLastElement(output2));
//# sourceMappingURL=pblm-5.js.map