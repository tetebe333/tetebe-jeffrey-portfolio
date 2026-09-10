<script lang="ts">
	import './layout.css';
	import Navbar from "$lib/Navbar.svelte";

	let { children } = $props();
	let menuState = $state(false);

	function handleGlobalClick(event: MouseEvent) {
		if (!menuState) return;

		const target = event.target as HTMLElement;

		if (target.closest('button[aria-label*="Toggle Navigation"]')) {
			return;
		}

		menuState = false;
	}
</script>

<svelte:head>
	<title>Tetebe Jeffrey</title>
	<meta name="description" content="Tetebe Jeffrey — Software Developer" />

	<!-- Website Icon -->
	<link rel="icon" href="/jeff.PNG" type="image/png" />

	<!-- iPhone / iOS Home Screen Icon -->
	<link rel="apple-touch-icon" href="/jeff.PNG" />
</svelte:head>

<div
	class="relative min-h-screen overflow-x-hidden bg-[#03081A]"
	onclick={handleGlobalClick}
	role="presentation"
	onkeydown={null}
>
	<Navbar bind:isMenuOpen={menuState} />

	<div class="relative z-10 min-h-screen w-full">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>