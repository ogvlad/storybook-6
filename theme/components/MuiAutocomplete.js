import { pxToRem } from "../base.js"
import { palette } from "../palette.js"

// https://mui.com/material-ui/api/autocomplete/#css

export const MuiAutocomplete = {
  styleOverrides: {
    root: {
      backgroundColor: palette.background2,

      "&.Mui-focused": {
        backgroundColor: palette.background2,
      },
    },

    inputRoot: {
      backgroundColor: palette.background2,
      "&:hover": {
        backgroundColor: palette.background2,
      },
    },

    input: {
      backgroundColor: palette.background2,
      "&:hover": {
        backgroundColor: palette.inputs,
      },
    },

    inputFocused: {
      backgroundColor: palette.inputs,
    },

    endAdornment: {
      right: 9,
      top: "calc(50% - 10px)",
    },

    groupLabel: {
      font: {
        size: pxToRem(14),
        weight: 400,
      },
      paddingTop: 12,
    },

    groupUl: {
      borderBottom: [[1, "solid", "#efefef"]],
      borderTop: [[1, "solid", "#efefef"]],
    },

    hasClearIcon: {
      "& [class*='MuiAutocomplete-inputRoot']": {
        paddingRight: [6, "!important"],
      },
    },

    listbox: {
      "& li:last-child": {
        "& ul": { borderBottom: "none" },
      },
      "&.MuiAutocomplete-listbox": {
        "& .MuiAutocomplete-option": {
          "&.Mui-focused": { backgroundColor: "#efefef" },
          "&:first-child": {
            borderTop: "none",
          },
          "&[aria-selected='true']": {
            "&.Mui-focused": { backgroundColor: "#efefef" },
            backgroundColor: "#efefef",
          },
        },
        maxHeight: 316,
        paddingTop: 0,
      },
      marginTop: 20,
    },

    option: {
      borderTop: [[1, "solid", "#efefef"]],
      fontSize: pxToRem(14),
      height: 46,
    },

    paper: {
      "&.MuiAutocomplete-paper": {
        marginTop: 4,
      },
      fontSize: pxToRem(14),
      padding: 0,
    },

    popper: {
      fontSize: pxToRem(14),
    },
  },
}
