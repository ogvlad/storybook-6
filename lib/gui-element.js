import { identity, ifElse, is, prop } from "ramda"
import { flow, tupled } from "fp-ts/es6/function"
import { createElement } from "react"

export const div = (props, children) => createElement("div", props, children)

export const fromList = tupled(createElement)

export const withPlaceholder = flow(
  ifElse(prop("displayed"), prop("content"), prop("placeholder")),
  ifElse(is(Array), fromList, identity),
)
