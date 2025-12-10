import Link from 'next/link'

export default function AboutPage() {
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
              PLAYER PROFILE
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Player Card */}
          <div className="pixel-border bg-[#0f0f1e] mb-8">
            <div className="bg-gradient-to-b from-[#2d2d44] to-[#1a1a2e] p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">👾</div>
                <h1 className="pixel-text text-2xl md:text-4xl mb-4 text-[#00d2ff]">
                  PLAYER: JACOB C
                </h1>
                <p className="text-xs text-[#6c5ce7]">
                  DEVELOPER & SOFTWARE ENGINEER
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">PLAYER BIO</h2>
                  <p className="text-xs text-[#6c5ce7] leading-relaxed mb-4">
                    I'M A PASSIONATE DEVELOPER AND SOFTWARE ENGINEER WITH A LOVE FOR BUILDING
                    MODERN WEB APPLICATIONS AND SOLVING COMPLEX PROBLEMS.
                  </p>
                  <p className="text-xs text-[#6c5ce7] leading-relaxed">
                    MY JOURNEY IN SOFTWARE DEVELOPMENT STARTED WITH A CURIOSITY ABOUT HOW THINGS
                    WORK, AND THAT CURIOSITY HAS DRIVEN ME TO CONTINUOUSLY LEARN AND IMPROVE.
                    I ENJOY WORKING WITH MODERN TECHNOLOGIES AND CREATING SOLUTIONS THAT MAKE
                    A DIFFERENCE.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">SKILLS & TECHNOLOGIES</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'MONGODB', 'POSTGRESQL', 'TAILWIND', 'GIT', 'DOCKER'].map((skill) => (
                      <div key={skill} className="bg-[#2d2d44] border-2 border-[#4a4a6a] p-3 text-center">
                        <span className="text-[8px] text-[#00d2ff]">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">CONTACT</h2>
                  <p className="text-xs text-[#6c5ce7] mb-4">
                    ALWAYS OPEN TO DISCUSSING NEW PROJECTS, CREATIVE IDEAS, OR OPPORTUNITIES
                    TO BE PART OF YOUR VISION.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:your.email@example.com"
                      className="arcade-button"
                    >
                      EMAIL
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arcade-button bg-[#2d2d44]"
                    >
                      GITHUB
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arcade-button bg-[#2d2d44]"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-2xl mb-2">🎮</div>
              <div className="text-xs text-[#4a4a6a] mb-1">PROJECTS</div>
              <div className="text-sm text-[#00d2ff]">4+</div>
            </div>
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-2xl mb-2">💻</div>
              <div className="text-xs text-[#4a4a6a] mb-1">LINES OF CODE</div>
              <div className="text-sm text-[#6c5ce7]">10K+</div>
            </div>
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-2xl mb-2">☕</div>
              <div className="text-xs text-[#4a4a6a] mb-1">COFFEE CUPS</div>
              <div className="text-sm text-[#ffd93d]">∞</div>
            </div>
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-xs text-[#4a4a6a] mb-1">ACHIEVEMENTS</div>
              <div className="text-sm text-[#6bcf7f]">6/8</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


