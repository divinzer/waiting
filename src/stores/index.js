import React from "react"
import CounterStore from "./counterStore"
import UserStore from "./UserStore"
import BoardStore from "./BoardStore"

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  UserStore: new UserStore(),
  BoardStore: new BoardStore(),
})

export const useStores = () => React.useContext(storesContext)
