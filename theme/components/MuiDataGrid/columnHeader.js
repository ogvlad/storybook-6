import { ActionsColumn } from "./ActionsColumn"

export const columnHeader = {
  "& [class*='columnHeaderDraggableContainer']": {
    cursor: "pointer",
  },
  "&:last-child > div > div:last-child button, &:last-child > div > div:last-child": {
    visibility: "visible",
    width: "auto",
  },
  "&[aria-sort='descending'], &[aria-sort='ascending']": {
    background: "#efefef",
  },
  "&[class*='sortable']": {
    "& [class*='iconButtonContainer'] [class*='MuiSvgIcon']": {
      color: "#9B9B9B",
    },
    "& [class*='iconButtonContainer'] button": {
      display: "inline-flex",
    },
    "& [class*='iconButtonContainer'] button:hover": {
      display: "inline-flex",
    },
    "&:hover": {
      "& [class*='iconButtonContainer']": {
        visibility: "visible",
        width: "auto",
      },
      "& [class*='iconButtonContainer']:hover": {
        visibility: "visible !important",
        width: "auto !important",
      },
      backgroundColor: "#ececec",
    },
    "&[class*=moving]": {
      "& [class*='iconButtonContainer']": {
        display: "none",
      },
      width: "100%",
    },
  },

  "& .MuiDataGrid-columnHeaderTitleContainerContent": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 1.5,
    whiteSpace: "nowrap",
    "& span": {
      textOverflow: "ellipsis",
      overflow: "hidden"
    }
  },

  "&.Cirrus-nowrap": {
    "& .MuiDataGrid-columnHeaderTitleContainerContent": {
      whiteSpace: "nowrap",
    },
  },

  ...ActionsColumn.columnHeader,
}
