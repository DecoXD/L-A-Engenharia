import { navItens } from "../constants"
import Topbar from "./Topbar"


const Header = () => {
  return (
    <header className=" w-full">
      <Topbar navItens={navItens}/>
    </header>
  )
}

export default Header