import { combos as combos1 } from "./combo1/combos"
import { combos as combos2 } from "./combo2/combos"
import { menuitems as leftItems } from "./leftmenu/menuitems"
import { menuitems as rightItems } from "./rightmenu/menuitems"
import fs from "fs"

const _combos1 = combos1.map(combo => {
  const price = Number(combo.price.replace("$", "")) * 1.035
  return {
    ...combo,
    price: "$" + price.toFixed(2),
  }
})

const _combos2 = combos2.map(combo => {
  const price = Number(combo.price.replace("$", "")) * 1.035
  return {
    ...combo,
    price: "$" + price.toFixed(2),
  }
})

const left_menuitems = Object.entries(leftItems).reduce(
  (acc, [name, values]) => {
    const items = values.items.map(i => {
      const price = Number(i.price.replace("$", "")) * 1.035

      return { ...i, price: "$" + price.toFixed(2) }
    })

    acc[name] = { ...values, items }
    return acc
  },
  {}
)

const right_menuitems = rightItems.map(section => {
  const items = section.items.map(i => {
    const price = Number(i.price.replace("$", "")) * 1.035

    return { ...i, price: "$" + price.toFixed(2) }
  })
  return {
    ...section,
    items,
  }
})

const combosString1 =
  "export const combos = " + JSON.stringify(_combos1, null, 2)
const combosString2 =
  "export const combos = " + JSON.stringify(_combos2, null, 2)

const lString =
  "export const menuitems = " + JSON.stringify(left_menuitems, null, 2)
const rString =
  "export const menuitems = " + JSON.stringify(right_menuitems, null, 2)

fs.writeFileSync("combos1.js", combosString1)
fs.writeFileSync("combos2.js", combosString2)

fs.writeFileSync("rmenuitems.js", rString)
fs.writeFileSync("lmenuitems.js", lString)
