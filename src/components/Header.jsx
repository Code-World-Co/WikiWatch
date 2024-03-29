//import icons
import { MdTheaters } from "react-icons/md";
import { CiMonitor, CiYoutube } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import '../style/util/Header.css'

export function Header() {

  const onclick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <header className="navWeb">

      <Link to="/WikiWatch/" className="logo" onClick={onclick}  > 
        <h1 className="title">
        <span className="firstWord-title title">WIKI</span>WATCH
        </h1>
      </Link>

      <nav className="navWeb-link">
        <NavLink to="/movies" className='link'><MdTheaters className="icon" />Movies</NavLink>
        <NavLink to="/tv" className='link'><CiMonitor className="icon" /> Tv</NavLink>
      </nav>

    </header>
  );
}
