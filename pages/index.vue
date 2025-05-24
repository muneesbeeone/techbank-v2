<template>
    <!-- Hero Section -->
    <div ref="heroRef" class="max-w-7xl mx-auto px-4 pb-8 md:pb-16 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden">
            <nuxt-img 
                src="/images/hero-bg.svg" 
                alt="TechBank Logo" 
                width="100%" 
                height="100%"
                class="hidden md:block w-full h-auto object-cover rounded-lg shadow-lg" 
                loading="eager"
            />
            <nuxt-img 
                src="/images/mob-hero-bg.webp" 
                alt="TechBank Logo" 
                width="100%" 
                height="100%"
                class="block md:hidden w-full h-auto object-cover rounded-lg shadow-lg" 
                loading="eager"
            />
              
            <div class="absolute bottom-0 w-full h-full flex flex-col items-center justify-end rounded-lg py-6 md:py-10">
                <div class="absolute w-full h-full flex items-center justify-center">
                    <img ref="compRef" src="/images/comp.gif" alt="TechBank Animation"
                        class="w-[150px] sm:w-[200px] md:w-[300px] h-auto object-cover rotate-[20deg] transition-all duration-300" />
                </div>
                <h3 ref="headerRef"
                    class="text-3xl sm:text-4xl md:text-[94px] text-[#000000] font-bold text-center mb-2 md:mb-4 relative font-nyx tracking-wider">
                    Engineering
                </h3>
                <h3 ref="header2Ref"
                    class="text-3xl sm:text-4xl md:text-[94px] md:mt-10 -mt-2 text-[#000000] font-bold text-center mb-2 md:mb-4 relative font-nyx tracking-wider">
                    The Future
                </h3>
                <div class="flex flex-col md:flex-row text-center md:text-left md:mt-5 mt-0 relative items-center md:gap-10 gap-4 max-w-xl px-4">
                    <span class="text-sm sm:text-[14px] md:text-[16px] text-[#000000] font-ninetea">Empowering Businesses, Enabling Growth
                        TechBank's Products for Success</span>
                    <nuxt-link to="/products"
                        class="bg-button-gradient font-ninetea text-white pl-4 md:pl-6 pr-2 py-1.5 md:py-2 text-sm md:text-base whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700 transition-all duration-300 active:scale-95 touch-manipulation">
                        View Products
                        <span class="bg-white h-6 w-6 md:h-8 md:w-8 flex items-center justify-center ml-0 rounded-full">
                            <Icon name="mynaui:arrow-long-up-right" class="text-[#8501A6] font-bold text-sm md:text-base" />
                        </span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center py-2">
          <span class="text-white text-sm font-ninetea">+ SCROLL TO EXPOLORE +</span>
        </div>
    </div>

    <!-- About Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center grid-cols-1 gap-10 md:gap-20 lg:px-8 py-10 md:py-16 relative overflow-hidden">
        <div class="order-2 md:order-1">
            <img src="/images/about-gif.avif" alt="TechBank Logo"
                class="max-w-[400px] h-auto rounded-lg shadow-lg" 
                loading="lazy"
            />
        </div>
        <div class="flex text-block flex-col md:items-start items-center order-1 md:order-2">
            <h2 ref="aboutRef" data-final-text="About"
                class="text-2xl md:text-[40px] text-[#FFFFFF] scramble-header font-bold mb-4 font-nyx tracking-wider">
                About
            </h2>
            <p class="text-sm md:text-[16px] text-[#8D8D8D] font-ninetea text-center md:text-start max-w-2xl mb-6 md:mb-10">
                TechBank is a blockchain product company creating decentralized tools like TechBank, Dbank, and Dwallet to simplify digital
                finance. We empower users with secure, transparent, and user-friendly solutions for managing assets in
                the Web3 world.
            </p>
            <div class="flex divide-x divide-[#C0C0C03D] w-full justify-center md:justify-start">
                <div class="px-4 md:pr-8">
                    <h3 class="font-nyx text-2xl md:text-3xl">4</h3>
                    <p class="font-ninetea text-sm md:text-base text-[#C0C0C0]">Products</p>
                </div>
                <div class="px-4 md:px-8">
                    <h3 class="font-nyx text-2xl md:text-3xl">2000+</h3>
                    <p class="font-ninetea text-sm md:text-base text-[#C0C0C0]">Active Users</p>
                </div>
                <div class="px-4 md:pl-8">
                    <h3 class="font-nyx text-2xl md:text-3xl">1M+</h3>
                    <p class="font-ninetea text-sm md:text-base text-[#C0C0C0]">Downloads</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Products Section -->
    <div class="relative">
        <div class="bg-[#010101]">
            <div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full object-cover rounded-lg shadow-lg" 
                    loading="lazy"
                />
            </div>
        </div>
        <div class="absolute w-full bottom-0 blur-[60px] -rotate-[10deg]">
            <div class="flex items-center justify-center bottom-0 h-10 bg-gradient-to-b from-[#3A0696] to-[#C740FF]">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <div class="text-center">
                <p class="text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">Innovative</p>
                <h2 ref="productsRef" data-final-text="Products"
                    class="text-2xl md:text-[40px] text-[#FFFFFF] scramble-header mx-auto -mt-2 md:-mt-5 font-nyx tracking-wider leading-[1.2] md:leading-[102px]">
                    Products
                </h2>
                <p class="text-sm md:text-[16px] text-[#8D8D8D] -mt-2 md:-mt-5 font-ninetea mx-auto max-w-2xl mb-6 md:mb-10 px-4">
                    Explore our innovative products designed to simplify your digital finance experience.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div v-for="product in products" :key="product.id" 
                    class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] touch-manipulation">
                    <img :src="product.bgImage" :alt="product.name + ' background'" width="100%" height="100%"
                        class="w-full h-auto object-cover rounded-lg shadow-lg" loading="lazy" />
                    <div class="absolute h-full inset-0 p-1 z-10 text-white">
                        <img :src="product.image" :alt="product.name + ' interface'" width="100%" height="100%"
                            class="w-full object-cover rounded-lg shadow-lg" loading="lazy" />
                        <div class="flex items-center justify-between relative w-full py-4 md:py-10 px-3">
                            <div>
                                <h2 class="text-xl md:text-4xl tracking-wide font-nyx">{{ product.name }}</h2>
                                <p class="text-xs md:text-base font-ninetea mt-2 text-gray-400">{{ product.description }}</p>
                            </div>
                            <nuxt-link :to="product.link"
                                class="mt-4 md:mt-8 bg-purple-600 font-ninetea hover:bg-purple-700 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 mr-3 md:mr-10 transition-all duration-300 active:scale-95 touch-manipulation">
                                View
                                <Icon name="pixelarticons:arrow-right" class="text-white text-xl md:text-2xl -rotate-45" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Technologies Section -->
    <div class="max-w-7xl mx-auto relative px-4 sm:px-6 py-10 md:py-16 lg:px-8">
        <div class="text-center">
            <h2 ref="technologiesRef" data-final-text="Technologies"
                class="text-2xl md:text-[40px] text-[#FFFFFF] scramble-header mx-auto mt-2 md:mt-5 font-nyx tracking-wider leading-[1.2] md:leading-[102px]">
                Technologies
            </h2>
        </div>
        <TechnologySwiper />
    </div>

    <!-- Brands Section -->
    <div class="relative overflow-hidden">
        <div class="bg-[#010101]">
            <div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full object-cover rounded-lg shadow-lg" 
                    loading="lazy"
                />
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <div class="text-center">
                <p class="text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">From One Root, Many
                    Branches</p>
                <h2 data-final-text="Our Connected Brands" ref="brandsRef"
                    class="text-2xl md:text-[40px] text-[#FFFFFF] scramble-header mx-auto mt-2 font-nyx tracking-wider leading-[1.2] md:leading-none">
                    Our Connected Brands
                </h2>
            </div>
            
            <!-- Mobile View -->
            <div class="md:hidden">
                <ConnectedBrandsSwiper />
            </div>

            <!-- Desktop View -->
            <div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
                <div v-for="brand in brands" :key="brand.id"
                    class="relative overflow-hidden rounded-xl p-[1px] h-fit w-full shadow-lg bg-gradient-to-b from-[#BB83FF] via-[#B1B1B1] to-[#313131] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    <div class="bg-[#010101] pt-4 px-4 rounded-xl">
                        <h4 class="text-lg md:text-xl text-white mx-auto font-ninetea">{{ brand.name }}</h4>
                        <p class="text-sm md:text-base mt-2 text-gray-400">{{ brand.description }}</p>
                        <div class="-mt-6 flex items-center gap-5">
                            <a v-for="social in brand.socials" :key="social.platform"
                                :href="social.url" 
                                target="_blank" 
                                :aria-label="`Visit ${brand.name} ${social.platform} page`"
                                class="transition-transform duration-300 hover:scale-110 active:scale-95 touch-manipulation">
                                <Icon :name="social.icon" class="text-white text-[100px] w-6 mx-auto" />
                            </a>
                        </div>
                        <nuxt-img :src="brand.image" :alt="brand.name" width="100%" height="100%"
                            class="w-full h-auto object-cover rounded-lg shadow-lg mt-4" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ref, computed } from 'vue'
