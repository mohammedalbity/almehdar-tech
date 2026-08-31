<template>
  <div id="app-root" dir="rtl" lang="ar">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  },
  title: 'Al-Mehdar Tec | حلول تقنية احترافية',
  meta: [
    { name: 'description', content: 'Al-Mehdar Tec - نحوّل أفكارك إلى حلول رقمية احترافية. تصميم مواقع، متاجر إلكترونية، حلول بيانات، وتطوير برمجيات مخصصة.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: 'Al-Mehdar Tec | حلول تقنية احترافية' },
    { property: 'og:description', content: 'نحوّل أفكارك إلى حلول رقمية احترافية' },
    { property: 'og:type', content: 'website' },
    { name: 'theme-color', content: '#0a0f2e' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
  ]
})
</script>

<style>
:root {
  --navy-deep: #0a0f2e;
  --navy: #141b3d;
  --navy-light: #1e2a5a;
  --accent-blue: #4f7cff;
  --accent-cyan: #00d4ff;
  --accent-purple: #7c4dff;
  --accent-gradient: linear-gradient(135deg, #4f7cff 0%, #7c4dff 50%, #00d4ff 100%);
  --glass-bg: rgba(20, 27, 61, 0.6);
  --glass-border: rgba(79, 124, 255, 0.15);
  --text-primary: #f0f4ff;
  --text-secondary: #a0b0d0;
  --text-muted: #6b7fa0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'Cairo', 'Inter', sans-serif;
  background-color: var(--navy-deep);
  color: var(--text-primary);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--navy-deep);
}
::-webkit-scrollbar-thumb {
  background: var(--navy-light);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--accent-blue);
}

/* Selection colors */
::selection {
  background: rgba(79, 124, 255, 0.3);
  color: white;
}
</style>
