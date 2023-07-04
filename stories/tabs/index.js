import { TabList as MuiTabList, TabPanel as MuiTabPanel } from "@mui/lab"
import { Tab as MuiTab } from "@mui/material"
import { styled } from "@mui/material/styles"
import T from "prop-types"
import { createElement as h } from "react"

export { TabContext } from "@mui/lab"

const StyledTab = styled(MuiTab)(({ theme: { breakpoints, components, typography } }) => ({
  "&.Mui-selected": {
    color: "#6b546a",
  },
  color: "#7f707d",
  fontSize: typography.pxToRem(15),
  fontWeight: "bold",
  margin: "0 20px",
  minHeight: components.Tabs.minHeight,
  opacity: 1,
  textTransform: "initial",
  [breakpoints.up("sm")]: {
    minWidth: "80px",
  },
}))

export const Tab = ({ value, ...props }) => h(StyledTab, { value, ...props })

Tab.propTypes = {
  value: T.string,
}

const StyledTabList = styled(MuiTabList)(({ theme: { components, typography } }) => ({
  "* .MuiTab-root": {
    position: "relative",
    zIndex: 2,
  },
  "& .MuiTab-root:not(.Mui-selected):hover": {
    "&:after": {
      borderBottom: "2px solid #6b546a",
      bottom: 0,
      content: "''",
      left: 0,
      position: "absolute",
      width: "100%",
      zIndex: 2,
    },

    backgroundColor: "#efefef",
    color: "#6b546a",
    marginBottom: "-2px",
    paddingBottom: "14px",
  },
  "& [class*='MuiTabs-indicator']": {
    backgroundColor: "#6b546a !important",
    bottom: "-2px",
    width: "60%",
    zIndex: 2,
  },
  "& > [class*='MuiTabs-scroller']": {
    overflow: "visible !important",
  },
  backgroundColor: "#f9f9f9",
  border: "1px solid #ececec",
  borderRadius: [[0, 0, 0, 0]],
  fontSize: typography.pxToRem(15),
  minHeight: components.Tabs.minHeight,
  overflow: "visible",
}))

export const TabList = ({ value, ...props }) => h(StyledTabList, { value, ...props })

TabList.propTypes = {
  /**
   * https://material-ui.com/api/tab-list/#props
   * https://material-ui.com/api/tabs/#props
   */

  "aria-label": T.string,
  centered: T.bool,
  onChange: T.func,
  variant: T.oneOf(["fullWidth", "scrollable", "standard"]),
}

const StyledTabPanel = styled(MuiTabPanel)(
    ({ background, noPaddings, theme: { typography, withPalette } }) => ({
      "&.MuiTabPanel-root[hidden]": {
        display: "none !important",
      },
      "&.MuiTabPanel-root": {
        position: "relative",
        zIndex: 1,
      },

      backgroundColor: withPalette(background),
      border: [[1, "solid", "#ebebeb"]],
      borderRadius: [[0, 0, 4, 4]],
      borderTop: "none",
      fontSize: typography.pxToRem(14),
      padding: noPaddings && "0 !important",
    }),
)

export const TabPanel = ({ background = "secondary", noPaddings = false, value, ...props }) =>
    h(StyledTabPanel, { background, noPaddings, value, ...props })

TabPanel.propTypes = {
  noPaddings: T.boolean,
  value: T.string,
}
