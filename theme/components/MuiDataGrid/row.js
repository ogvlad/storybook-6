import { ActionsColumn } from "./ActionsColumn"
import { Library } from "./Library"

export const row = {
  cursor: "pointer",
  borderColor: "#ececec",

  "&[class*='Mui-selected']": {
    backgroundColor: "#1976d214 !important",
  },

  "& .MuiDataGrid-cell[data-field='icon'] svg": {
    color: "#757575",
  },

  "& .MuiDataGrid-cellCheckbox": {
    padding: "0",
    paddingLeft: "4px",
  },

  "& .MuiDataGrid-cell--editable": {
    cursor: "text",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    boxShadow: "none",
    background: "none",
    "& fieldset": {
      border: "none",
      "& legend": {
        border: "none",
      },
    },
    "& input": {
      padding: 0,
      borderBottom: "1px solid",
      fontSize: "14px",
      margin: "14px",
      // width: "40px",
    },
    "& .MuiDataGrid-cellContent": {
      paddingLeft: "4px",
      paddingRight: "4px",
      borderBottom: "1px solid gray",
    },
    "&:hover": {
      // backgroundColor: "red",
      "& .MuiDataGrid-cellContent": {
        // backgroundColor: "yellow",
      },
    },
  },
  "& .Cirrus-mainColumn": {
    fontWeight: "bold",

    ".labels > div": {
      marginTop: "5px",
      fontWeight: "normal",
      marginLeft: "5px",
      maxWidth: "170px",
      overflow: "ellipsis",
    },
  },
  "& .Cirrus-drawerIconColumn": {
    overflow: "visible !important",
    padding: "0",
    paddingTop: "2px",
    "& >button": {
      marginLeft: "-5px",
    },
  },

  "&:hover": {
    "&.row-cursor-default": {
      cursor: "default",
    },
  },

  ...ActionsColumn.row,
  ...Library.row,
}
