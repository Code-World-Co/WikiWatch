import { useEffect, useState } from "react";
//import components
import { Header } from "./components/Header";
import { Home } from "./components/home";
import { Movies } from "./components/movies";
import { Tv } from "./components/tv";
import { Footer } from "./components/Footer";
//import components react
import { Routes, Route } from "react-router-dom";
//import style
import "./style/Alert.css";
import './style/App.css';
import { motion } from "framer-motion"
//import components
import { MovieInfo } from "./components/movieInfo";

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

  const variantsButton = {
    ani: {
      scale: 1.1,
      boxShadow: "10px 10px 0 rgba(255, 255, 255, 0.425)",
      transition: { duration: 0.2, ease: 'linear' }
    }
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
          <motion.div className="alert" animate={{ backgroundColor: ["#02020200", "#1c2557"] }}
            transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}>
            <motion.div className="alert-box" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <h1>Explicit content warning</h1>
              <p>This website contains explicit content for those over 18 years of age. If you are of legal age, please complete the following form to access the content. If you are a minor, you can still continue but the content displayed will be controlled by our system.</p>
              <p>please, confirm if you are of legal age</p>
              <div className="alert-box-button">
                <motion.button variants={variantsButton} whileHover='ani' className="button" onClick={alertAdult}>I'm an adult</motion.button>
                <motion.button variants={variantsButton} whileHover='ani' className="button" onClick={alertNoAdult}>I'm a minor</motion.button>
              </div>
            </motion.div>
          </motion.div>
      }
    </div>
  );
}

export default App;
