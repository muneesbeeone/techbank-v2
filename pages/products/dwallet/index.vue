<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">TECHBANK PRODUCTS
            </p>
            <h1 ref="blogsRef" data-final-text="Blogs"
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider leading-[102px]">
                DWALLET
            </h1>
            <div class="mx-auto text-sm font-ninetea text-center max-w-2xl">
                <NuxtLink class="text-[#848484]" to="/products">PRODUCTS</NuxtLink>/
                <NuxtLink class="text-[#FFFFFF]" to="/products/dwallet">DWALLET</NuxtLink>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            <div class="relative overflow-hidden rounded-3xl h-[600px] w-full">
                <nuxt-img src="/images/dwalletproduct.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col justify-between gap-10">
                <p class="text-[#C0C0C0] text-[20px] font-ninetea">Dwallet is your secure gateway to the world of
                    digital assets. Built with cutting-edge encryption and an intuitive user experience, Dwallet
                    empowers individuals to safely store, manage, and transact cryptocurrencies with ease. Whether
                    you're a beginner exploring blockchain or an experienced trader managing a diverse portfolio</p>
                <div class="flex divide-x divide-[#C0C0C03D]">
                    <div class="pr-8">
                        <h3 class="font-nyx text-3xl">4.5+</h3>
                        <p class="font-ninetea text-base text-[#C0C0C0]">Rating</p>
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
                <div class="flex gap-10 items-center">
                    <nuxt-img src="/images/dbankqr.svg" alt="TechBank Logo" width="100%" height="100%"
                        class="w-36 h-36" />
                    <div class="flex flex-col gap-5">
                        <a href="https://defeebank.io" target="_blank"
                            class="flex items-center gap-2 ring-[1px] ring-white rounded-full py-2 px-5 w-[180px] h-fit"
                            rel="noopener noreferrer">
                            <Icon name="ic:baseline-apple" class="text-white text-[40px]" />
                            <div class="flex flex-col h-fit">
                                <span class="text-xs">Download on the</span>
                                <span class="text-[#ffffff] text-sm">App Store</span>
                            </div>
                        </a>
                        <a href="https://defeebank.io" target="_blank"
                            class="flex items-center gap-2 ring-[1px] ring-white rounded-full py-2 px-5 w-[180px] h-fit"
                            rel="noopener noreferrer">
                            <Icon name="logos:google-play-icon" class="text-white text-[40px]" />
                            <div class="flex flex-col h-fit">
                                <span class="text-xs">Download on the</span>
                                <span class="text-[#ffffff] text-sm">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="relative">
        <div class="absolute w-full -left-10 bottom-1/2 blur-[80px] -rotate-[10deg]">
            <div class="h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF]">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
            <div class="text-center">
                <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">FEATURES
                </p>
                <h2 ref="blogsRef" data-final-text="Blogs"
                    class="text-4xl scramble-header text-[#FFFFFF] mx-auto mt-2 font-ninetea">
                    How Dwallet empowers your crypto journey
                </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                <div class="relative overflow-hidden rounded-2xl h-fit w-full shadow-lg bg-[#2B2B2B]">
                    <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                        class="w-full h-full absolute object-cover rounded-[30px] shadow-lg" />
                    <div class=" h-full inset-0 p-3 z-10 text-white relative">
                        <div class="flex items-center justify-between relative w-full py-2 px-3">
                            <div class="spa">
                                <div class="flex justify-center items-center ">
                                    <nuxt-img src="/images/secure.webp" alt="TechBank Logo" width="100%" height="100%"
                                        class="h-[130px]" />
                                </div>
                                <h3 class="text-xl mt-3 font-ninetea ">Secure & Manage Your Crypto</h3>
                                <p class="text-sm text-gray-400 font-ninetea">Send, Receive, and Swap Crypto – All with
                                    Advanced Security at Your Fingertips.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden rounded-2xl h-fit w-full shadow-lg bg-[#2B2B2B]">
                    <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                        class="w-full h-full absolute object-cover rounded-[30px] shadow-lg" />
                    <div class=" h-full inset-0 p-3 z-10 text-white relative">
                        <div class="flex items-center justify-between relative w-full py-2 px-3">
                            <div class="spa">
                                <div class="flex justify-center items-center ">
                                    <nuxt-img src="/images/multiwallet.webp" alt="TechBank Logo" width="100%"
                                        height="100%" class="h-[130px]" />
                                </div>
                                <h3 class="text-xl mt-3 font-ninetea ">Multinetwork Support</h3>
                                <p class="text-sm text-gray-400 font-ninetea">Send, Receive, and Swap Across Networks
                                    All-In-One Secure Solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-hidden rounded-2xl h-fit w-full shadow-lg bg-[#2B2B2B]">
                    <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                        class="w-full h-full absolute object-cover rounded-[30px] shadow-lg" />
                    <div class=" h-full inset-0 p-3 z-10 text-white relative">
                        <div class="flex items-center justify-between relative w-full py-2 px-3">
                            <div class="spa">
                                <div class="flex justify-center items-center ">
                                    <nuxt-img src="/images/singleseed.webp" alt="TechBank Logo" width="100%"
                                        height="100%" class="h-[130px]" />
                                </div>
                                <h3 class="text-xl mt-3 font-ninetea ">Single Seed  Multi Wallets</h3>
                                <p class="text-sm text-gray-400 font-ninetea">Keeps your data protected with top-tier encryption.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="px-4 sm:px-6 relative pb-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">What Our Users Are Saying
            </p>
            <h2 ref="blogsRef" data-final-text="Blogs"
                class="text-4xl scramble-header text-[#FFFFFF] mx-auto mt-2 font-ninetea">
                Real Stories, Real Success
            </h2>
        </div>
        <DbankReviews />
        <div class="absolute w-full left-0 bottom-10 blur-[80px] -rotate-[10deg]">
            <div class="flex items-center justify-center bottom-0 h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF]">
            </div>
        </div>
    </div>
</template>