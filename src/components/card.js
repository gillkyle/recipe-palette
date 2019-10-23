/** @jsx jsx */
import { jsx } from "theme-ui"

const Card = ({ name = `Recipe Name` }) => (
  <div
    sx={{
      py: `4`,
      px: `4`,
      borderRadius: `1`,
      textAlign: `center`,
      border: `border`,
      backgroundColor: `card`,
    }}
  >
    {name}
  </div>
)

export default Card
