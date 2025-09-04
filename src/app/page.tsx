'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Leaf, 
  Shield, 
  Eye, 
  Globe, 
  TrendingUp, 
  Heart,
  MapPin,
  Users,
  Award,
  Timer
} from 'lucide-react'
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Simple Typewriter Component
const SimpleTypewriter = ({ text, className }: { text: string, className?: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-conservation-500">|</span>
      )}
    </span>
  )
}

const impactStats = [
  { value: '$2.4M', label: 'Funds Raised', icon: TrendingUp },
  { value: '127', label: 'Tigers Protected', icon: Shield },
  { value: '45', label: 'Rainforest Parcels', icon: Leaf },
  { value: '15K', label: 'Global Donors', icon: Heart },
]

const featuredAssets = [
  {
    id: 1,
    name: 'Bengal Tiger Conservation',
    location: 'Sundarbans, India',
    price: '0.5 ETH',
    available: '23/100',
    status: 'Active',
    lastUpdate: '2 hrs ago',
    health: 95,
    emoji: '🐅',
    description: 'Help protect the majestic Bengal tigers in their natural habitat. Your investment directly funds anti-poaching efforts and habitat preservation.',
    category: 'Wildlife Protection',
    urgency: 'high'
  },
  {
    id: 2,
    name: 'Amazon Rainforest Preservation',
    location: 'Acre, Brazil',
    price: '0.3 ETH',
    available: '67/200',
    status: 'Growing',
    lastUpdate: '5 min ago',
    health: 88,
    emoji: '🌳',
    description: 'Protect vital rainforest ecosystems that serve as the lungs of our planet. Every share helps preserve biodiversity and combat climate change.',
    category: 'Forest Conservation',
    urgency: 'medium'
  },
  {
    id: 3,
    name: 'Mountain Gorilla Sanctuary',
    location: 'Rwanda',
    price: '0.7 ETH',
    available: '12/50',
    status: 'Monitoring',
    lastUpdate: '1 hr ago',
    health: 92,
    emoji: '🦍',
    description: 'Support critically endangered mountain gorillas through advanced tracking and community-based conservation programs.',
    category: 'Primate Protection',
    urgency: 'high'
  },
  {
    id: 4,
    name: 'African Elephant Migration',
    location: 'Kenya',
    price: '0.6 ETH',
    available: '34/80',
    status: 'Migrating',
    lastUpdate: '30 min ago',
    health: 91,
    emoji: '🐘',
    description: 'Protect ancient elephant migration routes and ensure safe passage for these gentle giants across traditional territories.',
    category: 'Wildlife Corridors',
    urgency: 'medium'
  },
  {
    id: 5,
    name: 'Arctic Polar Bear Habitat',
    location: 'Svalbard, Norway',
    price: '0.8 ETH',
    available: '19/60',
    status: 'Critical',
    lastUpdate: '15 min ago',
    health: 78,
    emoji: '🐻‍❄️',
    description: 'Preserve critical sea ice habitats for polar bears facing the challenges of climate change in the rapidly warming Arctic.',
    category: 'Climate Adaptation',
    urgency: 'critical'
  },
  {
    id: 6,
    name: 'Sea Turtle Nesting Beaches',
    location: 'Costa Rica',
    price: '0.4 ETH',
    available: '45/120',
    status: 'Nesting Season',
    lastUpdate: '45 min ago',
    health: 89,
    emoji: '🐢',
    description: 'Protect pristine nesting beaches where sea turtles return annually to continue their ancient reproductive cycles.',
    category: 'Marine Conservation',
    urgency: 'medium'
  },
]

