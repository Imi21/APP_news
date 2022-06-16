import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import { GlobalProvider } from "./context/GlobalState";




function App() {
  return (
    <div className="App">
      <div className="box-mix">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
          </Routes>

        </GlobalProvider>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
