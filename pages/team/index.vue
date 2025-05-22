<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">Meet the Team Shaping the
                Future.
            </p>
            <h2 ref="blogsRef" data-final-text="Blogs"
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider leading-[102px]">
                TEAMS
            </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
            <div v-for="member in team" :key="member.id"
                class="relative overflow-hidden h-fit w-full flex flex-col items-center p-6">
                <nuxt-img src="/images/team-card.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full absolute top-0 left-0" />
                <div class="relative text-center h-full w-full">
                    <nuxt-img src="/images/badge.webp" alt="TechBank Badge" width="100%" height="100%"
                        class="absolute bottom-[80px] w-[80px] -right-4 -rotate-12 hover:rotate-0 transition-all duration-300" />
                    <img :src="member.photo" :alt="member.name" class=" object-cover" />
                    <div class="absolute bottom-0 bg-gradient-to-t from-[#000] to-transparent left-0 w-full p-4">
                        <h3 class="text-xl tracking-wider text-white leading-none font-nyx">{{ member.name }}</h3>
                        <p class="text-sm text-[#C0C0C0] font-ninetea">{{ member.designation }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const team = ref([])

onMounted(async () => {
    const res = await fetch('/team.json')
    team.value = await res.json()
})
</script>