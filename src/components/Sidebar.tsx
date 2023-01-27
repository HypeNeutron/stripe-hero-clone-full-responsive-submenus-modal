import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import styled from "styled-components";
import { useGlobalContext } from "../context";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <aside>
        <button className="closeBtn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-menu">
          {sublinks.map((item, index) => {
            const { page, menu } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-submenu">
                  {menu.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div<{ isSidebarOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 0;
  transition: background-color 0.3s linear;
  background-color: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "rgba(0, 0, 0, 0.5);" : "transparent"};

  @media screen and (min-width: 800px) {
    display: none;
  }

  aside {
    position: relative;
    width: 90vw;
    max-width: var(--fixed-width);
    height: 95vh;
    padding: 4rem 2rem;
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    transition: var(--transition);
    visibility: ${({ isSidebarOpen }) =>
      isSidebarOpen ? "visible" : "hidden"};
    z-index: ${({ isSidebarOpen }) => (isSidebarOpen ? "99" : "-1")};
    transform: ${({ isSidebarOpen }) =>
      isSidebarOpen ? "scale(1)" : "scale(0)"};

    .closeBtn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--clr-grey-5);
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }
  }

  aside article {
    margin-bottom: 2rem;
  }

  article > .sidebar-submenu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.25rem;
    a {
      display: block;
      color: var(--clr-grey-1);
      text-transform: capitalize;
      display: flex;
      align-items: center;
    }
    a svg {
      color: var(--clr-grey-5);
      margin-right: 1rem;
    }
  }
`;
