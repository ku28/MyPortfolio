import styled from "styled-components";

export const Container = styled.footer`
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  padding: 3rem 10rem;
  margin-top: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent);
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .logo {
      font-family: var(--font-mono);
      font-size: 2rem;
      font-weight: 700;
      display: inline-flex;
      transition: opacity 0.3s ease;

      &:hover { opacity: 0.8; }

      .logo-bracket { color: var(--text-muted); }
      .logo-name {
        background: var(--gradient-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .footer-tagline {
      font-size: 1.3rem;
      color: var(--text-muted);
      letter-spacing: 0.01em;
    }
  }

  .footer-tech {
    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-family: var(--font-mono);
      font-size: 1.2rem;
      color: var(--text-muted);
      padding: 0.5rem 1.4rem;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 10rem;

      strong {
        color: var(--text-secondary);
      }
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--glass-border);
      background: var(--glass-bg);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--glass-border-hover);
        background: var(--glass-bg-hover);
        transform: translateY(-2px);
      }

      img {
        width: 1.8rem;
        height: 1.8rem;
        opacity: 0.6;
        transition: opacity 0.3s ease;
      }

      &:hover img {
        opacity: 1;
      }
    }
  }

  @media(max-width: 960px) {
    padding: 3rem 4rem;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    gap: 2.4rem;
    text-align: center;
    padding: 3rem 3rem;

    .footer-brand {
      align-items: center;
    }
  }

  @media(max-width: 600px) {
    padding: 2.5rem 2rem;

    .footer-brand .logo {
      font-size: 1.8rem;
    }

    .footer-tech .tech-badge {
      font-size: 1.1rem;
    }

    .social-media {
      a {
        width: 3.4rem;
        height: 3.4rem;

        img {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
    }
  }

  @media(max-width: 480px) {
    padding: 2rem 1.5rem;

    .footer-brand {
      .logo { font-size: 1.6rem; }
      .footer-tagline { font-size: 1.2rem; }
    }
  }
`