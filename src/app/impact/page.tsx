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
  Zap,
  Heart,
  Activity,
  Satellite,
  Camera,
  Thermometer,
  Droplets,
  Wind
} from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Globe } from '@/components/ui/globe'
import Link from 'next/link'

const liveUpdates = [
  {
    id: 1,
    asset: 'Bengal Tiger #007',
    location: 'Sundarbans, India',
    update: 'Moved 2.3km northeast towards water source',
    timestamp: '2 minutes ago',
    type: 'movement',
    data: { distance: '2.3km', speed: '1.2km/h', health: 95 },
    image: '🐅',
    priority: 'normal'
  },
  {
    id: 2,
    asset: 'Amazon Parcel A4',
    location: 'Acre, Brazil',
    update: 'Deforestation alert: 0.2 hectares cleared nearby',
    timestamp: '15 minutes ago',
    type: 'alert',
    data: { threatLevel: 'medium', area: '0.2 hectares', response: 'dispatched' },
    image: '🌳',
    priority: 'high'
  },
  {
    id: 3,
    asset: 'Mountain Gorilla #003',
    location: 'Rwanda',
    update: 'Family group interaction detected - 5 individuals',
    timestamp: '1 hour ago',
    type: 'social',
    data: { groupSize: 5, behavior: 'feeding', health: 92 },
    image: '🦍',
    priority: 'normal'
  },
  {
    id: 4,
    asset: 'Coral Reef #12',
    location: 'Great Barrier Reef',
    update: 'Temperature spike detected: 29.2°C (0.8°C above normal)',
    timestamp: '1 hour ago',
    type: 'environmental',
    data: { temperature: '29.2°C', deviation: '+0.8°C', trend: 'rising' },
    image: '🪸',
    priority: 'critical'
  }
]

const globalMetrics = [
  { label: 'Active Trackers', value: '1,247', icon: Satellite, trend: '+23 today' },
  { label: 'Live Alerts', value: '8', icon: Zap, trend: '3 critical' },
  { label: 'Data Points/Hour', value: '2.3M', icon: Activity, trend: '99.9% uptime' },
  { label: 'Conservation Areas', value: '156', icon: Shield, trend: '12 countries' },
]

const environmentalData = [
  { location: 'Amazon Basin', temperature: '28.4°C', humidity: '78%', airQuality: 'Good', trend: 'stable' },
  { location: 'Sundarbans', temperature: '31.2°C', humidity: '82%', airQuality: 'Moderate', trend: 'rising' },
  { location: 'Great Barrier Reef', temperature: '29.2°C', humidity: '75%', airQuality: 'Good', trend: 'warning' },
  { location: 'Serengeti', temperature: '26.8°C', humidity: '45%', airQuality: 'Excellent', trend: 'stable' },
]

