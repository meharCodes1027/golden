'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Leaf, 
  Shield, 
  MapPin,
  Timer,
  Filter,
  Search,
  TrendingUp,
  Zap,
  Heart,
  Globe
} from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import Link from 'next/link'

const allAssets = [
  {
    id: 1,
    name: 'Bengal Tiger Collar #007',
    location: 'Sundarbans, India',
    price: '0.5 ETH',
    available: '23/100',
    status: 'Active',
    lastUpdate: '2 hrs ago',
    health: 95,
    image: '🐅',
    category: 'Wildlife',
    trend: '+5%',
    urgency: 'high'
  },
  {
    id: 2,
    name: 'Amazon Rainforest Parcel A4',
    location: 'Acre, Brazil',
    price: '0.3 ETH',
    available: '67/200',
    status: 'Growing',
    lastUpdate: '5 min ago',
    health: 88,
    image: '🌳',
    category: 'Forest',
    trend: '+12%',
    urgency: 'medium'
  },
  {
    id: 3,
    name: 'Mountain Gorilla Tracker',
    location: 'Rwanda',
    price: '0.7 ETH',
    available: '12/50',
    status: 'Monitoring',
    lastUpdate: '1 hr ago',
    health: 92,
    image: '🦍',
    category: 'Wildlife',
    trend: '+8%',
    urgency: 'high'
  },
  {
    id: 4,
    name: 'Coral Reef Restoration #12',
    location: 'Great Barrier Reef, Australia',
    price: '0.4 ETH',
    available: '89/150',
    status: 'Recovering',
    lastUpdate: '30 min ago',
    health: 76,
    image: '🪸',
    category: 'Marine',
    trend: '+15%',
    urgency: 'critical'
  },
  {
    id: 5,
    name: 'Snow Leopard Collar #003',
    location: 'Himalayas, Nepal',
    price: '0.6 ETH',
    available: '8/30',
    status: 'Active',
    lastUpdate: '45 min ago',
    health: 91,
    image: '🐆',
    category: 'Wildlife',
    trend: '+3%',
    urgency: 'high'
  },
  {
    id: 6,
    name: 'Mangrove Forest Protection',
    location: 'Sundarbans, Bangladesh',
    price: '0.25 ETH',
    available: '134/300',
    status: 'Expanding',
    lastUpdate: '1 hr ago',
    health: 83,
    image: '🌿',
    category: 'Forest',
    trend: '+7%',
    urgency: 'medium'
  }
]

export default function Marketplace() {
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
              <Link href="/marketplace" className="text-conservation-500 font-medium">
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
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Connect Wallet
              </Button>
              <Button variant="neon" size="sm">
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conservation <span className="text-conservation-500">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover and invest in verified conservation assets. Each NFT represents real-world 
              impact backed by cutting-edge tracking technology.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search assets by name, location, or species..."
                className="w-full pl-10 pr-4 py-3 glass-dark rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-conservation-500"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="glass" size="default">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="default">
                Sort: Trending
              </Button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <Card className="p-4 text-center relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={60}
                spread={25}
                blur={1}
                variant="default"
              />
              <Shield className="h-6 w-6 text-conservation-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">127</div>
              <div className="text-sm text-gray-400">Active Assets</div>
            </Card>
            <Card className="p-4 text-center relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={60}
                spread={25}
                blur={1}
                variant="default"
              />
              <TrendingUp className="h-6 w-6 text-neon-blue mx-auto mb-2" />
              <div className="text-2xl font-bold">$2.4M</div>
              <div className="text-sm text-gray-400">Total Value</div>
            </Card>
            <Card className="p-4 text-center relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={60}
                spread={25}
                blur={1}
                variant="default"
              />
              <Heart className="h-6 w-6 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">15K</div>
              <div className="text-sm text-gray-400">Investors</div>
            </Card>
            <Card className="p-4 text-center relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={60}
                spread={25}
                blur={1}
                variant="default"
              />
              <Globe className="h-6 w-6 text-conservation-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">23</div>
              <div className="text-sm text-gray-400">Countries</div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:scale-105 transition-all duration-300 relative">
                  <GlowingEffect 
                    disabled={false}
                    proximity={80}
                    spread={35}
                    blur={2}
                    variant="default"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{asset.image}</div>
                      <div className="flex items-center space-x-2">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          asset.urgency === 'critical' ? 'bg-red-500/20 text-red-400' :
                          asset.urgency === 'high' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {asset.urgency.toUpperCase()}
                        </div>
                        <div className="flex items-center text-xs text-green-400">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {asset.trend}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{asset.name}</CardTitle>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        asset.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        asset.status === 'Growing' || asset.status === 'Expanding' ? 'bg-blue-500/20 text-blue-400' :
                        asset.status === 'Recovering' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {asset.status}
                      </div>
                    </div>
                    
                    <CardDescription className="flex items-center mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {asset.location}
                    </CardDescription>
                    
                    <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                      {asset.category}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price per share</span>
                        <span className="font-bold text-conservation-500 text-lg">{asset.price}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-400">Available</span>
                        <span className="text-white">{asset.available} shares</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Health</span>
                        <div className="flex items-center">
                          <div className="w-20 h-2 bg-gray-700 rounded-full mr-2">
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
                      
                      <div className="flex items-center text-sm text-gray-400">
                        <Timer className="h-4 w-4 mr-1" />
                        Last update: {asset.lastUpdate}
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Zap className="h-4 w-4 mr-1 text-yellow-400" />
                        <span className="text-yellow-400">Live tracking active</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-6">
                      <Button className="flex-1" variant="neon">
                        Buy Fraction
                      </Button>
                      <Button variant="outline" size="default">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Assets
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
