import Cards from "./components/Cards"
import Recipes from "./components/Recipes"
import Todotable from "./components/Todotable"


const App = () => {
  return (
    <div>
      <Todotable/>
      <hr />
      <Recipes/>
<hr />
      <Cards/>
    </div>
  )
}

export default App
