import React from "react"
import counterStore from "./counterStore"
import userStore from "./userStore"
import boardStore from "./boardStore"

export const storesContext = React.createContext({
  counterStore: new counterStore(),
  userStore: new userStore(),
  boardStore: new boardStore(),
})

export const useStores = () => React.useContext(storesContext)
