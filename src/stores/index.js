import React from "react"
import CounterStore from "./counterStore"

export const storesContext = React.createContext({
  counterStore: CounterStore,
  //   themeStore: new ThemeStore(),
})

export const useStores = () => React.useContext(storesContext)
