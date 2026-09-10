<script lang="ts">
    type Project = {
        title: string;
        image: string;
        tech: string;
        features: string[];
        link: string;
        btn: string;
    };

    const projects: Project[] = [
        {
            title: "Zingram | Real-Time Messaging Application",
            image: "/zingram.PNG",
            tech: "SvelteKit • Firebase • Vite • Vercel",
            btn: "Launch Live Site →",
            features: [
                "Built a real-time messaging application focused on simple, fast, and seamless communication.",
                "Implemented user authentication and account registration using Firebase Authentication.",
                "Built user profiles with customizable information, profile images, and social links.",
                "Implemented real-time message delivery using Firebase Firestore.",
                "Added automatic scrolling to the latest message when conversations load or new messages are sent.",
                "Built username-based user search to make finding and starting conversations easy.",
                "Designed the chat interface to support different message types and provide a clean messaging experience.",
                "Built the application with SvelteKit and Firebase, combining a modern frontend with a cloud-based backend.",
                "Implemented responsive UI patterns to provide a consistent experience across different screen sizes.",
                "Deployed Zingram as a production-ready web application with a mobile-friendly, app-like experience."
            ],
            link: "https://zingram.vercel.app"
        },

        {
            title: "Jeff Notes | Note-Keep web Application",
            image: "/noteWeb.PNG",
            tech: "SvelteKit • Vite • Vercel",
            btn: "Launch Live Site →",
            features: [
                "Built a simple and intuitive note-keeping application for creating and managing personal notes.",
                "Implemented a clean interface focused on making it easy to create, view, edit, and organize notes.",
                "Designed the application with a responsive layout for a smooth experience across different screen sizes.",
                "Built an organized note interface that makes it easy to find and manage saved notes.",
                "Focused on a minimal and distraction-free design to keep the note-taking experience simple.",
                "Built the application with a modern web development stack and structured the interface for maintainability.",
                "Created a practical personal productivity tool for quickly capturing and managing ideas and information."
            ],
            link: "https://jeff-notekeeping.vercel.app"
        },

        {
            image: "crypto.PNG",
            tech: "Fluter • API • Github",
            btn: "View GitHub →",
            title: "Crypto Ticker | Cryptocurrency Rate Tracker",
            features: [
                "Built a Flutter mobile application for checking cryptocurrency exchange rates.",
                "Integrated cryptocurrency market data to display current rates for different digital currencies.",
                "Implemented a simple interface that makes it easy to select and view cryptocurrency prices.",
                "Displayed cryptocurrency values against supported fiat currencies for quick rate comparison.",
                "Designed the application with a clean and responsive mobile-first interface.",
                "Built reusable Flutter widgets to keep the application interface organized and maintainable.",
                "Implemented API-based data retrieval to connect the mobile application with live cryptocurrency information.",
                "Focused on creating a fast and straightforward experience for checking cryptocurrency rates."
            ],
            link: "https://github.com/tetebe333/bitcoin_ticker"
        },

        {
            image: "/contact.PNG",
            tech: "SvelteKit • Vite • Vercel",
            btn: "Launch Live Site →",
            title: "Jeff Contacts | Contact Management Web App",
            features: [
                "Built a contact management web application for saving and managing personal contacts.",
                "Implemented contact creation and storage with essential contact information.",
                "Added the ability to quickly call saved contacts directly from the application.",
                "Implemented direct chat functionality for communicating with saved contacts.",
                "Integrated WhatsApp actions to make it easy to send messages to contacts through WhatsApp.",
                "Designed a clean and organized interface for viewing and managing contacts.",
                "Implemented responsive layouts for a smooth experience across different screen sizes.",
                "Focused on making everyday contact management simple, accessible, and convenient."
            ],
            link: "https://jeff-contact.vercel.app"
        },

        {
            image: "/invoice.PNG",
            tech: "SvelteKit • Vite • Vercel",
            btn: "Launch Live Site →",
            title: "Invoice Studio | Invoice Creation & Export",
            features: [
                "Built a web application for creating and managing professional invoices.",
                "Implemented customizable invoice fields for entering business, customer, item, and payment information.",
                "Added support for adding invoice items with quantities, prices, and calculated totals.",
                "Implemented automatic calculation of invoice subtotals and final amounts.",
                "Built a live invoice preview so users can see how the document looks while creating it.",
                "Added print functionality for turning completed invoices into physical or digital documents.",
                "Designed the invoice layout to provide a clean and professional document format.",
                "Implemented a responsive interface that works across different screen sizes.",
                "Focused on making invoice creation quick, simple, and easy to use."
            ],
            link: "https://jeff-invoice.vercel.app"
        },

        {
            title: "Personal Portfolio Website",
            image: "/port.png",
            tech: "SvelteKit • Vite • Vercel",
            btn: "View GitHub →",
            features: [
                "Built a personal developer portfolio to showcase my skills, projects, and software development journey.",
                "Designed a clean and responsive interface that adapts smoothly across different screen sizes.",
                "Created dedicated sections for my introduction, skills, experience, education, projects, and contact information.",
                "Showcased selected projects with descriptions, technologies used, and key features.",
                "Implemented smooth navigation between portfolio sections for an easy browsing experience.",
                "Added links to my GitHub, LinkedIn, email, and other professional resources.",
                "Built the portfolio with SvelteKit and Tailwind CSS.",
                "Focused on a minimal, professional design that puts the content and projects first.",
                "Optimized the interface to provide a smooth and consistent user experience across devices."
            ],
            link: "https://github.com/tetebe333/tetebe-jeffrey-portfolio"
        }
    ];

    let expanded = $state<boolean[]>(projects.map(() => false));


    // Read More / Read Less
    function toggleReadMore(index: number): void {
        expanded = expanded.map((isExpanded, i) =>
            i === index ? !isExpanded : isExpanded
        );
    }
