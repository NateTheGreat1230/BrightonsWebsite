<script lang="ts" setup>
    const route = useRoute()
</script>
<template>
    <div class="bg-background w-full sm:p-10 p-5 text-white">
        <div class="p-6 bg-black bg-opacity-80 border-4 border-gray-700 rounded-lg shadow-lg">
            <div class=" p-2 flex flex-row justify-evenly ">
                <div class="hidden md:flex flex-col space-x-5 justify-right mb-5">
                    <NuxtLink to="/">
                        <img src="/favicon.png" class="w-24 object-cover" />
                    </NuxtLink>
                </div>
                <div class="flex flex-col justify-right items-left gap-4">
                    <p class="font-bold text-lg font-heading text-primary">Useful Links</p>
                    <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
                    <NuxtLink to="/calculator" class="hover:underline">Calculator</NuxtLink>
                    <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
                </div>
                <div class="flex flex-col justify-right items-left gap-4">
                    <p class="font-bold text-lg font-heading text-primary">My Sites</p>
                    <NuxtLink to="http://thecalculatorguy.dev/" target="_blank" class="hover:underline">My .dev site</NuxtLink>
                    <NuxtLink to="http://thecalculatorguy.com/" target="_blank" class="hover:underline">My .com site</NuxtLink>
                    <NuxtLink to="http://thecalculatorguy.org/" target="_blank" class="hover:underline">My .org site</NuxtLink>
                </div>
                <div class="hidden sm:flex flex-col justify-right items-left gap-4">
                    <p class="font-bold text-lg font-heading text-primary">Related Sites</p>
                    <NuxtLink to="https://natewashburn.is-a.dev" target="_blank" class="hover:underline">natewashburn.is-a.dev</NuxtLink>
                    <NuxtLink to="https://motortruck1221.com" target="_blank" class="hover:underline">motortruck1221.com</NuxtLink>
                    <NuxtLink to="https://allancoding.is-a.dev" class="hover:underline">allancoding.is-a.dev</NuxtLink>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-11/12 rounded border-t-4 border-gray-700"></div>
            </div>
            <div class="pt-10 flex flex-row justify-evenly items-center">
                <div class="flex flex-col gap-2">
                    <p>Site made by Nate Washburn</p>
                    <NuxtLink href="https://github.com/NateTheGreat1230/" class="text-primary hover:underline"><p>@NateTheGreat1230</p></NuxtLink>
                </div>
                 
                    
                
                <div class="flex flex-col">
                    <p class="flex justify-center font-bold text-lg text-primary">Social Links</p>
                    <div class="flex flex-row w-max justify-between">
                        <NuxtLink to="https://github.com/BrightonDutson" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out hover:text-primary">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </NuxtLink>
                        <NuxtLink to="https://www.linkedin.com/in/brighton-dutson-0768062ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out hover:text-primary">
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </NuxtLink>
                        <NuxtLink to="mailto:brightondutson@gmail.com" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out hover:text-primary">
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                        </NuxtLink>
                        <NuxtLink to="https://youtube.com/@brightondutson?si=8SoHFBJ8KnKnCxiN" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out hover:text-primary">
                            <font-awesome-icon :icon="['fab', 'youtube']" />
                        </NuxtLink>
                        <NuxtLink to="https://www.instagram.com/brightondutson?igsh=MXRqOGs4b3Y1N2N3Mw==" target="_blank" class="w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out hover:text-primary">
                            <font-awesome-icon :icon="['fab', 'square-instagram']" />
                        </NuxtLink>
                    </div>
                </div>
                <p class="hidden md:flex">© Copyright 2024 Brighton Dutson</p>
            </div>
        </div>
    </div>
</template>
