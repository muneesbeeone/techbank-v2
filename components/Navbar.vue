<template>
  <nav class="bg-transparent absolute w-full text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
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
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NuxtLink 
              to="/" 
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path.startsWith('/about') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            >
              About
            </NuxtLink>
            <NuxtLink 
              to="/team" 
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path.startsWith('/services') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            >
              Team
            </NuxtLink>
            <NuxtLink 
              to="/careers" 
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path.startsWith('/careers') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            >
              Careers
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[$route.path.startsWith('/contact') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            >
              Contact
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
      class="md:hidden"
      :class="{'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink 
          to="/" 
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[$route.path === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[$route.path.startsWith('/about') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/team" 
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[$route.path.startsWith('/services') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
        >
          Team
        </NuxtLink>
        <NuxtLink 
          to="/careers" 
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[$route.path.startsWith('/careers') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
        >
          Careers
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[$route.path.startsWith('/contact') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)
</script> 