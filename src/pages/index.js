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
      <button onClick={counterStore.inc}></button>
      <Link to="/page-2/">Go to page 2</Link>
      <button onClick={boardStore.getList}></button>
      {boardStore.list.length > 1 &&
        boardStore.list.map(item => <p>{item.title}</p>)}
    </Layout>
  )
})

export default IndexPage
