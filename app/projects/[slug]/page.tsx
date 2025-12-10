import Link from 'next/link'
import { projects } from '../../data/projects'
import { notFound } from 'next/navigation'

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#1a1a2e] relative">
      {/* Scanlines effect */}
      <div className="scanlines"></div>

      {/* Navigation */}
      <nav className="pixel-border bg-[#0f0f1e] m-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/projects" className="text-lg text-[#00d2ff] pixel-text">
              ◄ BACK TO ARCADE
            </Link>
            <div className="text-sm text-[#6c5ce7]">
              GAME DETAILS
            </div>
          </div>
        </div>
      </nav>

      {/* Game Screen */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Arcade Screen */}
          <div className="pixel-border bg-[#0f0f1e] mb-8">
            <div className="bg-gradient-to-b from-[#2d2d44] to-[#1a1a2e] p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="pixel-text text-2xl md:text-4xl mb-4 text-[#00d2ff]">
                  {project.title.toUpperCase()}
                </h1>
                {project.featured && (
                  <span className="inline-block px-3 py-1 bg-[#ffd93d] text-[#0f0f1e] text-xs mb-4">
                    FEATURED GAME
                  </span>
                )}
              </div>

              {/* Game Display Area */}
              <div className="bg-[#0f0f1e] border-4 border-[#4a4a6a] h-64 mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/20 to-[#00d2ff]/20"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🕹️</div>
                  <div className="text-xs text-[#4a4a6a]">GAME PREVIEW</div>
                </div>
              </div>

              {/* Game Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">GAME DESCRIPTION</h2>
                  <p className="text-xs text-[#6c5ce7] leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">TECHNOLOGIES</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#4a4a6a] text-[#00d2ff] text-[8px] border border-[#6c5ce7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arcade-button"
                    >
                      PLAY NOW
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arcade-button bg-[#2d2d44]"
                    >
                      VIEW CODE
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* High Scores / Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-xs text-[#4a4a6a] mb-2">CATEGORY</div>
              <div className="text-sm text-[#6c5ce7]">{project.category.toUpperCase()}</div>
            </div>
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-xs text-[#4a4a6a] mb-2">TECH STACK</div>
              <div className="text-sm text-[#00d2ff]">{project.technologies.length} TECHNOLOGIES</div>
            </div>
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-xs text-[#4a4a6a] mb-2">STATUS</div>
              <div className="text-sm text-[#6bcf7f]">✓ COMPLETE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

