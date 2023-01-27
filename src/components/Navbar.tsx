import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import logo from "../images/logo.svg";

export default function Navbar() {
  const { isSidebarOpen, openSidebar, handleSubmenu, displaySubmenu } =
    useGlobalContext();

  return (
    <Nav onMouseOver={handleSubmenu} isSidebarOpen={isSidebarOpen}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="strip" className="nav-logo" />
          <button
            className="btnBlack btnBlack--toggle"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>

        <ul className="nav-menu">
          <li>
            <button className="menuBtn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="menuBtn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="menuBtn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btnBlack btnBlack--signin">Sign in</button>
      </div>
    </Nav>
  );
}

const Nav = styled.nav<{ isSidebarOpen: boolean }>`
  position: relative;
  height: 5em;
  background: transparent;
  z-index: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "1")};
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btnBlack {
    font-size: 1rem;
    color: white;
    padding: 0.25em 0.75em;
    border-radius: var(--radius);
    border-color: transparent;
    background: var(--clr-black);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--clr-grey-5);
    }
    &--signin {
      display: none;
    }

    &--toggle {
      display: inline-block;
    }
  }

  .nav-menu {
    display: none;
  }

  /* nav media query */
  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-center .btnBlack {
      &--toggle {
        display: none;
      }
      &--signin {
        display: inline-block;
      }
    }

    .nav-menu {
      height: 100%;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-self: center;

      li {
        height: 100%;
      }
    }

    li > .menuBtn {
      color: white;
      background: transparent;
      letter-spacing: 1px;
      font-size: 1.1rem;
      width: 10em;
      height: 100%;
      border-color: transparent;
      text-transform: capitalize;
    }
  }
`;
