<template>
  <div id="landing-page" class="site-wrapper">
    <!-- ============ BACKGROUND LIGHTING ============ -->
    <div class="ambient-glow ambient-glow--primary"></div>
    <div class="ambient-glow ambient-glow--secondary"></div>

    <!-- ============ NAVBAR ============ -->
    <header id="navbar" :class="['navbar', { 'navbar--scrolled': isScrolled }]">
      <div class="navbar__container">
        <a href="#hero" class="navbar__brand-wrap" @click.prevent="scrollTo('hero')" :aria-label="$t('meta.title')">
          <div class="brand-emblem">
            <img src="/logo.png" alt="Al-Mehdar Tech Logo" class="brand-emblem__img" />
            <div class="brand-emblem__glow"></div>
          </div>
          <div class="brand-meta">
            <span class="brand-meta__title">Al-Mehdar Tech</span>
            <span class="brand-meta__sub">WEB • DATA • TECHNOLOGY</span>
          </div>
        </a>

        <nav class="navbar__nav" :class="{ 'navbar__nav--active': menuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            class="nav-item"
            :class="{ 'nav-item--active': activeSection === link.id }"
            @click.prevent="scrollTo(link.id); menuOpen = false"
          >
            {{ link.label }}
          </a>

          <!-- Mobile Language Switcher -->
          <button
            class="lang-switch-btn lang-switch-btn--mobile"
            @click="toggleLocale(); menuOpen = false"
            :aria-label="$t('nav.lang_toggle_aria')"
          >
            <svg class="lang-switch-btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span class="lang-switch-btn__txt">{{ locale === 'ar' ? 'English (EN)' : 'العربية (AR)' }}</span>
          </button>

          <a href="#contact" class="nav-cta" @click.prevent="scrollTo('contact'); menuOpen = false">
            <span>{{ $t('nav.cta') }}</span>
            <svg class="nav-cta__icon btn-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </a>
        </nav>

        <div class="navbar__actions">
          <!-- Desktop Language Switcher Button -->
          <button
            class="lang-switch-btn lang-switch-btn--desktop"
            @click="toggleLocale"
            :aria-label="$t('nav.lang_toggle_aria')"
            :title="locale === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'"
          >
            <svg class="lang-switch-btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span class="lang-switch-btn__txt">{{ locale === 'ar' ? 'English' : 'العربية' }}</span>
          </button>

          <button
            class="menu-toggle"
            @click="menuOpen = !menuOpen"
            :aria-expanded="menuOpen"
            :aria-label="$t('nav.menu_aria')"
          >
            <span :class="['menu-toggle__bar', { active: menuOpen }]"></span>
            <span :class="['menu-toggle__bar', { active: menuOpen }]"></span>
            <span :class="['menu-toggle__bar', { active: menuOpen }]"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- ============ HERO SECTION ============ -->
    <section id="hero" class="hero-section">
      <div class="hero-section__container">
        <!-- Status Badge -->
        <div class="hero-status">
          <span class="hero-status__dot"></span>
          <span class="hero-status__text">{{ $t('hero.badge') }}</span>
        </div>

        <!-- Main Title -->
        <h1 class="hero-title">
          {{ $t('hero.title_prefix') }}
          <span class="hero-title__highlight">{{ $t('hero.title_highlight') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="hero-desc">
          {{ $t('hero.desc') }}
        </p>

        <!-- Actions -->
        <div class="hero-actions">
          <a href="#contact" class="btn btn--primary" @click.prevent="scrollTo('contact')">
            <span>{{ $t('hero.cta_primary') }}</span>
            <svg class="btn-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </a>
          <a href="#services" class="btn btn--secondary" @click.prevent="scrollTo('services')">
            <span>{{ $t('hero.cta_secondary') }}</span>
          </a>
        </div>

        <!-- Proof Metrics Pills -->
        <div class="hero-metrics">
          <div class="metric-pill" v-for="stat in stats" :key="stat.label">
            <span class="metric-pill__val">{{ stat.value }}</span>
            <span class="metric-pill__lbl">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SERVICES BENTO GRID ============ -->
    <section id="services" class="services-section">
      <div class="section-shell">
        <div class="section-head">
          <h2 class="section-title">{{ $t('services.title') }}</h2>
          <p class="section-lead">{{ $t('services.lead') }}</p>
        </div>

        <div class="bento-grid">
          <!-- Bento 1: Large Featured Software Development -->
          <article class="bento-card bento-card--featured">
            <div class="bento-card__badge">{{ $t('services.featured_badge') }}</div>
            <div class="bento-card__header">
              <div class="bento-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 class="bento-card__title">{{ $t('services.s1_title') }}</h3>
            </div>
            <p class="bento-card__desc">
              {{ $t('services.s1_desc') }}
            </p>
            <div class="bento-tags">
              <span class="bento-tag">{{ $t('services.s1_tag1') }}</span>
              <span class="bento-tag">{{ $t('services.s1_tag2') }}</span>
              <span class="bento-tag">{{ $t('services.s1_tag3') }}</span>
              <span class="bento-tag">{{ $t('services.s1_tag4') }}</span>
            </div>
            <div class="bento-preview-code">
              <div class="code-header">
                <span class="code-dot"></span>
                <span class="code-dot"></span>
                <span class="code-dot"></span>
                <span class="code-title">architecture.config.ts</span>
              </div>
              <pre class="code-body"><code>// Al-Mehdar Tech Enterprise Tech Stack
export const enterpriseStack = {
  backend: ['Laravel', 'Spring Boot (Enterprise)'],
  frontend: ['Vue.js 3', 'Nuxt 4', 'Livewire'],
  architecture: 'Microservices & High-Availability',
  security: 'End-to-End Enterprise Encryption'
}</code></pre>
            </div>
          </article>

          <!-- Bento 2: Advanced Web Platforms -->
          <article class="bento-card">
            <div class="bento-card__header">
              <div class="bento-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 class="bento-card__title">{{ $t('services.s2_title') }}</h3>
            </div>
            <p class="bento-card__desc">
              {{ $t('services.s2_desc') }}
            </p>
            <div class="bento-tags">
              <span class="bento-tag">{{ $t('services.s2_tag1') }}</span>
              <span class="bento-tag">{{ $t('services.s2_tag2') }}</span>
              <span class="bento-tag">{{ $t('services.s2_tag3') }}</span>
              <span class="bento-tag">{{ $t('services.s2_tag4') }}</span>
            </div>
          </article>

          <!-- Bento 3: Web Applications -->
          <article class="bento-card">
            <div class="bento-card__header">
              <div class="bento-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 class="bento-card__title">{{ $t('services.s3_title') }}</h3>
            </div>
            <p class="bento-card__desc">
              {{ $t('services.s3_desc') }}
            </p>
            <div class="bento-tags">
              <span class="bento-tag">{{ $t('services.s3_tag1') }}</span>
              <span class="bento-tag">{{ $t('services.s3_tag2') }}</span>
              <span class="bento-tag">{{ $t('services.s3_tag3') }}</span>
              <span class="bento-tag">{{ $t('services.s3_tag4') }}</span>
            </div>
          </article>

          <!-- Bento 4: Data Solutions & BI -->
          <article class="bento-card">
            <div class="bento-card__header">
              <div class="bento-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                  <line x1="2" y1="20" x2="22" y2="20" />
                </svg>
              </div>
              <h3 class="bento-card__title">{{ $t('services.s4_title') }}</h3>
            </div>
            <p class="bento-card__desc">
              {{ $t('services.s4_desc') }}
            </p>
            <div class="bento-tags">
              <span class="bento-tag">{{ $t('services.s4_tag1') }}</span>
              <span class="bento-tag">{{ $t('services.s4_tag2') }}</span>
              <span class="bento-tag">{{ $t('services.s4_tag3') }}</span>
            </div>
          </article>

          <!-- Bento 5: UI/UX & Brand Identity -->
          <article class="bento-card">
            <div class="bento-card__header">
              <div class="bento-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h3 class="bento-card__title">{{ $t('services.s5_title') }}</h3>
            </div>
            <p class="bento-card__desc">
              {{ $t('services.s5_desc') }}
            </p>
            <div class="bento-tags">
              <span class="bento-tag">{{ $t('services.s5_tag1') }}</span>
              <span class="bento-tag">{{ $t('services.s5_tag2') }}</span>
              <span class="bento-tag">{{ $t('services.s5_tag3') }}</span>
            </div>
          </article>

          <!-- Bento 6: Technical Support & DevOps -->
          <article class="bento-card">
            <div class="bento-card__header">
              <div class="bento-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 class="bento-card__title">{{ $t('services.s6_title') }}</h3>
            </div>
            <p class="bento-card__desc">
              {{ $t('services.s6_desc') }}
            </p>
            <div class="bento-tags">
              <span class="bento-tag">{{ $t('services.s6_tag1') }}</span>
              <span class="bento-tag">{{ $t('services.s6_tag2') }}</span>
              <span class="bento-tag">{{ $t('services.s6_tag3') }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ Tech STACK ECOSYSTEM ============ -->
    <section id="Tech-stack" class="Tech-section">
      <div class="section-shell">
        <div class="section-head">
          <div class="Tech-badge">{{ $t('tech.badge') }}</div>
          <h2 class="section-title">{{ $t('tech.title') }}</h2>
          <p class="section-lead">{{ $t('tech.lead') }}</p>
        </div>

        <div class="Tech-grid">
          <!-- Laravel -->
          <article class="Tech-card">
            <div class="Tech-card__top">
              <div class="Tech-card__icon Tech-card__icon--laravel">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 6.908l-9.75-5.63a1.5 1.5 0 00-1.5 0L1.5 6.908A1.5 1.5 0 00.75 8.207v11.586a1.5 1.5 0 00.75 1.299l9.75 5.63a1.5 1.5 0 001.5 0l9.75-5.63a1.5 1.5 0 00.75-1.299V8.207a1.5 1.5 0 00-.75-1.299zM12 2.793l8.25 4.764-3.5 2.02-8.25-4.764L12 2.793zM2.25 8.764l8.25 4.764v8.943l-8.25-4.764V8.764zm10.5 13.707v-8.943l8.25-4.764v8.943l-8.25 4.764z"/>
                </svg>
              </div>
              <span class="Tech-card__tag">Backend Core</span>
            </div>
            <h3 class="Tech-card__name">Laravel</h3>
            <p class="Tech-card__desc">{{ $t('tech.laravel_desc') }}</p>
          </article>

          <!-- Spring Boot -->
          <article class="Tech-card">
            <div class="Tech-card__top">
              <div class="Tech-card__icon Tech-card__icon--spring">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75zm-6.84-2.88a1.2 1.2 0 00-1.68 0L9.42 12.93a1.2 1.2 0 000 1.68 1.2 1.2 0 001.68 0l3.81-3.81a1.2 1.2 0 000-1.68zm2.55-2.55a4.8 4.8 0 00-6.78 0L6.87 10.38a4.8 4.8 0 000 6.78 4.8 4.8 0 006.78 0l3.81-3.81a4.8 4.8 0 000-6.78z"/>
                </svg>
              </div>
              <span class="Tech-card__tag">Enterprise Microservices</span>
            </div>
            <h3 class="Tech-card__name">Spring Boot</h3>
            <p class="Tech-card__desc">{{ $t('tech.spring_desc') }}</p>
          </article>

          <!-- Vue.js -->
          <article class="Tech-card">
            <div class="Tech-card__top">
              <div class="Tech-card__icon Tech-card__icon--vue">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 3h3.5L12 14.5 18.5 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12.5 6.5 3z"/>
                </svg>
              </div>
              <span class="Tech-card__tag">Reactive UI</span>
            </div>
            <h3 class="Tech-card__name">Vue.js</h3>
            <p class="Tech-card__desc">{{ $t('tech.vue_desc') }}</p>
          </article>

          <!-- Nuxt -->
          <article class="Tech-card">
            <div class="Tech-card__top">
              <div class="Tech-card__icon Tech-card__icon--nuxt">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.95 3.32a2.4 2.4 0 0 1 4.1 0l8.47 14.47a2.4 2.4 0 0 1-2.05 3.61H2.53a2.4 2.4 0 0 1-2.05-3.61L10.95 3.32zm-.72 4.15L3.89 18.4h10.42L10.23 7.47zm5.55 3.7l-2.92 5.03h7.27l-4.35-7.03z"/>
                </svg>
              </div>
              <span class="Tech-card__tag">Full-Stack SSR & SEO</span>
            </div>
            <h3 class="Tech-card__name">Nuxt</h3>
            <p class="Tech-card__desc">{{ $t('tech.nuxt_desc') }}</p>
          </article>

          <!-- Livewire -->
          <article class="Tech-card">
            <div class="Tech-card__top">
              <div class="Tech-card__icon Tech-card__icon--livewire">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <span class="Tech-card__tag">Dynamic Real-time</span>
            </div>
            <h3 class="Tech-card__name">Livewire</h3>
            <p class="Tech-card__desc">{{ $t('tech.livewire_desc') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ WHY US SECTION ============ -->
    <section id="why-us" class="why-section">
      <div class="section-shell">
        <div class="why-grid">
          <div class="why-content">
            <h2 class="section-title">{{ $t('why_us.title') }}</h2>
            <p class="why-lead">
              {{ $t('why_us.lead') }}
            </p>

            <div class="value-pillars">
              <div class="pillar-item" v-for="(feature, idx) in whyUsFeatures" :key="feature.title">
                <div class="pillar-item__number">0{{ idx + 1 }}</div>
                <div class="pillar-item__body">
                  <h3 class="pillar-item__title">{{ feature.title }}</h3>
                  <p class="pillar-item__desc">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="why-matrix">
            <div class="matrix-card">
              <div class="matrix-card__glow"></div>
              
              <!-- Center Emblem -->
              <div class="matrix-center">
                <div class="brand-emblem brand-emblem--lg">
                  <img src="/logo.png" alt="Al-Mehdar Tech Emblem" class="brand-emblem__img" />
                  <div class="brand-emblem__glow"></div>
                </div>
                <span class="matrix-center__brand">Al-Mehdar Tech</span>
                <span class="matrix-center__tag">{{ $t('why_us.matrix_center_tag') }}</span>
              </div>

              <!-- Orbiting Capability Nodes -->
              <div class="matrix-nodes">
                <div class="matrix-node matrix-node--1">
                  <span class="matrix-node__dot"></span>
                  <span class="matrix-node__txt">{{ $t('why_us.node1') }}</span>
                </div>
                <div class="matrix-node matrix-node--2">
                  <span class="matrix-node__dot"></span>
                  <span class="matrix-node__txt">{{ $t('why_us.node2') }}</span>
                </div>
                <div class="matrix-node matrix-node--3">
                  <span class="matrix-node__dot"></span>
                  <span class="matrix-node__txt">{{ $t('why_us.node3') }}</span>
                </div>
                <div class="matrix-node matrix-node--4">
                  <span class="matrix-node__dot"></span>
                  <span class="matrix-node__txt">{{ $t('why_us.node4') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROCESS SECTION ============ -->
    <section id="process" class="process-section">
      <div class="section-shell">
        <div class="section-head">
          <h2 class="section-title">{{ $t('process.title') }}</h2>
          <p class="section-lead">{{ $t('process.lead') }}</p>
        </div>

        <div class="timeline-stepper">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="step-card"
          >
            <div class="step-card__top">
              <span class="step-card__num">0{{ index + 1 }}</span>
              <div class="step-card__icon" v-html="step.icon"></div>
            </div>
            <h3 class="step-card__title">{{ step.title }}</h3>
            <p class="step-card__desc">{{ step.desc }}</p>
            <div class="step-card__deliverable">
              <span class="deliverable-label">{{ $t('process.deliverable_lbl') }}</span>
              <span class="deliverable-value">{{ step.deliverable }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CTA BANNER ============ -->
    <section class="cta-banner">
      <div class="section-shell">
        <div class="cta-banner__card">
          <div class="cta-banner__glow"></div>
          <div class="cta-banner__content">
            <h2 class="cta-banner__title">{{ $t('cta.title') }}</h2>
            <p class="cta-banner__desc">
              {{ $t('cta.desc') }}
            </p>
            <div class="cta-banner__actions">
              <a href="#contact" class="btn btn--primary btn--lg" @click.prevent="scrollTo('contact')">
                <span>{{ $t('cta.action') }}</span>
                <svg class="btn-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CONTACT SECTION (COMMUNICATION HUB) ============ -->
    <section id="contact" class="contact-section">
      <div class="section-shell">
        <div class="section-head">
          <h2 class="section-title">{{ $t('contact.title') }}</h2>
          <p class="section-lead">{{ $t('contact.lead') }}</p>
        </div>

        <div class="channels-grid">
          <!-- Featured WhatsApp Card -->
          <article class="channel-card channel-card--featured">
            <div class="channel-card__badge">
              <span class="live-dot"></span>
              {{ $t('contact.whatsapp_status') }}
            </div>
            <div class="channel-card__header">
              <div class="channel-icon channel-icon--whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM17.83 16.07C17.59 16.75 16.63 17.32 16.09 17.4C15.6 17.47 14.97 17.5 12.83 16.62C10.1 15.49 8.35 12.72 8.21 12.54C8.07 12.35 7.1 11.06 7.1 9.72C7.1 8.38 7.8 7.72 8.05 7.45C8.29 7.17 8.58 7.1 8.76 7.1C8.94 7.1 9.12 7.11 9.28 7.11C9.45 7.11 9.68 7.05 9.91 7.59C10.15 8.16 10.72 9.57 10.79 9.71C10.86 9.85 10.91 10.01 10.81 10.19C10.72 10.38 10.67 10.49 10.53 10.65C10.39 10.82 10.23 11.02 10.1 11.15C9.96 11.29 9.81 11.44 9.98 11.73C10.15 12.02 10.72 12.95 11.57 13.71C12.66 14.68 13.58 14.98 13.87 15.12C14.16 15.26 14.33 15.24 14.5 15.05C14.67 14.86 15.24 14.19 15.44 13.9C15.64 13.61 15.84 13.66 16.11 13.76C16.39 13.86 17.9 14.61 18.21 14.76C18.52 14.91 18.73 14.98 18.8 15.1C18.87 15.22 18.87 15.56 18.63 16.24L17.83 16.07Z"/>
                </svg>
              </div>
              <div class="channel-card__title-wrap">
                <h3 class="channel-card__name">{{ $t('contact.whatsapp_name') }}</h3>
                <span class="channel-card__meta">+967 783 580 777</span>
              </div>
            </div>
            <p class="channel-card__desc">
              {{ $t('contact.whatsapp_desc') }}
            </p>
            <div class="channel-card__action">
              <a
                href="https://wa.me/967783580777"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--whatsapp btn--full"
              >
                <span>{{ $t('contact.whatsapp_btn') }}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </article>

          <!-- Instagram Card -->
          <article class="channel-card">
            <div class="channel-card__header">
              <div class="channel-icon channel-icon--instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.668.014-4.948.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div class="channel-card__title-wrap">
                <h3 class="channel-card__name">{{ $t('contact.instagram_name') }}</h3>
                <span class="channel-card__meta">@almehdarTech</span>
              </div>
            </div>
            <p class="channel-card__desc">
              {{ $t('contact.instagram_desc') }}
            </p>
            <div class="channel-card__action">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--secondary btn--full"
              >
                <span>{{ $t('contact.instagram_btn') }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </article>

          <!-- Facebook Card -->
          <article class="channel-card">
            <div class="channel-card__header">
              <div class="channel-icon channel-icon--facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div class="channel-card__title-wrap">
                <h3 class="channel-card__name">{{ $t('contact.facebook_name') }}</h3>
                <span class="channel-card__meta">Al-Mehdar Tech</span>
              </div>
            </div>
            <p class="channel-card__desc">
              {{ $t('contact.facebook_desc') }}
            </p>
            <div class="channel-card__action">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--secondary btn--full"
              >
                <span>{{ $t('contact.facebook_btn') }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </article>

          <!-- Email Card -->
          <article class="channel-card">
            <div class="channel-card__header">
              <div class="channel-icon channel-icon--email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="channel-card__title-wrap">
                <h3 class="channel-card__name">{{ $t('contact.email_name') }}</h3>
                <span class="channel-card__meta">info@al-mehdarTech.com</span>
              </div>
            </div>
            <p class="channel-card__desc">
              {{ $t('contact.email_desc') }}
            </p>
            <div class="channel-card__action">
              <a
                href="mailto:info@al-mehdarTech.com"
                class="btn btn--secondary btn--full"
              >
                <span>{{ $t('contact.email_btn') }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Direct Phone Card -->
          <article class="channel-card">
            <div class="channel-card__header">
              <div class="channel-icon channel-icon--phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="channel-card__title-wrap">
                <h3 class="channel-card__name">{{ $t('contact.phone_name') }}</h3>
                <span class="channel-card__meta">+967 783 580 777</span>
              </div>
            </div>
            <p class="channel-card__desc">
              {{ $t('contact.phone_desc') }}
            </p>
            <div class="channel-card__action">
              <a
                href="tel:+967783580777"
                class="btn btn--secondary btn--full"
              >
                <span>{{ $t('contact.phone_btn') }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer id="footer" class="site-footer">
      <div class="section-shell">
        <div class="footer-layout">
          <div class="footer-brand-col">
            <div class="brand-emblem">
              <img src="/logo.png" alt="Al-Mehdar Tech" class="brand-emblem__img" />
              <div class="brand-emblem__glow"></div>
            </div>
            <div class="footer-brand-info">
              <span class="footer-brand-title">{{ $t('footer.brand_title') }}</span>
              <p class="footer-brand-desc">
                {{ $t('footer.brand_desc') }}
              </p>
            </div>
          </div>

          <div class="footer-links-col">
            <h3 class="footer-heading">{{ $t('footer.quick_links') }}</h3>
            <ul class="footer-nav-list">
              <li v-for="link in navLinks" :key="link.id">
                <a :href="'#' + link.id" @click.prevent="scrollTo(link.id)">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-links-col">
            <h3 class="footer-heading">{{ $t('footer.core_services') }}</h3>
            <ul class="footer-nav-list">
              <li>
                <a href="#services" @click.prevent="scrollTo('services')">{{ $t('services.s1_title') }}</a>
              </li>
              <li>
                <a href="#services" @click.prevent="scrollTo('services')">{{ $t('services.s2_title') }}</a>
              </li>
              <li>
                <a href="#services" @click.prevent="scrollTo('services')">{{ $t('services.s3_title') }}</a>
              </li>
              <li>
                <a href="#services" @click.prevent="scrollTo('services')">{{ $t('services.s4_title') }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom-bar">
          <p class="copyright-text">
            © {{ new Date().getFullYear() }} Al-Mehdar Tech. {{ $t('footer.rights') }}
          </p>
          <div class="footer-tagline">
            <span>WEB • DATA • TECHNOLOGY</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- ============ FLOATING SCROLL TO TOP ============ -->
    <button
      id="scroll-to-top"
      class="scroll-top-btn"
      :class="{ 'scroll-top-btn--visible': showScrollTop }"
      @click="scrollToTop"
      :aria-label="$t('footer.scroll_top_aria')"
      :title="$t('footer.scroll_top_title')"
    >
      <span class="scroll-top-btn__glow"></span>
      <svg class="scroll-top-btn__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale, setLocale, t } = useI18n()

// ─── State & Navigation ───
const isScrolled = ref(false)
const showScrollTop = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')

const navLinks = computed(() => [
  { id: 'hero', label: t('nav.hero') },
  { id: 'services', label: t('nav.services') },
  { id: 'Tech-stack', label: t('nav.tech') },
  { id: 'why-us', label: t('nav.why_us') },
  { id: 'process', label: t('nav.process') },
  { id: 'contact', label: t('nav.contact') },
])

function toggleLocale() {
  const nextLocale = locale.value === 'ar' ? 'en' : 'ar'
  setLocale(nextLocale)
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset
  isScrolled.value = scrollY > 40
  showScrollTop.value = scrollY > 300

  const sections = ['hero', 'services', 'Tech-stack', 'why-us', 'process', 'contact']
  for (const s of sections) {
    const el = document.getElementById(s)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 200 && rect.bottom >= 200) {
        activeSection.value = s
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ─── Stats ───
const stats = computed(() => [
  { value: t('hero.stat1_val'), label: t('hero.stat1_lbl') },
  { value: t('hero.stat2_val'), label: t('hero.stat2_lbl') },
  { value: t('hero.stat3_val'), label: t('hero.stat3_lbl') },
])

// ─── Why Us Features ───
const whyUsFeatures = computed(() => [
  {
    title: t('why_us.f1_title'),
    desc: t('why_us.f1_desc'),
  },
  {
    title: t('why_us.f2_title'),
    desc: t('why_us.f2_desc'),
  },
  {
    title: t('why_us.f3_title'),
    desc: t('why_us.f3_desc'),
  },
  {
    title: t('why_us.f4_title'),
    desc: t('why_us.f4_desc'),
  },
])

// ─── Process Steps ───
const processSteps = computed(() => [
  {
    title: t('process.s1_title'),
    desc: t('process.s1_desc'),
    deliverable: t('process.s1_del'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  },
  {
    title: t('process.s2_title'),
    desc: t('process.s2_desc'),
    deliverable: t('process.s2_del'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>',
  },
  {
    title: t('process.s3_title'),
    desc: t('process.s3_desc'),
    deliverable: t('process.s3_del'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  },
  {
    title: t('process.s4_title'),
    desc: t('process.s4_desc'),
    deliverable: t('process.s4_del'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  },
])
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
   SITE WRAPPER & AMBIENT ATMOSPHERE
   ═══════════════════════════════════════════════════════ */
.site-wrapper {
  position: relative;
  min-height: 100vh;
  background-color: var(--brand-deep);
  color: var(--text-primary);
  overflow-x: hidden;
}

.ambient-glow {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(140px);
  opacity: 0.28;
}

.ambient-glow--primary {
  top: -150px;
  right: -100px;
  width: 650px;
  height: 650px;
  background: radial-gradient(circle, var(--brand-primary) 0%, transparent 70%);
  animation: ambient-float-1 18s ease-in-out infinite alternate;
}

.ambient-glow--secondary {
  top: 45%;
  left: -200px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, var(--brand-royal, #130D3A) 0%, transparent 70%);
  animation: ambient-float-2 22s ease-in-out infinite alternate;
}

@keyframes ambient-float-1 {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-40px, 50px); }
}

@keyframes ambient-float-2 {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, -40px); }
}

.section-shell {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.75rem;
  position: relative;
  z-index: 1;
}

.section-head {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3.5rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-wrap: balance;
}

.section-lead {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════════════
   BRAND EMBLEM & LOGO INTEGRATION
   ═══════════════════════════════════════════════════════ */
.brand-emblem {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 244, 255, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 16px rgba(124, 77, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
}

.brand-emblem--lg {
  width: 90px;
  height: 90px;
  border-radius: 22px;
  padding: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 28px rgba(124, 77, 255, 0.45);
}

.brand-emblem__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.brand-emblem__glow {
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--brand-electric), transparent);
  opacity: 0.35;
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════════
   NAVBAR & LANGUAGE SWITCHER
   ═══════════════════════════════════════════════════════ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.1rem 0;
  transition: all 0.3s ease;
}

.navbar--scrolled {
  padding: 0.75rem 0;
  background: var(--brand-surface-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--brand-border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.navbar__container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand-wrap {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  color: inherit;
}

.navbar__brand-wrap:hover .brand-emblem {
  transform: scale(1.04);
  box-shadow: 0 6px 24px rgba(124, 77, 255, 0.45);
}

.brand-meta {
  display: flex;
  flex-direction: column;
}

.brand-meta__title {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: var(--text-primary);
  line-height: 1.2;
}

.brand-meta__sub {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--text-muted);
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.nav-item {
  padding: 0.45rem 0.85rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  transition: color 0.25s ease, background-color 0.25s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.nav-item:hover,
.nav-item--active {
  color: var(--text-primary);
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-inline-start: 0.5rem;
  padding: 0.48rem 1.15rem;
  background: var(--brand-primary);
  color: #FFFFFF;
  font-size: 0.88rem;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(88, 36, 229, 0.35);
  white-space: nowrap;
  flex-shrink: 0;
}

.nav-cta:hover {
  background: var(--brand-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(109, 59, 255, 0.45);
}

.nav-cta__icon {
  transition: transform 0.2s ease;
}

.nav-cta:hover .nav-cta__icon {
  transform: translateX(-3px);
}

[dir="ltr"] .nav-cta:hover .nav-cta__icon {
  transform: translateX(3px) scaleX(-1);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

/* Language Switcher */
.lang-switch-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.85rem;
  font-size: 0.825rem;
  font-weight: 700;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--brand-border);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  white-space: nowrap;
  flex-shrink: 0;
}

.lang-switch-btn:hover {
  background: rgba(124, 77, 255, 0.18);
  border-color: var(--brand-border-hover);
  box-shadow: 0 0 16px rgba(124, 77, 255, 0.35);
  color: #FFFFFF;
  transform: translateY(-1px);
}

.lang-switch-btn__icon {
  color: var(--brand-glow);
  transition: transform 0.3s ease;
}

.lang-switch-btn:hover .lang-switch-btn__icon {
  transform: rotate(30deg);
}

.lang-switch-btn--mobile {
  display: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  gap: 5px;
}

.menu-toggle__bar {
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
}

/* Direction aware icon rotation */
[dir="ltr"] .btn-arrow-icon {
  transform: scaleX(-1);
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */
.hero-section {
  position: relative;
  padding: 10.5rem 0 6.5rem;
  text-align: center;
  z-index: 1;
}

.hero-section__container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.75rem;
}

.hero-status {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.4rem 1.15rem;
  border-radius: 999px;
  background: rgba(88, 36, 229, 0.12);
  border: 1px solid rgba(124, 77, 255, 0.25);
  margin-bottom: 2rem;
}

.hero-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--success);
  box-shadow: 0 0 10px var(--success);
  animation: pulse-glow 2.5s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 8px var(--success);
  }
  50% {
    transform: scale(1.3);
    opacity: 0.85;
    box-shadow: 0 0 16px var(--success);
  }
}

.hero-status__text {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-ice);
}

.hero-title {
  font-size: 3.4rem;
  font-weight: 900;
  line-height: 1.25;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-wrap: balance;
}

.hero-title__highlight {
  display: block;
  color: var(--brand-glow);
}

.hero-desc {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 780px;
  margin: 0 auto 2.75rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.9rem 2rem;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
  font-family: inherit;
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: scale(0.97);
}

.btn--primary {
  background: var(--brand-primary);
  color: #FFFFFF;
  box-shadow: 0 6px 24px rgba(88, 36, 229, 0.4);
}

.btn--primary:hover {
  background: var(--brand-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 32px rgba(109, 59, 255, 0.5);
}

.btn--secondary {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-primary);
  border: 1px solid var(--brand-border);
  backdrop-filter: blur(10px);
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--brand-border-hover);
  transform: translateY(-2px);
}

.btn--lg {
  padding: 1.1rem 2.5rem;
  font-size: 1.15rem;
}

.btn--full {
  width: 100%;
}

.hero-metrics {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.metric-pill {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.75rem;
  background: var(--brand-surface-glass);
  border: 1px solid var(--brand-border);
  border-radius: 999px;
  backdrop-filter: blur(12px);
}

.metric-pill__val {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--brand-glow);
  font-family: 'Outfit', sans-serif;
}

.metric-pill__lbl {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
}

/* ═══════════════════════════════════════════════════════
   Tech STACK ECOSYSTEM SECTION
   ═══════════════════════════════════════════════════════ */
.Tech-section {
  padding: 6rem 0;
  position: relative;
  z-index: 1;
}

.Tech-badge {
  display: inline-block;
  padding: 0.35rem 1.1rem;
  border-radius: 999px;
  background: rgba(124, 77, 255, 0.14);
  border: 1px solid rgba(124, 77, 255, 0.3);
  font-size: 0.825rem;
  font-weight: 700;
  color: var(--brand-glow);
  margin-bottom: 1.25rem;
}

.Tech-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
}

.Tech-card {
  background: var(--brand-surface);
  border: 1px solid var(--brand-border);
  border-radius: 20px;
  padding: 1.75rem 1.35rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.Tech-card:hover {
  transform: translateY(-4px);
  border-color: var(--brand-border-hover);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.4);
}

.Tech-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 0.5rem;
}

.Tech-card__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 10px;
}

.Tech-card__icon svg {
  width: 100%;
  height: 100%;
}

.Tech-card__icon--laravel {
  background: rgba(255, 45, 32, 0.12);
  color: #FF4438;
  border: 1px solid rgba(255, 45, 32, 0.25);
}

.Tech-card__icon--spring {
  background: rgba(109, 179, 63, 0.12);
  color: #78C949;
  border: 1px solid rgba(109, 179, 63, 0.25);
}

.Tech-card__icon--vue {
  background: rgba(66, 184, 131, 0.12);
  color: #42D392;
  border: 1px solid rgba(66, 184, 131, 0.25);
}

.Tech-card__icon--nuxt {
  background: rgba(0, 220, 130, 0.12);
  color: #00DC82;
  border: 1px solid rgba(0, 220, 130, 0.25);
}

.Tech-card__icon--livewire {
  background: rgba(251, 112, 169, 0.12);
  color: #FB70A9;
  border: 1px solid rgba(251, 112, 169, 0.25);
}

.Tech-card__tag {
  font-size: 0.675rem;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  white-space: nowrap;
}

.Tech-card__name {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Outfit', 'Cairo', sans-serif;
}

.Tech-card__desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ═══════════════════════════════════════════════════════
   BENTO GRID SERVICES SECTION
   ═══════════════════════════════════════════════════════ */
.services-section {
  padding: 6rem 0;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.bento-card {
  background: var(--brand-surface);
  border: 1px solid var(--brand-border);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}

.bento-card:hover {
  border-color: var(--brand-border-hover);
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
}

.bento-card--featured {
  grid-column: span 2;
  background: linear-gradient(145deg, var(--brand-surface) 0%, var(--brand-surface-elevated) 100%);
  border-color: rgba(124, 77, 255, 0.28);
}

.bento-card__badge {
  align-self: flex-start;
  padding: 0.3rem 0.85rem;
  border-radius: 6px;
  background: rgba(124, 77, 255, 0.18);
  border: 1px solid rgba(124, 77, 255, 0.35);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--brand-glow);
  margin-bottom: 1.25rem;
}

.bento-card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.bento-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(88, 36, 229, 0.15);
  border: 1px solid rgba(124, 77, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-glow);
  flex-shrink: 0;
}

.bento-icon svg {
  width: 24px;
  height: 24px;
}

.bento-card__title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.3;
}

.bento-card__desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.bento-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.bento-tag {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-secondary);
}

.bento-preview-code {
  margin-top: 1.5rem;
  background: var(--brand-deep);
  border: 1px solid var(--brand-border);
  border-radius: 12px;
  overflow: hidden;
  direction: ltr;
  text-align: left;
}

.code-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid var(--brand-border);
}

.code-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.code-title {
  margin-left: 0.5rem;
  font-size: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: var(--text-muted);
}

.code-body {
  padding: 1rem;
  font-size: 0.825rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: var(--brand-ice);
  line-height: 1.6;
  overflow-x: auto;
}

/* ═══════════════════════════════════════════════════════
   WHY US SECTION
   ═══════════════════════════════════════════════════════ */
.why-section {
  padding: 6.5rem 0;
  background: linear-gradient(180deg, transparent 0%, rgba(19, 13, 58, 0.3) 100%);
}

.why-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.why-lead {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 2.5rem;
}

.value-pillars {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.pillar-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.pillar-item__number {
  font-size: 1.1rem;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  color: var(--brand-glow);
  padding: 0.4rem 0.75rem;
  background: rgba(124, 77, 255, 0.12);
  border: 1px solid rgba(124, 77, 255, 0.22);
  border-radius: 8px;
  line-height: 1;
}

.pillar-item__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.pillar-item__desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Matrix Card */
.matrix-card {
  position: relative;
  background: var(--brand-surface);
  border: 1px solid var(--brand-border);
  border-radius: 24px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.matrix-card__glow {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--brand-primary) 0%, transparent 70%);
  filter: blur(60px);
  opacity: 0.3;
  pointer-events: none;
}

.matrix-center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
}

.matrix-center__brand {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-top: 1rem;
  letter-spacing: -0.3px;
}

.matrix-center__tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--brand-glow);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.matrix-nodes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 420px;
  position: relative;
  z-index: 2;
}

.matrix-node {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--brand-border);
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.matrix-node__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand-glow);
  box-shadow: 0 0 8px var(--brand-glow);
}

/* ═══════════════════════════════════════════════════════
   PROCESS SECTION
   ═══════════════════════════════════════════════════════ */
.process-section {
  padding: 6.5rem 0;
}

.timeline-stepper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.step-card {
  background: var(--brand-surface);
  border: 1px solid var(--brand-border);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}

.step-card:hover {
  border-color: var(--brand-border-hover);
  transform: translateY(-3px);
}

.step-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.step-card__num {
  font-size: 1.5rem;
  font-weight: 900;
  font-family: 'Outfit', sans-serif;
  color: var(--brand-glow);
}

.step-card__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(88, 36, 229, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-glow);
}

.step-card__icon svg {
  width: 20px;
  height: 20px;
}

.step-card__title {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.65rem;
  line-height: 1.35;
}

.step-card__desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.step-card__deliverable {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--brand-border);
  font-size: 0.8rem;
}

