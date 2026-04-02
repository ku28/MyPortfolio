import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 12rem;

  .section-label {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 3rem;

    .label-line {
      width: 4rem;
      height: 2px;
      background: linear-gradient(90deg, #7c3aed, #3b82f6);
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

  .featured-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.5rem;
    align-items: center;
    padding: 4.5rem;
    background: rgba(255, 255, 255, 0.025);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 2.4rem;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

    /* Animated top gradient border */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(124, 58, 237, 0.6) 30%,
        rgba(59, 130, 246, 0.6) 70%,
        transparent 100%
      );
      background-size: 200% 100%;
      animation: borderShimmer 4s ease infinite;
    }

    /* Corner glow accent */
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 50%;
      height: 100%;
      background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
      pointer-events: none;
    }

    &:hover {
      border-color: rgba(124, 58, 237, 0.15);
      box-shadow: 0 16px 60px rgba(124, 58, 237, 0.08),
                  0 0 100px rgba(59, 130, 246, 0.04);
      transform: translateY(-2px);
    }
  }

  @keyframes borderShimmer {
    0%, 100% { background-position: -200% 0; }
    50% { background-position: 200% 0; }
  }

  .featured-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .featured-title {
    font-size: 4.2rem;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.025em;
    background: linear-gradient(
      135deg,
      #ffffff 0%,
      #c4b5fd 40%,
      #a78bfa 55%,
      #60a5fa 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .featured-description {
    font-size: 1.7rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.6);
    max-width: 50ch;
    letter-spacing: 0.01em;
  }

  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;

    li {
      display: flex;
      align-items: flex-start;
      gap: 1.1rem;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.55;
      padding: 0.3rem 0;
      transition: all 0.3s ease;

      &:hover {
        color: rgba(255, 255, 255, 0.95);
        transform: translateX(4px);
      }
    }

    .feature-icon {
      color: #a78bfa;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 0.5rem;

    .badge {
      padding: 0.5rem 1.4rem;
      font-size: 1.2rem;
      font-weight: 600;
      font-family: var(--font-mono);
      letter-spacing: 0.03em;
      border-radius: 10rem;
      background: rgba(124, 58, 237, 0.1);
      color: #a78bfa;
      border: 1px solid rgba(124, 58, 237, 0.18);
      transition: all 0.35s ease;

      &:hover {
        background: rgba(124, 58, 237, 0.2);
        border-color: rgba(124, 58, 237, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);
      }
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1.4rem;
    margin-top: 1.2rem;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1.2rem 2.6rem;
      font-size: 1.4rem;
      font-weight: 600;
      border-radius: 1.2rem;
      text-decoration: none;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .btn-icon {
      width: 1.8rem;
      height: 1.8rem;
      filter: brightness(0) invert(1);
    }

    .btn-primary {
      background: linear-gradient(135deg, #7c3aed, #3b82f6);
      color: #fff;
      box-shadow: 0 4px 24px rgba(124, 58, 237, 0.35);
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

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 36px rgba(124, 58, 237, 0.5);
        &::before { left: 100%; }
      }
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.04);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
    }
  }

  .featured-image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .image-glow {
      position: absolute;
      width: 80%;
      height: 80%;
      background: radial-gradient(
        circle,
        rgba(124, 58, 237, 0.15) 0%,
        rgba(59, 130, 246, 0.08) 50%,
        transparent 70%
      );
      filter: blur(50px);
      z-index: 0;
      animation: glowPulse 4s ease-in-out infinite;
    }

    img {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 52rem;
      border-radius: 1.6rem;
      border: 1px solid rgba(255, 255, 255, 0.07);
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45),
                  0 0 50px rgba(124, 58, 237, 0.06);
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.6s ease;

      &:hover {
        transform: translateY(-8px) scale(1.02) rotateX(1deg);
        box-shadow: 0 35px 100px rgba(0, 0, 0, 0.55),
                    0 0 80px rgba(124, 58, 237, 0.12);
      }
    }
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }

  /* ─── Responsive ─── */
  @media (max-width: 960px) {
    margin-top: 10rem;
    .featured-card { grid-template-columns: 1fr; gap: 3rem; padding: 3rem; }
    .featured-title { font-size: 3.5rem; }
    .featured-image { order: -1; img { max-width: 100%; } }
  }

  @media (max-width: 740px) {
    padding: 0 2rem;
    .featured-card { padding: 2.5rem; border-radius: 2rem; }
    .featured-title { font-size: 3rem; }
    .featured-description { font-size: 1.5rem; }
  }

  @media (max-width: 600px) {
    margin-top: 8rem;
    .featured-card { padding: 2rem; gap: 2rem; }
    .featured-title { font-size: 2.6rem; }
    .featured-description { font-size: 1.4rem; }
    .feature-list li { font-size: 1.3rem; }
    .tech-badges .badge { font-size: 1.1rem; padding: 0.4rem 1.1rem; }
    .cta-buttons { flex-direction: column; a { justify-content: center; padding: 1.1rem 2rem; } }
  }

  @media (max-width: 480px) {
    margin-top: 6rem;
    padding: 0 1.5rem;
    .section-label { margin-bottom: 2rem; }
    .featured-card { padding: 1.6rem; border-radius: 1.6rem; }
    .featured-title { font-size: 2.2rem; }
    .featured-description { font-size: 1.3rem; }
    .feature-list li { font-size: 1.2rem; gap: 0.6rem; }
  }
`;