export default function Home() {
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
              <span className="text-2xl font-bold text-white">
                Fauna<span className="text-conservation-500">X</span>
              </span>
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
              <Link href="/about" className="text-gray-300 hover:text-conservation-500 transition-colors">
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
            {/* Clean background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Subtle decorative elements */}
              <div className="absolute top-20 right-20 w-2 h-2 bg-conservation-500/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-32 left-16 w-1 h-1 bg-conservation-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-32 left-32 w-1.5 h-1.5 bg-conservation-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 right-40 w-1 h-1 bg-conservation-600/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            </div>
            
            <div className="relative z-10 mb-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">Fauna</span>
                <span className="text-conservation-500">X</span>
                <span className="text-white">: </span>
                <SimpleTypewriter 
                  text="Own a Share in Protecting Wildlife"
                  className="text-conservation-400"
                />
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto relative z-10"
            >
              Buy fractional NFTs representing real conservation assets. Track tigers, 
              protect rainforests, and see your impact in real-time through blockchain technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            >
              <Button variant="neon" size="xl" className="min-w-[200px]">
                <Globe className="mr-2 h-5 w-5" />
                Explore Assets
              </Button>
              <Button variant="glass" size="xl" className="min-w-[200px]">
                <Eye className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Making a <span className="text-conservation-500">Real Difference</span>
            </h2>
            <p className="text-xl text-gray-300">
              Global impact powered by blockchain transparency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
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
                      variant="default"
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

      {/* Featured Conservation Assets - Draggable Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-conservation-500">Conservation Assets</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Interactive conservation opportunities - drag to explore!
            </p>
          </motion.div>
          
          <DraggableCardContainer className="flex flex-wrap justify-center gap-8">
            {featuredAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <DraggableCardBody className="bg-dark-card border border-white/10 hover:border-conservation-500/50 transition-colors relative overflow-hidden">
                  <GlowingEffect 
                    disabled={false}
                    proximity={100}
                    spread={40}
                    blur={2}
                    variant="default"
                  />
                  <div className="h-full flex flex-col relative z-10">
                    {/* Animal Hero Section */}
                    <div className="text-center mb-6">
                      <div className="text-8xl mb-4 filter drop-shadow-lg">
                        {asset.emoji}
                      </div>
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        asset.urgency === 'critical' ? 'bg-red-500/20 text-red-400' :
                        asset.urgency === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        asset.urgency === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {asset.status}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{asset.name}</h3>
                      <p className="text-conservation-500 text-sm flex items-center mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {asset.location}
                      </p>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {asset.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Price per share</span>
                          <span className="font-bold text-conservation-500">{asset.price}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Available</span>
                          <span className="text-white text-sm">{asset.available} shares</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Health</span>
                          <div className="flex items-center">
                            <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                              <div 
                                className="h-2 bg-conservation-500 rounded-full"
                                style={{ width: `${asset.health}%` }}
                              />
                            </div>
                            <span className="text-conservation-500 text-sm">{asset.health}%</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-xs text-gray-400">
                          <Timer className="h-3 w-3 mr-1" />
                          Last update: {asset.lastUpdate}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full" variant="neon">
                      <Heart className="mr-2 h-4 w-4" />
                      Protect Now
                    </Button>
                  </div>
                </DraggableCardBody>
              </motion.div>
            ))}
          </DraggableCardContainer>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              <Globe className="mr-2 h-5 w-5" />
              Explore All Conservation Assets
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              How <span className="text-conservation-500">FaunaX</span> Works
            </h2>
            <p className="text-xl text-gray-300">
              Simple steps to start making a conservation impact
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect & Browse',
                description: 'Connect your wallet and explore our marketplace of verified conservation assets.',
                icon: Globe,
              },
              {
                step: '02',
                title: 'Buy Fractions',
                description: 'Purchase fractional NFTs representing real conservation efforts worldwide.',
                icon: Shield,
              },
              {
                step: '03',
                title: 'Track Impact',
                description: 'Monitor real-time data and see the direct impact of your conservation investment.',
                icon: TrendingUp,
              },
            ].map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <Card className="p-8 hover:glass">
                    <div className="text-6xl font-bold text-conservation-500/20 mb-4">
                      {step.step}
                    </div>
                    <IconComponent className="h-12 w-12 text-conservation-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
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
