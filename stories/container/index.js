import { Container as MuiContainer } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { createElement as h } from "react"

const useStyles = makeStyles(({  }) => ({
  root: ({ minHeight }) => ({
    "&.MuiContainer-root": {
      background: "#fff",
      border: "1px solid #EBEBEB",
      borderRadius: [[4, 4, 0, 0]],
      marginBottom: "20px",
      maxWidth: "100%",
      minHeight: minHeight !== undefined ? minHeight : "calc(100vh - 170px)",
      paddingLeft: "0",
      paddingRight: "0",
      width: "100%",

      "& .MuiTabPanel-root": {
        padding: 0,
      },
    },

    "&.MuiContainer-root > .MuiTabs-root:first-child, &.MuiContainer-root > .MuiTabs-root:first-child .MuiTabPanel-root":
      {
        position: "relative",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
      },
    // TODO ugly fix for extra padding
    "& [class*=MuiTabPanel-root]": {
      padding: 0,
    },
  }),
}))

export const Container = ({ minHeight, ...rest }) =>
  h(MuiContainer, {
    classes: useStyles({ minHeight }),
    ...rest,
  })
