import { Navbar, Footer, Transactions, Welcome, AboutUs } from "./components"
import './Home.css'
const  App =() => {


  return (
    
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />         
    </div>
    
  );
}

export default App
