<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">BUILD THE FUTURE WITH US
            </p>
            <h2 ref="blogsRef" data-final-text="Blogs"
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider leading-[102px]">
                Careers
            </h2>
        </div>
        <div class="grid grid-cols-1 gap-6 py-10">
            <div
                v-for="(job, idx) in jobs"
                :key="idx"
                class="relative flex flex-col md:flex-row items-center md:items-stretch justify-between bg-[#181818] border border-[#3B2A5A] rounded-2xl shadow-lg"
            >
                <div class="flex flex-col md:flex-row md:items-center gap-4 w-full  px-4 md:px-8 py-4 md:py-6">
                    <div class="flex items-center gap-3 mb-2 md:mb-0">
                        <span v-if="job.isNew" class="bg-green-600 text-white text-xs absolute -top-3 left-2  px-3 py-1 rounded-full">NEW</span>
                        <span class="text-white font-bold text-base md:text-xl font-ninetea">{{ job.title }}</span>
                    </div>
                    <div class="flex flex-wrap gap-2 md:ml-6">
                        <span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea border border-[#2B184E]">
                            <Icon name="mdi:flash" class="text-purple-400 text-base" /> {{ job.experience }}+ Years Experience
                        </span>
                        <span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea border border-[#2B184E]">
                            <Icon name="mdi:map-marker" class="text-purple-400 text-base" /> {{ job.location }}
                        </span>
                        <span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea border border-[#2B184E]">
                            <Icon name="mdi:clock-outline" class="text-purple-400 text-base" /> {{ job.time }}
                        </span>
                    </div>
                </div>
                <div class="flex justify-end px-4 md:px-8 py-4 md:py-6">
                    <NuxtLink
                    :to="`/careers/${idx+1}`"
                    class="ml-0 md:ml-8 mt-4 md:mt-0 bg-button-gradient text-white font-ninetea px-8 py-2 rounded-full flex items-center font-thin gap-2 whitespace-nowrap transition-all text-base"
                >
                View Details <Icon name="pixelarticons:arrow-right" class="text-white text-2xl -rotate-45"/>
                </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const jobs = [
    {
        title: "Product Designer",
        openings: "1",
        experience: '2',
        location: "Kochi",
        time: "Full Time",
        isNew: true,
        description: "We are looking for a talented UI/UX Designer to join our growing team. Experience in design tools like Photoshop and illustrator, prototyping tools like Figma/Adobe.",
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
        description: "We are looking for a dedicated QA Engineer (Manual and Automation Testing) with a passion for quality assurance and a strong commitment to delivering exceptional software products.If you possess the required skills and experience, we encourage you to apply for this position.",
        responsibilities:[
            "Identify and assess risks associated with software testing and communicate them effectively to the project team.",
            "Prepare comprehensive test reports documenting test results, including identified bugs, issues, and recommendations.",
            "Develop detailed test cases based on project requirements and execute them meticulously.",
            "Execute tests, report bugs using bug tracking tools, and diligently follow up on bugs until closure.",
            "Coordinate QA activities within the project team to ensure timely delivery of high-quality software.",
            "Provide regular status updates on testing progress and escalate any critical issues or delays as needed.",
            "Automate regression test cases using industry-standard automation tools and frameworks such as Selenium or Cucumber.",
            " Handle multiple projects simultaneously and prioritize tasks effectively to meet project deadlines."
        ],
        requirements:[
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
</script>