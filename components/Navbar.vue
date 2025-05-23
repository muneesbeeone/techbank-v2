<template>
  <nav class="md:bg-gradient-to-b md:from-black md:to-transparent fixed font-ninetea w-full text-white z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center min-w-[180px]">
          <NuxtLink to="/" class="flex items-center">
            <nuxt-img 
              src="/images/logo.svg" 
              alt="TechBank Logo" 
              width="40" 
              height="40" 
              class="h-8 w-8 mr-2"
            />
            <span class="text-xl font-bold text-white">TechBank</span>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex flex-1 justify-center">
          <div class="flex items-center space-x-6">
            <NuxtLink 
              to="/" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path === '/' ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Home
            </NuxtLink>
            <div class="h-5 w-px bg-gray-700"></div>
            <NuxtLink 
              to="/products" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path.startsWith('/products') ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Products
            </NuxtLink>
            <div class="h-5 w-px bg-gray-700"></div>
            <NuxtLink 
              to="/team" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path.startsWith('/team') ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Teams
            </NuxtLink>
            <div class="h-5 w-px bg-gray-700"></div>
            <NuxtLink 
              to="/careers" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path.startsWith('/careers') ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Career
            </NuxtLink>
            <!-- <div class="h-5 w-px bg-gray-700"></div>
            <NuxtLink 
              to="/blogs" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path.startsWith('/blogs') ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Blog
            </NuxtLink> -->
          </div>
        </div>

        <!-- Contact Us Button -->
        <div class="hidden md:flex min-w-[180px] justify-end">
          <NuxtLink
            to="/contact"
            class="border border-white text-white px-5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              class="h-6 w-6" 
              :class="{'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen}"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-6 w-6" 
              :class="{'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      class="md:hidden w-fit transition-all duration-300 ease-in-out"
      :class="{'opacity-100 translate-y-0': isMobileMenuOpen, 'opacity-0 -translate-y-2 pointer-events-none': !isMobileMenuOpen}"
    >
      <div class="relative px-0 pt-0 pb-0">
        <div class="absolute inset-0 w-full h-full z-0">
          <img src="/images/mob-nav-bg.svg" alt="Mobile Nav BG" class="w-full h-full object-cover rounded-[40px]" />
        </div>
        <nav class="relative z-10 flex flex-col gap-2 p-6 min-w-[250px] rounded-[40px] shadow-2xl">
          <NuxtLink 
            to="/" 
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path === '/' ? 'text-purple-300 bg-white/10' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:home-2-bold-duotone" class="text-xl" />
            Home
          </NuxtLink>
          <NuxtLink 
            to="/products" 
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/products') ? 'text-purple-300 bg-white/10' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:heart-bold-duotone" class="text-xl" />
            Products
          </NuxtLink>
          <NuxtLink 
            to="/team" 
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/team') ? 'text-purple-300 bg-white/10' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:users-group-rounded-bold-duotone" class="text-xl" />
            Teams
          </NuxtLink>
          <NuxtLink 
            to="/careers" 
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/careers') ? 'text-purple-300 bg-white/10' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:user-plus-bold-duotone" class="text-xl" />
            Career
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/blog') ? 'text-purple-300 bg-white/10' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:pen-2-bold-duotone" class="text-xl" />
            Blog
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/contact') ? 'text-purple-300 bg-white/10' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:letter-bold-duotone" class="text-xl" />
            Contact Us
          </NuxtLink>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)
</script> 