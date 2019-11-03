import { observable, action, decorate } from "mobx"

class counterStore {
  count = 1
  inc = () => {
    this.count += 1
  }
  dec = () => {
    this.count -= 1
  }
}
decorate(counterStore, {
  count: observable,
  inc: action,
  dec: action,
})

export default counterStore
