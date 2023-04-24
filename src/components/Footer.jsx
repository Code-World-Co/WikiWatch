import { CiPhone, CiInstagram, CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import '../style/util/Footer.css'

export function Footer() {
  return (
    <footer >

      <div className="image">
        <a href="https://www.themoviedb.org/">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        </a>
      </div>

      <div className="info">

        <div className="box-info">
          <h1 className="title">Esnaider Ortega</h1>
          <div className="box-icons">
            <a href="https://www.linkedin.com/in/esnaideror/"><CiLinkedin className="icon" /></a>
            <a href="https://github.com/Darkin03/"><AiFillGithub className="icon" /></a>
            <a href="https://www.instagram.com/esnaider.or/"><CiInstagram className="icon" /></a>
          </div>
        </div>

        <div className="box-info">
          <h1 className="title">Miguel Lopez</h1>
          <div className="box-icons">
            <a href="https://www.linkedin.com/in/miguelarcangellopezconeo/"><CiLinkedin className="icon" /></a>
            <a href="https://github.com/miguelcode-02"><AiFillGithub className="icon" /></a>
            <a href="https://www.instagram.com/miguel._.unu/"><CiInstagram className="icon" /></a>
          </div>
        </div>

      </div>

    </footer>
  );
}