.deliverable-label {
  display: block;
  font-weight: 700;
  color: var(--brand-glow);
  margin-bottom: 0.2rem;
}

.deliverable-value {
  color: var(--text-muted);
}

/* ═══════════════════════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════════════════════ */
.cta-banner {
  padding: 4rem 0 6rem;
}

.cta-banner__card {
  position: relative;
  background: linear-gradient(135deg, var(--brand-surface) 0%, var(--brand-surface-elevated) 100%);
  border: 1px solid rgba(124, 77, 255, 0.3);
  border-radius: 28px;
  padding: 4.5rem 3rem;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.cta-banner__glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 350px;
  background: radial-gradient(circle, var(--brand-primary) 0%, transparent 70%);
  filter: blur(80px);
  opacity: 0.4;
  pointer-events: none;
}

.cta-banner__content {
  position: relative;
  z-index: 2;
  max-width: 680px;
  margin: 0 auto;
}

.cta-banner__title {
  font-size: 2.35rem;
  font-weight: 900;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  line-height: 1.3;
}

.cta-banner__desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

/* ═══════════════════════════════════════════════════════
   CONTACT SECTION (COMMUNICATION HUB)
   ═══════════════════════════════════════════════════════ */
.contact-section {
  padding: 6rem 0 7.5rem;
}

