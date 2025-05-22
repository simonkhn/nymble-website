# NymbleAI Website Design System & Implementation Guide

## 1. Design Philosophy & Vision

### Core Design Principles
- **Intelligence Through Simplicity**: Every element serves a purpose, creating sophistication through restraint
- **Dynamic Yet Professional**: Subtle animations and interactions that feel alive without being distracting
- **Trust Through Transparency**: Clear information hierarchy and intuitive navigation
- **Human-Centric Technology**: Balancing technical prowess with approachability

## 2. Design System

### 2.1 Color Palette

```css
/* Primary Colors */
--primary-900: #051422;    /* Deepest blue - for critical text */
--primary-800: #0A2540;    /* Deep intelligent blue - primary brand */
--primary-700: #0E3A5F;    /* Navigation active states */
--primary-600: #134E7E;    /* Interactive elements */
--primary-500: #17629D;    /* Default buttons */
--primary-400: #4A8BC2;    /* Hover states */
--primary-300: #7DB4E6;    /* Backgrounds */
--primary-200: #B0D7F1;    /* Light backgrounds */
--primary-100: #E3F0FA;    /* Subtle backgrounds */
--primary-50:  #F4F9FD;    /* Near white */

/* Accent Colors */
--accent-orange: #FF6B00;   /* Innovation/Action - CTAs */
--accent-orange-light: #FF8533;
--accent-orange-dark: #CC5500;

--accent-teal: #008080;     /* Growth/Success - highlights */
--accent-teal-light: #00A3A3;
--accent-teal-dark: #006666;

/* Neutral Colors */
--gray-900: #0F1419;        /* Primary text */
--gray-800: #1C1F26;        /* Dark backgrounds */
--gray-700: #333333;        /* Secondary text */
--gray-600: #4B5563;        /* Muted text */
--gray-500: #6B7280;        /* Disabled states */
--gray-400: #9CA3AF;        /* Placeholders */
--gray-300: #D1D5DB;        /* Borders */
--gray-200: #E5E7EB;        /* Dividers */
--gray-100: #F3F4F6;        /* Light backgrounds */
--gray-50:  #F9FAFB;        /* Off-white */
--white:    #FFFFFF;        /* Pure white */

/* Semantic Colors */
--success: #3DDC97;         /* Success states */
--warning: #F59E0B;         /* Warning states */
--error: #EF4444;           /* Error states */
--info: #3B82F6;            /* Info states */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #0A2540 0%, #17629D 100%);
--gradient-accent: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
--gradient-mesh: radial-gradient(at 40% 20%, hsla(210, 100%, 16%, 0.5) 0px, transparent 50%),
                 radial-gradient(at 80% 0%, hsla(189, 100%, 25%, 0.3) 0px, transparent 50%),
                 radial-gradient(at 0% 50%, hsla(22, 100%, 50%, 0.2) 0px, transparent 50%);
```

### 2.2 Typography

```css
/* Font Families */
--font-heading: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;

/* Font Sizes - Desktop */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */

/* Font Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Line Heights */
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Letter Spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0em;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### 2.3 Spacing System

```css
/* Base unit: 4px */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */
--space-48: 12rem;    /* 192px */
--space-56: 14rem;    /* 224px */
--space-64: 16rem;    /* 256px */
```

### 2.4 Layout Grid

```css
/* Container */
--container-max: 1280px;
--container-padding: var(--space-6);

/* Grid */
--grid-columns: 12;
--grid-gap: var(--space-6);

/* Breakpoints */
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

### 2.5 Shadows & Elevation

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
--shadow-glow: 0 0 20px rgba(23, 98, 157, 0.3);
```

### 2.6 Border Radius

```css
--radius-none: 0;
--radius-sm: 0.125rem;    /* 2px */
--radius-md: 0.375rem;    /* 6px */
--radius-lg: 0.5rem;      /* 8px */
--radius-xl: 0.75rem;     /* 12px */
--radius-2xl: 1rem;       /* 16px */
--radius-3xl: 1.5rem;     /* 24px */
--radius-full: 9999px;
```

### 2.7 Animation & Transitions

```css
/* Durations */
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
--duration-700: 700ms;
--duration-1000: 1000ms;

