import { root } from "./root.js"
import { row } from "./row.js"
import { columnHeader } from "./columnHeader.js"
import { columnHeaders } from "./columnHeaders.js"
import { cell } from "./cell.js"
import { virtualScroller } from "./virtualScroller.js"

/// https://mui.com/x/api/data-grid/data-grid/#css

export const MuiDataGrid = {
  styleOverrides: {
    root,
    row,
    columnHeader,
    columnHeaders,
    cell,
    virtualScroller,

    columnSeparator: {
      visibility: "hidden",
    },
  },
}
