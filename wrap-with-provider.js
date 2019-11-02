import React from "react"
import { Provider } from "mobx-react"
import CounterStore from "./src/stores/counterStore"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider store={CounterStore}>{element}</Provider>
)
