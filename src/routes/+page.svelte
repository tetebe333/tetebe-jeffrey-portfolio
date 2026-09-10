<script lang="ts">
import BioCard from "$lib/BioCard.svelte";
import About from "$lib/About.svelte";
import Skills from "$lib/Skills.svelte";
import Experience from "$lib/Experience.svelte";
import Education from "$lib/Education.svelte";
import Projects from "$lib/Projects.svelte";
import Contact from "$lib/Contact.svelte";

let name = "Tetebe Jeffrey";
let role = "Software Engineer";
let bio = "I’m a software engineer who enjoys building clean, functional web and mobile applications. I love turning ideas into real products, learning new technologies, and solving problems through code.";
  // Typewriter Engine State
  let displayText = $state("");
  let isDeleting = $state(false);
  let wordIndex = $state(0);
  
  const words = [name, role];
  const typingSpeed = 150;    // Speed when writing letters
  const deletingSpeed = 75;   // Speed when erasing letters
  const pauseDuration = 2000; // Time to pause when a word is fully typed

  $effect(() => {
    let tickCount = 0;
    
    const interval = window.setInterval(() => {
      // If we are currently pausing, just skip ticks until the pause duration ends
      if (tickCount > 0) {
        tickCount--;
        return;
      }

      const currentWord = words[wordIndex % words.length];

      if (!isDeleting) {
        // Typing phase
        displayText = currentWord.substring(0, displayText.length + 1);
        
        if (displayText === currentWord) {
          // Calculate how many interval cycles to skip for the pause duration
          tickCount = Math.floor(pauseDuration / typingSpeed);
          isDeleting = true;
        }
      } else {
        // Deleting phase
        displayText = currentWord.substring(0, displayText.length - 1);
        
        if (displayText === "") {
          isDeleting = false;
          wordIndex++;
          // Pause briefly (e.g., 500ms) before typing the next word
          tickCount = Math.floor(500 / deletingSpeed); 
        }
      }
    }, deletingSpeed); // Run at deletion speed baseline to handle both states fluidly

    return () => window.clearInterval(interval);
  });

  //page reveal animation function
    function reveal(node: HTMLElement) {
            // 1. Initial State: Make the element invisible and push it down slightly
            node.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-1000", "ease-out");

            const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // When the section crosses into view:
                if (entry.isIntersecting) {
                node.classList.remove("opacity-0", "translate-y-8");
                node.classList.add("opacity-100", "translate-y-0");
                
                // Unobserve after animating so it doesn't blink if the user scrolls up and down
                observer.unobserve(node);
                }
            });
            }, {
            threshold: 0.15 // Triggers when 15% of the section is visible on screen
            });

            observer.observe(node);

            return {
            destroy() {
                observer.disconnect();
            }
            };
    }

</script>

