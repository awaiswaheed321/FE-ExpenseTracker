import "../css/App.css";
import Expenses from "./Expenses";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="expense-container">
        <Header />
        <Expenses expenses={[]}/>
        <Footer />
    </div>
  );
}

export default App;
