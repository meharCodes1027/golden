'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  Leaf, 
  Shield, 
  Eye, 
  Globe, 
  TrendingUp, 
  Heart,
  Users,
  Target,
  Zap,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Satellite,
  BarChart3,
  Lock,
  Coins,
  TreePine,
  Fish,
  Mountain,
  Award,
  Sparkles,
  Compass,
  Clock
} from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import Link from 'next/link'

const missionStats = [
  { value: '50+', label: 'Species Protected', icon: Shield },
  { value: '200K+', label: 'Hectares Conserved', icon: TreePine },
  { value: '15', label: 'Countries Active', icon: Globe },
  { value: '25K+', label: 'Conservation Heroes', icon: Users },
]

const teamMembers = [
  {
    name: 'Hardik Thapar',
    role: 'Developer',
    bio: 'Developer with a knack for problem-solving and innovative solutions using AI and Web3.',
    avatar: '👨🏻‍💻',
    expertise: 'AI & Web3'
  },
  {
    name: 'Kavin Thakur',
    role: 'Developer',
    bio: 'Passionate coder and tech enthusiast with expertise in Web3 and web development.',
    avatar: '👨🏻‍💻',
    expertise: 'Web3 Development'
  },
  {
    name: 'Meharjot Kaur',
    role: 'Relations & Research',
    bio: 'UI/UX designer, Data Analyst and researcher with strong technical and communication skills.',
    avatar: '👩🏻‍💻',
    expertise: 'UI/UX & Research'
  },
  {
    name: 'Jashanpreet Singh',
    role: 'Creative Developer',
    bio: 'Creative developer with expertise in UI/UX design and front-end technologies.',
    avatar: '👨🏻‍💻',
    expertise: 'UI/UX Design'
  },
]

