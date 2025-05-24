<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:px-8">
        <div class="text-center">
            <p class="text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-in">TECHBANK PRODUCTS</p>
            <h1 ref="headerRef" data-final-text="DBANK"
                class="text-3xl md:text-[40px] lg:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider leading-[1.2] md:leading-[102px]">
                DBANK
            </h1>
            <div class="mx-auto text-xs md:text-sm font-ninetea text-center max-w-2xl mt-2">
                <NuxtLink class="text-[#848484] hover:text-[#BB83FF] transition-colors duration-300" to="/products">PRODUCTS</NuxtLink>/
                <NuxtLink class="text-[#FFFFFF] hover:text-[#BB83FF] transition-colors duration-300" to="/products/dbank">DBANK</NuxtLink>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8 md:py-10">
            <div class="relative overflow-hidden rounded-2xl md:rounded-3xl h-[300px] md:h-[600px] w-full transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] touch-manipulation">
                <OptimizedImage 
                    src="/images/dbankproduct.webp" 
                    alt="DBank Interface" 
                    width="100%" 
                    height="100%"
                    loading="eager"
                    containerClass="w-full h-full object-cover"
                    imageClass="w-full h-full object-cover"
                />
            </div>
            <div class="flex flex-col justify-between gap-6 md:gap-10">
                <p class="text-base md:text-[20px] text-[#C0C0C0] font-ninetea">Dbank is a next-generation crypto staking platform
                    designed to help users grow their digital assets
                    effortlessly. By leveraging the power of blockchain protocols, Dbank allows you to earn passive
                    income through secure and transparent staking mechanisms. Whether you're staking ETH, stablecoins,
                    or other PoS-based tokens, Dbank ensures optimized yields, minimal risk, and full control over your
                    crypto.</p>
                <div class="flex divide-x divide-[#C0C0C03D] w-full justify-center md:justify-start">
                    <div class="px-4 md:pr-8">
                        <h3 class="font-nyx text-2xl md:text-3xl">4.5+</h3>
                        <p class="font-ninetea text-sm md:text-base text-[#C0C0C0]">Rating</p>
                    </div>
                    <div class="px-4 md:px-8">
                        <h3 class="font-nyx text-2xl md:text-3xl">2000+</h3>
                        <p class="font-ninetea text-sm md:text-base text-[#C0C0C0]">Active Users</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                    <OptimizedImage 
                        src="/images/dbankqr.svg" 
                        alt="DBank QR Code" 
                        width="100%" 
                        height="100%"
                        loading="eager"
                        containerClass="w-28 h-28 hidden md:block md:w-36 md:h-36"
                        imageClass="w-full h-full"
                    />
                    <a href="https://defeebank.io" target="_blank"
                        class="flex items-center gap-2 ring-[1px] ring-white rounded-full py-2 px-5 w-[180px] h-fit hover:bg-white/10 transition-all duration-300 active:scale-95 touch-manipulation"
                        rel="noopener noreferrer">
                        <Icon name="mynaui:globe" class="text-white text-3xl md:text-[50px]" />
                        <div class="flex flex-col h-fit">
                            <span class="text-xs">Go to</span>
                            <span class="text-[#ffffff] text-sm">Dbank</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="relative">
        <div class="absolute w-full -left-10 bottom-1/2 blur-[80px] -rotate-[10deg]">
            <div class="h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF]"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:px-8">
            <div class="text-center">
                <p class="text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-in">FEATURES</p>
                <h2 ref="featuresRef" data-final-text="Features"
                    class="text-2xl md:text-4xl scramble-header text-[#FFFFFF] mx-auto mt-2 font-ninetea">
                    How Dbank empowers your crypto journey
                </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8 md:py-10">
                <div v-for="(feature, index) in features" :key="index"
                    class="relative overflow-hidden rounded-2xl h-fit w-full shadow-lg bg-[#2B2B2B] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] touch-manipulation">
                    <OptimizedImage 
                        :src="feature.bgPattern" 
                        :alt="feature.title + ' background'" 
                        width="100%" 
                        height="100%"
                        loading="lazy"
                        containerClass="w-full h-full absolute object-cover rounded-[30px] shadow-lg"
                        imageClass="w-full h-full object-cover rounded-[30px] shadow-lg"
                    />
                    <div class="h-full inset-0 p-3 z-10 text-white relative">
                        <div class="flex items-center justify-between relative w-full py-2 px-3">
                            <div class="w-full">
                                <div class="flex justify-center items-center">
                                    <OptimizedImage 
                                        :src="feature.icon" 
                                        :alt="feature.title + ' icon'" 
                                        width="100%" 
                                        height="100%"
                                        loading="lazy"
                                        containerClass="h-[100px] md:h-[130px]"
                                        imageClass="h-full w-auto"
                                    />
                                </div>
                                <h3 class="text-lg md:text-xl mt-3 font-ninetea text-center">{{ feature.title }}</h3>
                                <p class="text-xs md:text-sm text-gray-400 font-ninetea text-center mt-2">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="px-4 sm:px-6 relative pb-8 md:pb-16 lg:px-8">
        <div class="text-center">
            <p class="text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-in">What Our Users Are Saying</p>
            <h2 ref="reviewsRef" data-final-text="Reviews"
                class="text-2xl md:text-4xl scramble-header text-[#FFFFFF] mx-auto mt-2 font-ninetea">
                Real Stories, Real Success
            </h2>
        </div>
        <DbankReviews />
        <div class="absolute w-full left-0 bottom-10 blur-[80px] -rotate-[10deg]">
            <div class="flex items-center justify-center bottom-0 h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF]"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const features = ref([
    {
        title: 'Earn Up to 300% with Dbank Staking',
        description: 'Put your crypto to work and unlock high-yield rewards—up to 300% Dbank makes staking simple, secure, and rewarding.',
        icon: '/images/stack.webp',
        bgPattern: '/images/product-bg-pattern.webp'
    },
    {
        title: 'Effortless Earnings with One-Time Setup',
        description: 'With Dbank, you only need to activate your staking portfolio once, and from there, you can earn daily rewards without lifting a finger.',
        icon: '/images/star.webp',
        bgPattern: '/images/product-bg-pattern.webp'
    }
])

// Animation for sections
onMounted(() => {
    const sections = ['headerRef', 'featuresRef', 'reviewsRef']
    
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
</style>