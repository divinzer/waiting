import { observable, action, decorate } from "mobx"

class userStore {
  currentUser = { name: "test" }
  getUser = () => {
    this.currentUser = { name: "aaaa" }
  }
}
decorate(userStore, {
  currentUser: observable,
  getUser: action,
})

export default userStore
