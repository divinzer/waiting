import { observable, action, decorate } from "mobx"
import axios from "axios"
// configure({ enforceActions: "always" })

class boardStore {
  list = []
  state = undefined
  getList = async () => {
    this.list = []
    this.state = "pending"
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      )
      this.state = "done"
      this.list = data
      console.log("data: ", this.list)
    } catch (error) {
      this.state = "error"
    }
  }
}
decorate(boardStore, {
  list: observable,
  state: observable,
  getList: action,
})

export default boardStore
