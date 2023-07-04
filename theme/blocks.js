import { htmlFontSize } from "./base.js"
import { Css } from "../lib/_public.js"

export const blocks = {
  ":root": {
    letterSpacing: Css.important("initial"),
    lineHeight: Css.important("2.2rem"),
    fontSize: htmlFontSize,
  },

  body: {
    backgroundColor: "#f6f6f6",
    lineHeight: Css.important("2.2rem"),
  },
}
