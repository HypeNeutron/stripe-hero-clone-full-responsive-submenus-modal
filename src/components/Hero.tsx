import phoneImg from "../images/phone.svg";
import heroImg from "../images/hero.svg";
import styled from "styled-components";
import { useGlobalContext } from "../context";

export default function Hero() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <SectionHero onMouseOver={closeSubmenu}>
      <div className="hero-container">
        <article className="hero-info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune
            500s—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phoneImg" alt="phone" />
        </article>
      </div>
    </SectionHero>
  );
}

const SectionHero = styled.section`
  position: relative;
  min-height: 100vh;
  margin-top: -5rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 65%;
    top: 0;
    left: 0;
    background-image: url(${heroImg});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .hero-container {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    align-items: center;
  }

  .hero-info {
    h1 {
      text-transform: none;
      max-width: 500px;
      margin-bottom: 2rem;
    }
    p {
      max-width: 35em;
      line-height: 1.8;
    }
  }

  .hero-images {
    display: none;
  }

  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius);
    border-color: transparent;
    color: white;
    background: var(--clr-black);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--clr-grey-5);
    }
  }

  /* hero media query */
  @media screen and (min-width: 800px) {
    ::before {
      background-size: contain;
      height: 100%;
    }

    .hero-container {
      grid-template-columns: 2fr 1fr;
    }

    .hero-info {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
    .hero-images {
      display: block;
      justify-self: center;
    }

    .phoneImg {
      width: 12em;
    }
  }

  @media screen and (min-width: 1200px) {
    .hero-container {
      grid-template-columns: 2fr 1fr;
      align-items: end;
      padding-bottom: 12vh;
    }

    .hero-info h1 {
      max-width: 100%;
      font-size: 5.5rem;
    }

    .hero-images {
      align-self: end;
    }

    .phoneImg {
      width: 15em;
    }
  }

  @media screen and (min-width: 1400px) {
    .hero-container {
      padding-bottom: 20vh;
    }

    .phoneImg {
      width: 17em;
    }
  }
`;
