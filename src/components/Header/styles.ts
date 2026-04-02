import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 10rem;
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  .logo {
    font-family: var(--font-mono);
    font-size: 2.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    .logo-bracket {
      color: var(--text-muted);
    }

    .logo-name {
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    a {
      color: var(--text-secondary);
      padding: 0.6rem 1.4rem;
      font-family: var(--font-sans);
      font-weight: 500;
      font-size: 1.4rem;
      letter-spacing: 0.01em;
      text-transform: none;
      transition: color 0.25s ease, background 0.25s ease;
      border-radius: var(--radius-sm);
      position: relative;

      &:hover {
        color: var(--text-primary);
        background: rgba(255, 255, 255, 0.04);
      }

      &.resume-btn {
        padding: 0.7rem 2rem;
        color: #fff;
        background: var(--gradient-primary);
        font-size: 1.3rem;
        font-weight: 600;
        margin-left: 0.8rem;
        border-radius: var(--radius-sm);
        box-shadow: 0 2px 12px rgba(124, 58, 237, 0.25);

        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
          background: var(--gradient-primary);
          filter: brightness(1.1);
        }
      }
    }
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: var(--text-secondary);
    position: relative;
    cursor: pointer;
    display: none;
    transition: 0.3s;

    &:before { bottom: 0.6rem; }
    &:after { top: 0.6rem; }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }
    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }
    &.active {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: var(--text-secondary);
    cursor: pointer;
    transition: 0.4s;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 48px;
    height: 26px;
    background: rgba(255, 255, 255, 0.1);
    display: block;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.3s ease;
  }

  label:after {
    content: '';
    background: #FFF;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  }

  input:checked + label {
    background: var(--gradient-primary);
    border-color: transparent;
  }

  input:checked + label:after {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }

  @media (max-width: 960px) {
    padding: 1.6rem 3rem;

    .menu {
      display: block;
    }

    nav {
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: rgba(10, 10, 15, 0.95);
      backdrop-filter: blur(30px);
      top: 0;
      left: 0;
      transition: opacity 0.3s ease;
      gap: 2rem;

      a {
        font-size: 2rem;
        color: var(--text-secondary);

        &:hover {
          color: var(--text-primary);
        }
      }

      a.resume-btn {
        margin-left: 0;
        margin-top: 1rem;
        padding: 1rem 3rem;
        font-size: 1.6rem;
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 1.4rem 2rem;

    .logo {
      font-size: 1.8rem;
    }

    label {
      width: 42px;
      height: 22px;
    }

    label:after {
      width: 16px;
      height: 16px;
      top: 2px;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;

    .logo {
      font-size: 1.6rem;
    }
  }
`