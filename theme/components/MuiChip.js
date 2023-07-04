// https://mui.com/material-ui/api/chip/#css

export const MuiChip = {
  styleOverrides: {
    root: {
      "&.Cirrus-label": {
        cursor: "pointer",
      },
      "&.Cirrus-partialLabel": {
        borderStyle: "dashed",
      },
    },
    label: {},
    colorPrimary: {},
    colorSecondary: {},
    colorError: {},
    colorInfo: {
      borderColor: "info.main",
    },
    colorSuccess: {},
    colorWarning: {},
  },
  styleOverrides2: {
    root: {},
    label: {},
    colorPrimary: {},
    colorSecondary: {},
    colorError: {},
    colorInfo: {},
    colorSuccess: {},
    colorWarning: {},
  },
}
