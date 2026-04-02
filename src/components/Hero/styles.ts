import styled from "styled-components";

export const Container = styled.section`
  padding-top: 14%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  min-height: 85vh;

  .hero-text {
    flex: 1;
    max-width: 56rem;

    .code-comment {
      font-family: var(--font-mono);
      font-size: 1.4rem;
      color: var(--text-muted);
      margin-bottom: 1.2rem;
      letter-spacing: 0.02em;
      animation: fadeSlideUp 0.6s ease both;
      animation-delay: 0.1s;
    }

    h1 {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 1.2rem;
      animation: fadeSlideUp 0.6s ease both;
      animation-delay: 0.2s;

      .greeting {
        font-size: 2rem;
        font-weight: 400;
        color: var(--text-secondary);
        letter-spacing: 0.02em;
      }

      .name-gradient {
        font-size: 6.8rem;
        font-weight: 800;
        letter-spacing: -0.035em;
        line-height: 1.02;
        background: linear-gradient(
          135deg, 
          #ffffff 0%, 
          #c4b5fd 30%, 
          #a78bfa 50%, 
          #818cf8 70%, 
          #60a5fa 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer-text 4s ease-in-out infinite alternate;
      }
    }

    .role-wrapper {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 2rem;
      animation: fadeSlideUp 0.6s ease both;
      animation-delay: 0.35s;

      .role-prefix {
        font-family: var(--font-mono);
        color: var(--purple);
        font-size: 2rem;
        font-weight: 700;
      }

      h3 {
        font-size: 2.2rem;
        font-weight: 600;
        color: var(--text-primary);
        letter-spacing: -0.01em;
      }

      .cursor-blink {
        font-family: var(--font-mono);
        color: var(--purple);
        font-size: 2.2rem;
        font-weight: 300;
        animation: blink 1s step-end infinite;
      }
    }

    .tagline {
      font-size: 1.7rem;
      color: var(--text-secondary);
      line-height: 1.75;
      max-width: 44ch;
      margin-bottom: 2.4rem;
      animation: fadeSlideUp 0.6s ease both;
      animation-delay: 0.45s;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.6rem 1.6rem;
      background: rgba(35, 206, 107, 0.06);
      border: 1px solid rgba(35, 206, 107, 0.18);
      border-radius: 10rem;
      margin-bottom: 3rem;
      font-size: 1.3rem;
      color: #23ce6b;
      font-weight: 500;
      animation: fadeSlideUp 0.6s ease both;
      animation-delay: 0.55s;

      .status-dot {
        width: 0.8rem;
        height: 0.8rem;
        background: #23ce6b;
        border-radius: 50%;
        animation: pulse-green 2s ease-in-out infinite;
        box-shadow: 0 0 8px rgba(35, 206, 107, 0.5);
      }
    }

    .button-wrapper {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      margin-bottom: 0;
      animation: fadeSlideUp 0.6s ease both;
      animation-delay: 0.65s;

      .cta-primary {
        padding: 1.3rem 3.2rem;
        font-size: 1.5rem;
        font-weight: 600;
        border-radius: var(--radius-md);
        background: var(--gradient-primary);
        color: #fff;
        box-shadow: 0 4px 24px rgba(124, 58, 237, 0.35),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(124, 58, 237, 0.5),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          &::before {
            left: 100%;
          }
        }
      }

      .cta-secondary {
        padding: 1.3rem 3.2rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-secondary);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-md);
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        transition: all 0.35s ease;

        &:hover {
          color: var(--text-primary);
          border-color: var(--glass-border-hover);
          background: var(--glass-bg-hover);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
      }
    }

    .social-media {
      display: inline-flex;
      align-items: center;
      gap: 1.2rem;
      padding-top: 3rem;
      animation: fadeSlideUp 0.6s ease both;
      animation-delay: 0.75s;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.4rem;
        height: 4.4rem;
        border-radius: var(--radius-sm);
        border: 1px solid var(--glass-border);
        background: var(--glass-bg);
        transition: all 0.35s ease;

        &:hover {
          border-color: var(--glass-border-hover);
          background: rgba(124, 58, 237, 0.08);
          transform: translateY(-3px);
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.15);
        }

        img {
          width: 2rem;
          height: 2rem;
          opacity: 0.6;
          transition: all 0.35s ease;
        }

        &:hover img {
          opacity: 1;
          filter: drop-shadow(0 0 4px rgba(124, 58, 237, 0.4));
        }
      }
    }
  }

  /* ─── Terminal Block ─── */
  .hero-terminal {
    flex: 1;
    max-width: 48rem;
    perspective: 1200px;
    animation: fadeSlideUp 0.8s ease both;
    animation-delay: 0.4s;
  }

  .terminal-window {
    background: rgba(15, 15, 25, 0.85);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
    box-shadow: 
      0 25px 80px rgba(0, 0, 0, 0.55),
      0 0 100px rgba(124, 58, 237, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.6s ease;

    /* Animated gradient border glow */
    &::after {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(
        135deg,
        rgba(124, 58, 237, 0.15),
        transparent 40%,
        transparent 60%,
        rgba(59, 130, 246, 0.15)
      );
      -webkit-mask: linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-6px) rotateX(1deg) rotateY(-0.5deg);
      box-shadow: 
        0 35px 100px rgba(0, 0, 0, 0.65),
        0 0 120px rgba(124, 58, 237, 0.12);
    }
  }

  .terminal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 1.6rem;
    background: rgba(255, 255, 255, 0.025);
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);

    .terminal-dots {
      display: flex;
      gap: 0.7rem;

      .dot {
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .dot-red { background: #ff5f56; color: rgba(255, 95, 86, 0.4); }
      .dot-yellow { background: #ffbd2e; color: rgba(255, 189, 46, 0.4); }
      .dot-green { background: #27c93f; color: rgba(39, 201, 63, 0.4); }
    }

    .terminal-title {
      font-family: var(--font-mono);
      font-size: 1.2rem;
      color: var(--text-muted);
      letter-spacing: 0.02em;
    }

    .terminal-dots-placeholder {
      width: 5rem;
    }
  }

  .terminal-body {
    padding: 2rem 0;

    .code-line {
      display: flex;
      align-items: flex-start;
      padding: 0.35rem 2rem;
      transition: background 0.2s ease;

      &:hover {
        background: rgba(124, 58, 237, 0.04);
      }

      .line-number {
        font-family: var(--font-mono);
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.12);
        min-width: 3rem;
        text-align: right;
        margin-right: 2rem;
        user-select: none;
      }

      .line-content {
        font-family: var(--font-mono);
        font-size: 1.4rem;
        line-height: 1.8;
        color: var(--text-secondary);

        .key { color: #a78bfa; }
        .string { color: #60a5fa; }
        .punctuation { color: rgba(255, 255, 255, 0.3); }
        .boolean { color: #34d399; }
      }
    }
  }

  /* ─── Animations ─── */
  @keyframes blink {
    50% { opacity: 0; }
  }

  @keyframes pulse-green {
    0%, 100% { opacity: 1; box-shadow: 0 0 4px rgba(35, 206, 107, 0.5); }
    50% { opacity: 0.6; box-shadow: 0 0 12px rgba(35, 206, 107, 0.3), 0 0 0 6px rgba(35, 206, 107, 0); }
  }

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes shimmer-text {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  /* ─── Responsive ─── */
  @media(max-width: 960px) {
    display: block;
    margin-top: 10%;
    padding: 0 2rem;
    min-height: auto;

    .hero-text {
      max-width: 100%;
      h1 .name-gradient { font-size: 5.2rem; }
    }

    .hero-terminal {
      margin-top: 4rem;
      max-width: 100%;
    }
  }

  @media(max-width: 600px) {
    margin-top: 30%;
    padding: 0 1.5rem;

    .hero-text {
      h1 {
        .greeting { font-size: 1.6rem; }
        .name-gradient { font-size: 3.8rem; }
      }
      .role-wrapper {
        h3 { font-size: 1.8rem; }
        .role-prefix, .cursor-blink { font-size: 1.8rem; }
      }
      .tagline { font-size: 1.5rem; }
      .button-wrapper {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .cta-primary, .cta-secondary {
          padding: 1.1rem 2.6rem;
          font-size: 1.4rem;
        }
      }
    }
  }

  @media(max-width: 480px) {
    margin-top: 35%;

    .hero-text {
      h1 .name-gradient { font-size: 3rem; }
      .role-wrapper h3 { font-size: 1.6rem; }
      .tagline { font-size: 1.4rem; }
      .status-badge { font-size: 1.2rem; }
      .social-media {
        padding-top: 2rem;
        a { width: 3.6rem; height: 3.6rem; img { width: 1.8rem; height: 1.8rem; } }
      }
    }

    .terminal-body .code-line {
      padding: 0.3rem 1.2rem;
      .line-number { min-width: 2rem; margin-right: 1rem; font-size: 1.1rem; }
      .line-content { font-size: 1.2rem; }
    }
  }
`