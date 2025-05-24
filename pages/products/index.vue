<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[14px] md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-in">BUILD THE FUTURE WITH US</p>
            <h2 ref="productsRef" data-final-text="Products"
                class="text-[32px] md:text-[40px] lg:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider">
                Products
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-5">
            <TransitionGroup name="fade-stagger">
                <div v-for="product in products" :key="product.id" 
                    class="product-card relative overflow-hidden rounded-2xl md:rounded-3xl h-fit w-full shadow-lg bg-[#2B2B2B] transform transition-all duration-500"
                    @touchstart="handleTouchStart"
                    @touchmove="handleTouchMove"
                    @touchend="handleTouchEnd">
                    <OptimizedImage 
                        :src="product.bgPattern" 
                        :alt="product.name + ' background'" 
                        width="100%" 
                        height="100%"
                        loading="lazy"
                        containerClass="w-full h-full absolute object-cover rounded-[20px] md:rounded-[30px] shadow-lg"
                        imageClass="w-full h-full object-cover rounded-[20px] md:rounded-[30px] shadow-lg"
                    />
                    <div class="h-full inset-0 p-2 md:p-3 z-10 text-white relative">
                        <OptimizedImage 
                            :src="product.image" 
                            :alt="product.name + ' interface'" 
                            width="100%" 
                            height="100%"
                            loading="eager"
                            containerClass="w-full object-cover rounded-xl md:rounded-2xl"
                            imageClass="w-full object-cover rounded-xl md:rounded-2xl"
                        />
                        <div class="flex items-center justify-between relative w-full py-3 md:py-5 px-2 md:px-3">
                            <div class="w-full">
                                <div class="flex items-center gap-3 md:gap-5">
                                    <OptimizedImage 
                                        :src="product.logo" 
                                        :alt="product.name + ' logo'" 
                                        width="100%" 
                                        height="100%"
                                        loading="eager"
                                        containerClass=""
                                        imageClass="w-8 h-8 md:w-12 md:h-12"
                                    />
                                    <h2 class="text-xl md:text-3xl font-nyx">{{ product.name }}</h2>
                                </div>
                                <p class="text-xs md:text-sm mt-2 text-gray-400 line-clamp-2 md:line-clamp-none">{{ product.description }}</p>
                                <nuxt-link :to="product.link"
                                    class="bg-button-gradient w-fit font-ninetea text-white pl-4 md:pl-6 mt-3 md:mt-5 pr-2 py-1.5 md:py-2 text-sm md:text-base whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 touch-manipulation">
                                    View
                                    <Icon name="pixelarticons:arrow-right" class="text-white text-xl md:text-2xl -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const products = ref([
    {
        id: 1,
        name: 'DWALLET',
        description: 'Introducing DWallet, your trusted companion for managing and securing your digital assets. Designed with both security and user experience in mind.',
        image: '/images/dwalletproduct.webp',
        logo: '/images/logo.svg',
        bgPattern: '/images/product-bg-pattern.webp',
        link: '/products/dwallet'
    },
    {
        id: 2,
        name: 'DBANK',
        description: 'DBank is a secure and user-friendly staking platform that allows you to earn passive income by staking your digital assets.',
        image: '/images/dbankproduct.webp',
        logo: '/images/dbanklogo.svg',
        bgPattern: '/images/product-bg-pattern.webp',
        link: '/products/dbank'
    }
])

// Touch interaction handling
const touchStartY = ref(0)
const touchEndY = ref(0)

const handleTouchStart = (e: TouchEvent) => {
    touchStartY.value = e.touches[0].clientY
}

const handleTouchMove = (e: TouchEvent) => {
    touchEndY.value = e.touches[0].clientY
}

const handleTouchEnd = (e: TouchEvent) => {
    const touchDiff = touchStartY.value - touchEndY.value
    if (Math.abs(touchDiff) > 50) {
        // Significant touch movement detected
        const target = e.currentTarget as HTMLElement
        gsap.to(target, {
            scale: 0.98,
            duration: 0.2,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(target, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out'
                })
            }
        })
    }
}

// Animation for products section
onMounted(() => {
    const productsRef = ref<HTMLElement | null>(null)
    
})
</script>

<style scoped>
.fade-stagger-enter-active,
.fade-stagger-leave-active {
    transition: all 0.5s ease;
}

.fade-stagger-enter-from,
.fade-stagger-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
}

/* Touch device optimizations *
/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    .animate-fade-in {
        animation: none;
        opacity: 1;
    }
    
    .product-card {
        transition: none;
    }
}
</style>