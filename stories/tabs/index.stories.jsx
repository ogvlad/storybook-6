import React, { useState } from "react"

import { Container } from "../container/index.js"
import { Tab, TabPanel, TabContext, TabList } from "./index.js"

export default {
  title: "App/Tabs",
  component: Tab,
}

export const Basic = () => {
  const [value, setValue] = useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
      <TabContext value={value}>
        <TabList aria-label="simple tabs example" onChange={handleChange}>
          <Tab label="One" value="1" />
          <Tab label="Two" value="2" />
          <Tab label="Three" value="3" />
        </TabList>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Container>
  )
}

Basic.storyName = "Tab"
