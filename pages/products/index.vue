<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">BUILD THE FUTURE WITH US
            </p>
            <h2 ref="blogsRef" data-final-text="Blogs"
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider leading-[102px]">
                Products
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
            <div class="relative overflow-hidden rounded-3xl h-fit w-full shadow-lg bg-[#2B2B2B]">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full absolute object-cover rounded-[30px] shadow-lg" />
                <div class=" h-full inset-0 p-3 z-10 text-white relative">
                    <nuxt-img src="/images/dwalletproduct.webp" alt="TechBank Logo" width="100%" height="100%"
                        class="w-full object-cover rounded-2xl" />
                    <div class="flex items-center justify-between relative w-full py-5 px-3">
                        <div class="">
                            <div class="flex items-center gap-5">
                                <nuxt-img src="/images/logo.svg" alt="TechBank Logo" width="100%" height="100%"
                                    class="w-12 h-12" />
                                <h2 class="text-3xl font-nyx">DWALLET</h2>
                            </div>
                            <p class="text-sm mt-2 text-gray-400">TechBank is a blockchain product company creating
                                TechBank is a blockchain product company creating TechBank is a blockchain product
                                company creating .
                            </p>
                            <nuxt-link to="/products/dwallet"
                                class="bg-button-gradient w-fit font-ninetea text-white pl-6 mt-5 pr-2 py-2 whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700">
                                View
                                <Icon name="pixelarticons:arrow-right" class="text-white text-2xl -rotate-45" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-3xl h-fit w-full shadow-lg bg-[#2B2B2B]">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full absolute object-cover rounded-[30px] shadow-lg" />
                <div class=" h-full inset-0 relative p-3 z-10 text-white">
                    <nuxt-img src="/images/dbankproduct.webp" alt="TechBank Logo" width="100%" height="100%"
                        class="w-full object-cover rounded-2xl" />
                    <div class="flex items-center justify-between relative w-full py-5 px-3">
                        <div class="">
                            <div class="flex items-center gap-5">
                                <nuxt-img src="/images/dbanklogo.svg" alt="TechBank Logo" width="100%" height="100%"
                                    class="w-12 h-12" />
                                <h2 class="text-3xl font-nyx">DBANK</h2>
                            </div>
                            <p class="text-sm mt-2 text-gray-400">TechBank is a blockchain product company creating
                                TechBank is a blockchain product company creating TechBank is a blockchain product
                                company creating
                            </p>
                            <nuxt-link to="/products/dbank"
                                class="bg-button-gradient font-ninetea text-white w-fit pl-6 mt-5 pr-2 py-2 whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700">
                                View
                                <Icon name="pixelarticons:arrow-right" class="text-white text-2xl -rotate-45" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>