import { TabList as MuiTabList, TabPanel as MuiTabPanel } from "@mui/lab"
import { Tab as MuiTab } from "@mui/material"
import { styled } from "@mui/material/styles"

export const CustomTab = styled(MuiTab)(({ theme }) => ({
  ["&.Mui-selected"]: {
    color: "#6b546a",
    opacity: 1,
  },
  color: "#6b546a",
  fontSize: theme.typography.pxToRem(15),
  fontWeight: "bold",
  margin: "0 20px",
  minHeight: theme.components.Tabs.minHeight,
  opacity: 0.7,
  textTransform: "initial",
  [theme.breakpoints.up("sm")]: {
    minWidth: "80px",
  },
}))

export const CustomTabList = styled(MuiTabList)(({ theme }) => ({
  "& [class*='MuiTabs-indicator']": {
    backgroundColor: "#6b546a !important",
    width: "60%",
  },
  backgroundColor: "#f9f9f9",
  border: "1px solid #ececec",
  borderRadius: [[4, 4, 0, 0]],
  fontSize: theme.typography.pxToRem(10),
  minHeight: theme.components.Tabs.minHeight,
}))

export const CustomTabPanel = styled(MuiTabPanel)(({ background, theme }) => ({
  backgroundColor: theme.withPalette(background),
  border: [[1, "solid", "#ececec"]],
  borderRadius: [[0, 0, 4, 4]],
  borderTop: "none",
  fontSize: theme.typography.pxToRem(14),
}))
