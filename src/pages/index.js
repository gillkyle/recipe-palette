/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import Card from "../components/card"

export default ({ data }) => (
  <Layout>
    <div
      sx={{
        textAlign: `center`,
        mt: `6`,
      }}
    >
      <h1
        sx={{
          fontSize: `4`,
        }}
      >
        The best way to keep track of recipes
      </h1>
      <input
        sx={{ px: `3`, py: `2`, mb: `6`, fontSize: `3`, minWidth: `75%` }}
        placeholder="Find a recipe..."
      />
    </div>
    <h2>Explore Recipes</h2>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(175px, 1fr))`,
        gridAutoFlow: `row`,
        gridGap: `2`,
        mb: `4`,
      }}
    >
      <Card name="Appetizers" />
      <Card name="Bread" />
      <Card name="Desserts" />
      <Card name="Breakfast" />
      <Card name="Pasta" />
    </div>
  </Layout>
)
