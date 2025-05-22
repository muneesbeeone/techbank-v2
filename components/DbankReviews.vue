<script setup lang="ts">
const containerReview = ref(null)
const swiper = useSwiper(containerReview, {
  slidesPerView: 4.2,
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5.2,
      spaceBetween: 30,
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<template>
  <div class="mx-auto relative px-4 py-8">
    <div>
      <ClientOnly>
        <swiper-container ref="containerReview" :init="true">
          <swiper-slide v-for="i in 10" :key="i" class="relative overflow-hidden rounded-2xl h-fit w-full shadow-lg bg-[#2B2B2B]">
            <div class=" h-full inset-0 p-3 z-10 text-white relative">
              <div class="flex items-center justify-between relative w-full py-2 px-3">
                <div class="space-y-2">
                  <div class="flex gap-5 items-center ">
                    <nuxt-img src="/images/placeholder.webp" alt="TechBank Users" width="100%" height="100%" class="w-12 h-12" />
                    <div>
                      <h2 class="text-base font-thin font-ninetea">David Kim</h2>
                      <p class="text-xs font-thin text-[#AD98FF]">Orion Tech</p>
                    </div>
                  </div>
                  <p class="text-sm text-white font-thin font-ninetea">Put your crypto to work and unlock high-yield
                    rewards—up to 300% Dbank makes staking simple, secure, and rewarding.
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
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
