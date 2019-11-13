import React from "react"
import { Link } from "gatsby"
import { observer } from "mobx-react"
import { useStores } from "../stores"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = observer(() => {
  const { counterStore, userStore, boardStore } = useStores()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{counterStore.count}</p>
      <p>{userStore.currentUser.name}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button className="button" onClick={counterStore.inc}>
        plus
      </button>
      <Link to="/page-2/">Go to page 2</Link>
      <button className="button is-primary" onClick={boardStore.getList}>
        get
      </button>
      {boardStore.list.length > 1 &&
        boardStore.list.map(item => <p key={item.id}>{item.title}</p>)}
      <div className="columns">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
        <div className="column">4</div>
        <div className="column">5</div>
      </div>
    </Layout>
  )
})

export default IndexPage
