import Leftside from "./Left"
import Rightside from "./Right"

const Banner = ({path}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
        <Leftside />
        <Rightside path={path} />
    </div>
  )
}

export default Banner