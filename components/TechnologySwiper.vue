<template>
  <div class="relative overflow-hidden">
    <!-- Top row -->
    <div>
      <ClientOnly>
        <swiper-container ref="containerTop" :init="false">
          <swiper-slide v-for="(tech, index) in topTechnologies" :key="'top-' + index" class="tech-icon">
            <Icon :name="tech.icon" class="text-[100px]" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>

    <!-- Bottom row -->
    <div class="md:mt-2 mt-2">
      <ClientOnly>
        <swiper-container ref="containerBottom" :init="false">
          <swiper-slide v-for="(tech, index) in bottomTechnologies" :key="'bottom-' + index" class="tech-icon">
            <Icon :name="tech.icon" class="text-[100px]" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Autoplay } from 'swiper/modules'

const containerTop = ref(null)
const containerBottom = ref(null)

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  speed: 10000,
}

const topSwiper = useSwiper(containerTop, {
  ...swiperOptions,
  autoplay: {
    ...swiperOptions.autoplay,
    reverseDirection: true
  }
})

const bottomSwiper = useSwiper(containerBottom, swiperOptions)

const topTechnologies = [
    { icon: 'devicon:laravel-wordmark', color: '#FF2D20' },
    { icon: 'devicon:vuejs-wordmark', color: '#41B883' },
    { icon: 'devicon:nuxtjs-wordmark', color: '#00DC82' },
    { icon: 'devicon:nodejs-wordmark', color: '#339933' },
    { icon: 'devicon:tailwindcss-wordmark', color: '#06B6D4' },
    { icon: 'devicon:vite-wordmark', color: '#646CFF' },
    { icon: 'devicon:webpack-wordmark', color: '#8DD6F9' },
    { icon: 'devicon:vscode-wordmark', color: '#007ACC' },
    { icon: 'devicon:laravel-wordmark', color: '#FF2D20' },
    { icon: 'devicon:vuejs-wordmark', color: '#41B883' },
    { icon: 'devicon:nuxtjs-wordmark', color: '#00DC82' },
    { icon: 'devicon:nodejs-wordmark', color: '#339933' },
    { icon: 'devicon:tailwindcss-wordmark', color: '#06B6D4' },
    { icon: 'devicon:vite-wordmark', color: '#646CFF' },
    
]

const bottomTechnologies = [
  { icon: 'devicon:mongodb-wordmark', color: '#47A248' },
  { icon: 'icon-park-twotone:blockchain', color: '#00DC82' },
  { icon: 'devicon:mysql-wordmark', color: '#4479A1' },
  { icon: 'skill-icons:aws-light', color: '#FF9900' },
  { icon: 'token-branded:solana', color: '#00FFA3' },
  { icon: 'token-branded:tron', color: '#FF060A' },
  { icon: 'token-branded:metamask', color: '#E2761B' },
  { icon: 'devicon:mongodb-wordmark', color: '#47A248' },
  { icon: 'icon-park-twotone:blockchain', color: '#00DC82' },
  { icon: 'devicon:mysql-wordmark', color: '#4479A1' },
  { icon: 'skill-icons:aws-light', color: '#FF9900' },
  { icon: 'token-branded:solana', color: '#00FFA3' },
  { icon: 'token-branded:tron', color: '#FF060A' },
  { icon: 'token-branded:metamask', color: '#E2761B' },
]

onMounted(() => {
  if (containerTop.value) {
    containerTop.value.initialize()
  }
  if (containerBottom.value) {
    containerBottom.value.initialize()
  }
})
</script>

<style lang="css">
.tech-icon {
  position: relative;
  transition: transform 0.3s ease;
  width: auto !important;
}

.tech-icon:hover {
  transform: scale(1.1);
}

.tech-icon :deep(svg) {
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.tech-icon:hover :deep(svg) {
  filter: none;
}

:deep(.swiper) {
  overflow: visible;
}

:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}

:deep(swiper-container) {
  width: 100%;
  height: 100%;
}

:deep(swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto !important;
}
</style> 