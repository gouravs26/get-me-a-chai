import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get Me A Chai
            </h1>
            <p className="text-lg text-gray-300">
              Supporting creators, one chai at a time
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Built with Modern Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <TechItem icon="⚡" name="Next.js" desc="React framework for production" />
              <TechItem icon="🍃" name="MongoDB" desc="Database with Mongoose ODM" />
              <TechItem icon="💳" name="Razorpay" desc="Secure payment integration" />
              <TechItem icon="🔐" name="NextAuth" desc="Authentication made simple" />
              <TechItem icon="🎨" name="Tailwind" desc="Utility-first CSS framework" />
              <TechItem icon="🚀" name="Vercel" desc="Deployment platform" />
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                title="Secure Payments"
                description="Integrated Razorpay for secure and reliable payment processing with multiple payment options."
              />
              <FeatureCard
                title="User Authentication"
                description="Robust authentication system using NextAuth with support for multiple providers."
              />
              <FeatureCard
                title="Real-time Updates"
                description="Instant payment confirmation and real-time supporter wall updates."
              />
              <FeatureCard
                title="Customizable Profiles"
                description="Users can customize their profiles with cover images and personal details."
              />
            </div>
          </div>

          {/* Purpose Section */}
          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Project Purpose</h2>
            <p className="text-gray-300 leading-relaxed">
              Get Me A Chai is a demonstration project showcasing the integration of modern web technologies. 
              It serves as an example of implementing payment systems, user authentication, and database management 
              in a Next.js application. Perfect for developers looking to understand full-stack development with 
              real-world payment integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components
const TechItem = ({ icon, name, desc }) => (
  <div className="flex items-start space-x-3">
    <span className="text-2xl">{icon}</span>
    <div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </div>
)

const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-slate-800/30 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-colors">
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
)

export default About
export const metadata = {
    title: "About - Get Me A Chai",
    }