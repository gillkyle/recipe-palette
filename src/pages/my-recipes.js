/** @jsx jsx */
import { jsx } from "theme-ui"

import Title from "../components/title"
import Layout from "../components/layout"
import RecipeCard from "../components/recipe-card"

export default ({ data }) => (
  <Layout>
    <div>
      <Title>My Recipes</Title>
      <div
        sx={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(175px, 1fr))`,
          gridAutoFlow: `row`,
          gridGap: `3`,
          mb: `4`,
        }}
      >
        <RecipeCard name="Appetizers" />
        <RecipeCard name="Bread" />
        <RecipeCard name="Desserts" />
        <RecipeCard name="Breakfast" />
        <RecipeCard name="Pasta" />
      </div>
    </div>
  </Layout>
)
