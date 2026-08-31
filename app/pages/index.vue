<template>
  <div id="landing-page">
    <!-- ============ NAVBAR ============ -->
    <nav id="navbar" :class="['navbar', { 'navbar--scrolled': isScrolled }]">
      <div class="navbar__container">
        <a href="#hero" class="navbar__logo" @click.prevent="scrollTo('hero')">
          <div class="navbar__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="url(#logo-gradient)" />
              <path d="M10 28V12L16 22L20 14L24 22L30 12V28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="20" cy="30" r="2" fill="rgba(255,255,255,0.6)" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stop-color="#4f7cff" />
                  <stop offset="100%" stop-color="#7c4dff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="navbar__logo-text">
            <span class="navbar__brand">Al-Mehdar Tec</span>
            <span class="navbar__tagline">WEB . DATA . TECHNOLOGY</span>
          </div>
        </a>

        <div :class="['navbar__links', { 'navbar__links--open': menuOpen }]">
          <a v-for="link in navLinks" :key="link.id" :href="'#' + link.id" class="navbar__link" @click.prevent="scrollTo(link.id); menuOpen = false">
            {{ link.label }}
          </a>
          <a href="#contact" class="navbar__cta" @click.prevent="scrollTo('contact'); menuOpen = false">
            تواصل معنا
          </a>
        </div>

        <button class="navbar__hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span :class="['navbar__hamburger-line', { active: menuOpen }]"></span>
          <span :class="['navbar__hamburger-line', { active: menuOpen }]"></span>
          <span :class="['navbar__hamburger-line', { active: menuOpen }]"></span>
        </button>
      </div>
    </nav>

    <!-- ============ HERO SECTION ============ -->
    <section id="hero" class="hero">
      <div class="hero__bg">
        <img src="/hero-bg.jpg" alt="" class="hero__bg-image" />
        <div class="hero__bg-overlay"></div>
        <div class="hero__particles">
          <div v-for="n in 20" :key="n" class="hero__particle" :style="particleStyle(n)"></div>
        </div>
      </div>
      <div class="hero__content">
        <div class="hero__badge" v-scroll-reveal>
          <span class="hero__badge-dot"></span>
          حلول تقنية مبتكرة
        </div>
        <h1 class="hero__title">
          <span class="typewriter" ref="typewriterTitle">{{ displayedTitle }}<span class="typewriter__cursor" v-if="showTitleCursor">|</span></span>
        </h1>
        <p class="hero__subtitle" :class="{ 'hero__subtitle--visible': subtitleVisible }">
          <span class="typewriter">{{ displayedSubtitle }}<span class="typewriter__cursor" v-if="showSubtitleCursor">|</span></span>
        </p>
        <div class="hero__actions" v-scroll-reveal>
          <a href="#services" class="btn btn--primary" @click.prevent="scrollTo('services')">
            <span>استكشف خدماتنا</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </a>
          <a href="#contact" class="btn btn--outline" @click.prevent="scrollTo('contact')">
            <span>ابدأ مشروعك</span>
          </a>
        </div>
        <div class="hero__stats" v-scroll-reveal>
          <div class="hero__stat" v-for="stat in stats" :key="stat.label">
            <span class="hero__stat-number">{{ stat.value }}</span>
            <span class="hero__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator" @click="scrollTo('services')">
        <div class="hero__scroll-mouse">
          <div class="hero__scroll-wheel"></div>
        </div>
        <span>اكتشف المزيد</span>
      </div>
    </section>

    <!-- ============ SERVICES SECTION ============ -->
    <section id="services" class="services">
      <div class="section__container">
        <div class="section__header" v-scroll-reveal>
          <span class="section__label">خدماتنا</span>
          <h2 class="section__title">حلول تقنية <span class="gradient-text">متكاملة</span></h2>
          <p class="section__desc">نقدّم مجموعة شاملة من الخدمات الرقمية المصممة لتلبية احتياجاتك</p>
        </div>
        <div class="services__grid">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="service-card"
            v-scroll-reveal
            :style="{ '--delay': index * 100 + 'ms' }"
          >
            <div class="service-card__icon-wrap">
              <div class="service-card__icon" v-html="service.icon"></div>
              <div class="service-card__glow"></div>
            </div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__desc">{{ service.desc }}</p>
            <div class="service-card__features">
              <span v-for="f in service.features" :key="f" class="service-card__feature">{{ f }}</span>
            </div>
            <div class="service-card__line"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ WHY US SECTION ============ -->
    <section id="why-us" class="why-us">
      <div class="section__container">
        <div class="why-us__layout">
          <div class="why-us__content" v-scroll-reveal>
            <span class="section__label">لماذا نحن؟</span>
            <h2 class="section__title">لماذا <span class="gradient-text">Al-Mehdar Tec</span>؟</h2>
            <p class="why-us__text">
              لأننا لا نقدّم مجرد خدمة تقنية، بل نبحث عن الحل المناسب لاحتياجك. نعمل على فهم رؤيتك وتحويلها إلى واقع رقمي يتجاوز التوقعات.
            </p>
            <div class="why-us__features">
              <div
                v-for="(feature, index) in whyUsFeatures"
                :key="feature.title"
                class="why-us__feature"
                v-scroll-reveal
              >
                <div class="why-us__feature-icon" v-html="feature.icon"></div>
                <div class="why-us__feature-content">
                  <h4 class="why-us__feature-title">{{ feature.title }}</h4>
                  <p class="why-us__feature-desc">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="why-us__visual" v-scroll-reveal>
            <div class="why-us__card">
              <div class="why-us__card-inner">
                <div class="why-us__orbit">
                  <div class="why-us__orbit-ring why-us__orbit-ring--1">
                    <div class="why-us__orbit-dot"></div>
                  </div>
                  <div class="why-us__orbit-ring why-us__orbit-ring--2">
                    <div class="why-us__orbit-dot"></div>
                  </div>
                  <div class="why-us__orbit-ring why-us__orbit-ring--3">
                    <div class="why-us__orbit-dot"></div>
                  </div>
                  <div class="why-us__orbit-center">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 36V12L20 26L24 18L28 26L36 12V36" stroke="url(#orbit-grad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <circle cx="24" cy="38" r="2.5" fill="url(#orbit-grad)" />
                      <defs>
                        <linearGradient id="orbit-grad" x1="12" y1="12" x2="36" y2="36">
                          <stop offset="0%" stop-color="#4f7cff" />
                          <stop offset="100%" stop-color="#00d4ff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="why-us__floating-badge why-us__floating-badge--1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f7cff" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  <span>جودة عالية</span>
                </div>
                <div class="why-us__floating-badge why-us__floating-badge--2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>دعم مستمر</span>
                </div>
                <div class="why-us__floating-badge why-us__floating-badge--3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c4dff" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  <span>أداء سريع</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROCESS SECTION ============ -->
    <section id="process" class="process">
      <div class="section__container">
        <div class="section__header" v-scroll-reveal>
          <span class="section__label">كيف نعمل</span>
          <h2 class="section__title">مراحل <span class="gradient-text">العمل</span></h2>
          <p class="section__desc">نتبع منهجية واضحة لضمان تحقيق أفضل النتائج</p>
        </div>
        <div class="process__timeline">
          <div class="process__line"></div>
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="process__step"
            v-scroll-reveal
          >
            <div class="process__step-number">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <div class="process__step-content">
              <div class="process__step-icon" v-html="step.icon"></div>
              <h3 class="process__step-title">{{ step.title }}</h3>
              <p class="process__step-desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CTA SECTION ============ -->
    <section id="cta" class="cta">
      <div class="cta__bg">
        <div class="cta__gradient-orb cta__gradient-orb--1"></div>
        <div class="cta__gradient-orb cta__gradient-orb--2"></div>
      </div>
      <div class="section__container">
        <div class="cta__content" v-scroll-reveal>
          <h2 class="cta__title">فكرتك تبدأ من هنا…<br/>وحلولك التقنية <span class="gradient-text">معنا</span></h2>
          <p class="cta__text">جاهز لتحويل فكرتك إلى واقع رقمي؟ تواصل معنا اليوم وابدأ رحلتك التقنية.</p>
          <a href="#contact" class="btn btn--primary btn--lg" @click.prevent="scrollTo('contact')">
            <span>ابدأ مشروعك الآن</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ CONTACT SECTION ============ -->
    <section id="contact" class="contact">
      <div class="section__container">
        <div class="section__header" v-scroll-reveal>
          <span class="section__label">تواصل معنا</span>
          <h2 class="section__title">ابدأ <span class="gradient-text">مشروعك</span> اليوم</h2>
          <p class="section__desc">أرسل لنا تفاصيل مشروعك وسنتواصل معك في أقرب وقت</p>
        </div>
        <div class="contact__layout">
          <div class="contact__info" v-scroll-reveal>
            <div class="contact__info-card">
              <div class="contact__info-item" v-for="info in contactInfo" :key="info.label">
                <div class="contact__info-icon" v-html="info.icon"></div>
                <div>
                  <h4>{{ info.label }}</h4>
                  <p>{{ info.value }}</p>
                </div>
              </div>
            </div>
            <div class="contact__social">
              <a v-for="social in socials" :key="social.name" :href="social.url" class="contact__social-link" :aria-label="social.name" target="_blank" rel="noopener noreferrer">
                <span v-html="social.icon"></span>
              </a>
            </div>
          </div>
          <form class="contact__form" v-scroll-reveal @submit.prevent="handleSubmit">
            <div class="form__row">
              <div class="form__group">
                <label for="contact-name" class="form__label">الاسم</label>
                <input id="contact-name" v-model="form.name" type="text" class="form__input" placeholder="اسمك الكامل" required />
              </div>
              <div class="form__group">
                <label for="contact-email" class="form__label">البريد الإلكتروني</label>
                <input id="contact-email" v-model="form.email" type="email" class="form__input" placeholder="example@email.com" dir="ltr" required />
              </div>
            </div>
            <div class="form__group">
              <label for="contact-service" class="form__label">الخدمة المطلوبة</label>
              <select id="contact-service" v-model="form.service" class="form__input form__select" required>
                <option value="" disabled>اختر الخدمة</option>
                <option v-for="s in services" :key="s.title" :value="s.title">{{ s.title }}</option>
              </select>
            </div>
            <div class="form__group">
              <label for="contact-message" class="form__label">تفاصيل المشروع</label>
              <textarea id="contact-message" v-model="form.message" class="form__input form__textarea" placeholder="اخبرنا عن مشروعك..." rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn--primary btn--full" :disabled="formSubmitted">
              <span v-if="!formSubmitted">إرسال الطلب</span>
              <span v-else class="form__success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                تم الإرسال بنجاح
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer id="footer" class="footer">
      <div class="footer__container">
        <div class="footer__top">
          <div class="footer__brand">
            <div class="navbar__logo-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#footer-logo-gradient)" />
                <path d="M10 28V12L16 22L20 14L24 22L30 12V28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="20" cy="30" r="2" fill="rgba(255,255,255,0.6)" />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stop-color="#4f7cff" />
                    <stop offset="100%" stop-color="#7c4dff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span class="navbar__brand">Al-Mehdar Tec</span>
              <p class="footer__brand-desc">نحوّل أفكارك إلى حلول رقمية احترافية</p>
            </div>
          </div>
          <div class="footer__links-group">
            <h4>روابط سريعة</h4>
            <a v-for="link in navLinks" :key="link.id" :href="'#' + link.id" @click.prevent="scrollTo(link.id)">{{ link.label }}</a>
          </div>
          <div class="footer__links-group">
            <h4>خدماتنا</h4>
            <a v-for="s in services.slice(0, 4)" :key="s.title" href="#services" @click.prevent="scrollTo('services')">{{ s.title }}</a>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© {{ new Date().getFullYear() }} Al-Mehdar Tec. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Directive } from 'vue'

// ─── Scroll Reveal Directive ───
const vScrollReveal: Directive = {
  mounted(el) {
    el.classList.add('scroll-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('scroll-reveal--visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
  },
}

// ─── Navigation ───
const isScrolled = ref(false)
const menuOpen = ref(false)

// ─── Typewriter Animation ───
const fullTitle = 'نحوّل أفكارك إلى حلول رقمية احترافية'
const fullSubtitle = 'حلول تقنية تُبنى على احتياجاتك. نقدّم مجموعة من الخدمات الرقمية المتكاملة لتحقيق رؤيتك التقنية بأعلى معايير الجودة والاحترافية.'

const displayedTitle = ref('')
const displayedSubtitle = ref('')
const showTitleCursor = ref(true)
const showSubtitleCursor = ref(false)
const subtitleVisible = ref(false)

function typeText(text: string, target: { value: string }, speed: number = 60): Promise<void> {
  return new Promise((resolve) => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        target.value += text[i]
        i++
      } else {
        clearInterval(interval)
        resolve()
      }
    }, speed)
  })
}

