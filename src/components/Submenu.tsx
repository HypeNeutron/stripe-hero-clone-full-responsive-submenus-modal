import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { AppContextType } from "../types";

export default function Submenu() {
  const {
    isSubmenuOpen,
    sublink: { page, menu },
    submenuLocate,
  } = useGlobalContext();

  const container = useRef<HTMLElement | null>(null);
  const [columns, setColumns] = useState(""); //change col-2 by state

  useEffect(() => {
    const submenu = container.current;
    const { centerBtn, bottomBtn } =
      submenuLocate as AppContextType["submenuLocate"];
    submenu!.style.left = `${centerBtn}px`;
    submenu!.style.top = `${bottomBtn}px`;

    setColumns("col-2");
    if (menu.length === 3) {
      setColumns("col-3");
    }
    if (menu.length > 3) {
      setColumns("col-4");
    }
  }, [menu, submenuLocate]);

  return (
    <SubmenuFloating isSubmenuOpen={isSubmenuOpen} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-container ${columns}`}>
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
      </section>
    </SubmenuFloating>
  );
}

const SubmenuFloating = styled.aside<{ isSubmenuOpen: boolean }>`
  display: ${({ isSubmenuOpen }) => (isSubmenuOpen ? "block" : "none")};
  background: var(--clr-white);
  box-shadow: var(--dark-shadow);
  position: absolute;
  top: 4em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 2em;
  border-radius: var(--radius);
  transition: var(--transition);

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  section > h4 {
    margin-bottom: 1.5em;
  }

  section > .submenu-container {
    display: grid;
    gap: 0.25em 2em;

    &.col-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    &.col-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    &.col-4 {
      grid-template-columns: repeat(4, 1fr);
    }

    a {
      width: 10em;
      color: var(--clr-grey-1);
      text-transform: capitalize;
      display: flex;
      align-items: center;
      svg {
        color: var(--clr-grey-5);
        margin-right: 1em;
      }
    }
  }
`;
