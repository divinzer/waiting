import { observable, action, decorate } from "mobx"

class UserStore {
  currentUser = { name: "test" }
  getUser = () => {
    this.currentUser = { name: "aaaa" }
  }
}
decorate(UserStore, {
  currentUser: observable,
  getUser: action,
})

export default UserStore
