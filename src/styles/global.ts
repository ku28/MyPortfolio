import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  :root{
    /* Core palette */
    --pink: #E31F71;
    --black: #0a0a0f;
    --green: #23ce6b;
    --blue: #016fb9;
    --purple: #7c3aed;
    --blue-accent: #3b82f6;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #7c3aed, #3b82f6);
    --gradient-text: linear-gradient(135deg, #a78bfa, #60a5fa);
    --gradient-subtle: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(59, 130, 246, 0.15));

    /* Glass */
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-bg-hover: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.06);
    --glass-border-hover: rgba(124, 58, 237, 0.25);

    /* Typography */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;

    /* Text colors */
    --text-primary: rgba(255, 255, 255, 0.95);
    --text-secondary: rgba(255, 255, 255, 0.65);
    --text-muted: rgba(255, 255, 255, 0.4);

    /* Spacing */
    --radius-sm: 0.8rem;
    --radius-md: 1.2rem;
    --radius-lg: 1.6rem;
    --radius-xl: 2.4rem;

    scroll-padding-top: 10rem;

    /* ─── LIGHT THEME ─── */
    &.light {

      --black: #f5f6fa;
      --glass-bg: rgba(0, 0, 0, 0.03);
      --glass-bg-hover: rgba(0, 0, 0, 0.06);
      --glass-border: rgba(0, 0, 0, 0.08);
      --glass-border-hover: rgba(124, 58, 237, 0.3);
      --text-primary: #1a1a2e;
      --text-secondary: rgba(26, 26, 46, 0.65);
      --text-muted: rgba(26, 26, 46, 0.4);
      --gradient-text: linear-gradient(135deg, #6d28d9, #2563eb);

      body {
        transition: background-color 0.5s, color 0.5s;
        background-color: #f5f6fa;
        color: #1a1a2e;

        &::before {
          background: 
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.06), transparent),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(59, 130, 246, 0.04), transparent);
        }
      }

      /* Header */
      header.header-fixed {
        background: rgba(245, 246, 250, 0.75);
        border-bottom-color: rgba(0, 0, 0, 0.06);

        .logo-bracket { color: rgba(26, 26, 46, 0.4) !important; }
        .logo-name {
          background: var(--gradient-text) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }

        nav a {
          color: var(--text-secondary);
          &:hover { color: var(--text-primary); background: rgba(0, 0, 0, 0.04); }
          &.resume-btn {
            color: #fff !important;
          }
        }

        .menu, .menu:before, .menu:after {
          background-color: #1a1a2e;
        }
        .menu.active {
          background-color: transparent;
        }

        label {
          background: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.1);
        }

        input:checked + label {
          background: var(--gradient-primary);
          border-color: transparent;
        }
      }

      /* Hero */
      .hero-text {
        .code-comment { color: var(--text-muted); }
        .greeting { color: var(--text-secondary) !important; }
        .name-gradient {
          background: linear-gradient(135deg, #1a1a2e 0%, #6d28d9 60%, #2563eb 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        .role-wrapper h3 { color: var(--text-primary) !important; }
        .tagline { color: var(--text-secondary) !important; }
        .cta-secondary {
          color: var(--text-secondary) !important;
          border-color: var(--glass-border) !important;
          &:hover { color: var(--text-primary) !important; }
        }
        .social-media a {
          border-color: var(--glass-border);
          img { filter: none !important; opacity: 0.5; }
          &:hover img { opacity: 0.9; }
        }
      }

      .terminal-window {
        background: rgba(245, 246, 250, 0.9) !important;
        border-color: rgba(0, 0, 0, 0.08) !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08),
                    0 0 40px rgba(124, 58, 237, 0.04) !important;
      }
      .terminal-header {
        background: rgba(0, 0, 0, 0.03) !important;
        border-bottom-color: rgba(0, 0, 0, 0.06) !important;
        .terminal-title { color: var(--text-muted) !important; }
      }
      .terminal-body .code-line {
        &:hover { background: rgba(0, 0, 0, 0.02) !important; }
        .line-number { color: rgba(0, 0, 0, 0.15) !important; }
        .line-content {
          color: var(--text-secondary) !important;
          .key { color: #6d28d9 !important; }
          .string { color: #2563eb !important; }
          .punctuation { color: var(--text-muted) !important; }
          .boolean { color: #059669 !important; }
        }
      }

      /* About */
      h2 {
        background: linear-gradient(135deg, #1a1a2e, rgba(26,26,46,0.7)) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }

      .skill-badge {
        background: rgba(0, 0, 0, 0.03) !important;
        border-color: rgba(0, 0, 0, 0.08) !important;
        span { color: var(--text-secondary) !important; }
        &:hover {
          background: rgba(0, 0, 0, 0.06) !important;
          border-color: var(--glass-border-hover) !important;
          span { color: var(--text-primary) !important; }
        }
      }

      .image-frame {
        background: linear-gradient(135deg, #6d28d9, #2563eb, #6d28d9) !important;
        img { border-color: #f5f6fa !important; }
      }

      /* Featured Project */
      .featured-card {
        background: rgba(0, 0, 0, 0.02) !important;
        border-color: rgba(0, 0, 0, 0.06) !important;
        &:hover {
          border-color: rgba(124, 58, 237, 0.2) !important;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.06) !important;
        }
      }
      .featured-title {
        background: linear-gradient(135deg, #1a1a2e 0%, #6d28d9 50%, #2563eb 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
      .featured-description { color: var(--text-secondary) !important; }
      .feature-list li { color: var(--text-secondary) !important; }
      .badge {
        background: rgba(124, 58, 237, 0.08) !important;
        color: #6d28d9 !important;
        border-color: rgba(124, 58, 237, 0.15) !important;
      }
      .btn-secondary {
        background: rgba(0, 0, 0, 0.04) !important;
        border-color: rgba(0, 0, 0, 0.1) !important;
        color: var(--text-primary) !important;
      }
      .featured-image img {
        border-color: rgba(0, 0, 0, 0.06) !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1) !important;
      }

      /* Project cards */
      .project {
        background: rgba(0, 0, 0, 0.02) !important;
        border-color: rgba(0, 0, 0, 0.06) !important;
        color: var(--text-primary) !important;
        &:hover {
          background: rgba(0, 0, 0, 0.04) !important;
          border-color: rgba(124, 58, 237, 0.2) !important;
        }
        header { color: #6d28d9 !important; }
        p { color: var(--text-secondary) !important; }
        .tech-list li {
          background: rgba(124, 58, 237, 0.06) !important;
          color: #6d28d9 !important;
          border-color: rgba(124, 58, 237, 0.12) !important;
        }
      }

      /* Contact */
      .contact-card {
        background: rgba(0, 0, 0, 0.02) !important;
        border-color: rgba(0, 0, 0, 0.06) !important;
        &:hover {
          background: rgba(0, 0, 0, 0.04) !important;
          border-color: rgba(124, 58, 237, 0.2) !important;
        }
        .contact-label { color: var(--text-muted) !important; }
        .contact-value { color: var(--text-primary) !important; }
        .contact-icon {
          background: rgba(124, 58, 237, 0.08) !important;
          border-color: rgba(124, 58, 237, 0.12) !important;
          img { filter: brightness(0) opacity(0.6) !important; }
        }
      }

      /* Form */
      form {
        input, textarea {
          background: rgba(0, 0, 0, 0.03) !important;
          border-color: rgba(0, 0, 0, 0.1) !important;
          color: var(--text-primary) !important;
          &::placeholder { color: var(--text-muted) !important; }
          &:focus {
            border-color: rgba(124, 58, 237, 0.4) !important;
            background: rgba(0, 0, 0, 0.02) !important;
          }
        }
      }

      /* Footer */
      footer.footer {
        background: rgba(0, 0, 0, 0.02);
        border-top-color: rgba(0, 0, 0, 0.06);
        color: var(--text-primary);
        .footer-tagline { color: var(--text-muted); }
        .tech-badge {
          background: rgba(0, 0, 0, 0.03);
          border-color: rgba(0, 0, 0, 0.08);
          color: var(--text-muted);
          strong { color: var(--text-secondary); }
        }
        .social-media a {
          border-color: rgba(0, 0, 0, 0.08);
          background: rgba(0, 0, 0, 0.02);
          img { filter: brightness(0) opacity(0.4); }
          &:hover img { filter: brightness(0) opacity(0.8); }
        }
      }

      /* Scrollbar */
      ::-webkit-scrollbar-thumb {
        background: rgba(124, 58, 237, 0.2);
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(124, 58, 237, 0.35);
      }

      ::selection {
        background: rgba(124, 58, 237, 0.15);
        color: #1a1a2e;
      }

      /* Status badge light */
      .status-badge {
        background: rgba(35, 206, 107, 0.06) !important;
        border-color: rgba(35, 206, 107, 0.15) !important;
      }

      /* Section labels */
      .label-line {
        background: var(--gradient-primary) !important;
      }

      /* Category labels */
      .category-label {
        color: var(--text-muted) !important;
      }
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--black);
    color: var(--text-primary);
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.12), transparent),
        radial-gradient(ellipse 60% 40% at 80% 50%, rgba(59, 130, 246, 0.06), transparent);
      pointer-events: none;
      z-index: 0;
    }
  }

  body, input, textarea, button{
    font-family: var(--font-sans);
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background: var(--gradient-primary);
    color: #FFF;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    &:hover{
      transform: translateY(-1px);
      box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
    }
  }

  button:disabled, .button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .logo{
    font-size: 2.4rem;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  ::selection {
    background: rgba(124, 58, 237, 0.3);
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(124, 58, 237, 0.25);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(124, 58, 237, 0.45);
  }

  @media (max-width: 768px){
    html{ font-size: 58%; }
  }
  @media (max-width: 600px){
    html{ font-size: 55%; }
  }
  @media (max-width: 480px){
    html{ font-size: 52%; }
  }
  @media (max-width: 360px){
    html{ font-size: 50%; }
  }
`