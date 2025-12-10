import Link from 'next/link'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] relative">
      {/* Scanlines effect */}
      <div className="scanlines"></div>

      {/* Navigation */}
      <nav className="pixel-border bg-[#0f0f1e] m-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-lg text-[#00d2ff] pixel-text">
              ◄ BACK
            </Link>
            <div className="text-sm text-[#6c5ce7]">
              ARCADE CABINETS
            </div>
          </div>
        </div>
      </nav>

      {/* Arcade Room */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="pixel-text text-3xl md:text-5xl mb-4 text-[#ffd93d]">
              ARCADE ROOM
            </h1>
            <p className="text-xs md:text-sm text-[#4a4a6a]">
              SELECT A CABINET TO PLAY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="arcade-cabinet"
              >
                {/* Arcade Cabinet Screen */}
                <div className="h-64 bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e] border-b-4 border-[#4a4a6a] relative overflow-hidden">
                  {/* Screen glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#6c5ce7]/20 to-transparent"></div>
                  
                  {/* Screen content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4">
                    <div className="text-center">
                      <h3 className="text-lg md:text-xl mb-2 text-[#00d2ff] pixel-text">
                        {project.title.toUpperCase()}
                      </h3>
                      <div className="h-24 w-full bg-[#0f0f1e] border-2 border-[#4a4a6a] flex items-center justify-center mb-4">
                        <span className="text-4xl">🕹️</span>
                      </div>
                      {project.featured && (
                        <span className="inline-block px-2 py-1 bg-[#ffd93d] text-[#0f0f1e] text-xs">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Screen bezel */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-[#4a4a6a] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[#4a4a6a] to-transparent"></div>
                </div>

                {/* Arcade Cabinet Body */}
                <div className="p-6 bg-gradient-to-b from-[#2d2d44] to-[#1a1a2e]">
                  <p className="text-xs text-[#6c5ce7] mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech tags as arcade buttons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#4a4a6a] text-[#00d2ff] text-[8px] border border-[#6c5ce7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Insert coin indicator */}
                  <div className="text-center">
                    <span className="text-[#ffd93d] text-xs animate-pulse">
                      INSERT COIN →
                    </span>
                  </div>
                </div>

                {/* Cabinet base */}
                <div className="h-4 bg-[#0f0f1e] border-t-2 border-[#4a4a6a]"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

