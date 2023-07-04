import { ActionsColumn } from "./ActionsColumn"
import { Library } from "./Library"

export const cell = {
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  maxHeight: "fit-content !important",
  overflow: "hidden",
  padding: "5px 16px",
  whiteSpace: "nowrap",
  wordBreak: "break-word",

  "& div": {
    alignItems: "center",
  },

  "&.Cirrus-usedColumn": {
    paddingTop: "2px",

    "& .all .MuiIconButton-root": {
      color: "green",
    },
  },

  ...ActionsColumn.cell,
  ...Library.cell,
}
