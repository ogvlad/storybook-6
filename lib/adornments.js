import { Logic } from "@cirrus/fe-lib"
import { InputAdornment } from "@mui/material"
import { flow } from "fp-ts/es6/function"
import {
  complement,
  either,
  filter,
  head,
  identity,
  is,
  isNil,
  mapObjIndexed,
  pick,
  split,
} from "ramda"
import { createElement as h } from "react"
import { isElement, isValidElementType } from "react-is"

const contentRender = Logic.condition(
  [either(is(String), isElement), identity],
  [isValidElementType, h],
)

export const connected = flow(
  pick(["startAdornment", "endAdornment"]),
  filter(complement(isNil)),
  mapObjIndexed((content, position) =>
    h(InputAdornment, { position: head(split("Adornment", position)) }, contentRender(content)),
  ),
)