/* Easing Functions */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Transition Defaults */
--transition-base: all var(--duration-200) var(--ease-out);
--transition-opacity: opacity var(--duration-200) var(--ease-out);
--transition-transform: transform var(--duration-200) var(--ease-out);
```

## 3. Component Library

### 3.1 Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--gradient-accent);
  color: var(--white);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Shimmer effect on hover */
.btn-primary::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s;
  opacity: 0;
}

.btn-primary:hover::after {
  animation: shimmer 0.6s ease-out;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--primary-600);
  padding: var(--space-3) var(--space-6);
  border: 2px solid var(--primary-600);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  transition: var(--transition-base);
}

.btn-secondary:hover {
  background: var(--primary-600);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--primary-600);
  padding: var(--space-3) var(--space-6);
  font-weight: var(--font-medium);
  position: relative;
}

.btn-ghost::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--accent-orange);
  transition: all 0.3s ease-out;
  transform: translateX(-50%);
}

.btn-ghost:hover::after {
  width: 100%;
}
```

### 3.2 Cards

#### Feature Card
```css
.feature-card {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-accent);
  transform: scaleX(0);
  transition: transform 0.3s ease-out;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-100);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  color: var(--primary-600);
}

.feature-card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--space-2);
}

.feature-card-description {
  font-size: var(--text-base);
  color: var(--gray-600);
  line-height: var(--leading-relaxed);
}
```

#### Metric Card
```css
.metric-card {
  background: linear-gradient(135deg, var(--white) 0%, var(--gray-50) 100%);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--gray-200);
  position: relative;
  overflow: hidden;
}

.metric-value {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--primary-600);
  margin-bottom: var(--space-2);
}

.metric-label {
  font-size: var(--text-sm);
  color: var(--gray-600);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}

.metric-change {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--success);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

### 3.3 Navigation

#### Main Navigation
```css
.nav-main {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: var(--transition-base);
}

.nav-main.scrolled {
  box-shadow: var(--shadow-md);
}

.nav-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-4) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--primary-800);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.nav-link {
  color: var(--gray-700);
  font-weight: var(--font-medium);
  position: relative;
  transition: var(--transition-base);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-orange);
  transition: width 0.3s ease-out;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-600);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

### 3.4 Forms

#### Input Field
```css
.form-group {
  margin-bottom: var(--space-6);
}

.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--gray-700);
  margin-bottom: var(--space-2);
}

.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--gray-300);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: var(--transition-base);
  background: var(--white);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(23, 98, 157, 0.1);
}

.form-input.error {
  border-color: var(--error);
}

.form-error {
  font-size: var(--text-sm);
  color: var(--error);
  margin-top: var(--space-1);
}
```

### 3.5 Sections

#### Hero Section
```css
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--gradient-mesh), var(--gray-50);
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero-title {
  font-size: clamp(var(--text-4xl), 5vw, var(--text-7xl));
  font-weight: var(--font-extrabold);
  color: var(--primary-900);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-6);
}

.hero-subtitle {
  font-size: clamp(var(--text-lg), 2vw, var(--text-2xl));
  color: var(--gray-700);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Animated background particles */
.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-400);
  border-radius: 50%;
  opacity: 0.3;
  animation: float 20s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-100px) translateX(50px); }
  50% { transform: translateY(-50px) translateX(-50px); }
  75% { transform: translateY(-150px) translateX(30px); }
}
```

## 4. Page Layouts & Wireframes

### 4.1 Homepage Layout

