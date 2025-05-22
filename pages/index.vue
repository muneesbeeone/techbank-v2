<template>
    <!-- Hero Section -->
    <div ref="heroRef" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden">
            <nuxt-img src="/images/hero-bg.svg" alt="TechBank Logo" width="100%" height="100%"
                class="w-full h-auto object-cover rounded-lg shadow-lg" />
            <div class="absolute bottom-0 w-full h-full flex flex-col items-center justify-end rounded-lg py-10">
                <!-- <div class="absolute inset-0 w-full h-full flex  items-center justify-center bottom-0"> -->
                <!-- <video autoplay loop muted playsinline class="h-auto">
                        <source src="/videos/hero-comp.webm" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> -->
                <div class="absolute w-full h-full flex items-center justify-center">
                    <img ref="compRef" src="/images/comp.gif" alt="TechBank Animation"
                        class="w-[300px] h-auto object-cover rotate-[20deg] transition-all duration-300" />
                </div>
                <!-- </div> -->
                <h3 ref="headerRef"
                    class="md:text-[94px] text-2xl text-[#000000] font-bold text-center mb-4 relative font-nyx tracking-wider leading-[102px]">
                    Engineering</h3>
                <h3 ref="header2Ref"
                    class="md:text-[94px] text-2xl -mt-8 text-[#000000] font-bold text-center mb-4 relative font-nyx tracking-wider leading-[102px]">
                    The Future</h3>
                <div class="flex items-center gap-10 max-w-xl">
                    <span class="text-[16px]  text-[#8D8D8D] font-ninetea">Empowering Businesses, Enabling Growth
                        TechBank’s Products for Success</span>
                    <button
                        class="bg-button-gradient font-ninetea text-white pl-6 pr-2 py-2 whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700">
                        Get Started
                        <span class="bg-white h-8 w-8 flex items-center justify-center ml-0  rounded-full">
                            <Icon name="mynaui:arrow-long-up-right" class="text-[#8501A6] font-bold" />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    </div>
    <!-- About Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 grid-cols-1 gap-20 lg:px-8 py-28">
        <div>
            <nuxt-img src="/images/hero-bg.svg" alt="TechBank Logo"
                class="w-fit h-fit  rounded-lg shadow-lg" />
        </div>
        <div class="flex text-block flex-col items-start">
            <h2 ref="aboutRef" data-final-text="About"
                class="text-[40px] text-[#FFFFFF] scramble-header font-bold mb-4 font-nyx tracking-wider leading-[102px]">
                About</h2>
            <p class="text-[16px] text-[#8D8D8D] font-ninetea text-start max-w-2xl mb-10">TechBank is a blockchain
                product company creating decentralized tools like TechBank, Dbank, and Dwallet to simplify digital
                finance. We empower users with secure, transparent, and user-friendly solutions for managing assets in
                the Web3 world.</p>
            <div class="flex divide-x divide-[#C0C0C03D]">
                <div class="pr-8">
                    <h3 class="font-nyx text-3xl">4</h3>
                    <p class="font-ninetea text-base text-[#C0C0C0]">Products</p>
                </div>
                <div class="px-8">
                    <h3 class="font-nyx text-3xl">2000+</h3>
                    <p class="font-ninetea text-base text-[#C0C0C0]">Active Users</p>
                </div>
                <div class="pl-8">
                    <h3 class="font-nyx text-3xl">1M+</h3>
                    <p class="font-ninetea text-base text-[#C0C0C0]">Downloads</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Products Section -->
    <div class="relative">
        <div class="bg-[#010101]">
            <div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
        </div>
        <div class="absolute w-full bottom-0 blur-[60px] -rotate-[10deg]">
            <div class="flex items-center justify-center bottom-0 h-10 bg-gradient-to-b from-[#3A0696] to-[#C740FF]">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
            <div class="text-center">
                <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">Innovative</p>
                <h2 ref="productsRef" data-final-text="Products"
                    class="text-[40px] text-[#FFFFFF] scramble-header mx-auto -mt-5 font-nyx tracking-wider leading-[102px]">
                    Products
                </h2>
                <p class="text-[16px] text-[#8D8D8D] -mt-5 font-ninetea mx-auto max-w-2xl mb-10">Explore our innovative
                    products
                    designed to simplify your digital finance experience.</p>
            </div>
            <ProducSwiper />
        </div>
    </div>
    <!-- Technologies Section -->
    <div class="max-w-7xl mx-auto relative px-4 sm:px-6 py-28 lg:px-8 ">
        <div class="text-center">
            <h2 ref="technologiesRef" data-final-text="Technologies"
                class="text-[40px] text-[#FFFFFF] scramble-header mx-auto mt-5 font-nyx tracking-wider leading-[102px]">
                Technologies
            </h2>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-10 ">
            <Icon name="devicon:laravel-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:vuejs-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:nuxtjs-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:nodejs-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:tailwindcss-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:vite-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:webpack-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:vscode-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:mongodb-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="icon-park-twotone:blockchain" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="devicon:mysql-wordmark" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="skill-icons:aws-light" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="token-branded:solana" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="token-branded:tron" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
            <Icon name="token-branded:metamask" class="text-[#BB83FF] text-[100px] mx-auto mt-10" />
        </div>
    </div>
    <!-- Brands Section -->
    <div class="relative overflow-hidden">
        <div class="bg-[#010101]">
            <div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
            <div class="text-center">
                <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">From One Root, Many
                    Branches</p>
                <h2 data-final-text="Our Connected Brands" ref="brandsRef"
                    class="text-[40px] text-[#FFFFFF] scramble-header mx-auto -mt-5 font-nyx tracking-wider leading-[102px]">
                    Our
                    Connected Brands</h2>
            </div>
            <div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
                    <div
                        class="relative overflow-hidden rounded-xl p-[1px] h-fit w-full shadow-lg bg-gradient-to-b from-[#BB83FF] via-[#B1B1B1] to-[#313131]">
                        <div class="bg-[#010101] pt-4 px-4 rounded-xl">
                            <h4 class="text-xl text-white mx-auto font-ninetea">BLUE TIGERS</h4>
                            <p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized,
                                AI-driven interactions.</p>
                            <div class="-mt-6 flex items-center gap-5">
                                <a href="#" target="_blank">
                                    <Icon name="ph:linkedin-logo" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="ph:instagram-logo" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="hugeicons:new-twitter" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="teenyicons:youtube-outline"
                                        class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                            </div>
                            <nuxt-img src="/images/bluetigers.webp" alt="TechBank Logo" width="100%" height="100%"
                                class="w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div
                        class="relative overflow-hidden rounded-xl p-[1px] h-fit w-full shadow-lg bg-gradient-to-b from-[#BB83FF] via-[#B1B1B1] to-[#313131]">
                        <div class="bg-[#010101] pt-4 px-4 rounded-xl">
                            <h4 class="text-xl text-white mx-auto font-ninetea">KOCHI BLUE TIGERS</h4>
                            <p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized,
                                AI-driven interactions.</p>
                            <div class="-mt-6 flex items-center gap-5">
                                <a href="#" target="_blank">
                                    <Icon name="ph:linkedin-logo" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="ph:instagram-logo" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="hugeicons:new-twitter" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="teenyicons:youtube-outline"
                                        class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                            </div>
                            <nuxt-img src="/images/kochibluetigers.webp" alt="TechBank Logo" width="100%" height="100%"
                                class="w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div
                        class="relative overflow-hidden rounded-xl p-[1px] h-fit w-full shadow-lg bg-gradient-to-b from-[#BB83FF] via-[#B1B1B1] to-[#313131]">
                        <div class="bg-[#010101] pt-4 px-4 rounded-xl">
                            <h4 class="text-xl text-white mx-auto font-ninetea">BLUE TIGERS LONDON</h4>
                            <p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized,
                                AI-driven interactions.</p>
                            <div class="-mt-6 flex items-center gap-5">
                                <a href="#" target="_blank">
                                    <Icon name="ph:linkedin-logo" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="ph:instagram-logo" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="hugeicons:new-twitter" class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                                <a href="#" target="_blank">
                                    <Icon name="teenyicons:youtube-outline"
                                        class="text-white text-[100px] w-6 mx-auto" />
                                </a>
                            </div>
                            <nuxt-img src="/images/bluetigerslondon.webp" alt="TechBank Logo" width="100%" height="100%"
                                class="w-full h-auto object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog Section -->
    <div class="relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-28 lg:px-8">
            <div class="text-center">
                <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">Techbank</p>
                <h2 ref="blogsRef" data-final-text="Blogs"
                    class="text-[40px] scramble-header text-[#FFFFFF] mx-auto -mt-5 font-nyx tracking-wider leading-[102px]">
                    Blogs
                </h2>
            </div>
            <BlogSwiper />
        </div>
    </div>
    
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(SplitText, ScrambleTextPlugin)

