import React from "react"
import { Link } from "gatsby"
import { observer } from "mobx-react"
import { useStores } from "../stores"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = observer(() => {
  const { counterStore } = useStores()
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>{counterStore.count}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
})

export default SecondPage
