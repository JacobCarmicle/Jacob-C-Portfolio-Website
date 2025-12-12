import Link from 'next/link'

const achievements = [
  { name: 'REACT MASTER', description: 'Built enterprise React apps with TypeScript', icon: '⚛️', unlocked: true },
  { name: 'FULL STACK', description: 'Built complete full-stack applications', icon: '🚀', unlocked: true },
  { name: 'CLOUD NATIVE', description: 'Deployed with Azure Container Apps & Docker', icon: '☁️', unlocked: true },
  { name: 'DATABASE HERO', description: 'Worked with MongoDB & PostgreSQL', icon: '🗄️', unlocked: true },
  { name: 'SECURITY EXPERT', description: 'Implemented RBAC, JWT, & HIPAA compliance', icon: '🔒', unlocked: true },
  { name: 'MOBILE DEVELOPER', description: 'Built cross-platform Flutter applications', icon: '📱', unlocked: true },
  { name: 'MICROSERVICES', description: 'Architected containerized microservices', icon: '🐳', unlocked: true },
  { name: 'AI INTEGRATOR', description: 'Integrated OpenAI GPT-4 for AI features', icon: '🤖', unlocked: true },
]

export default function AchievementsPage() {
  const unlockedCount = achievements.filter(a => a.unlocked).length

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
              ACHIEVEMENTS: {unlockedCount}/{achievements.length}
            </div>
          </div>
        </div>
      </nav>

      {/* Achievements Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="pixel-text text-3xl md:text-5xl mb-4 text-[#ffd93d]">
              ACHIEVEMENTS
            </h1>
            <p className="text-xs md:text-sm text-[#4a4a6a] mb-4">
              SKILLS UNLOCKED
            </p>
            <div className="inline-block pixel-border bg-[#0f0f1e] p-4">
              <div className="text-2xl text-[#00d2ff]">{unlockedCount}</div>
              <div className="text-xs text-[#4a4a6a]">UNLOCKED</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`achievement-badge ${
                  achievement.unlocked 
                    ? 'opacity-100' 
                    : 'opacity-40 grayscale'
                }`}
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-xs mb-2 text-[#0f0f1e] font-bold">
                  {achievement.name}
                </h3>
                <p className="text-[8px] text-[#0f0f1e] opacity-80">
                  {achievement.description}
                </p>
                {achievement.unlocked ? (
                  <div className="mt-3 text-[8px] text-[#6bcf7f]">
                    ✓ UNLOCKED
                  </div>
                ) : (
                  <div className="mt-3 text-[8px] text-[#4a4a6a]">
                    🔒 LOCKED
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-12 pixel-border bg-[#0f0f1e] p-6">
            <div className="text-center mb-4">
              <h2 className="text-sm text-[#6c5ce7] mb-2">OVERALL PROGRESS</h2>
              <div className="w-full bg-[#2d2d44] border-2 border-[#4a4a6a] h-8 relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#6c5ce7] to-[#00d2ff] transition-all duration-1000"
                  style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
                >
                  <div 
                    className="h-full opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  ></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-xs text-[#00d2ff]">
                  {Math.round((unlockedCount / achievements.length) * 100)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