<!-- Main Wrapper with deep dark background -->
<div id="hero" class="relative px-6 lg:px-28 pt-20 w-full bg-[#0B0F19] text-zinc-100 overflow-x-hidden overflow-y-auto font-sans">
  <!-- 🌟 LEFT TOP GLOW EFFECT -->
  <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-150 rounded-full bg-radial from-white/10 via-white/5 to-transparent blur-[80px] pointer-events-none z-0"></div>

  <!-- 🌟 RIGHT TOP GLOW EFFECT -->
  <div class="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-150 rounded-full bg-radial from-white/10 via-white/5 to-transparent blur-[80px] pointer-events-none z-0"></div>



  <!-- Content Layer -->
    <div class="relative z-10  pb-15 flex flex-col items-center text-center justify-center min-h-screen" use:reveal>
    
        
        <div  class="flex items-start justify-start gap-6 md:gap-8">
            <div>
            
                <div>
                    <img src="/jeff.PNG" alt="Profile" class="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-600 shadow-lg shadow-blue-600/20 mx-auto mb-6 md:mb-8" />
                </div>
                <!-- Wave Emoji & Intro -->
                <div class="flex items-center justify-center gap-2 text-3xl font-bold md:text-7xl mb-4">
                    <span class="animate-bounce">👋</span>
                    <span>Hi, I'm</span>
                </div>

                <!-- Main Title -->
                <h1 class="text-3xl md:text-6xl font-extrabold tracking-tight mb-2 bg-linear-to-r from-gray-400 to-zinc-400 bg-clip-text text-transparent min-h-14 md:min-h-18">
                    {displayText}<span class="text-blue-500 font-normal animate-pulse">|</span>
                </h1>

                <!-- Short Bio Paragraph -->
                <p class="text-gray-400 text-xl  md:text-2xl max-w-2xl leading-relaxed mb-10">
                {bio}
                </p>
            

                <!-- Mobile Version -->
                <div class="block md:hidden">
                    <BioCard />
                </div>
          
            
                <!-- Social / Action Buttons Grid -->
                <div class="grid grid-cols-2 gap-4 w-full max-w-md md:max-w-2xl mb-16 mt-12 md:flex md:flex-row md:justify-between">
   
                    <a href="/Tetebe_Jeffrey_Resume.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg w-full hover:scale-105">
                        <svg stroke="currentColor" height="1em" width="1em" class="w-4 h-4" fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"> <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"/></svg>
                        Resume
                    </a>
                    
                    <a href="https://github.com/tetebe333" target="_blank" class=" w-full flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-blue-500 transition-all duration-200 hover:shadow-lg hover:scale-105">
                        <svg stroke="currentColor" fill="currentColor" class="w-4 h-4" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/tetebe-jeffrey-974b2a284/" target="_blank" class=" w-full flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-blue-500 transition-all duration-200 hover:shadow-lg hover:scale-105">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 448 512"  xmlns="http://www.w3.org/2000/svg"> <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/> </svg>
                        LinkedIn
                    </a>
                    <a href="mailto:tetebejeffrey@gmail.com" class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-blue-500 transition-all duration-200 hover:shadow-lg hover:scale-105">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"> <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/> </svg>
                        Email
                    </a>
                </div>

            </div>
            <div class="hidden md:block">
                <BioCard />
            </div>
        </div>

        <!-- Stats Matrix Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full border-t border-zinc-800/80 pt-12">
            <div class="flex flex-col items-center">
                <span class="text-3xl md:text-4xl font-extrabold text-white mb-1 hover:text-blue-500">1+</span>
                <span class="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Years Experience</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-3xl md:text-4xl font-extrabold text-white mb-1 hover:text-blue-500">10+</span>
                <span class="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Projects</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-3xl md:text-4xl font-extrabold text-white mb-1 hover:text-blue-500">100+</span>
                <span class="text-xs uppercase tracking-widest text-zinc-500 font-semibold">HOURS COODING</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-3xl md:text-4xl font-extrabold text-white mb-1 hover:text-blue-500">25+</span>
                <span class="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Late Nights</span>
            </div>
        </div>

    </div>

        <!-- About Section Layer Container -->
    <div id="about" class="py-15" use:reveal>
        <About />
    </div>

    <!-- Skills Section Layer Container -->
    <div id="skills" class="py-15" use:reveal>
        <Skills />
    </div>

    <!-- Experience Section Layer Container -->
    <div id="experience" class="py-15" use:reveal>
        <Experience />
    </div>

    <!-- Education Section Layer Container -->
    <div id="education" class="py-15" use:reveal>
        <Education />
    </div>

    <!-- Projects Section Layer Container -->
    <div id="projects" class="py-15" use:reveal>
        <Projects />
    </div>

    <!-- Contact Section Layer Container -->
    <div id="contact" class="pt-15 pb-7" use:reveal>
        <Contact />
    </div>

    <footer class="border-t border-neutral-200 dark:border-neutral-800 py-5 -mx-40">
        <div class="max-w-6xl mx-auto px-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Tetebe Jeffrey. Built in Nigeria 
            <svg class="inline-block h-3 w-5 align-middle"
                viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-label="Nigeria flag"
            >
                <rect width="30" height="20" fill="#008753" />
                <rect x="10" width="10" height="20" fill="#fff" />
            </svg>
            with code
        </div>
    </footer>
</div>

