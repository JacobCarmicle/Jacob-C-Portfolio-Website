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
                  SOFTWARE DEVELOPER & ENGINEER
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">PLAYER BIO</h2>
                  <p className="text-xs text-[#6c5ce7] leading-relaxed mb-4">
                    I'M A SOFTWARE DEVELOPMENT INTERN AT LEADERSHIP REALITY, BUILDING CORE FEATURES
                    FOR ENTERPRISE-GRADE APPLICATIONS USED BY HEALTHCARE AND LEGAL PROFESSIONALS.
                    I WORK ACROSS FULL-STACK DEVELOPMENT, CLOUD INFRASTRUCTURE, AUTHENTICATION,
                    AND SECURE DATA WORKFLOWS.
                  </p>
                  <p className="text-xs text-[#6c5ce7] leading-relaxed">
                    CURRENTLY PURSUING A BACHELOR OF COMPUTER SCIENCE WITH A MINOR IN ORGANIZATIONAL
                    LEADERSHIP AT WESTERN KENTUCKY UNIVERSITY (2023-2027). I'M PASSIONATE ABOUT BUILDING
                    SCALABLE APPLICATIONS, IMPLEMENTING SECURITY BEST PRACTICES, AND CONTINUOUSLY LEARNING
                    NEW TECHNOLOGIES.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">EXPERIENCE</h2>
                  <div className="space-y-4 mb-4">
                    <div className="bg-[#2d2d44] border-2 border-[#4a4a6a] p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xs text-[#00d2ff] font-bold mb-1">SOFTWARE DEVELOPMENT INTERN</h3>
                          <p className="text-[8px] text-[#6c5ce7]">LEADERSHIP REALITY · JUL 2025 - PRESENT</p>
                        </div>
                        <span className="text-[8px] text-[#4a4a6a]">HYBRID</span>
                      </div>
                      <p className="text-[8px] text-[#6c5ce7] leading-relaxed mt-2">
                        ENHANCED FRONT-END ARCHITECTURE OF HEALTHCARE CASE-MANAGEMENT PLATFORM USING REACT (TYPESCRIPT)
                        AND FLUENT UI. IMPLEMENTED SECURE AUTHENTICATION FLOWS WITH AZURE AD + MSAL. DEVELOPED FEATURES
                        INCLUDING DYNAMIC WEB-COMPONENT LOADING, GROUP-BASED RBAC, AND CENTRALIZED AUDIT LOGGING.
                        WORKED ON FASTAPI + POSTGRESQL ATTORNEY DATABASE WITH CRUD APIS AND RATE-LIMITED SECURE ENDPOINTS.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">EDUCATION</h2>
                  <div className="bg-[#2d2d44] border-2 border-[#4a4a6a] p-4">
                    <h3 className="text-xs text-[#00d2ff] font-bold mb-1">BACHELOR OF COMPUTER SCIENCE</h3>
                    <p className="text-[8px] text-[#6c5ce7] mb-2">WESTERN KENTUCKY UNIVERSITY · 2023 - 2027</p>
                    <p className="text-[8px] text-[#6c5ce7]">MINOR IN ORGANIZATIONAL LEADERSHIP</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm text-[#ffd93d] mb-3">SKILLS & TECHNOLOGIES</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'REACT', 'TYPESCRIPT', 'NODE.JS', 'JAVASCRIPT', 'PYTHON', 'POSTGRESQL', 
                      'MONGODB', 'DOCKER', 'FASTAPI', 'FLUTTER', 'DART', 'FIREBASE', 
                      'AZURE AD', 'MSAL', 'FLUENT UI', 'GIT', 'CI/CD', 'AGILE'
                    ].map((skill) => (
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
                      href="mailto:Jacob.Carmicle@gmail.com"
                      className="arcade-button"
                    >
                      EMAIL
                    </a>
                    <a
                      href="https://github.com/JacobCarmicle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arcade-button bg-[#2d2d44]"
                    >
                      GITHUB
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jacob-carmicle-79b644260"
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
              <div className="text-sm text-[#00d2ff]">6</div>
            </div>
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-2xl mb-2">💼</div>
              <div className="text-xs text-[#4a4a6a] mb-1">EXPERIENCE</div>
              <div className="text-sm text-[#6c5ce7]">6+ MOS</div>
            </div>
            <div className="pixel-border bg-[#0f0f1e] p-4 text-center">
              <div className="text-2xl mb-2">🎓</div>
              <div className="text-xs text-[#4a4a6a] mb-1">EDUCATION</div>
              <div className="text-sm text-[#ffd93d]">2027</div>
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