.channels-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.channel-card {
  background: var(--brand-surface);
  border: 1px solid var(--brand-border);
  border-radius: 20px;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.channel-card:hover {
  border-color: var(--brand-border-hover);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.channel-card--featured {
  grid-column: span 2;
  background: linear-gradient(145deg, var(--brand-surface) 0%, var(--brand-surface-elevated) 100%);
  border-color: rgba(37, 211, 102, 0.35);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35), 0 0 24px rgba(37, 211, 102, 0.12);
}

.channel-card--featured:hover {
  border-color: rgba(37, 211, 102, 0.55);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.45), 0 0 32px rgba(37, 211, 102, 0.2);
}

.channel-card__badge {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(37, 211, 102, 0.12);
  border: 1px solid rgba(37, 211, 102, 0.3);
  font-size: 0.8rem;
  font-weight: 700;
  color: #25D366;
  margin-bottom: 1.25rem;
}

.live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #25D366;
  box-shadow: 0 0 8px #25D366;
  animation: pulse-glow 2.5s ease-in-out infinite;
}

.channel-card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.channel-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.channel-icon svg {
  width: 26px;
  height: 26px;
}

.channel-icon--whatsapp {
  background: rgba(37, 211, 102, 0.15);
  border: 1px solid rgba(37, 211, 102, 0.35);
  color: #25D366;
}

