/** @jsx jsx */
import { jsx } from "theme-ui"

const RecipeCard = ({ name = `Recipe Name`, heart }) => (
  <div
    sx={{
      minHeight: 150,
      py: `2`,
      px: `2`,
      borderRadius: `1`,
      backgroundColor: `background`,
      transition: `0.3s all`,
      boxShadow: `0px 1.5px 3px 0px rgba(225, 227, 229, 0.6)`,
      "&:hover": {
        boxShadow: `0px 3.5px 6px 0px rgba(225, 227, 229, 0.6)`,
      },
    }}
  >
    <div sx={{ minHeight: 100, borderRadius: `1`, backgroundColor: `#DDD` }} />
    {name}
  </div>
)

export default RecipeCard
