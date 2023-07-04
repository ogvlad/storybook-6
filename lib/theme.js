import { createTheme } from "@mui/material/styles"
import { assoc, curry, defaultTo, identity, memoizeWith, mergeRight, path, pick } from "ramda"

import { UIParams } from "../_params.js"

import { Palette } from "./_private.js"

export const withPalette = curry(
  (theme, color, shade = "main", preferredColor = color, preferredShade = shade) =>
    defaultTo(preferredColor, path(["palette", preferredColor, preferredShade], theme)),
)

export const from = memoizeWith(
  identity,

  ({ palette, skinObject, typography, ...parameters } = {}) => {
    const muiTheme = createTheme(
      mergeRight(pick(["components", "zIndex"], UIParams), {
        palette: /* Palette.withCssVariables( */ mergeRight(
          Palette.normalized(UIParams.palette),
          Palette.normalized(palette),
        ) /* ) */,

        typography: mergeRight(UIParams.typography, typography),
        skinObject: defaultTo({}, skinObject),
      }),

      parameters,
    )

    return assoc("withPalette", withPalette(muiTheme), muiTheme)
  },
)