export default function LiveImpact() {
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
              <Link href="/dashboard" className="text-gray-300 hover:text-conservation-500 transition-colors">
                Dashboard
              </Link>
              <Link href="/impact" className="text-conservation-500 font-medium">
                Live Impact
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-conservation-500 transition-colors">
                About
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">LIVE</span>
              </div>
              <Button variant="outline" size="sm">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Live Conservation <span className="text-conservation-500">Impact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time monitoring of conservation assets worldwide. Track animal movements, 
              environmental changes, and conservation progress as it happens.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Live data streaming from 1,247 devices</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Metrics */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {globalMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Card key={index} className="p-6 text-center hover:neon-glow-green">
                  <IconComponent className="h-8 w-8 text-conservation-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300 mb-2">{metric.label}</div>
                  <div className="text-sm text-conservation-500">{metric.trend}</div>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Live Updates Feed */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Updates Feed */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Live Activity Feed</h2>
                  <Button variant="outline" size="sm">
                    <Activity className="mr-2 h-4 w-4" />
                    All Updates
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {liveUpdates.map((update, index) => (
                    <motion.div
                      key={update.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className={`p-4 border-l-4 relative overflow-hidden ${
                        update.priority === 'critical' ? 'border-l-red-500 hover:neon-glow-blue' :
                        update.priority === 'high' ? 'border-l-orange-500' :
                        'border-l-green-500'
                      }`}>
                        <GlowingEffect 
                          disabled={false}
                          proximity={80}
                          spread={35}
                          blur={1}
                          variant="default"
                        />
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{update.image}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-white">{update.asset}</h3>
                              <div className="flex items-center text-sm text-gray-400">
                                <Timer className="h-3 w-3 mr-1" />
                                {update.timestamp}
                              </div>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-400 mb-2">
                              <MapPin className="h-3 w-3 mr-1" />
                              {update.location}
                            </div>
                            
                            <p className="text-white mb-3">{update.update}</p>
                            
                            <div className="flex items-center space-x-4 text-sm">
                              {update.type === 'movement' && (
                                <>
                                  <div className="text-conservation-500">
                                    Distance: {update.data.distance}
                                  </div>
                                  <div className="text-conservation-500">
                                    Speed: {update.data.speed}
                                  </div>
                                </>
                              )}
                              {update.type === 'alert' && (
                                <>
                                  <div className="text-orange-400">
                                    Threat: {update.data.threatLevel}
                                  </div>
                                  <div className="text-green-400">
                                    Response: {update.data.response}
                                  </div>
                                </>
                              )}
                              {update.type === 'environmental' && (
                                <>
                                  <div className="text-red-400">
                                    Temp: {update.data.temperature}
                                  </div>
                                  <div className="text-orange-400">
                                    Deviation: {update.data.deviation}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Environmental Monitoring */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Environmental Monitoring</h2>
                
                <div className="space-y-4">
                  {environmentalData.map((data, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-white">{data.location}</h3>
                        <div className={`w-3 h-3 rounded-full ${
                          data.trend === 'warning' ? 'bg-red-400 animate-pulse' :
                          data.trend === 'rising' ? 'bg-orange-400' :
                          'bg-green-400'
                        }`}></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-400">
                            <Thermometer className="h-3 w-3 mr-1" />
                            Temperature
                          </div>
                          <span className="text-white">{data.temperature}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-400">
                            <Droplets className="h-3 w-3 mr-1" />
                            Humidity
                          </div>
                          <span className="text-white">{data.humidity}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-400">
                            <Wind className="h-3 w-3 mr-1" />
                            Air Quality
                          </div>
                          <span className={`${
                            data.airQuality === 'Excellent' ? 'text-green-400' :
                            data.airQuality === 'Good' ? 'text-green-300' :
                            data.airQuality === 'Moderate' ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {data.airQuality}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <Card className="p-6 mt-6 text-center glass relative overflow-hidden">
                  <GlowingEffect 
                    disabled={false}
                    proximity={70}
                    spread={30}
                    blur={1}
                    variant="default"
                  />
                  <Camera className="h-8 w-8 text-conservation-500 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Live Camera Feeds</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Watch conservation in action
                  </p>
                  <Button variant="neon" size="sm" className="w-full">
                    View Cameras
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Map Placeholder */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Global Conservation Network</h2>
            <Card className="p-8 text-center glass-dark relative overflow-hidden">
              <GlowingEffect 
                disabled={false}
                proximity={100}
                spread={40}
                blur={2}
                variant="default"
              />
              <div className="mb-6">
                <div className="mb-4">
                  <Globe className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Interactive Impact Map</h3>
                <p className="text-gray-400">
                  Explore conservation assets and real-time data across the globe
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-conservation-500">23</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-conservation-500">156</div>
                  <div className="text-sm text-gray-400">Protected Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-conservation-500">1,247</div>
                  <div className="text-sm text-gray-400">Active Devices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-conservation-500">24/7</div>
                  <div className="text-sm text-gray-400">Monitoring</div>
                </div>
              </div>
              
              <Button variant="neon" size="lg">
                Explore Map
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
