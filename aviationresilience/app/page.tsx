"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Plane,
  Shield,
  Eye,
  Star,
  Globe,
  CheckCircle,
  BarChart3,
  Database,
  GraduationCap,
  X,
  ZoomIn,
  Users,
  Building,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function LandingPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavigationClick = (path: string, sectionId?: string) => {
    if (sectionId) {
      router.push(`${path}#${sectionId}`)
    } else {
      router.push(path)
    }
    // Close mobile nav if open
    const mobileNav = document.getElementById("mobile-nav")
    if (mobileNav && !mobileNav.classList.contains("hidden")) {
      mobileNav.classList.add("hidden")
    }
  }

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const handleReadinessClick = () => {
    handleNavigationClick("/contact", "contact-hero")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with Mobile Menu */}
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Plane className="h-8 w-8 text-sky-500" />
          <span className="ml-3 text-xl sm:text-2xl font-bold text-navy-900">AviationResilience.org</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium hover:text-sky-500 transition-colors text-gray-700"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("solutions")}
            className="text-sm font-medium hover:text-sky-500 transition-colors text-gray-700"
          >
            Solutions
          </button>
          <button
            onClick={() => handleNavigationClick("/contact", "contact-hero")}
            className="text-sm font-medium hover:text-sky-500 transition-colors text-gray-700"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-sky-500 hover:bg-sky-600 text-white px-3 sm:px-6 text-xs sm:text-sm"
            onClick={handleReadinessClick}
          >
            <span className="hidden sm:inline">Compare Your Readiness</span>
            <span className="sm:hidden">Readiness</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => {
              const nav = document.getElementById("mobile-nav")
              nav?.classList.toggle("hidden")
            }}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-nav" className="hidden absolute top-20 left-0 right-0 bg-white border-b shadow-lg md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => {
                scrollToSection("hero")
                document.getElementById("mobile-nav")?.classList.add("hidden")
              }}
              className="text-left text-sm font-medium hover:text-sky-500 transition-colors text-gray-700"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("solutions")
                document.getElementById("mobile-nav")?.classList.add("hidden")
              }}
              className="text-left text-sm font-medium hover:text-sky-500 transition-colors text-gray-700"
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavigationClick("/contact", "contact-hero")}
              className="text-left text-sm font-medium hover:text-sky-500 transition-colors text-gray-700"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full min-h-screen flex items-center bg-gradient-to-br from-navy-50 via-white to-sky-50"
        >
          <div className="container px-4 md:px-6 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 tracking-tight leading-tight">
                    Empowering You with Real-Time Emergency Readiness
                  </h1>

                  {/* Subheadline with icons */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 max-w-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <Plane className="h-4 w-4 text-sky-600" />
                        </div>
                        <span className="text-lg font-medium text-sky-600">Airlines</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Shield className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-lg font-medium text-green-600">Civil Aviation Authorities</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Building className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-lg font-medium text-purple-600">Airports</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-lg font-medium text-orange-600">Ground Handlers</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-lg"
                    onClick={handleReadinessClick}
                  >
                    Compare your readiness against other operators
                  </Button>
                  <p className="text-sm text-gray-600 mt-3 font-medium">
                    No long-term contracts – start improving readiness today.
                  </p>
                </div>
              </div>

              {/* Hero Image - Aviation ERP Dashboard with Animation */}
              <div className="order-first lg:order-last">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl border border-gray-200">
                    <img
                      src="/images/oversight.png?height=600&width=800&text=Aviation+ERP+Dashboard+Cockpit+Interface"
                      alt="Aviation Emergency Response Planning Dashboard - Cockpit-style interface showing real-time station readiness, flight operations monitoring, and emergency response coordination"
                      className="w-full transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-lg"></div>

                    {/* Animated elements - Aviation focused */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded px-3 py-1 text-xs font-medium text-navy-900">
                      <span className="inline-flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot"></div>
                        Live Operations Center
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-sky-500/90 backdrop-blur-sm rounded px-3 py-1 text-xs font-medium text-white">
                      Emergency Ready
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded px-3 py-1 text-xs font-medium text-navy-900">
                      Multi-Station View
                    </div>

                    {/* Subtle moving route line animation */}
                    <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-60">
                      <div className="w-full h-full bg-gradient-to-r from-sky-400 to-sky-600 animate-route-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / Pains Section */}
        <section className="w-full py-20 lg:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 tracking-tight">
                The Critical Challenges Aviation Faces Today
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Emergency preparedness gaps that put operations, compliance, and lives at risk
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Minimum Quality Oversight</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lack of comprehensive oversight of station and overall emergency response readiness across operations.
                </p>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Poor Training Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Training and exercises are expensive, low-quality, and become mere compliance tick-boxes.
                </p>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Outdated Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  Difficulty maintaining up-to-date local data and agency contact information across all stations.
                </p>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Limited Visibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lack of real-time visibility for accountable executives to make informed decisions.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="w-full py-20 lg:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 tracking-tight">
                Comprehensive Emergency Planning Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
                Purpose-built tools that transform how aviation organizations prepare for and respond to emergencies
              </p>
            </div>

            {/* Solution 1 - Left Image, Right Text */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 relative group">
                <img
                  src="/images/oversight.png?height=500&width=600"
                  alt="Real-time oversight dashboard screenshot"
                  className="w-full rounded-lg shadow-2xl cursor-pointer transition-transform group-hover:scale-105"
                
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-12 w-12 text-white" />
                </div>
                {/* Video play button overlay */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <Badge className="bg-sky-100 text-sky-700 px-4 py-2 text-sm font-medium">Real-Time Oversight</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                  Real-Time Oversight Dashboard
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Get instant visibility into your stations' emergency readiness compliance. Monitor training
                  completion, exercise participation, and readiness metrics across all your operations from a single,
                  comprehensive dashboard.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Live compliance tracking across all stations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Executive-level reporting and analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Multi-station overview with drill-down capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 2 - Right Image, Left Text */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6">
                <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">Local Information</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                  Up-to-Date Local Information Module
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Always have updated local contacts, procedures, and resources at your fingertips. Our system
                  automatically maintains current emergency contact information and local procedures for each of your
                  stations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Automated contact updates and verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Local procedure management and distribution</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Resource availability tracking and alerts</span>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <img
                  src="/images/contacts.png?height=500&width=600"
                  alt="Local information module interface"
                  className="w-full rounded-lg shadow-2xl cursor-pointer transition-transform group-hover:scale-105"
                 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                 
                </div>
              </div>
            </div>

            {/* Solution 3 - Left Image, Right Text */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 relative group">
                <img
                  src="/images/training.png?height=500&width=600"
                  alt="Multiagency training management platform"
                  className="w-full rounded-lg shadow-2xl cursor-pointer transition-transform group-hover:scale-105"
                  
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
                  Training Management
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                  Multiagency Training Management
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Standardize high-quality MULTIAGENCY training across all your stations efficiently. Coordinate
                  training between airlines, airports, ground handlers, and emergency services with ease.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Standardized training modules and curricula</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Multi-agency coordination and scheduling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Progress tracking and certification management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 4 - Right Image, Left Text */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-orange-100 text-orange-700 px-4 py-2 text-sm font-medium">
                  Exercise Marketplace
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                  Multiagency and Multiairline Exercise Group
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Coordinate and join multiagency, multiairline exercises effortlessly. Build true readiness with our
                  marketplace connecting organisations for collaborative emergency response exercises.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Exercise coordination platform and scheduling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Multi-organization participation management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Performance analytics and improvement insights</span>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <img
                  src="/images/exercise.png?height=500&width=600"
                  alt="Exercise marketplace coordination system"
                  className="w-full rounded-lg shadow-2xl cursor-pointer transition-transform group-hover:scale-105"
                 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-12 w-12 text-white" />
                </div>
                {/* Video play button overlay */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Confidence Section */}
        <section className="w-full py-20 lg:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 tracking-tight">
                Developed by Aviation Emergency Professionals
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 font-light">
                Aligned with ICAO Policy on Assistance to Aircraft Accident Victims, IATA, and NTSB best practices
                (icons shown for reference only).
              </p>

              {/* Standards Icons */}
              <div className="flex justify-center items-center gap-12 mb-16 opacity-60">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-10 w-10 text-gray-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">ICAO</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Plane className="h-10 w-10 text-gray-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">IATA</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-10 w-10 text-gray-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">NTSB</p>
                </div>
              </div>
            </div>

            {/* Enhanced Testimonials Grid with Profile Photos */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {[
                {
                  name: "Sarah Mitchell",
                  title: "Head of Safety & Emergency Planning, Regional Airline",
                  quote:
                    "This ERP platform transformed our emergency preparedness. We reduced drill planning time by 60% while enhancing compliance readiness.",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "James Rodriguez",
                  title: "Emergency Planning Manager, International Airport",
                  quote:
                    "We struggled with acquiring an emergency response planning system because current solutions were too expensive and not user-friendly. This platform solved everything.",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "Maria Chen",
                  title: "Training Manager, Ground Handling Agent",
                  quote:
                    "The multiagency training coordination has revolutionized how we prepare our teams. Outstanding platform for aviation emergency readiness.",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "David Thompson",
                  title: "Safety Director, Major Airline",
                  quote:
                    "Real-time oversight capabilities have given our executives the visibility they need for informed decision-making and regulatory compliance.",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "Emma Wilson",
                  title: "Senior Inspector, Civil Aviation Authority",
                  quote:
                    "As a civil aviation inspector, I appreciate the comprehensive compliance tracking and standardized approach to emergency preparedness.",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  name: "Michael Brown",
                  title: "Operations Manager, Hub Airport",
                  quote:
                    "The exercise marketplace has enabled us to coordinate with multiple airlines and agencies seamlessly. Exceptional value for our airport operations.",
                  image: "/placeholder.svg?height=40&width=40",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} profile`}
                      className="w-10 h-10 rounded-full bg-gray-200 object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-navy-900">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.title}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Civil Aviation Authority Section */}
        <section className="w-full py-20 lg:py-28 bg-gradient-to-r from-sky-500 to-navy-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Are you a Civil Aviation Authority?
              </h2>
              <p className="text-xl text-sky-100 mb-8 leading-relaxed font-light">
                AviationResilience.org offers special free access to support national emergency preparedness oversight
                and coordination.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => handleNavigationClick("/contact", "contact-hero")}
              >
                Request Free Access
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Footer */}
        <section className="w-full py-20 lg:py-28 bg-navy-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to strengthen your emergency response planning?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                Join the next generation of aviation crisis readiness.
              </p>
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                onClick={handleReadinessClick}
              >
                Compare your readiness against other operators
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-sm text-gray-500">© 2025 AviationResilience.org. All rights reserved. </p>
      </footer>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          <div className="relative">
            <img src={lightboxImage || "/placeholder.svg"} alt="Solution screenshot" className="w-full h-auto" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
