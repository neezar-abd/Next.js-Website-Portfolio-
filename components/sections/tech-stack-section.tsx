import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export const TechStackSection = () => {
    const technologies = [
        {
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            height: 24,
        },
        {
            name: 'TypeScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            height: 24,
        },
        {
            name: 'React',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            height: 24,
        },
        {
            name: 'Next.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
            height: 24,
            invert: true,
        },
        {
            name: 'Tailwind CSS',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            height: 20,
        },
        {
            name: 'Node.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            height: 24,
        },
        {
            name: 'Supabase',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
            height: 24,
        },
        {
            name: 'Firebase',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
            height: 24,
        },
        {
            name: 'PostgreSQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
            height: 24,
        },
        {
            name: 'MySQL',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
            height: 28,
        },
        {
            name: 'MongoDB',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            height: 24,
        },
        {
            name: 'GitHub',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
            height: 24,
            invert: true,
        },
        {
            name: 'Git',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            height: 24,
        },
        {
            name: 'Figma',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
            height: 20,
        },
        {
            name: 'VS Code',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
            height: 24,
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-950 overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:border-gray-200 dark:md:border-gray-800 md:pr-6">
                        <p className="text-end text-sm font-sans font-medium text-gray-900 dark:text-white">
                            Technologies & Tools I Use
                        </p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={80}>
                            {technologies.map((tech, index) => (
                                <div key={index} className="flex items-center gap-3 px-4">
                                    <img
                                        className={`w-fit ${tech.invert ? 'dark:invert' : ''}`}
                                        style={{ height: `${tech.height + 8}px` }}
                                        src={tech.logo}
                                        alt={`${tech.name} Logo`}
                                        height={tech.height + 8}
                                        width="auto"
                                    />
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-gradient-to-r from-white dark:from-gray-950 absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-gradient-to-l from-white dark:from-gray-950 absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
