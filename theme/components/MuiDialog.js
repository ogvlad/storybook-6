// https://mui.com/material-ui/api/dialog/#css

import { Toolbar } from "./custom/Toolbar"

export const MuiDialog = {
  styleOverrides: {
    root: {
      "& .MuiDataGrid-root": {},

      ...Toolbar.MuiDialog.root,
    },
  },
}
