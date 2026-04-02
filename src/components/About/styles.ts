import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 6rem;
  align-items: start;

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

  h2 {
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 2.4rem;
    background: linear-gradient(135deg, #ffffff, rgba(255,255,255,0.7));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .about-description {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 3.5rem;
    padding: 2.4rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
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
    }

    p {
      font-size: 1.6rem;
      line-height: 1.8;
      color: var(--text-secondary);
      letter-spacing: 0.01em;
    }
  }

  /* ─── Skills ─── */
  .skills-section {
    h3 {
      font-family: var(--font-mono);
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 2.4rem;
      color: var(--purple);
    }
  }

  .skill-categories {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }

  .skill-category {
    .category-label {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-family: var(--font-mono);
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1.1rem;

      &::before {
        content: '//';
        color: rgba(124, 58, 237, 0.4);
        font-weight: 400;
      }
    }

    .skill-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
  }

  .skill-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.7rem 1.4rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-sm);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(124, 58, 237, 0.06), rgba(59, 130, 246, 0.06));
      opacity: 0;
      transition: opacity 0.35s ease;
    }

    img {
      width: 2rem;
      height: 2rem;
      position: relative;
      z-index: 1;
      transition: transform 0.3s ease;
    }

    span {
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--text-secondary);
      white-space: nowrap;
      position: relative;
      z-index: 1;
    }

    &:hover {
      background: var(--glass-bg-hover);
      border-color: var(--glass-border-hover);
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(124, 58, 237, 0.1);

      &::before { opacity: 1; }
      img { transform: scale(1.1); }
      span { color: var(--text-primary); }
    }
  }

  /* ─── Profile Image ─── */
  .about-image {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 4rem;

    .image-frame {
      position: relative;
      width: 24rem;
      height: 24rem;
      border-radius: 50%;
      padding: 3px;
      background: linear-gradient(135deg, var(--purple), var(--blue-accent), var(--purple));
      background-size: 200% 200%;
      animation: gradient-rotate 4s ease infinite;
      box-shadow: 0 0 40px rgba(124, 58, 237, 0.15),
                  0 0 80px rgba(124, 58, 237, 0.05);

      &::after {
        content: '';
        position: absolute;
        inset: -12px;
        border-radius: 50%;
        border: 1px solid rgba(124, 58, 237, 0.08);
        animation: gradient-rotate 6s ease infinite reverse;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid var(--black);
      }
    }
  }

  @keyframes gradient-rotate {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* ─── Responsive ─── */
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;

    .section-label { justify-content: center; }
    .about-description { text-align: left; }
    .about-description p { text-align: center; }
    .skills-section h3 { text-align: center; }
    .skill-categories { align-items: center; }
    .skill-category { text-align: center; .skill-items { justify-content: center; } }

    .about-image {
      order: -1;
      padding-top: 0;
      .image-frame { width: 20rem; height: 20rem; }
    }
  }

  @media (max-width: 600px) {
    margin-top: 8rem;
    padding: 0 1.5rem;
    h2 { font-size: 3rem; }
    .about-description { padding: 1.8rem; }
    .about-description p { font-size: 1.5rem; }
    .about-image .image-frame { width: 16rem; height: 16rem; }
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    h2 { font-size: 2.6rem; }

    .skill-badge {
      padding: 0.5rem 1rem;
      img { width: 1.8rem; height: 1.8rem; }
      span { font-size: 1.15rem; }
    }

    .about-image .image-frame { width: 14rem; height: 14rem; }
  }
`