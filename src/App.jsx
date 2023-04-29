import { useEffect, useState } from "react";
//import components
import { Header } from "./components/Header";
import { Home } from "./components/home";
import { Movies } from "./components/movies";
import { Tv } from "./components/tv";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import './style/App.css';
import { MovieInfo } from "./components/movieInfo";
import  { AlertHome } from "./components/AlertHome";

function App() {

  const [valueAlert, setValueAlert] = useState(null)

  useEffect(() => {
    setValueAlert(window.localStorage.getItem('alert_18'))
  }, [])

  const alertAdult = () => {
    setValueAlert('true')
    window.localStorage.setItem('alert_18', 'true')
  }

  const alertNoAdult = () => {
    setValueAlert('false')
    window.localStorage.setItem('alert_18', 'false')
  }

  return (
    <div className="App">
      {
        valueAlert !== null ?
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies isAdult={valueAlert} />} />
              <Route path="/movie/:id" element={<MovieInfo />} />
              <Route path="/tv" element={<Tv isAdult={valueAlert} />} />
            </Routes>
            <Footer />
          </div>
          :
          <AlertHome {...{alertAdult, alertNoAdult}} />
      }
    </div>
  );
}

export default App;
