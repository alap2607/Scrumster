import React, { useRef } from "react";
import "./nav-bar.css";
import logo from "../../assets/images/png/scrumster-logo-color-on-transparent.png";
import { useDetectOutsideClick } from "./useDetectOutsideClickable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NavBar() {
  let navConfig = {
    navItems: [
      {
        displayName: "Home",
        type: "link",
        id: "navItemHome",
        url: "/Home",
      },
      {
        displayName: "Tools",
        type: "dropdown",
        id: "navItemTools",
        children: [
          {
            displayName: "Timer",
            type: "link",
            id: "navItemToolsTimer",
            url: "/scrum-poker",
            target: "_blank",
          },
          {
            displayName: "Random Number Generator",
            type: "link",
            id: "navItemToolsRandomNumberGenerator",
            url: "/retro-board",
            target: "_blank",
          },
          {
            displayName: "Pick Random Team Member",
            type: "link",
            id: "navItemToolsPickRandomTeamMember",
            url: "/retro-board",
            target: "_blank",
          },
          {
            displayName: "ScrumPoker",
            type: "link",
            id: "navItemToolsScrumPoker",
            url: "/retro-board",
            target: "_blank",
          },
        ],
      },
    ],
  };
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <>
      <nav className="nav-bar">
        <a href="/logo">
          <img className="nav-logo" src={logo} alt="app logo"></img>
        </a>
        <ul className="nav-items">
          {navConfig.navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              {item.type === "link" ? (
                <a className="nav-item-link" href={item.url}>
                  {item.displayName}
                </a>
              ) : (
                <>
                  <button
                    ref={dropdownRef}
                    onClick={onClick}
                    className={`nav-item-link ${
                      isActive ? "active" : "inactive"
                    }`}
                    id="nav-item-tools"
                  >
                    <span className="nav-tools-display-name">
                      {item.displayName}
                    </span>
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </button>
                  {item.children && item.children.length > 0 && (
                    <ul className={`tools`}>
                      {item.children.map((child) => (
                        <li className="tool-item" key={child.id}>
                          <a className="nav-child-link" href={child.url}>
                            {child.displayName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          ;
        </ul>
      </nav>
    </>
  );
}
