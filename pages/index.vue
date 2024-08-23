<script lang="ts" setup>
    useHead({
        title: "Home",
    });
    // @ts-ignore
    import VueWriter from 'vue-writer';
    
</script>
<template>
    <div class="flex justify-center w-full">
        <div class="max-w-3xl text-white bg-black p-6 mx-5 my-10 bg-opacity-80 border-4 border-gray-700 rounded-lg shadow-lg flex flex-col gap-4">
            <div class="flex flex-col sm:flex-row gap-2 font-heading text-4xl text-text">
                <p>Hello, I am</p>
                <p class="text-primary font-semibold">TheCalculatorGuy</p>
            </div>
            <p class="text-2xl">I am an IT professional and calculator enthusiast.</p>
            <p>I’m Brighton Dutson, a Graphing Calculator geek with a love for all things tech—except Chromebooks, which I can’t stand. I’m working toward my Diploma and Associate's, with plans to dive deeper into Computer Science or Cyber Security. I've got hands-on experience from home projects, school, and an internship at CanyonMedia. I’m also skilled in Cyber Security, soldering, and coding in C++, Python, JavaScript, PHP, and Bash.</p>
            <NuxtLink href="/contact">
                <button class="text-lg text-primary hover:underline font-semibold">Contact Me Here</button>
            </NuxtLink>
        </div>
    </div>
    <div class="flex flex-col flex-wrap md:flex-row gap-5 pb-10 justify-center items-center">
        
        <Calculator
            title="About Me"
            title-style="text-primary pl-16 text-xl font-heading"
            text="My name is Brighton Dutson, I am a Graphing Calculator enthusiast, and love most things involving electricity and computing. Chromebooks are the exception, I despise them. I am currently in school working on my Diploma and an Associates of general studies (Anticipated 2025). I later plan on continuing my studies for a Bachelors of Compter Science or of Cyber Security."
            text-style="text-xs text-white"
        />
        <Calculator
            title="Experience"
            title-style="text-primary pl-16 text-xl font-heading"
            text="I have had plenty of real-world IT experience, from home, projects I have contributed to at school as well as an intern IT/Engineer job for CanyonMedia. I have worked on and developed a supercomputer using raspberry pi’s with Kubernetes. I have also designed, engineered, and built a spark gap tesla coil. I am well experienced in repairing TI Graphing Calculators, as well as experience in repairing computers. I would also consider myself well experienced in Cyber security, electronic troubleshooting involving soldering, and the following languages l: C++, Python, Javascript, PHP, Bash"
            text-style="text-xs text-white"
        />
        <Calculator
            title="Mission Statement"
            title-style="text-primary pl-8 text-xl font-heading"
            text="My mission is to harness my passion for technology and innovation to solve complex problems, create impactful solutions, and continuously push the boundaries of what’s possible in computing and electronics. I aim to leverage my skills and experience to contribute meaningfully to the fields of Computer Science and Cyber Security while staying curious, driven, and committed to lifelong learning."
            text-style="text-xs text-white"
        />
    </div>
</template>