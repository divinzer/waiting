import { observable, action, decorate } from "mobx"

class CounterStore {
  count = 1
  inc = () => {
    this.count += 1
  }
  dec = () => {
    this.count -= 1
  }
}
decorate(CounterStore, {
  count: observable,
  inc: action,
  dec: action,
})

export default CounterStore
