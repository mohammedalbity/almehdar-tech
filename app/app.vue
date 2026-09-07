<template>
  <div id="app-root" :dir="currentDir" :lang="locale" :class="`lang-${locale}`">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { locale, t } = useI18n()

const currentDir = computed(() => {
  return locale.value === 'ar' ? 'rtl' : 'ltr'
})

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: currentDir.value
  },
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:type', content: 'website' },
    { name: 'theme-color', content: '#070318' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' },
  ]
}))
</script>

<style>
:root {
  /* Logo-Anchored Royal Ultramarine Palette */
  --brand-logo: #23007C;
  --brand-deep: #070318;
  --brand-bg: #0B0626;
  --brand-surface: #130D3A;
  --brand-surface-elevated: #1C134E;
  --brand-surface-glass: rgba(19, 13, 58, 0.75);
  --brand-border: rgba(124, 77, 255, 0.16);
  --brand-border-hover: rgba(158, 123, 255, 0.38);
  
  /* Primary & Luminous Accents */
  --brand-primary: #5824E5;
  --brand-primary-hover: #6D3BFF;
  --brand-electric: #7C4DFF;
  --brand-glow: #9E7BFF;
  --brand-vibrant: #4917D9;
  --brand-ice: #EAEFFE;
  --brand-ambient: rgba(88, 36, 229, 0.22);
  
  /* High-Contrast Typography */
  --text-primary: #F8F9FF;
  --text-secondary: #B4B9DE;
  --text-muted: #7E84B5;
  
  /* Status & Functional */
  --success: #10B981;
  --success-glow: rgba(16, 185, 129, 0.25);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-color: var(--brand-deep);
}

body {
  font-family: 'Cairo', system-ui, -apple-system, sans-serif;
  background-color: var(--brand-deep);
  color: var(--text-primary);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

/* English Typography Harmony */
[dir="ltr"] body,
.lang-en {
  font-family: 'Plus Jakarta Sans', 'Outfit', system-ui, -apple-system, sans-serif;
  letter-spacing: -0.012em;
  font-size: 0.96rem;
}

[dir="ltr"] .hero-title {
  font-size: 3.1rem;
  letter-spacing: -0.03em;
  line-height: 1.22;
}

[dir="ltr"] .hero-desc {
  font-size: 1.12rem;
  line-height: 1.75;
}

[dir="ltr"] .section-title {
  font-size: 2.15rem;
  letter-spacing: -0.025em;
  line-height: 1.28;
}

[dir="ltr"] .section-lead,
[dir="ltr"] .why-lead {
  font-size: 1.05rem;
  line-height: 1.7;
}

[dir="ltr"] .bento-card__title {
  font-size: 1.22rem;
  letter-spacing: -0.02em;
}

[dir="ltr"] .bento-card__desc {
  font-size: 0.92rem;
  line-height: 1.65;
}

[dir="ltr"] .Tech-card__name {
  font-size: 1.15rem;
}

[dir="ltr"] .Tech-card__desc {
  font-size: 0.85rem;
  line-height: 1.55;
}

[dir="ltr"] .step-card__title {
  font-size: 1.1rem;
}

[dir="ltr"] .step-card__desc {
  font-size: 0.875rem;
}

[dir="ltr"] .channel-card__name {
  font-size: 1.15rem;
}

[dir="ltr"] .channel-card__desc {
  font-size: 0.9rem;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 9px;
}
::-webkit-scrollbar-track {
  background: var(--brand-deep);
}
::-webkit-scrollbar-thumb {
  background: var(--brand-surface-elevated);
  border: 2px solid var(--brand-deep);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--brand-primary);
}

/* Selection & Caret */
::selection {
  background: rgba(124, 77, 255, 0.35);
  color: #FFFFFF;
}

input, textarea, select {
  caret-color: var(--brand-glow);
}
</style>
