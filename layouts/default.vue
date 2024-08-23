<script lang="ts" setup>
    import '~/assets/background.css';
    useHead({
        titleTemplate: (name) => {return name ? `${name} | TheCalculatorGuy` : 'TheCalculatorGuy'},
        htmlAttrs: {
            lang: 'en',
            class: 'dark',
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'TheCalculatorGuy\'s personal website.'},
            {name: 'format-detection', content: 'telephone=no'},
            {name: 'msapplication-TileColor', content: '#000000'},
            {name: 'theme-color', content: '#000000'},
            {hid: 'og:image', property: 'og:image', content: 'https://thecalculatorguy.net/favicon.png'},
            {hid: 'og:title', property: 'og:title', content: 'TheCalculatorGuy'},
            {hid: 'og:site_name', property: 'og:site_name', content: 'Personal Site'},
            {hid: 'og:description', property: 'og:description', content: 'TheCalculatorGuy\'s personal website.'},
            {hid: 'og:url', property: 'og:url', content: 'https://thecalculatorguy.net'},
            {hid: 'og:type', property: 'og:type', content: 'website'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-png', href: '/favicon.png'},
        ],
    })
</script>
<template>
    <div class="flex flex-col h-screen font-body">
        <Header />
        <div class="flex-1 bg-background">
            <main class="h-full w-full">
                <slot />
            </main>
        </div>
        <Footer />
    </div>
</template>