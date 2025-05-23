<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">BUILD THE FUTURE WITH US
            </p>
            <h2 ref="blogsRef" data-final-text="Blogs"
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider">
                Careers
            </h2>
        </div>
        <div class="flex items-center justify-center -mt-5  relative overflow-x-hidden w-full md:px-10 pl-10">
            <video autoplay loop muted playsinline no-controls
                class="w-[400px] md:w-full max-w-[600px] md:ml-[200px] ml-[150px]">
                <source src="/videos/joinwithus.webm" type="video/webm">
            </video>
        </div>
        <div
            class="md:bg-gradient-to-r md:from-[#E476FF82] md:rounded-2xl md:via-[#DD56FF] md:to-[#FFFFFF] md:p-[1px] md:ml-10 md:-mt-2 -mt-20 relative">
            <div
                class="bg-[#010101] flex flex-col md:flex-row md:items-center rounded-2xl relative shadow-lg md:p-4 gap-5 md:gap-0">
                <div class=" md:absolute md:-left-10 ">
                    <nuxt-img src="/images/career-badge.webp"
                        class="md:w-[130px] -rotate-12 hover:rotate-12 transition-all duration-1000" alt="joinwithus" />
                </div>
                <div class="flex flex-col gap-2 md:pl-20">
                    <span class="text-white text-lg md:text-xl font-ninetea">BUILD THE FUTURE WITH US</span>
                    <p class="text-sm font-ninetea text-[#B3B3B3]">At TechBank, we believe in crafting tech that
                        disrupts.
                        From blockchain protocols to immersive virtual experiences, we're pushing the boundaries of
                        what's possible—and we want bold thinkers, doers, and dreamers to join us.</p>
                </div>
                <div>
                    <button
                        @click="scrollToOpenings"
                        class="bg-button-gradient font-ninetea text-white pl-6 pr-2 py-2 whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700">
                        Apply Now
                        <span class="bg-white h-8 w-8 flex items-center justify-center ml-0  rounded-full">
                            <Icon name="mynaui:arrow-long-up-right" class="text-[#8501A6] font-bold" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="py-10">
            <div class="py-10 flex items-center justify-between">
                <h3 class="text-white text-2xl font-nyx">Open Positions</h3>
                <span class="text-2xl font-nyx text-[#BB83FF]">{{ jobs.length.toString().padStart(2, '0') }}</span>
            </div>
            <div class="grid grid-cols-1 gap-6">
                <div v-for="(job, idx) in jobs" :key="idx"
                    class="relative flex flex-col md:flex-row items-center md:items-stretch justify-between bg-[#181818]  rounded-2xl shadow-lg">
                    <nuxt-img src="/images/product-bg-pattern.webp"
                        class="w-full h-full absolute top-0 left-0 object-cover" alt="job" />
                    <div class="flex flex-col md:flex-row md:items-center  w-full  px-4 md:px-8 py-4 md:py-6 relative">
                        <div class="flex items-center gap-3 mb-2 md:mb-0">
                            <span v-if="job.isNew"
                                class="bg-green-600 text-white text-xs absolute -top-3 left-2  px-3 py-1 rounded-full">NEW</span>
                            <span class="text-white font-bold text-base md:text-xl font-ninetea">{{ job.title }}</span>
                        </div>
                        <div class="flex flex-wrap gap-1 md:ml-6">
                            <span
                                class="flex items-center gap-1 bg-[#120033] text-white text-xs px-1 py-1 rounded-full font-ninetea  ">
                                <Icon name="mingcute:flash-fill" class=" text-base" /> {{ job.experience }}+ Years
                                Experience
                            </span>
                            <span
                                class="flex items-center gap-1 bg-[#000000] text-white text-xs px-1 py-1 rounded-full font-ninetea  ">
                                <Icon name="mdi:map-marker" class=" text-base" /> {{ job.location }}
                            </span>
                            <span
                                class="flex items-center gap-1 bg-[#000000] text-white text-xs px-1 py-1 rounded-full font-ninetea  ">
                                <Icon name="mdi:clock-outline" class=" text-base" /> {{ job.time }}
                            </span>
                        </div>
                    </div>
                    <div class="flex w-full md:justify-end px-4 md:px-8 py-2 md:py-6 -mt-2 md:mt-0 relative">
                        <NuxtLink :to="`/careers/${idx + 1}`"
                            class="bg-button-gradient text-white font-ninetea px-8 py-2 rounded-full flex items-center font-thin gap-2 whitespace-nowrap transition-all text-base">
                            View Details
                            <Icon name="pixelarticons:arrow-right" class="text-white text-2xl -rotate-45" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const jobs = [
    {
        title: "Blockchain Lead",
        openings: "1",
        experience: '5',
        location: "Kochi",
        time: "Full Time",
        isNew: true,
        description: "We're on the hunt for a Blockchain Lead Developer who's ready to push boundaries! 🔗🚀 If you're all about building cutting-edge decentralized solutions and want to be part of an innovative, fun team, we'd love to hear from you. Hit us up!",
        responsibilities: [
        ],
        requirements: [
            "Experience : 5+ years in Blockchain and Node.js development.",
            "Required Skills : Web3, Solidity, Node.js, EVM-based chains.",
            "Knowledge in : React / Vue, Golang.",
            "Experience with DeFi projects - Uniswap Protocols."
        ]
    },
    {
        title: "Content Writer",
        openings: "1",
        experience: '3',
        location: "Kochi",
        time: "Full Time",
        isNew: true,
        description: "We're looking for a Content Writer who can craft engaging and high-quality content! ✍️✨ If you have a knack for research, creating compelling articles, scripts, and social media posts—and anchoring skills as a bonus—we want you on our team! 🚀 Hit us up!",
        responsibilities: [
        ],
        requirements: [
            "Write engaging and high-quality content.",
            "Research and create compelling articles, scripts, and social media posts.",
            "Knowledge of anchoring skills is an added advantage.",
        ]
        },
        {
            title: "Content Creator",
            openings: "1",
            experience: '3',
            location: "Kochi",
            time: "Full Time",
            isNew: true,
            description: "We're on the lookout for a Content Creator & Presenter who can plan, script, and deliver high-quality videos! 🎥✨ If you're confident on camera and can present fluently in English & Malayalam, we want you on our team. 🚀 Let's create something amazing—hit us up!",
            responsibilities: [
            ],
            requirements: [
                "Plan, Script, Present high quality videos.",
                "Confidently Present on camera.",
                "Handle English & Malayalam Presentation Videos.",
            ]
        },
        {
            title: "Jr. Graphic Designer",
            openings: "1",
            experience: '0-2',
            location: "Kochi",
            time: "Full Time",
            isNew: true,
            description: "We're on the lookout for a Content Creator & Presenter who can plan, script, and deliver high-quality videos! 🎥✨ If you're confident on camera and can present fluently in English & Malayalam, we want you on our team. 🚀 Let's create something amazing—hit us up!",
            responsibilities: [
            ],
            requirements: [
                "Proficiency in Adobe Photoshop, Illustrator, and basic knowledge of After Effects or Premiere Pro is a plus.",   
                "Basic understanding of design principles, color theory, and typography.",
                "Ability to take direction and work collaboratively in a fast-paced environment.",
                "Strong attention to detail and creativity.",
                "Portfolio showcasing previous work (even academic or freelance projects).",
            ]
        }
]

const scrollToOpenings = () => {
    const openingsSection = document.querySelector('.py-10')
    if (openingsSection) {
        openingsSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>