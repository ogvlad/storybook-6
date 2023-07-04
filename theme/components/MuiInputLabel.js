import { pxToRem } from "../base.js"
import { palette } from "../palette.js"

// https://mui.com/material-ui/api/input-label/#css

export const MuiInputLabel = {
  styleOverrides: {
    shrink: {
      "&.Mui-focused": {
        color: palette.info,
      },
    },
  },
}
