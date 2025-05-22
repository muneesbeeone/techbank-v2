<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
    <div class="mb-8 flex items-center font-ninetea gap-2">
      <NuxtLink to="/careers"
        class="flex items-center gap-2 text-xs text-white bg-[#232323] px-4 py-2 rounded-full font-ninetea hover:bg-[#181818] transition shadow">
        <Icon name="mdi:arrow-left" class="text-lg" />
        Back
      </NuxtLink>
    </div>
    <div class="max-w-4xl mx-auto">
      <div>
        <span class="text-[#888] text-xs">HOME / </span>
        <span class="text-xs text-[#888] uppercase tracking-wider">Career</span>
        <span class="text-[#888] text-xs"> / </span>
        <span class="text-xs text-white uppercase tracking-wider">{{ job.title }}</span>
      </div>
      <div class="flex flex-col gap-5 mb-6 mt-5">
        <h1 class="text-2xl md:text-3xl font-ninetea text-white uppercase tracking-wide">{{ job.title }}</h1>
        <div class="flex gap-2">
          <button
            class="bg-transparent border border-white text-white px-4 py-2 rounded-full flex items-center gap-2 font-ninetea text-xs hover:bg-[#181818] transition shadow">
            <Icon name="pixel:share" class="text-lg" />
            Share
          </button>
          <NuxtLink :to="`/careers/${route.params.id}`"
            class="bg-button-gradient text-white px-8 py-2 rounded-full flex items-center gap-2 font-ninetea text-base font-semibold shadow">
            Apply
            <Icon name="pixelarticons:arrow-right" class="text-white text-xl -rotate-45" />
          </NuxtLink>
        </div>
      </div>
      <div class=" rounded-xl mb-6">
        <div class="flex items-center gap-2 mb-4">
          <Icon name="pixel:info-circle" class="text-white" />
          <h2 class="text-white font-ninetea text-xl tracking-wide">ABOUT</h2>
        </div>
        <div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]"></div>
        <div class="flex flex-wrap gap-2 mt-5 mb-4">
          <span class="flex items-center gap-1 bg-[#120033] text-white text-xs px-3 py-1 rounded-full font-ninetea">
            <Icon name="mingcute:flash-fill" class="text-white text-base" /> {{ job.experience }}+ Years Experience
          </span>
          <span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea">
            <Icon name="mdi:map-marker" class="text-white text-base" /> {{ job.location }}
          </span>
          <span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea">
            <Icon name="mdi:clock-outline" class="text-white text-base" /> {{ job.time }}
          </span>
        </div>
        <p class="text-[#C0C0C0] font-ninetea text-sm">{{ job.description }}</p>
      </div>
      <div class="">
        <div class="flex items-center gap-2 mb-4">
          <Icon name="pixelarticons:bullseye-arrow" class="text-white" />
          <h2 class="text-white font-ninetea text-xl tracking-wide">REQUIREMENTS</h2>
        </div>
        <div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]"></div>
        <ul class="text-[#C0C0C0] font-ninetea text-base space-y-2 mt-5">
          <li v-for="(item, idx) in job.requirements" :key="idx" class="flex items-start gap-2">
            <Icon name="pixelarticons:sun" class="text-white text-base mt-0.5" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="">
        <div class="flex items-center gap-2 mb-4 mt-5">
          <Icon name="pixelarticons:bullseye-arrow" class="text-white" />
          <h2 class="text-white font-ninetea uppercase text-xl tracking-wide">responsibilities</h2>
        </div>
        <div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]"></div>
        <ul class="text-[#C0C0C0] font-ninetea text-base space-y-2 mt-5">
          <li v-for="(item, idx) in job.responsibilities" :key="idx" class="flex items-start gap-2">
            <Icon name="pixelarticons:sun" class="text-white text-base mt-0.5" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const jobs = [
  {
    title: "Product Designer",
    openings: "1",
    experience: '2',
    location: "Kochi",
    time: "Full Time",
    isNew: true,
    description: "We're on the hunt for a Product Designer who's ready to push boundaries! If you're all about building cutting-edge decentralized solutions and want to be part of an innovative, fun team, we'd love to hear from you. Hit us up!",
    responsibilities: [
      "Understand product specifications and user psychology",
      "Conduct concept and usability testing and gather feedback",
      "Create personas through user research and data",
      "Define the right interaction model and evaluate its success",
      "Develop wireframes and prototypes based on requirements",
      "Find creative ways to solve UI/UX problems (e.g. usability, responsive and findability)",
      "Keep abreast of competitor products and industry trends",
      "Knowledge in cryptocurrency and experience with payment/finance related apps is a big plus."
    ],
    requirements: [
      "1-3 years of proven experience as a UI/UX Designer",
      "Familiarity with interaction design and information architecture",
      "Proficient in design and development software (e.g.Figma, XD and HTML,CSS etc)",
      "Problem-solving aptitude"
    ]
  },
  {
    title: "Manuel Tester",
    openings: "1",
    experience: '2',
    location: "Kochi",
    time: "Full Time",
    isNew: false,
    description: "We are looking for a dedicated QA Engineer (Manual and Automation Testing) with a passion for quality assurance and a strong commitment to delivering exceptional software products. If you possess the required skills and experience, we encourage you to apply for this position.",
    responsibilities: [
      "Identify and assess risks associated with software testing and communicate them effectively to the project team.",
      "Prepare comprehensive test reports documenting test results, including identified bugs, issues, and recommendations.",
      "Develop detailed test cases based on project requirements and execute them meticulously.",
      "Execute tests, report bugs using bug tracking tools, and diligently follow up on bugs until closure.",
      "Coordinate QA activities within the project team to ensure timely delivery of high-quality software.",
      "Provide regular status updates on testing progress and escalate any critical issues or delays as needed.",
      "Automate regression test cases using industry-standard automation tools and frameworks such as Selenium or Cucumber.",
      "Handle multiple projects simultaneously and prioritize tasks effectively to meet project deadlines."
    ],
    requirements: [
      "Experience in both manual and automation testing methodologies.",
      "Proficiency in testing tools and processes, with hands-on experience in test automation tools.",
      "Automation experience, with proficiency in Selenium and/or Cucumber preferred.",
      "Basic understanding of SQL for database testing purposes.",
      "Knowledge of programming languages such as Java or C# for writing automation scripts.",
      "Experience in testing REST APIs is preferred.",
      "Exposure to security and performance testing concepts is an advantage.",
      "Familiarity with tools like Jenkins, Maven, TestNG, and Jira is desirable."
    ]
  }
]

const route = useRoute()
const job = jobs[parseInt(route.params.id, 10) - 1]
</script>