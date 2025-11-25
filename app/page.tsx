import Link from "next/link"
import { ArrowRight, BarChart3, Briefcase, TrendingUp, Shield, Users, Target, Play } from "lucide-react"
import Image from "next/image"
import { HeroSlider } from "@/components/hero-slider"
import { VideoModal } from "@/components/video-modal"

export default function Home() {
  return (
    <div className="flex flex-col pt-36 font-sans">
      <HeroSlider />

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <p className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-2">2020</p>
              <p className="text-sm font-sans text-muted-foreground font-medium">Established</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-accent" size={32} />
              </div>
              <p className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-2">50+</p>
              <p className="text-sm font-sans text-muted-foreground font-medium">Clients Served</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <p className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-2">100%</p>
              <p className="text-sm font-sans text-muted-foreground font-medium">Commitment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <p className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-2">Multi</p>
              <p className="text-sm font-sans text-muted-foreground font-medium">Sector Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-sans font-bold rounded-full mb-6 uppercase tracking-wide">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-foreground">
                Strategic Advisory for Modern Business
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed font-sans">
                <p>
                  <span className="font-sans font-bold text-foreground">KWETJIWE Consulting (Pty) Ltd</span> is a
                  premier Business and Financial Solutions Consulting company. We offer unique services for companies
                  seeking to reinvest, grow, or raise capital.
                </p>
                <p>
                  As a subsidiary of BODIBE BA THABA Holdings (Pty) Ltd, we act as the vital bridge between clients and
                  funders. We don't just advise — we structure transactions according to funder expectations and walk
                  the path with you until approval.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-6 bg-white rounded-lg border border-border shadow-sm">
                  <p className="text-2xl font-sans font-bold text-primary mb-1">Mission</p>
                  <p className="text-sm font-sans text-muted-foreground">Bridge the gap between vision and capital</p>
                </div>
                <div className="flex-1 p-6 bg-white rounded-lg border border-border shadow-sm">
                  <p className="text-2xl font-sans font-bold text-accent mb-1">Vision</p>
                  <p className="text-sm font-sans text-muted-foreground">
                    Empower businesses to achieve sustainable growth
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <VideoModal videoId="-VHvhtx2djw" />
              <Image
                src="/modern-office-architecture-abstract.jpg"
                alt="Office Architecture"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-sans font-bold rounded-full mb-6 uppercase tracking-wide">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold max-w-3xl mx-auto mb-6 text-foreground">
              Comprehensive Solutions for Every Stage of Growth
            </h2>
            <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
              From business development to capital raising, we provide end-to-end support tailored to your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Briefcase className="text-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-sans font-bold mb-4 text-foreground">Business Solutions</h3>
              <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                Expert business development, business facilitation, restructuring, and executive mentorship to optimize
                your operations and drive sustainable growth.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-sans font-bold group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-white to-orange-50 rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="text-accent group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-sans font-bold mb-4 text-foreground">Capital Raising</h3>
              <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                Holistic packages including business plans, financial projections, and comprehensive funder engagement
                strategies.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-accent font-sans font-bold group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <BarChart3 className="text-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-sans font-bold mb-4 text-foreground">Transaction Advisory</h3>
              <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                Pre-due diligence and specialized advisory for start-ups, acquisitions, expansions, and complex
                transactions.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-sans font-bold group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cta-background.jpg" alt="CTA background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/95" />
        </div>
        <div className="container relative z-10 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-white">Ready to Scale Your Business?</h2>
          <p className="text-xl font-sans text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let us help you navigate the complexities of capital raising and business restructuring with proven
            expertise and dedicated support.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-primary text-lg font-sans font-bold rounded-lg hover:bg-white/90 transition-all shadow-2xl"
          >
            Schedule a Consultation
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
