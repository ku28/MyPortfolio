import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

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

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2.8rem 2.4rem;
      background: rgba(255, 255, 255, 0.025);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 2rem;
      transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      position: relative;
      overflow: hidden;

      /* Animated gradient border on top */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(124, 58, 237, 0.4),
          rgba(59, 130, 246, 0.4),
          transparent
        );
        opacity: 0;
        transition: opacity 0.45s ease;
      }

      /* Bottom glow effect */
      &::after {
        content: '';
        position: absolute;
        bottom: -50%;
        left: 10%;
        right: 10%;
        height: 50%;
        background: radial-gradient(ellipse, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.45s ease;
      }

      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(124, 58, 237, 0.15);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
                    0 0 50px rgba(124, 58, 237, 0.06);

        &::before { opacity: 1; }
        &::after { opacity: 1; }
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #7c3aed;
        margin-bottom: 3.6rem;

        svg {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 4rem;
          transition: all 0.35s ease;
          opacity: 0.5;

          &:hover {
            transform: scale(1.2) rotate(-5deg);
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.4));
          }
        }
      }

      h3 {
        margin-bottom: 2rem;
        font-size: 2.4rem;
        font-weight: 700;
        letter-spacing: -0.015em;
      }

      p {
        letter-spacing: 0.06rem;
        margin-bottom: 2rem;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.75;
        font-size: 1.4rem;

        a {
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover { color: var(--green); }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.7rem;
          font-size: 1.2rem;

          li {
            padding: 0.35rem 1.1rem;
            border-radius: 10rem;
            background: rgba(124, 58, 237, 0.08);
            color: #a78bfa;
            border: 1px solid rgba(124, 58, 237, 0.12);
            font-weight: 500;
            font-family: var(--font-mono);
            font-size: 1.15rem;
            transition: all 0.3s ease;

            &:hover {
              background: rgba(124, 58, 237, 0.18);
              border-color: rgba(124, 58, 237, 0.35);
              transform: translateY(-1px);
              box-shadow: 0 3px 10px rgba(124, 58, 237, 0.1);
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    h2 { font-size: 3.2rem; }
  }

  @media (max-width: 740px) {
    padding: 0 2rem;
    .projects { grid-template-columns: 1fr; padding: 0; }
    h2 { font-size: 2.8rem; }
  }

  @media (max-width: 480px) {
    padding: 0 1.5rem;
    h2 { font-size: 2.4rem; }
    .section-header { margin-bottom: 2.5rem; }
    .projects .project {
      padding: 2rem 1.8rem;
      border-radius: 1.6rem;
      header { margin-bottom: 2rem; svg { width: 40px; } a > img { width: 3.5rem; } }
      h3 { font-size: 2rem; margin-bottom: 1.5rem; }
      p { font-size: 1.3rem; margin-bottom: 1.5rem; }
      footer .tech-list { gap: 0.5rem; li { padding: 0.25rem 0.8rem; font-size: 1.05rem; } }
    }
  }
`;