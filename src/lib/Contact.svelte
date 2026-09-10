<script lang="ts">
    import { fade } from 'svelte/transition';

    let name = $state("");
    let email = $state("");
    let message = $state("");

    let sending = $state(false);
    let successMessage = $state("");
    let errorMessage = $state("");

    async function sendMessage(): Promise<void> {
        successMessage = "";
        errorMessage = "";

        // Check that all fields are filled
        if (!name.trim() || !email.trim() || !message.trim()) {
            errorMessage = "Please fill in all fields.";

            // Remove error message after 3 seconds
            setTimeout(() => {
                errorMessage = "";
            }, 3000);

            return;
        }

        sending = true;

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to send message."
                );
            }

            // Success message
            successMessage =
                "Message sent successfully! I'll get back to you soon.";

            // Clear the form
            name = "";
            email = "";
            message = "";

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage = "";
            }, 3000);

        } catch (error) {
            errorMessage =
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.";

            // Remove error message after 3 seconds
            setTimeout(() => {
                errorMessage = "";
            }, 3000);

        } finally {
            sending = false;
        }
    }

</script>


<!-- Projects Heading -->
<div class="mb-4">
    <h1 class="text-3xl font-bold">
        Contact
    </h1>

    <div class="bg-blue-600 h-1 w-22 rounded-sm mt-1.5"></div>
</div>

<p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl" style="opacity: 1; transform: none;">Have a project in mind or just want to say hi? Feel free to reach out!</p>


<div class="grid md:grid-cols-2 gap-12">

    <!-- Contact Form -->
    <div  class="w-full">

        <form onsubmit={(event) => {
            event.preventDefault(); sendMessage();}
            }
            class="flex flex-col gap-6"
        >
            <!-- NAME -->
            <div>
                <label
                    for="contact-name"
                    class="block text-sm font-medium text-white mb-2"
                >
                    Name
                </label>

                <input
                    id="contact-name" type="text" bind:value={name} placeholder="Your Name" autocomplete="name"
                    class="w-full rounded-xl border border-neutral-800 bg-[#111625] px-5 py-4 text-white placeholder:text-neutral-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <!-- EMAIL -->
            <div>
                <label
                    for="contact-email"
                    class="block text-sm font-medium text-white mb-2"
                >
                    Email
                </label>

                <input
                    id="contact-email" type="email" bind:value={email} placeholder="your@email.com" autocomplete="email" 
                    class="w-full rounded-xl border border-neutral-800 bg-[#111625] px-5 py-4 text-white placeholder:text-neutral-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>


            <!-- MESSAGE -->
            <div>
                <label
                    for="contact-message"
                    class="block text-sm font-medium text-white mb-2"
                >
                    Message
                </label>

                <textarea 
                    id="contact-message" bind:value={message} placeholder="Your message..." rows="6"
                    class="w-full rounded-xl border border-neutral-800 bg-[#111625] px-5 py-4 text-white placeholder:text-neutral-400 outline-none transition resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
            </div>


            <!-- SEND BUTTON -->
            <button
                type="submit" disabled={sending} 
                class="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {#if sending}
                    <svg class="animate-spin h-5 w-full max-w-5 text-white" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                {:else}
                    Send Message
                {/if}
            </button>


            <!-- SUCCESS MESSAGE -->
            {#if successMessage}
                <p
                    transition:fade={{ duration: 300 }}
                    class="text-center text-green-400 text-sm font-medium"
                >
                    {successMessage}
                </p>
            {/if}

            <!-- ERROR MESSAGE -->
            {#if errorMessage}
                <p
                    transition:fade={{ duration: 300 }}
                    class="text-center text-red-400 text-sm font-medium"
                >
                    {errorMessage}
                </p>
            {/if}

        </form>

    </div>

    <div class=" mt-0 md:mt-25">
        <div class="flex flex-col justify-start items-start md:justify-center md:items-center" style="opacity: 1; transform: none;">
            <div class="space-y-6">

                <!-- PHONE -->
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Phone</p>
                        <a href="tel:+2349164041789" target="_blank" class="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors">
                            +234 916 404 1789
                        </a>
                    </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.87 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.933 11.933 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 00-3.478-8.416"/>
                        </svg>
                    </div>

                    <div>
                        <p class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                            WhatsApp
                        </p>

                        <a
                            href="https://wa.me/2349164041789?text=Hi%20Jeff%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors"
                        >
                            +234 916 404 1789
                        </a>
                    </div>
                </div>

                <!-- Email -->
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Email</p>
                        <a href="mailto:tetebejeffrey@gmail.com" target="_blank" class="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors">
                            tetebejeffrey@gmail.com
                        </a>
                    </div>
                </div>

                <!-- Location -->
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>

                        </svg>
                    </div>
                    <div>
                        <p class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Location</p>
                        <a href="https://maps.app.goo.gl/DHFXpwZysU62eTQR8?g_st=ic" target="_blank" rel="noopener noreferrer" class="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors">
                            Lagos, Nigeria
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div class=" bg-neutral-800 5 w-full mb-4"></div>
