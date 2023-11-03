import { NavLink } from 'react-router-dom';
// Icons
import IconHome from '../assets/icon-home.svg';
import IconSkills from '../assets/icon-skills.svg';
import IconEdu from '../assets/icon-edu.svg';
import IconPortfolio from '../assets/icon-portfolio.svg';

export default function NavBar() {
  return (
    <div className="nav-wrapper flex justify-between px-4 pt-6 align-middle">
      <div className="logo">Resume</div>
      <nav className="navbar flex flex text-white justify-end  items-center gap-x-10">
        <NavLink to="about">
          <div className="nav-link flex justify-center border-2 rounded-md">
            <img src={IconHome} alt="about me icon" className="icon w-5" />
            <p className="nav-title text-center p-2">About Me</p>
          </div>
        </NavLink>
        <NavLink to="skills">
          <div className="nav-link flex justify-center border-2 rounded-md">
            <img src={IconSkills} alt="skills icon" className="icon w-5" />
            <p className="nav-title text-center p-2">Skills</p>
          </div>
        </NavLink>
        <NavLink to="portfolio">
          <div className="nav-link flex justify-center border-2 rounded-md">
            <img src={IconPortfolio} alt="about me icon" className="icon w-5" />
            <p className="nav-title text-center p-2">Portfolio</p>
          </div>
        </NavLink>
        <NavLink to="edu">
          <div className="nav-link flex justify-center border-2 rounded-md">
            <img src={IconEdu} alt="about me icon" className="icon w-5" />
            <p className="nav-title text-center p-2">Education</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
}
