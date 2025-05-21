<script setup lang="ts">
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<template>
  <div class="max-w-7xl mx-auto relative px-4 py-8">
    <button class="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10" @click="swiper.prev()">
      <Icon name="pixelarticons:chevron-left" class="text-white text-[100px] w-16 mx-auto" />
    </button>
    <div>
      <ClientOnly>
        <swiper-container ref="containerRef" :init="true">
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <nuxt-img src="/images/product-card.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-lg shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <nuxt-img src="/images/dwallet.svg" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg shadow-lg" />
              <div class="flex items-center justify-between relative w-full md:py-10 py-2 px-3">
                <div class="">
                  <h2 class="md:text-4xl text-xl tracking-wide font-nyx">DWALLET</h2>
                  <p class="md:text-base text-xs font-ninetea mt-2 text-gray-400">TechBank is a blockchain product
                    company
                    creating
                  </p>
                </div>

                <button
                  class="mt-8 bg-purple-600 font-ninetea hover:bg-purple-700 md:text-sm text-xs px-4 py-2 rounded-full flex items-center gap-2 mr-5 md:mr-10">
                  View
                  <nuxt-img src="/images/arrow.svg" alt="Arrow" width="16" height="16" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <nuxt-img src="/images/product-card.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-lg shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <nuxt-img src="/images/dbank.svg" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg shadow-lg" />
              <div class="flex items-center justify-between relative w-full md:py-10 py-2 px-3">
                <div class="">
                  <h2 class="md:text-4xl text-xl tracking-wide font-nyx">DBANK</h2>
                  <p class="md:text-base text-xs font-ninetea mt-2 text-gray-400">TechBank is a blockchain product
                    company
                    creating
                  </p>
                </div>

                <button
                  class="mt-8 bg-purple-600 font-ninetea hover:bg-purple-700 md:text-sm text-xs px-4 py-2 rounded-full flex items-center gap-2 mr-5 md:mr-10">
                  View
                  <nuxt-img src="/images/arrow.svg" alt="Arrow" width="16" height="16" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <nuxt-img src="/images/product-card.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-lg shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <nuxt-img src="/images/dwallet.svg" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg shadow-lg" />
              <div class="flex items-center justify-between relative w-full md:py-10 py-2 px-3">
                <div class="">
                  <h2 class="md:text-4xl text-xl tracking-wide font-nyx">DWALLET</h2>
                  <p class="md:text-base text-xs font-ninetea mt-2 text-gray-400">TechBank is a blockchain product
                    company
                    creating
                  </p>
                </div>

                <button
                  class="mt-8 bg-purple-600 font-ninetea hover:bg-purple-700 md:text-sm text-xs px-4 py-2 rounded-full flex items-center gap-2 mr-5 md:mr-10">
                  View
                  <nuxt-img src="/images/arrow.svg" alt="Arrow" width="16" height="16" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <nuxt-img src="/images/product-card.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-lg shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <nuxt-img src="/images/dbank.svg" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg shadow-lg" />
              <div class="flex items-center justify-between relative w-full md:py-10 py-2 px-3">
                <div class="">
                  <h2 class="md:text-4xl text-xl tracking-wide font-nyx">DBANK</h2>
                  <p class="md:text-base text-xs font-ninetea mt-2 text-gray-400">TechBank is a blockchain product
                    company
                    creating
                  </p>
                </div>

                <button
                  class="mt-8 bg-purple-600 font-ninetea hover:bg-purple-700 md:text-sm text-xs px-4 py-2 rounded-full flex items-center gap-2 mr-5 md:mr-10">
                  View
                  <nuxt-img src="/images/arrow.svg" alt="Arrow" width="16" height="16" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
    <button class="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10" @click="swiper.next()">
      <Icon name="pixelarticons:chevron-right" class="text-white text-[100px] w-16 mx-auto" />
    </button>
  </div>
  <!-- <div class="swiper-pagination bg-white flex relative z-10 "></div> -->
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>