```
┌─────────────────────────────────────────────────────────────┐
│ Navigation (Sticky)                                         │
│ Logo | Product | Services | Success Story | About | Contact│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                     Hero Section                            │
│  ┌─────────────────────┬─────────────────────────┐        │
│  │                     │   Abstract AI Visual    │        │
│  │  Headline           │   (Animated particles)  │        │
│  │  Sub-headline       │                         │        │
│  │  [CTA1] [CTA2]      │                         │        │
│  └─────────────────────┴─────────────────────────┘        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              Problem/Solution Introduction                  │
│        "Common challenges..." → "NymbleAI solves..."       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    Our Offerings                            │
│  ┌─────────────────────┬─────────────────────────┐        │
│  │ Interaction Intel   │   Custom AI Solutions   │        │
│  │ [Product Card]      │   [Service Card]        │        │
│  │ • Feature 1         │   • Capability 1        │        │
│  │ • Feature 2         │   • Capability 2        │        │
│  │ [Learn More]        │   [Learn More]          │        │
│  └─────────────────────┴─────────────────────────┘        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    Client Success                           │
│         "25% efficiency boost for senior living"           │
│                  [Read Case Study]                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    Why NymbleAI?                            │
│   [Innovation] [Client-Centric] [Agile] [Results]         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  Final CTA Section                          │
│           "Ready to transform your business?"              │
│            [Schedule Demo] [Contact Us]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                      Footer                                 │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Product Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    Navigation (Sticky)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   Product Hero                              │
│              "Interaction Intelligence"                     │
│        "Transform Every Conversation into Growth"          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  The Challenge We Solve                     │
│    [Pain Point 1] [Pain Point 2] [Pain Point 3]           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   How It Works                              │
│     [Ingest]→[Transcribe]→[Analyze]→[Automate]            │
│              (Animated workflow diagram)                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  Key Features Grid                          │
│  ┌───────┬───────┬───────┐                                │
│  │Feature│Feature│Feature│                                │
│  ├───────┼───────┼───────┤                                │
│  │Feature│Feature│Feature│                                │
│  ├───────┼───────┼───────┤                                │
│  │Feature│Feature│Feature│                                │
│  └───────┴───────┴───────┘                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              Product Dashboard Preview                      │
│          [Interactive mockup with tooltips]                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    Who Is It For?                          │
│   [Sales Teams] [Support] [Call Centers] [Training]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                       CTA Section                           │
│             [Request Demo] [Contact Sales]                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                        Footer                               │
└─────────────────────────────────────────────────────────────┘
```

## 5. Interactive Elements & Micro-animations

### 5.1 Scroll-triggered Animations

```javascript
// Fade in on scroll
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

// Stagger animation for lists
.stagger-item {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.4s ease-out;
}

.stagger-item.visible {
  opacity: 1;
  transform: translateX(0);
}

// Delay each item
.stagger-item:nth-child(1) { transition-delay: 0.1s; }
.stagger-item:nth-child(2) { transition-delay: 0.2s; }
.stagger-item:nth-child(3) { transition-delay: 0.3s; }
```

### 5.2 Interactive Dashboard Mockup

```javascript
// Product dashboard with hover tooltips
.dashboard-feature {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.dashboard-feature:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.dashboard-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--gray-900);
  color: var(--white);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-out;
}

.dashboard-feature:hover .dashboard-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-5px);
}
```

### 5.3 Animated Workflow Diagram

```javascript
// SVG path animation for workflow
.workflow-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

// Pulse animation for workflow nodes
.workflow-node {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}
```

### 5.4 Number Counter Animation

```javascript
// Animated counter for metrics
.counter {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  color: var(--primary-600);
}

// JavaScript implementation
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + '%';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + '%';
    }
  }, 16);
}
```

## 6. Responsive Design Specifications

### 6.1 Breakpoint Behaviors

#### Mobile (< 768px)
- Single column layouts
- Hamburger menu navigation
- Touch-friendly tap targets (min 44px)
- Simplified animations
- Stack CTAs vertically
- Font sizes scale down 10-15%

#### Tablet (768px - 1024px)
- 2-column grids for features
- Maintain desktop navigation
- Adjust hero section proportions
- Scale spacing by 0.8x

#### Desktop (> 1024px)
- Full layouts as designed
- All animations enabled
- Multi-column grids
- Maximum container width applied

### 6.2 Touch Interactions

