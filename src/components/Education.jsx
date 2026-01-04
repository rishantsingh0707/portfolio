import AnimatedBackground from './AnimatedBackground';
import { educationData } from '../data/education';

export default function Education() {
    return (
        <section id="education" className="relative min-h-screen px-6 py-20 bg-black overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10 container mx-auto max-w-4xl">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                    Education
                </h2>

                <p className="text-gray-400 text-center mb-12 text-lg">
                    My academic background and learning journey
                </p>

                <div className="space-y-8">
                    {educationData.map((edu) => (
                        <div
                            key={edu.id}
                            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-gray-400 text-lg">
                                        {edu.institution}
                                    </p>
                                </div>
                                <span className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-gray-300 whitespace-nowrap h-fit">
                                    {edu.year}
                                </span>
                            </div>

                            {edu.description && (
                                <p className="text-gray-300 leading-relaxed">
                                    {edu.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
