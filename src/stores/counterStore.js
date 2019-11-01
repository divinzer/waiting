const counterStore = () => ({
  count: 1,
  inc() {
    this.count += 1
  },
  dec() {
    this.count -= 1
  },
})

export default counterStore
