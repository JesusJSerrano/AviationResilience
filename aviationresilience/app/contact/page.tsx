"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleNavigationClick = (path: string, sectionId?: string) => {
    if (sectionId) {
      router.push(`${path}#${sectionId}`)
    } else {
      router.push(path)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Plane className="h-8 w-8 text-sky-500" />
          <span className="ml-3 text-2xl font-bold text-navy-900">AviationResilience.org</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link className="text-sm font-medium hover:text-sky-500 transition-colors text-gray-700" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-sky-500 transition-colors text-gray-700" href="/#solutions">
            Solutions
          </Link>
          <button
            onClick={() => handleNavigationClick("/contact", "contact-hero")}
            className="text-sm font-medium hover:text-sky-500 transition-colors text-gray-700"
          >
            Contact
          </button>
        </nav>
        <div className="flex items-center">
          <Button
            size="sm"
            className="bg-sky-500 hover:bg-sky-600 text-white px-3 sm:px-6 text-xs sm:text-sm"
            onClick={() => handleNavigationClick("/contact", "contact-hero")}
          >
            <span className="hidden sm:inline">Compare Your Readiness</span>
            <span className="sm:hidden">Readiness</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Contact Hero */}
        <section id="contact-hero" className="w-full py-20 lg:py-28 bg-gradient-to-br from-sky-50 via-white to-navy-50">
          <div className="container px-6 md:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 tracking-tight">Get in Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Ready to transform your emergency preparedness? Our aviation emergency planning experts are here to help
                you strengthen your crisis readiness.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="w-full py-20 lg:py-28 bg-white">
          <div className="container px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-6 tracking-tight">
                    Let's Discuss Your Emergency Preparedness Needs
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Whether you're an airline, airport, ground handler, or civil aviation authority, we're here to help
                    you build comprehensive emergency response capabilities.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">Email Us</h3>
                      <p className="text-gray-600">contact@aviationresilience.org</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">Visit Us</h3>
                      <p className="text-gray-600">
                        Aviation Safety Center
                        <br />
                        1234 Airport Boulevard
                        <br />
                        Suite 567
                        <br />
                        Washington, DC 20001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">Book Your Demo</h3>
                  <p className="text-gray-600 mb-4">
                    Use the calendar on the right to schedule a 30-minute Demo with our aviation emergency
                    planning experts. We'll discuss your specific needs and challenges, and show you how our platform
                    can strengthen your crisis readiness.
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-sky-500">
                    <p className="text-sm text-gray-700">
                      <strong>What to expect:</strong>
                    </p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• 30-minute personalized Demo</li>
                      <li>• Assessment of your current readiness</li>
                      <li>• Tailored recommendations</li>
                      <li>• No sales pressure, just expert advice</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Calendly Widget */}
              <div id="contact-form">
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl text-navy-900">Schedule Your Demo</CardTitle>
                    <CardDescription className="text-lg">
                      Select a convenient time for your 30-minute demo to show you how our platform can strengthen your crisis readiness.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Calendly inline widget */}
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/jimenez-aviationresilience/30min"
                      style={{ minWidth: "320px", height: "700px" }}
                    ></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 lg:py-28 bg-navy-900 text-white">
          <div className="container px-6 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to Strengthen Your Emergency Response?
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-light">
                Don't wait for an emergency to test your readiness. Start building comprehensive crisis preparedness
                today.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-6 md:px-8 border-t bg-white">
        <p className="text-sm text-gray-500">© 2025 AviationResilience.org. All rights reserved.</p>
      </footer>
    </div>
  )
}
