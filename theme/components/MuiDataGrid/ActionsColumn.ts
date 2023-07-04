export const ActionsColumn = {
  columnHeader: {
    "&[data-field='_actions']": {
      "& .MuiSvgIcon-root": {
        color: "#9B9B9B",
      },
      "& [class*='menuOpen']": {
        pointerEvents: "none",
      },
    },
  },
  row: {
    "&:hover": {
      "& [data-field='_actions'] [class*='MuiIconButton']": {
      },
    },
  },
  cell: {
    "&[data-field='_actions']": {
      paddingTop: "4px",
      overflow: "hidden",
    },
    "&[data-field='_actions'] [class*='MuiIconButton']": {
      display: "flex",
    },
    "&[data-field='_actions'] [class*='MuiIconButton'] [class*='MuiSvgIcon']": {
      // fontSize: "1.75rem",
    },
  }
}
