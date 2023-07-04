/** To avoid circular dependency, this module MUST NOT use UIParams! */

import { Str } from "@cirrus/fe-lib"
import { function as fn } from "fp-ts"
import { __, divide, identity, memoizeWith } from "ramda"

/**
 * Appends " !important" to the given property string value
 * @param {string} value
 * @return {string}
 */
export const important = Str.append(" !important")

export const px = Str.append("px")

/**
 * Creates a pixels to rem converter function according to given root font size
 * @param {number} rootFontSize - A root font size value in pixels
 */
export const pxToRem = (rootFontSize) =>
  memoizeWith(identity, fn.flow(divide(__, rootFontSize), Str.append("rem")))