</script>


<!-- Projects Heading -->
<div class="mb-9">
    <h1 class="text-3xl font-bold">
        Projects
    </h1>

    <div class="bg-blue-600 h-1 w-28 rounded-sm mt-1.5"></div>
</div>


<!-- Projects Grid -->
<div class="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 w-full">

    {#each projects as project, index}

        <div class="row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none p-4 dark:bg-[#111625] bg-white border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 flex flex-col">
            <!-- Image -->
            <div class="relative w-full h-48 rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} class="object-cover transition-transform duration-500 group-hover/bento:scale-105"
                    style="position: absolute; height: 100%; width: 100%; inset: 0;"/>
            </div>

            <!-- Content -->
            <div class="group-hover/bento:translate-x-2 transition duration-200 flex flex-col space-y-3 mt-3">

                <!-- Title -->
                <div class="font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {project.title}
                </div>

                <!-- Project Details -->
                <div class="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">

                    <div class="space-y-2">

                        <!-- Tech -->
                        <p class="text-xs font-semibold text-blue-500">
                            {project.tech}
                        </p>

                        <!-- Features -->
                        <ul class="list-disc list-inside text-xs space-y-1 text-neutral-500 dark:text-neutral-400">
                            {#each project.features as feature, featureIndex}

                                {#if expanded[index] || featureIndex < 2}
                                    <li>
                                        {feature}
                                    </li>
                                {/if}

                            {/each}

                        </ul>

                    </div>

                </div>

                <!-- READ MORE / READ LESS -->
                {#if expanded[index]}
                    <button type="button" onclick={() => toggleReadMore(index)} class="text-xs text-blue-500 font-medium hover:underline text-left w-fit z-10 cursor-pointer">
                        Read Less
                    </button>
                {:else}
                    <button type="button" onclick={() => toggleReadMore(index)} class="text-xs text-blue-500 font-medium hover:underline text-left w-fit z-10 cursor-pointer">
                        Read More
                    </button>
                {/if}

                <!-- Live Site -->
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="inline-block text-sm text-blue-500 hover:underline">
                    {project.btn}
                </a>
            </div>
        </div>
    {/each}
</div>