.channel-icon--instagram {
  background: rgba(225, 48, 108, 0.15);
  border: 1px solid rgba(225, 48, 108, 0.35);
  color: #E1306C;
}

.channel-icon--facebook {
  background: rgba(24, 119, 242, 0.15);
  border: 1px solid rgba(24, 119, 242, 0.35);
  color: #1877F2;
}

.channel-icon--email,
.channel-icon--phone {
  background: rgba(88, 36, 229, 0.15);
  border: 1px solid rgba(124, 77, 255, 0.3);
  color: var(--brand-glow);
}

.channel-card__title-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.channel-card__name {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.25;
}

.channel-card__meta {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  font-family: 'Outfit', sans-serif;
  direction: ltr;
  text-align: start;
}

.channel-card__desc {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.75rem;
}

.channel-card__action {
  margin-top: auto;
}

.btn--whatsapp {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: #FFFFFF;
  font-weight: 800;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn--whatsapp:hover {
  background: linear-gradient(135deg, #2ae06e 0%, #149c8c 100%);
  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.5);
  transform: translateY(-2px);
}

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */
.site-footer {
  border-top: 1px solid var(--brand-border);
  background: var(--brand-deep);
  padding: 4.5rem 0 2rem;
}

.footer-layout {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.footer-brand-col {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.footer-brand-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-primary);
  display: block;
  margin-bottom: 0.5rem;
}

.footer-brand-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 380px;
}

