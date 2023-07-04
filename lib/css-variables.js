import { assoc, flatten, keys, map, mergeAll, mergeRight, pick, reduce, toPairs } from "ramda"

export const storeColors = (colors, palette) =>
  reduce(
    (result, color) =>
      mergeRight(
        result,
        mergeAll(
          map(([number, value]) => ({ [`--${color}-${number}`]: value }), toPairs(palette[color])),
        ),
      ),

    {},
    colors,
  )

export const storeColorsByKey = (colorKeys, palette) =>
  mergeAll(
    flatten(
      map(
        ([key, variants]) =>
          map(
            ([variant, value]) => ({ [`--palette-${key}-${variant}`]: value }),
            toPairs(variants),
          ),
        toPairs(pick(colorKeys, palette)),
      ),
    ),
  )

export const colorsByName = (colors, palette) =>
  reduce(
    (result, color) =>
      assoc(
        color,
        mergeAll(
          map((number) => ({ [number]: `var(--${color}-${number})` }), keys(palette[color])),
        ),
        result,
      ),

    {},
    colors,
  )

export const colorsByKeys = (colorKeys, palette) =>
  mergeAll(
    map(
      ([key, variants]) => ({
        [key]: mergeAll(
          map((variant) => ({ [variant]: `var(--palette-${key}-${variant})` }), keys(variants)),
        ),
      }),
      toPairs(pick(colorKeys, palette)),
    ),
  )
