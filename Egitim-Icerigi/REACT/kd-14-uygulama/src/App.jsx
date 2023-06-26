import Header from "./components/Header"
import './assets/styles/app.css'
import './assets/styles/app.scss'
import List from "./components/List"
import HomePage from "./pages/HomePage"
function App() {

  return (
    <>
    <Header/>
    <List/>
    <main>
      {/* BÜYÜK COMP */}
      <HomePage/>
    </main>
    {/* footer */}
    </>
  )
}

export default App
