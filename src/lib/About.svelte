<script lang="ts">
let abt1 = "I’m a software engineer who enjoys turning ideas into clean, functional web and mobile applications. I care about creating experiences that are simple to use, responsive, and thoughtfully designed."
let abt2 = "My work spans both frontend and backend development, with experience building applications using SvelteKit, JavaScript, Vue.js, Flutter, and Firebase. I enjoy working across the stack, connecting interfaces to reliable backend services, and bringing complete products to life."
let abt3 = "I’m always learning, experimenting, and improving my craft through real projects. I enjoy solving problems with code, paying attention to the details that make an application feel polished, and continuously growing as a developer."

</script>

<div class="mb-9">
    <h1 class="text-3xl font-bold">
       About
    </h1>
    <div class="bg-blue-600 h-1 w-18 rounded-sm mt-1.5"></div>   
</div>

<div class="md:grid grid-cols-3 gap-6 w-full">
    <div class="col-span-2">             
        <p class="text-gray-400 mb-4 text-lg ">
            {abt1}
        </p>

        <p class="text-gray-400 mb-4 text-lg">
            {abt2}
        </p>

        <p class="text-gray-400 mb-5 md:mb-0 text-lg">
            {abt3}
        </p>
    </div>

    <div class="flex justify-center items-center col-span-1">
        <div class="p-3 bg-[#111625] flex flex-col  text-center items-center text-gray-300 justify-center rounded-lg mt-8  max-w-md border border-zinc-800/80 gap-3 hover:text-blue-500 hover:border-blue-500 transition-all duration-300">
            <p class="text-sm font-bold text-gray-500">QUICK INFO</p>
            <p class="text-xl font-semibold">Based in Lagos, Nigeria</p>
            <p class="text-xl font-semibold">Open to remote</p>
            <div class="flex items-center gap-3 mx-2">
                    <a href="https://github.com/tetebe333" target="_blank" class="bg-zinc-800/80 hover:bg-zinc-800 transition text-zinc-200 font-medium p-3 rounded-lg">
                        <img src="/github-logo-50.png" width="18" height="18" alt="">
                    </a>
                    <a href="https://www.linkedin.com/in/tetebe-jeffrey-974b2a284/" target="_blank" class="bg-zinc-800/80 hover:bg-zinc-800 transition text-zinc-200 font-medium p-3 rounded-lg">
                        <img src="/linkedin-50.png" width="21" height="21" alt="">

                    </a>
                    <a href="mailto:tetebejeffrey@gmail.com" target="_blank" class="bg-zinc-800/80 hover:bg-zinc-800 transition text-zinc-200 font-medium p-3 rounded-lg">
                        <img src="/email-48.png" width="20" height="20" alt="" class="mt-0.5">
                    </a>
                     <a href="#resume" class="bg-zinc-800/80 hover:bg-zinc-800 transition text-zinc-200 font-medium p-3 rounded-lg">
                        <img src="/saveG.png" width="23" height="23" alt="">
                    </a>
            </div>
        </div>
    </div>
</div>