```css
/* Mobile touch states */
@media (hover: none) {
  .btn-primary:active {
    transform: scale(0.98);
  }
  
  .feature-card:active {
    transform: scale(0.98);
  }
  
  /* Disable hover effects on touch */
  .nav-link::after {
    display: none;
  }
}
```

## 7. Accessibility Guidelines

### 7.1 Color Contrast
- All text meets WCAG AA standards
- Primary text: 7:1 contrast ratio minimum
- Large text: 4.5:1 contrast ratio minimum
- Interactive elements: 3:1 contrast ratio

### 7.2 Focus States
```css
*:focus-visible {
  outline: 3px solid var(--primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

.btn-primary:focus-visible {
  box-shadow: 0 0 0 3px rgba(23, 98, 157, 0.3);
}
```

### 7.3 Screen Reader Support
- Semantic HTML structure
- ARIA labels for interactive elements
- Skip navigation links
- Descriptive alt text for images
- Proper heading hierarchy

### 7.4 Keyboard Navigation
- All interactive elements keyboard accessible
- Logical tab order
- Escape key closes modals
- Arrow keys for menu navigation

## 8. Performance Optimizations

### 8.1 Image Guidelines
- Use WebP format with JPEG fallback
- Implement lazy loading
- Responsive images with srcset
- Maximum file sizes:
  - Hero images: 200KB
  - Feature images: 100KB
  - Icons: 5KB (prefer SVG)

### 8.2 Animation Performance
- Use CSS transforms over position changes
- Implement will-change for animated elements
- Disable animations on reduced-motion preference
- GPU-accelerated properties only

### 8.3 Loading Strategy
- Critical CSS inline
- Async load non-critical styles
- Preload key fonts
- Progressive enhancement approach

## 9. Content Guidelines

### 9.1 Tone of Voice
- Professional yet approachable
- Clear and concise
- Benefit-focused
- Active voice
- Avoid jargon without explanation

### 9.2 Heading Hierarchy
- H1: One per page, main topic
- H2: Major sections
- H3: Subsections
- H4: Detail points (rarely used)

### 9.3 CTA Copy
- Action-oriented verbs
- Create urgency without pressure
- Clear value proposition
- Examples:
  - "Start Your AI Journey"
  - "See It In Action"
  - "Transform Your Business"
  - "Get Personalized Demo"

## 10. Implementation Notes

### 10.1 Technology Recommendations
- Framework: Next.js 14+ with App Router
- Styling: Tailwind CSS + CSS Modules for complex components
- Animations: Framer Motion for complex interactions
- Icons: Lucide React
- Forms: React Hook Form + Zod validation
- Analytics: Google Analytics 4 + Hotjar
- Hosting: Vercel for optimal performance

### 10.2 Component Architecture
```
/components
  /ui
    - Button.tsx
    - Card.tsx
    - Input.tsx
    - Navigation.tsx
  /sections
    - Hero.tsx
    - Features.tsx
    - Workflow.tsx
  /layouts
    - PageLayout.tsx
    - Section.tsx
```

### 10.3 SEO Essentials
- Dynamic meta tags per page
- Structured data for organization
- XML sitemap
- Robots.txt
- Open Graph tags
- Twitter cards
- Canonical URLs

### 10.4 Third-party Integrations
- HubSpot/Calendly for demo scheduling
- Intercom for chat support
- Google Tag Manager for tracking
- Cloudinary for image optimization

## 11. Launch Checklist

- [ ] All pages responsive across devices
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Performance audit (Lighthouse score > 90)
- [ ] Accessibility audit (WAVE tool)
- [ ] Form validation and error handling
- [ ] 404 page designed
- [ ] Analytics tracking verified
- [ ] SSL certificate active
- [ ] SEO meta tags complete
- [ ] Social sharing preview tested
- [ ] Contact form email delivery confirmed
- [ ] Legal pages added (Privacy, Terms)
- [ ] Favicon and app icons
- [ ] Loading states for dynamic content
- [ ] Error boundaries implemented

This comprehensive design system provides everything needed to build a sophisticated, modern website for NymbleAI that balances technical innovation with human-centered design.