import { useHead } from '#imports'

useHead({
  title: 'Engineering The Future'
})

const products = ref([
    {
        id: 1,
        name: 'DWALLET',
        description: 'TechBank is a blockchain product company creating',
        image: '/images/dwallethome.webp',
        bgImage: '/images/product-card.webp',
        link: '/products/dwallet'
    },
    {
        id: 2,
        name: 'DBANK',
        description: 'TechBank is a blockchain product company creating',
        image: '/images/dbankhome.webp',
        bgImage: '/images/product-card.webp',
        link: '/products/dbank'
    }
])

const brands = ref([
{
    name: 'BLUE TIGERS',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/bluetigers.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/blue-tigers' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/blue_tigers' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/blue_tigers' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@blue_tigers' }
    ]
  },
  {
    name: 'KOCHI BLUE TIGERS',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/kochibluetigers.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/kochi-blue-tigers' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/kochi_blue_tigers' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/kochi_blue_tigers' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@kochi_blue_tigers' }
    ]
  },
  {
    name: 'BLUE TIGERS LONDON',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/bluetigerslondon.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/blue-tigers-london' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/blue_tigers_london' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/blue_tigers_london' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@blue_tigers_london' }
    ]
  }
])

// Animation for sections
onMounted(() => {
    const sections = ['heroRef', 'aboutRef', 'productsRef', 'technologiesRef', 'brandsRef']
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    sections.forEach(section => {
        const element = document.querySelector(`[ref="${section}"]`)
        if (element) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!prefersReducedMotion) {
                            gsap.from(entry.target, {
                                y: 50,
                                opacity: 0,
                                duration: 0.8,
                                ease: 'power3.out'
                            })
                        } else {
                            gsap.from(entry.target, {
                                opacity: 0,
                                duration: 0.4,
                                ease: 'power2.out'
                            })
                        }
                        observer.unobserve(entry.target)
                    }
                })
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            })
            
            observer.observe(element)
        }
    })
})
</script>

<style scoped>
/* Touch device optimizations */
@media (hover: none) {
    .touch-manipulation {
        -webkit-tap-highlight-color: transparent;
    }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
</style>
