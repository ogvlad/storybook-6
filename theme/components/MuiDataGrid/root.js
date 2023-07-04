import { Library } from "./Library"

export const root = {
  "& *": {
    outline: "none !important",
  },

  "& .MuiDataGrid-autoHeight, &.MuiDataGrid-autoHeight": {
    minHeight: "calc(100vh - 335px)",
  },

  "& .MuiDataGrid-columnHeader": {
    "& .MuiDataGrid-columnHeaderCheckbox": {
      "& .MuiCheckbox-root:not(.Mui-checked) svg": {
        color: "#9B9B9B",
      },
    },

    "& .MuiDataGrid-iconButtonContainer": {
      background: "#efefef",
      position: "absolute",
      right: 0,
    },

    "&:not(.MuiDataGrid-columnHeaderCheckbox):not([data-field='icon'])": {
      padding: "5px 16px !important",
    },
  },

  "& [class*=MuiTablePagination] p": {
    margin: 0,
  },

  "& .MuiDataGrid-root": {
    bottomBorder: "none",
    height: "100%",
    minHeight: "calc(100vh - 116px)",
  },

  "& .MuiDataGrid-viewport, .MuiDataGrid-row, .MuiDataGrid-renderingZone": {
    maxHeight: "fit-content !important",
  },

  "@media all and (-webkit-min-device-pixel-ratio:0)": {
    "& .MuiDataGrid-row": {
      display: "-webkit-box !important",
    },
  },

  ...Library.root,
}
