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
      backgroundColor: `background`,
      transition: `0.3s all`,
      boxShadow: `0px 1.5px 3px 0px rgba(225, 227, 229, 0.6)`,
      "&:hover": {
        boxShadow: `0px 3.5px 6px 0px rgba(225, 227, 229, 0.6)`,
      },
    }}
  >
    {name}
  </div>
)

export default Card
