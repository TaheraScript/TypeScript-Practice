/* Scenario
A food delivery app lets customers filter a restaurant's menu by a dietary tag, such as "vegan" or "spicy". Each menu item has a name, price, and a tag.
Task
Create a function named findMenuItemsByTag. The function should receive an array of menu items and a tag, and return all items that match that tag.
Requirement
If no item matches the tag, return an empty array.
 */
interface MenuItem {
    name: string,
     price: number,
      tag: string
}
function findMenuItemsByTag(menu: MenuItem[], tag: string): MenuItem[] {
const foundItems = menu.filter((item) => item.tag === tag ) 
return foundItems

}
const menu = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" }
];
console.log(findMenuItemsByTag(menu, "gluten-free"))
console.log(findMenuItemsByTag(menu, "vegan"))