const whyChooseUs = [
  {
    title: 'Complete Transparency',
    description: 'Every transaction is recorded on blockchain with real-time tracking of your conservation impact.',
    icon: Lock,
    highlight: '100% Transparent',
    status: 'advantage'
  },
  {
    title: 'Real-Time Impact',
    description: 'See live updates on wildlife movement, habitat health, and conservation progress through IoT sensors.',
    icon: Satellite,
    highlight: 'Live Data',
    status: 'feature'
  },
  {
    title: 'Global Accessibility',
    description: 'Fractional NFTs make conservation investment accessible to everyone, starting from just $10.',
    icon: Globe,
    highlight: 'For Everyone',
    status: 'accessible'
  },
  {
    title: 'Proven Results',
    description: 'Track record of protecting 2,500+ animals and preserving 180K+ hectares across 15 countries.',
    icon: Award,
    highlight: 'Proven Impact',
    status: 'results'
  },
  {
    title: 'Expert Team',
    description: 'Led by conservation biologists, blockchain developers, and data scientists working together.',
    icon: Users,
    highlight: 'Expert Led',
    status: 'team'
  },
  {
    title: 'Future Ready',
    description: 'Advanced AI analytics and predictive models to optimize conservation strategies and outcomes.',
    icon: Sparkles,
    highlight: 'AI Powered',
    status: 'innovation'
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Leaf className="h-8 w-8 text-conservation-500" />
              <Link href="/" className="text-2xl font-bold text-white">
                Fauna<span className="text-conservation-500">X</span>
              </Link>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-conservation-500 transition-colors">
                Marketplace
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-conservation-500 transition-colors">
                Dashboard
              </Link>
              <Link href="/impact" className="text-gray-300 hover:text-conservation-500 transition-colors">
                Live Impact
              </Link>
              <Link href="/about" className="text-conservation-500 font-medium">
                About
              </Link>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <Button variant="outline" size="sm">
                Connect Wallet
              </Button>
              <Button variant="neon" size="sm">
                Start Protecting
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Revolutionizing </span>
                <span className="text-conservation-500">Conservation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                FaunaX bridges the gap between cutting-edge blockchain technology and urgent conservation needs, 
                creating a transparent, accessible platform for global wildlife protection.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="neon" size="xl">
                <Heart className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
              <Button variant="glass" size="xl">
                <Eye className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {missionStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <Card className="p-6 hover:neon-glow-green relative overflow-hidden">
                    <GlowingEffect 
                      disabled={false}
                      proximity={80}
                      spread={30}
                      blur={1}
                    />
                    <IconComponent className="h-8 w-8 text-conservation-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-conservation-500">FaunaX</span>?
            </h2>
            <p className="text-xl text-gray-300">
              The advantages that make us the leader in conservation technology
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <Card className={`p-6 ${index % 2 === 0 ? 'mr-8' : 'ml-8'} relative overflow-hidden`}>
                      <GlowingEffect 
                        disabled={false}
                        proximity={100}
                        spread={40}
                        blur={2}
                      />
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${
                          reason.status === 'advantage' ? 'bg-green-500/20' :
                          reason.status === 'feature' ? 'bg-blue-500/20' :
                          reason.status === 'accessible' ? 'bg-purple-500/20' :
                          reason.status === 'results' ? 'bg-yellow-500/20' :
                          reason.status === 'team' ? 'bg-pink-500/20' :
                          'bg-conservation-500/20'
                        }`}>
                          <IconComponent className={`h-8 w-8 ${
                            reason.status === 'advantage' ? 'text-green-400' :
                            reason.status === 'feature' ? 'text-blue-400' :
                            reason.status === 'accessible' ? 'text-purple-400' :
                            reason.status === 'results' ? 'text-yellow-400' :
                            reason.status === 'team' ? 'text-pink-400' :
                            'text-conservation-400'
                          }`} />
                        </div>
                        <div>
                          <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                            reason.status === 'advantage' ? 'bg-green-500/20 text-green-400' :
                            reason.status === 'feature' ? 'bg-blue-500/20 text-blue-400' :
                            reason.status === 'accessible' ? 'bg-purple-500/20 text-purple-400' :
                            reason.status === 'results' ? 'bg-yellow-500/20 text-yellow-400' :
                            reason.status === 'team' ? 'bg-pink-500/20 text-pink-400' :
                            'bg-conservation-500/20 text-conservation-400'
                          }`}>
                            {reason.highlight}
                          </div>
                          <h3 className="text-lg font-bold mb-1">{reason.title}</h3>
                          <p className="text-gray-300 text-sm">{reason.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className={`w-4 h-4 rounded-full border-4 border-conservation-500/20 flex-shrink-0 ${
                    reason.status === 'advantage' ? 'bg-green-500' :
                    reason.status === 'feature' ? 'bg-blue-500' :
                    reason.status === 'accessible' ? 'bg-purple-500' :
                    reason.status === 'results' ? 'bg-yellow-500' :
                    reason.status === 'team' ? 'bg-pink-500' :
                    'bg-conservation-500'
                  }`}></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-conservation-500">Team</span>
            </h2>
            <p className="text-xl text-gray-300">
              Passionate experts bridging conservation and technology
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:glass relative overflow-hidden">
                  <GlowingEffect 
                    disabled={false}
                    proximity={80}
                    spread={35}
                    blur={1}
                  />
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <div className="text-conservation-500 text-sm font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <div className="inline-flex px-3 py-1 bg-conservation-500/20 rounded-full">
                    <span className="text-conservation-400 text-xs font-medium">
                      {member.expertise}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-12 glass-dark relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={120}
                spread={50}
                blur={3}
              />
              <Zap className="h-16 w-16 text-conservation-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Make a <span className="text-conservation-500">Difference</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of conservation heroes who are already protecting wildlife 
                and preserving our planet's most precious ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="neon" size="xl">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Protecting Wildlife
                </Button>
                <Button variant="glass" size="xl">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore Conservation Assets
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-conservation-500" />
                <span className="text-xl font-bold text-white">
                  Fauna<span className="text-conservation-500">X</span>
                </span>
              </div>
              <p className="text-gray-400">
                Democratizing wildlife conservation through blockchain technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/marketplace" className="hover:text-conservation-500">Marketplace</Link></li>
                <li><Link href="/dashboard" className="hover:text-conservation-500">Dashboard</Link></li>
                <li><Link href="/impact" className="hover:text-conservation-500">Live Impact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Conservation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tigers" className="hover:text-conservation-500">Tiger Protection</Link></li>
                <li><Link href="/forests" className="hover:text-conservation-500">Forest Conservation</Link></li>
                <li><Link href="/marine" className="hover:text-conservation-500">Marine Life</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-conservation-500">Blog</Link></li>
                <li><Link href="/discord" className="hover:text-conservation-500">Discord</Link></li>
                <li><Link href="/twitter" className="hover:text-conservation-500">Twitter</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FaunaX. Building the future of conservation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}