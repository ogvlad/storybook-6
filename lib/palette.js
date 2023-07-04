import { List } from "../list"
import { flow } from "fp-ts/es6/function"
import { pipe } from "fp-ts/es6/function"
import {
  __,
  assoc,
  complement,
  equals,
  identity,
  is,
  keys,
  map,
  mapObjIndexed,
  mergeAll,
  objOf,
  toPairs,
  when,
} from "ramda/es"

import { UIKitLib } from "./_private.js"

export const { augmentColor } = UIKitLib.standardPalette

export const isCustomColor = List.notIncludes(__, UIKitLib.standardPaletteKeys)

export const isSecondary = equals("secondary")

export const normalized = when(
  is(Object),
  mapObjIndexed((value, key) =>
    pipe(
      value,
      when(complement(is(Object)), objOf("main")),
      isCustomColor(key) ? flow(objOf("color"), augmentColor, assoc("custom", true)) : identity,
    ),
  ),
)

export const withCssVariables = (palette) =>
  pipe(
    palette,
    toPairs,

    map(([key, variants]) => ({
      [key]: mergeAll(
        map((variant) => ({ [variant]: `var(--palette-${key}-${variant})` }), keys(variants)),
      ),
    })),

    mergeAll,
  )
