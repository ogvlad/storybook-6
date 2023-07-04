import { createTheme } from "@mui/material/styles"
import { keys } from "ramda/es"

import * as Adornments from "./adornments.js"
import * as Palette from "./palette.js"

export { Adornments, Palette }

// TODO: Should be computed in compile time using macro.
const { palette: standardPalette } = createTheme()

export const UIKitLib = {
  standardPalette,
  standardPaletteKeys: keys(standardPalette),
}