async function startTypewriter() {
  await new Promise(r => setTimeout(r, 600))
  await typeText(fullTitle, displayedTitle, 55)
  showTitleCursor.value = false
  
  await new Promise(r => setTimeout(r, 300))
  subtitleVisible.value = true
  showSubtitleCursor.value = true
  await typeText(fullSubtitle, displayedSubtitle, 25)
  showSubtitleCursor.value = false
}

const navLinks = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'why-us', label: 'لماذا نحن' },
  { id: 'process', label: 'كيف نعمل' },
  { id: 'contact', label: 'تواصل معنا' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startTypewriter()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ─── Hero Stats ───
const stats = [
  { value: '+50', label: 'مشروع منجز' },
  { value: '+30', label: 'عميل سعيد' },
  { value: '+5', label: 'سنوات خبرة' },
]

function particleStyle(n: number) {
  const size = Math.random() * 4 + 2
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 5}s`,
  }
}

// ─── Services ───
const services = [
  {
    title: 'تصميم وتطوير المواقع الإلكترونية',
    desc: 'مواقع عصرية وسريعة الاستجابة تعكس هوية علامتك التجارية بأفضل صورة',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    features: ['تصميم متجاوب', 'أداء عالي', 'SEO محسّن'],
  },
  {
    title: 'تصميم وتطوير المتاجر الإلكترونية',
    desc: 'متاجر إلكترونية متكاملة مع بوابات دفع آمنة وتجربة تسوق سلسة',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    features: ['بوابات دفع', 'إدارة مخزون', 'لوحة تحكم'],
  },
  {
    title: 'حلول البيانات وإدارتها',
    desc: 'تحليل وإدارة البيانات لمساعدتك في اتخاذ قرارات مبنية على معلومات دقيقة',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
    features: ['تحليل بيانات', 'تقارير ذكية', 'قواعد بيانات'],
  },
  {
    title: 'تطوير البرمجيات والحلول المخصصة',
    desc: 'برمجيات مخصصة تلبي احتياجاتك الفريدة مع قابلية التوسع والتطوير',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    features: ['حلول مخصصة', 'تطوير API', 'أنظمة متكاملة'],
  },
  {
    title: 'التصميم والحلول الرقمية',
    desc: 'تصاميم إبداعية تجمع بين الجمال البصري وتجربة المستخدم المتميزة',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
    features: ['هوية بصرية', 'UI/UX', 'موشن جرافيك'],
  },
  {
    title: 'التطوير والدعم التقني',
    desc: 'دعم فني مستمر وصيانة دورية لضمان عمل أنظمتك بكفاءة وأمان',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    features: ['دعم فني 24/7', 'صيانة دورية', 'تحديثات مستمرة'],
  },
]

// ─── Why Us ───
const whyUsFeatures = [
  {
    title: 'جودة واحترافية',
    desc: 'نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
  },
  {
    title: 'حلول عصرية وقابلة للتطوير',
    desc: 'نستخدم أحدث التقنيات لبناء حلول تنمو مع مشروعك',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  },
  {
    title: 'اهتمام بالتفاصيل',
    desc: 'كل بكسل وكل سطر كود يخضع لمراجعة دقيقة',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  },
  {
    title: 'فهم لاحتياجات المشروع',
    desc: 'نبدأ بفهم عميق لمتطلباتك قبل أي خطوة تنفيذية',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  },
  {
    title: 'التزام في التنفيذ والمتابعة',
    desc: 'نلتزم بالجداول الزمنية ونتابع معك حتى بعد التسليم',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  },
]

// ─── Process Steps ───
const processSteps = [
  {
    title: 'الاستماع والتحليل',
    desc: 'نبدأ بفهم احتياجاتك وأهدافك بشكل عميق لتحديد أفضل الحلول',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  },
  {
    title: 'التخطيط والتصميم',
    desc: 'نضع خطة عمل واضحة ونصمم واجهات مستخدم جذابة وعملية',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>',
  },
  {
    title: 'التطوير والبرمجة',
    desc: 'نحوّل التصاميم إلى كود احترافي باستخدام أحدث التقنيات',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  },
  {
    title: 'الاختبار والتسليم',
    desc: 'نختبر كل تفصيل قبل التسليم ونقدم دعم فني مستمر',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  },
]

// ─── Contact ───
const contactInfo = [
  {
    label: 'البريد الإلكتروني',
    value: 'info@al-mehdartec.com',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  },
  {
    label: 'الهاتف',
    value: '+966 XX XXX XXXX',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    label: 'الموقع',
    value: 'المملكة العربية السعودية',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
]

const socials = [
  {
    name: 'Twitter',
    url: '#',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    name: 'Instagram',
    url: '#',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  },
]

// ─── Form ───
const form = ref({
  name: '',
  email: '',
  service: '',
  message: '',
})

const formSubmitted = ref(false)

function handleSubmit() {
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
    form.value = { name: '', email: '', service: '', message: '' }
  }, 3000)
}
</script>

<style>
/* ═══════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar--scrolled {
  background: rgba(10, 15, 46, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(79, 124, 255, 0.1);
  padding: 0.5rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.navbar__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}

.navbar__logo-icon svg {
  width: 40px;
  height: 40px;
}

.navbar__logo-text {
  display: flex;
  flex-direction: column;
}

.navbar__brand {
  font-size: 1.1rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.5px;
  color: var(--text-primary);
}

.navbar__tagline {
  font-size: 0.6rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar__link {
  padding: 0.5rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.navbar__link:hover {
  color: var(--text-primary);
  background: rgba(79, 124, 255, 0.08);
}

.navbar__cta {
  padding: 0.6rem 1.5rem;
  background: var(--accent-gradient);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 124, 255, 0.3);
}

.navbar__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(79, 124, 255, 0.45);
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.navbar__hamburger-line {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar__hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translateY(5px) translateX(5px);
}

.navbar__hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-5px) translateX(5px);
}

/* ═══════════════════════════════════════
   HERO
   ═══════════════════════════════════════ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.hero__bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 15, 46, 0.7) 0%,
    rgba(10, 15, 46, 0.85) 50%,
    var(--navy-deep) 100%
  );
}

.hero__particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero__particle {
  position: absolute;
  background: var(--accent-blue);
  border-radius: 50%;
  opacity: 0;
  animation: particle-float linear infinite;
}

@keyframes particle-float {
  0% { opacity: 0; transform: translateY(0) scale(0); }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { opacity: 0; transform: translateY(-100vh) scale(1); }
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  padding-top: 100px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(79, 124, 255, 0.1);
  border: 1px solid rgba(79, 124, 255, 0.2);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--accent-blue);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-blue);
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(79, 124, 255, 0.4); }
  50% { opacity: 0.7; box-shadow: 0 0 0 8px rgba(79, 124, 255, 0); }
}

.hero__title {
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.35;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
  min-height: 2.7em;
}

.hero__title-gradient {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Typewriter */
.typewriter {
  display: inline;
}

.typewriter__cursor {
  display: inline-block;
  color: var(--accent-blue);
  font-weight: 300;
  animation: cursor-blink 0.7s step-end infinite;
  margin-right: 2px;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero__subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  min-height: 3.8em;
}

.hero__subtitle--visible {
  opacity: 1;
  transform: translateY(0);
}

.hero__actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Cairo', sans-serif;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn--primary {
  background: var(--accent-gradient);
  color: white;
  box-shadow: 0 4px 15px rgba(79, 124, 255, 0.3);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(79, 124, 255, 0.45);
}

.btn--outline {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid rgba(79, 124, 255, 0.3);
}

.btn--outline:hover {
  border-color: var(--accent-blue);
  background: rgba(79, 124, 255, 0.08);
  transform: translateY(-2px);
}

.btn--lg {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.btn--full {
  width: 100%;
  justify-content: center;
}

.btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
  transform: none !important;
}

/* Stats */
.hero__stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.hero__stat {
  text-align: center;
}

.hero__stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* Scroll Indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}

.hero__scroll-indicator span {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.hero__scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(79, 124, 255, 0.4);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.hero__scroll-wheel {
  width: 3px;
  height: 8px;
  background: var(--accent-blue);
  border-radius: 3px;
  animation: scroll-wheel 2s ease-in-out infinite;
}

@keyframes scroll-wheel {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(8px); opacity: 0.3; }
}

@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-8px); }
}

/* ═══════════════════════════════════════
   SECTIONS COMMON
   ═══════════════════════════════════════ */
.section__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section__header {
  text-align: center;
  margin-bottom: 4rem;
}

.section__label {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(79, 124, 255, 0.1);
  border: 1px solid rgba(79, 124, 255, 0.15);
  border-radius: 50px;
  font-size: 0.8rem;
  color: var(--accent-blue);
  font-weight: 600;
  margin-bottom: 1.25rem;
  letter-spacing: 0.5px;
}

.section__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.gradient-text {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section__desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ═══════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════ */
.services {
  padding: 7rem 0;
  position: relative;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.service-card {
  position: relative;
  padding: 2rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  animation-delay: var(--delay);
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(79, 124, 255, 0), rgba(124, 77, 255, 0));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: background 0.4s ease;
  pointer-events: none;
}

.service-card:hover::before {
  background: linear-gradient(135deg, rgba(79, 124, 255, 0.3), rgba(124, 77, 255, 0.3));
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(79, 124, 255, 0.25);
  box-shadow: 0 20px 60px rgba(79, 124, 255, 0.1);
}

.service-card__icon-wrap {
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 1.5rem;
}

.service-card__icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 124, 255, 0.1);
  border-radius: 14px;
  position: relative;
  z-index: 1;
}

.service-card__icon svg {
  width: 28px;
  height: 28px;
  stroke: var(--accent-blue);
}

.service-card__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: var(--accent-blue);
  border-radius: 50%;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.4s ease;
}

.service-card:hover .service-card__glow {
  opacity: 0.15;
}

.service-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.service-card__desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.service-card__features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.service-card__feature {
  padding: 0.3rem 0.75rem;
  background: rgba(79, 124, 255, 0.08);
  border: 1px solid rgba(79, 124, 255, 0.12);
  border-radius: 8px;
  font-size: 0.75rem;
  color: var(--accent-blue);
  font-weight: 500;
}

.service-card__line {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 3px;
  background: var(--accent-gradient);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.service-card:hover .service-card__line {
  transform: scaleX(1);
}

/* ═══════════════════════════════════════
   WHY US
   ═══════════════════════════════════════ */
.why-us {
  padding: 7rem 0;
  background: linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 50%, var(--navy-deep) 100%);
}

.why-us__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.why-us__text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.why-us__features {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.why-us__feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(79, 124, 255, 0.04);
  border: 1px solid rgba(79, 124, 255, 0.08);
  border-radius: 14px;
  transition: all 0.3s ease;
}

.why-us__feature:hover {
  background: rgba(79, 124, 255, 0.08);
  border-color: rgba(79, 124, 255, 0.15);
  transform: translateX(-4px);
}

.why-us__feature-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 124, 255, 0.1);
  border-radius: 10px;
}

.why-us__feature-icon svg {
  width: 20px;
  height: 20px;
  stroke: var(--accent-blue);
}

.why-us__feature-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.why-us__feature-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Why Us Visual */
.why-us__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.why-us__card {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1;
  position: relative;
}

.why-us__card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-us__orbit {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-us__orbit-ring {
  position: absolute;
  border: 1px solid rgba(79, 124, 255, 0.12);
  border-radius: 50%;
  animation: orbit-spin linear infinite;
}

.why-us__orbit-ring--1 {
  width: 60%;
  height: 60%;
  animation-duration: 20s;
}

.why-us__orbit-ring--2 {
  width: 80%;
  height: 80%;
  animation-duration: 30s;
  animation-direction: reverse;
}

.why-us__orbit-ring--3 {
  width: 100%;
  height: 100%;
  animation-duration: 40s;
  border-style: dashed;
  border-color: rgba(79, 124, 255, 0.06);
}

@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.why-us__orbit-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--accent-blue);
  border-radius: 50%;
  top: -5px;
  left: 50%;
  margin-left: -5px;
  box-shadow: 0 0 15px rgba(79, 124, 255, 0.5);
}

.why-us__orbit-center {
  width: 80px;
  height: 80px;
  background: rgba(79, 124, 255, 0.1);
  border: 1px solid rgba(79, 124, 255, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.why-us__orbit-center svg {
  width: 44px;
  height: 44px;
}

.why-us__floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgba(20, 27, 61, 0.85);
  border: 1px solid rgba(79, 124, 255, 0.15);
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
  backdrop-filter: blur(10px);
  animation: badge-float 4s ease-in-out infinite;
  white-space: nowrap;
}

.why-us__floating-badge--1 {
  top: 10%;
  right: -5%;
  animation-delay: 0s;
}

.why-us__floating-badge--2 {
  bottom: 15%;
  right: -10%;
  animation-delay: 1.5s;
}

.why-us__floating-badge--3 {
  top: 20%;
  left: -5%;
  animation-delay: 3s;
}

@keyframes badge-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* ═══════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════ */
.process {
  padding: 7rem 0;
  position: relative;
}

.process__timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
}

.process__line {
  position: absolute;
  top: 38px;
  right: 12.5%;
  left: 12.5%;
  height: 2px;
  background: linear-gradient(to left, var(--accent-blue), var(--accent-purple), var(--accent-cyan));
  opacity: 0.3;
}

.process__step {
  text-align: center;
  position: relative;
}

.process__step-number {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  background: var(--glass-bg);
  border: 2px solid rgba(79, 124, 255, 0.2);
  border-radius: 16px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.process__step-number span {
  font-size: 1.1rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.process__step:hover .process__step-number {
  background: rgba(79, 124, 255, 0.1);
  border-color: var(--accent-blue);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(79, 124, 255, 0.2);
}

.process__step-content {
  padding: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.process__step:hover .process__step-content {
  border-color: rgba(79, 124, 255, 0.2);
}

.process__step-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.process__step-icon svg {
  width: 24px;
  height: 24px;
  stroke: var(--accent-blue);
}

.process__step-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.process__step-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ═══════════════════════════════════════
   CTA
   ═══════════════════════════════════════ */
.cta {
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
}

.cta__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cta__gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
}

.cta__gradient-orb--1 {
  width: 500px;
  height: 500px;
  background: var(--accent-blue);
  top: -200px;
  right: -100px;
  animation: orb-float 8s ease-in-out infinite;
}

.cta__gradient-orb--2 {
  width: 400px;
  height: 400px;
  background: var(--accent-purple);
  bottom: -200px;
  left: -100px;
  animation: orb-float 10s ease-in-out infinite reverse;
}

@keyframes orb-float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

.cta__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
  padding: 4rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 28px;
  backdrop-filter: blur(20px);
}

.cta__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.cta__text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* ═══════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════ */
.contact {
  padding: 7rem 0;
  background: linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%);
}

.contact__layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: start;
}

.contact__info-card {
  padding: 2rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact__info-icon {
  width: 44px;
  height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 124, 255, 0.1);
  border-radius: 12px;
}

.contact__info-icon svg {
  width: 22px;
  height: 22px;
  stroke: var(--accent-blue);
}

.contact__info-item h4 {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.15rem;
}

.contact__info-item p {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
  direction: ltr;
  text-align: right;
}

.contact__social {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.contact__social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.contact__social-link svg {
  width: 20px;
  height: 20px;
}

.contact__social-link:hover {
  background: rgba(79, 124, 255, 0.1);
  border-color: var(--accent-blue);
  color: var(--accent-blue);
  transform: translateY(-3px);
}

/* Form */
.contact__form {
  padding: 2rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form__label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.form__input {
  width: 100%;
  padding: 0.85rem 1rem;
  background: rgba(10, 15, 46, 0.6);
  border: 1.5px solid rgba(79, 124, 255, 0.12);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: 'Cairo', sans-serif;
  transition: all 0.3s ease;
  outline: none;
}

.form__input::placeholder {
  color: var(--text-muted);
}

.form__input:focus {
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(79, 124, 255, 0.1);
  background: rgba(10, 15, 46, 0.8);
}

.form__select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7fa0' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 12px center;
  padding-left: 2.5rem;
}

.form__textarea {
  resize: vertical;
  min-height: 120px;
}

.form__success {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #4ade80;
}

/* ═══════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════ */
.footer {
  background: var(--navy);
  border-top: 1px solid var(--glass-border);
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer__top {
  padding: 4rem 0 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.footer__brand-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.footer__links-group h4 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
}

.footer__links-group a {
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.35rem 0;
  transition: all 0.3s ease;
}

.footer__links-group a:hover {
  color: var(--accent-blue);
  transform: translateX(-4px);
}

.footer__bottom {
  padding: 1.5rem 0;
  border-top: 1px solid var(--glass-border);
  text-align: center;
}

.footer__bottom p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* ═══════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════ */
@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .why-us__layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .why-us__visual {
    order: -1;
  }

  .why-us__card {
    max-width: 300px;
  }

  .process__timeline {
    grid-template-columns: repeat(2, 1fr);
  }

  .process__line {
    display: none;
  }

  .contact__layout {
    grid-template-columns: 1fr;
  }

  .footer__top {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .navbar__links {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 280px;
    background: rgba(10, 15, 46, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    gap: 0.5rem;
    border-left: 1px solid var(--glass-border);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
  }

  .navbar__links--open {
    display: flex;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__link {
    width: 100%;
    padding: 0.75rem 1rem;
  }

  .navbar__cta {
    margin-right: 0;
    text-align: center;
    margin-top: 0.5rem;
  }

  .services__grid {
    grid-template-columns: 1fr;
  }

  .process__timeline {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .hero__stats {
    gap: 1.5rem;
  }

  .hero__stat-number {
    font-size: 1.5rem;
  }

  .form__row {
    grid-template-columns: 1fr;
  }

  .footer__top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cta__content {
    padding: 2.5rem 1.5rem;
  }

  .why-us__floating-badge--1,
  .why-us__floating-badge--2,
  .why-us__floating-badge--3 {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

/* ═══════════════════════════════════════
   SCROLL REVEAL ANIMATIONS
   ═══════════════════════════════════════ */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal--visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