const compRef = ref(null)
const heroRef = ref(null)
const headerRef = ref(null)
const header2Ref = ref(null)

const animateScramble = (el) => {
  if (!el || el.classList.contains('scrambling')) return

  el.classList.add('scrambling')
  const finalText = el.dataset.finalText || el.textContent

  gsap.fromTo(el, {
    scrambleText: {
      text: '',
      chars: '!@#$%^&*1234567890',
      revealDelay: 0.5,
      speed: 0.3
    }
  }, {
    duration: 1,
    scrambleText: {
      text: finalText,
      chars: '!@#$%^&*1234567890',
      newClass: 'revealed'
    },
    ease: 'power2.out',
    onComplete: () => el.classList.remove('scrambling')
  })
}

onMounted(() => {
  // 🌀 Parallax effect on compRef inside heroRef
  const comp = compRef.value
  const hero = heroRef.value

  if (comp && hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(comp, {
        x: x * 1,
        y: y * 1,
        duration: 2,
        ease: 'power2.out'
      })
    })

    hero.addEventListener('mouseleave', () => {
      gsap.to(comp, {
        x: 0,
        y: 0,
        duration: 0.1,
        ease: 'power2.out'
      })
    })
  }

  // 🔡 SplitText hover scramble effect
  const textBlock = document.querySelector('.text-block')
  if (textBlock) {
    const st = SplitText.create('p', {
      type: 'chars',
      charsClass: 'char'
    })

    st.chars.forEach((char) => {
      gsap.set(char, { attr: { 'data-content': char.innerHTML } })
    })

    textBlock.onpointermove = (e) => {
      st.chars.forEach((char) => {
        const rect = char.getBoundingClientRect()
        const dx = e.clientX - (rect.left + rect.width / 2)
        const dy = e.clientY - (rect.top + rect.height / 2)
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 100) {
          gsap.to(char, {
            overwrite: true,
            duration: 1.2 - dist / 100,
            scrambleText: {
              text: char.dataset.content,
              chars: '.:',
              speed: 0.5
            },
            ease: 'none'
          })
        }
      })
    }
  }

  // 👀 IntersectionObserver for all scramble headers
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateScramble(entry.target)
      }
    })
  }, {
    threshold: 0.5
  })

  // Start observing static refs + dynamic DOM elements
  const headers = [headerRef.value, header2Ref.value]
  headers.forEach(header => header && observer.observe(header))
  document.querySelectorAll('.scramble-header').forEach(el => observer.observe(el))
})
</script>
