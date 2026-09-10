<script lang="ts">
  // State for mobile drawer visibility
  let { isMenuOpen = $bindable(false) } = $props();
  
  // Profile data configurations
  const userName = "Tetebe jeffray";
  
  // Cleaned navigation links array (Achievements removed)
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

function closeMenu() {
    isMenuOpen = false;
}
</script>

<!-- Outer Fixed Container Layer -->
<header class="fixed top-0 left-0 right-0 z-50 h-16 w-full border-b border-white/5 bg-[#03081A]/80 backdrop-blur-md px-4 sm:px-6 md:px-12 font-sans transition-all duration-300">
  <div class="mx-auto flex h-full max-w-7xl items-center justify-between">
    
    <!-- Left Hand: Avatar Logo Link Section -->
    <a href="#hero" class="flex items-center gap-3 group"
        onclick={closeMenu}
    >
      <!-- User profile image placeholder slot -->
      <div class="h-9 w-9  overflow-hidden rounded-full border-white/20 border-2 bg-zinc-800"
        
      >
        <img 
          src="/jeff.PNG" 
          alt="Profile Avatar" 
          class="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <span class="font-bold tracking-tight text-white transition duration-300 group-hover:text-zinc-300">
        {userName}
      </span>
    </a>

    <!-- Center/Right Hand: Desktop Navigation Menu Array -->
    <nav class="hidden md:flex items-center gap-8">
      <ul class="flex items-center gap-6 text-sm font-medium text-zinc-400">
        {#each navLinks as link}
          <li>
            <a href={link.href} class="hover:text-white transition-colors duration-200">
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
      
      <!-- Primary Action CTA Anchor Element -->
      <a 
        href="/Tetebe_Jeffrey_Resume.pdf" target="_blank" rel="noopener noreferrer"
        class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-600/10 hover:bg-blue-700 transition-all duration-200"
      >
        Download Resume
      </a>
    </nav>

    <!-- Right Hand Mobile Action Toggles Trigger Interface -->
    <div class="flex items-center md:hidden ">
      <button 
        type="button" 
        aria-label="Toggle Navigation Options Menu Menu" 
        aria-expanded={isMenuOpen}
        onclick={toggleMenu}
        class="text-zinc-400 hover:text-white transition-colors focus:outline-none"
      >
        {#if !isMenuOpen}
          <!-- Standard Hamburger Bars Graphic Structure -->
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {:else}
          <!-- Dismissal Action Vector Cross Symbol Structure -->
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {/if}
      </button>
    </div>

  </div>
</header>

<!-- 📱 Mobile Overlay & Sliding Container Block System -->
<div 
  class="fixed inset-x-0 top-16 h-[57vh] z-40 w-full bg-[#03081A]/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden border-b border-white/5 shadow-2xl "
  class:opacity-100={isMenuOpen}
  class:pointer-events-auto={isMenuOpen}
  class:opacity-0={!isMenuOpen}
  class:pointer-events-none={!isMenuOpen}
  class:translate-y-0={isMenuOpen}
  class:-translate-y-4={!isMenuOpen}
>
  <!-- Added overflow-y-auto to ensure menu links remain scrollable if the phone screen is very short -->
  <div class="flex flex-col p-6 h-full justify-between overflow-y-auto  scrollbar-none">
    
    <!-- Navlinks Stack List Panel -->
    <nav class="flex flex-col gap-6">
      <ul class="flex flex-col gap-4 text-base font-semibold text-zinc-400">
        {#each navLinks as link}
          <li>
            <a 
              href={link.href} 
              onclick={() => isMenuOpen = false} 
              class="block py-2 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <!-- Mobile Sticky Base Lower Level Container Module -->
    <div class="mt-auto pb-4">
      <a 
        href="/Tetebe_Jeffrey_Resume.pdf" target="_blank" rel="noopener noreferrer"
        onclick={() => isMenuOpen = false} 
        class="flex w-full text-center rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition  items-center justify-center gap-2"
      >
        <svg stroke="currentColor" height="1em" width="1em" class="w-4 h-4" fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"> <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"/></svg>
        Download Resume
      </a>
    </div>

  </div>
</div>


<!-- Invisible Spacer Element so Content doesn't get clipped underneath the fixed top header bar -->
<div class="h-16 w-full"></div>
