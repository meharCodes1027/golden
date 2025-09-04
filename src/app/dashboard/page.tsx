'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Leaf, 
  Shield, 
  MapPin,
  Timer,
  TrendingUp,
  TrendingDown,
  Zap,
  Heart,
  Award,
  Bell,
  Eye,
  Download,
  Share2
} from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import Link from 'next/link'

const portfolioAssets = [
  {
    id: 1,
    name: 'Bengal Tiger Collar #007',
    location: 'Sundarbans, India',
    shares: '15/100',
    totalValue: '7.5 ETH',
    currentValue: '8.2 ETH',
    change: '+9.3%',
    health: 95,
    image: '🐅',
    lastActivity: 'Moved 2.3km today',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Amazon Rainforest Parcel A4',
    location: 'Acre, Brazil',
    shares: '25/200',
    totalValue: '7.5 ETH',
    currentValue: '8.4 ETH',
    change: '+12%',
    health: 88,
    image: '🌳',
    lastActivity: 'New growth detected',
    status: 'Growing'
  },
  {
    id: 3,
    name: 'Coral Reef Restoration #12',
    location: 'Great Barrier Reef',
    shares: '8/150',
    totalValue: '3.2 ETH',
    currentValue: '2.9 ETH',
    change: '-9.4%',
    health: 76,
    image: '🪸',
    lastActivity: 'Restoration in progress',
    status: 'Recovering'
  }
]

const achievements = [
  { title: 'Tiger Guardian', description: 'Protected 3+ tigers', icon: '🐅', unlocked: true },
  { title: 'Forest Protector', description: 'Saved 100+ trees', icon: '🌳', unlocked: true },
  { title: 'Ocean Warrior', description: 'Restored coral reefs', icon: '🌊', unlocked: true },
  { title: 'Conservation Hero', description: 'Portfolio value >10 ETH', icon: '🏆', unlocked: false },
]

const impactMetrics = [
  { label: 'CO2 Offset', value: '2.3 tons', trend: '+15%', icon: Leaf },
  { label: 'Wildlife Protected', value: '8 animals', trend: '+2', icon: Shield },
  { label: 'Trees Saved', value: '156', trend: '+23', icon: Leaf },
  { label: 'Investment Growth', value: '+8.2%', trend: 'Monthly avg', icon: TrendingUp },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-16">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-conservation-500" />
              <span className="text-2xl font-bold text-white">
                Fauna<span className="text-conservation-500">X</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-conservation-500 transition-colors">
                Marketplace
              </Link>
              <Link href="/dashboard" className="text-conservation-500 font-medium">
                Dashboard
              </Link>
              <Link href="/impact" className="text-gray-300 hover:text-conservation-500 transition-colors">
                Live Impact
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-conservation-500 transition-colors">
                About
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                0x1234...5678
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Conservation <span className="text-conservation-500">Dashboard</span>
              </h1>
              <p className="text-xl text-gray-300">
                Track your impact and manage your conservation portfolio
              </p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button variant="neon">
                <Share2 className="mr-2 h-4 w-4" />
                Share Impact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <Card className="p-6 glass hover:neon-glow-green relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={70}
                spread={30}
                blur={1}
                variant="default"
              />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Total Portfolio</h3>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">18.1 ETH</div>
              <div className="text-green-400 text-sm">+8.2% this month</div>
            </Card>

            <Card className="p-6 glass relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={70}
                spread={30}
                blur={1}
                variant="default"
              />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Assets Owned</h3>
                <Shield className="h-5 w-5 text-conservation-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-gray-400 text-sm">Across 3 regions</div>
            </Card>

            <Card className="p-6 glass relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={70}
                spread={30}
                blur={1}
                variant="default"
              />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Impact Score</h3>
                <Award className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">847</div>
              <div className="text-yellow-400 text-sm">Top 5% globally</div>
            </Card>

            <Card className="p-6 glass relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={70}
                spread={30}
                blur={1}
                variant="default"
              />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Active Alerts</h3>
                <Bell className="h-5 w-5 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-red-400 text-sm">Requires attention</div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Your Conservation Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => {
                const IconComponent = metric.icon
                return (
                  <Card key={index} className="p-4 text-center relative overflow-hidden">
                    <GlowingEffect 
                      disabled={false}
                      proximity={60}
                      spread={25}
                      blur={1}
                      variant="default"
                    />
                    <IconComponent className="h-8 w-8 text-conservation-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                    <div className="text-xs text-green-400">{metric.trend}</div>
                  </Card>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Assets */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Your Conservation Assets</h2>
            <div className="space-y-6">
              {portfolioAssets.map((asset, index) => (
                <Card key={asset.id} className="p-6 relative overflow-hidden">
                  <GlowingEffect 
                    disabled={false}
                    proximity={100}
                    spread={40}
                    blur={2}
                    variant="default"
                  />
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="text-4xl">{asset.image}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{asset.name}</h3>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          {asset.location}
                        </div>
                        <div className="flex items-center text-sm text-green-400 mt-1">
                          <Zap className="h-3 w-3 mr-1" />
                          {asset.lastActivity}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Your Shares</div>
                        <div className="text-lg font-semibold">{asset.shares}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Current Value</div>
                        <div className="text-lg font-semibold">{asset.currentValue}</div>
                        <div className={`text-sm ${
                          asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {asset.change}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-400">Health</div>
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                            <div 
                              className={`h-2 rounded-full ${
                                asset.health >= 90 ? 'bg-green-500' :
                                asset.health >= 80 ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}
                              style={{ width: `${asset.health}%` }}
                            />
                          </div>
                          <span className={`text-sm ${
                            asset.health >= 90 ? 'text-green-400' :
                            asset.health >= 80 ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {asset.health}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Sell
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Conservation Achievements</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`p-6 text-center ${
                  achievement.unlocked 
                    ? 'hover:neon-glow-green' 
                    : 'opacity-50 glass-dark'
                }`}>
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                  {achievement.unlocked ? (
                    <div className="mt-4 text-xs text-green-400 font-medium">
                      ✓ UNLOCKED
                    </div>
                  ) : (
                    <div className="mt-4 text-xs text-gray-500">
                      🔒 LOCKED
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