.footer-heading {
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.footer-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav-list a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-nav-list a:hover {
  color: var(--brand-glow);
  transform: translateX(-3px);
}

[dir="ltr"] .footer-nav-list a:hover {
  transform: translateX(3px);
}

.footer-bottom-bar {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright-text {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-tagline {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--text-muted);
  font-family: 'Outfit', sans-serif;
}

/* ═══════════════════════════════════════════════════════
   RESPONSIVE DESIGN (MOBILE & TABLET BREAKPOINTS)
   ═══════════════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.75rem;
  }

  .Tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .bento-card--featured {
    grid-column: span 2;
  }
  
  .why-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .timeline-stepper {
    grid-template-columns: repeat(2, 1fr);
  }

  .channels-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .channel-card--featured {
    grid-column: span 2;
  }

  .footer-layout {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .navbar__nav {
    display: none;
    position: fixed;
    top: 70px;
    left: 1.5rem;
    right: 1.5rem;
    background: var(--brand-surface-elevated);
    border: 1px solid var(--brand-border);
    border-radius: 16px;
    padding: 1.5rem;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }

  .navbar__nav--active {
    display: flex;
  }

  .lang-switch-btn--desktop {
    display: none;
  }

  .lang-switch-btn--mobile {
    display: inline-flex;
    width: 100%;
    justify-content: center;
    padding: 0.75rem;
  }

  .nav-cta {
    margin-inline-start: 0;
    width: 100%;
    justify-content: center;
  }

  .menu-toggle {
    display: flex;
  }

  .hero-title {
    font-size: 2.15rem;
  }

  .hero-desc {
    font-size: 1rem;
  }

  .Tech-grid {
    grid-template-columns: 1fr;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-card--featured {
    grid-column: span 1;
  }

  .timeline-stepper {
    grid-template-columns: 1fr;
  }

  .channels-grid {
    grid-template-columns: 1fr;
  }

  .channel-card--featured {
    grid-column: span 1;
  }

  .footer-layout {
    grid-template-columns: 1fr;
  }

  .scroll-top-btn {
    bottom: 1.5rem;
    right: 1.25rem;
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
}

/* ═══════════════════════════════════════════════════════
   FLOATING SCROLL TO TOP BUTTON
   ═══════════════════════════════════════════════════════ */
.scroll-top-btn {
  position: fixed;
  bottom: 2.25rem;
  right: 2.25rem;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(88, 36, 229, 0.9) 0%, rgba(35, 0, 124, 0.95) 100%);
  border: 1px solid rgba(158, 123, 255, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 95;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(124, 77, 255, 0.35);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.85);
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              visibility 0.3s ease,
              background 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
}

.scroll-top-btn--visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.scroll-top-btn:hover {
  background: linear-gradient(135deg, rgba(109, 59, 255, 1) 0%, rgba(88, 36, 229, 1) 100%);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-4px) scale(1.06);
  box-shadow: 0 12px 30px rgba(88, 36, 229, 0.55), 0 0 24px rgba(158, 123, 255, 0.5);
}

.scroll-top-btn:active {
  transform: translateY(-1px) scale(0.95);
}

.scroll-top-btn__glow {
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--brand-electric), transparent);
  opacity: 0.4;
  filter: blur(4px);
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.scroll-top-btn:hover .scroll-top-btn__glow {
  opacity: 0.75;
}

.scroll-top-btn__icon {
  position: relative;
  z-index: 2;
  transition: transform 0.25s ease;
}

.scroll-top-btn:hover .scroll-top-btn__icon {
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
