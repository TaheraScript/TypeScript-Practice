"use strict";
/* Problem statement: Create an appConfig object (theme, version), lock it with as const. Try mutating a property and comment on the resulting error. Derive a union type from an array using typeof + as const.
Input: const appConfig = { theme: "dark", version: 2 } as const;
Output: commented error on mutation attempt (Cannot assign to 'theme' because it is a read-only property); derived union type example (e.g. "red" | "green" | "blue").
 */
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig = { theme: "dark", version: 2 };
//appConfig.theme ='pink'// when we will use as const than the property becomes immutable because it is a read only property,thats why when we are trying to change the value of the property named theme,it is trowing an error
// Derive a union type from an array using typeof + as const
const themes = ["red", "green", "blue"];
//Theme = "red" | "green" | "blue"
//# sourceMappingURL=pblm-9.js.map