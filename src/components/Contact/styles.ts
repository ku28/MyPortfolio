import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .section-label {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.5rem;

    .label-line {
      width: 3rem;
      height: 2px;
      background: var(--gradient-primary);
      border-radius: 2px;
    }

    .label-text {
      font-family: var(--font-mono);
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--text-muted);
      letter-spacing: 0.04em;
    }
  }

  header {
    text-align: center;
    margin-bottom: 3.5rem;

    h2 {
      font-size: 3.6rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 1.2rem;
      background: linear-gradient(135deg, #ffffff, rgba(255,255,255,0.7));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    p {
      color: var(--text-secondary);
      font-size: 1.7rem;
      max-width: 48ch;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;
    max-width: 64rem;
    margin: 0 auto 4rem;

    .contact-card {
      display: flex;
      align-items: center;
      gap: 1.8rem;
      padding: 2.2rem 2.6rem;
      background: rgba(255, 255, 255, 0.025);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 2rem;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(124, 58, 237, 0.15);
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1),
                    0 0 60px rgba(59, 130, 246, 0.03);

        &::before { opacity: 1; }
      }

      .contact-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: var(--radius-md);
        background: rgba(124, 58, 237, 0.08);
        border: 1px solid rgba(124, 58, 237, 0.12);
        flex-shrink: 0;
        transition: all 0.35s ease;

        img {
          width: 2.2rem;
          height: 2.2rem;
          filter: brightness(0) invert(1) opacity(0.7);
          transition: all 0.3s ease;
        }
      }

      &:hover .contact-icon {
        background: rgba(124, 58, 237, 0.12);
        border-color: rgba(124, 58, 237, 0.25);
        box-shadow: 0 0 20px rgba(124, 58, 237, 0.1);

        img { opacity: 1; filter: brightness(0) invert(1); }
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        .contact-label {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .contact-value {
          font-size: 1.55rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }
      }

      &:hover .contact-value {
        color: #a78bfa;
      }
    }
  }

  @media(max-width: 960px) { padding: 0 2rem; }

  @media(max-width: 740px) {
    .contacts { grid-template-columns: 1fr; }
  }

  @media(max-width: 600px) {
    margin-top: 8rem;
    padding: 0 1.5rem;
    .section-label { justify-content: center; }
    header {
      h2 { font-size: 3rem; }
      p { font-size: 1.5rem; }
    }
    .contacts .contact-card {
      padding: 1.8rem 2rem;
      gap: 1.4rem;
      .contact-icon { width: 4.2rem; height: 4.2rem; img { width: 2rem; height: 2rem; } }
      .contact-info .contact-value { font-size: 1.35rem; }
    }
  }

  @media(max-width: 480px) {
    header h2 { font-size: 2.6rem; }
    .contacts .contact-card {
      padding: 1.6rem 1.8rem;
      border-radius: 1.6rem;
      .contact-icon { width: 3.8rem; height: 3.8rem; }
    }
  }
`
