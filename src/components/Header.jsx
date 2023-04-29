//import icons
import { MdTheaters } from "react-icons/md";
import { CiMonitor, CiYoutube } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import '../style/util/Header.css'

export function Header() {
  return (
    <header className="navWeb">

      <Link to="/" className="logo">
        <h1 className="title">
        <span className="firstWord-title title">WATCH</span>WIKI
        </h1>
      </Link>

      <nav className="navWeb-link">
        <NavLink to="/movies" className='link'><MdTheaters className="icon" />MOVIES</NavLink>
        <NavLink to="/tv" className='link'><CiMonitor className="icon" /> TV</NavLink>
      </nav>

    </header>
  );
}
