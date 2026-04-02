import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: grid;
  place-items: center;

  h2 {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.4rem;
    width: 100%;
    max-width: 64rem;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 2rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
    }

    input, textarea {
      width: 100%;
      padding: 1.5rem 2rem;
      border-radius: var(--radius-md);
      outline: none;
      background: rgba(255, 255, 255, 0.025);
      border: 1px solid rgba(255, 255, 255, 0.06);
      color: var(--text-primary);
      font-weight: 500;
      font-size: 1.5rem;
      transition: all 0.35s ease;

      &::placeholder {
        color: var(--text-muted);
      }

      &:focus {
        border-color: rgba(124, 58, 237, 0.35);
        background: rgba(255, 255, 255, 0.04);
        box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.08),
                    0 4px 16px rgba(0, 0, 0, 0.1);
      }
    }

    textarea {
      height: 16rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1.3rem 4.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: none;
      background: var(--gradient-primary);
      border-radius: var(--radius-md);
      letter-spacing: 0.02em;
      box-shadow: 0 4px 24px rgba(124, 58, 237, 0.3);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
        transition: left 0.5s ease;
      }

      &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      &:not(:disabled):hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 36px rgba(124, 58, 237, 0.45);
        &::before { left: 100%; }
      }
    }
  }

  @media (max-width: 740px) {
    padding: 0;
    form { 
      padding: 2rem;
      border-radius: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    h2 { font-size: 1.8rem; }
    form {
      padding: 1.5rem;
      input, textarea { padding: 1.2rem 1.5rem; font-size: 1.4rem; }
      textarea { height: 14rem; }
      button { padding: 1.1rem 3.5rem; font-size: 1.4rem; }
    }
  }
`

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  h3 {
    color: var(--text-primary);
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }

  button {
    border-radius: var(--radius-md);
    padding: 1.2rem 3rem;
    margin-top: 0.8rem;
    text-transform: none;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    background: var(--gradient-primary);
  }
`