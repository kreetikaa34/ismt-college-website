import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  Lightbulb,
  Shield,
  Building,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ISMTWebsite() {
  const courses = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description:
        "Comprehensive program combining computer systems and engineering principles with practical IT applications.",
      duration: "4 Years",
      level: "Undergraduate",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "BA (Hons) Business and Management (BBA)",
      description: "Strategic business education focusing on management principles, leadership, and entrepreneurship.",
      duration: "3 Years",
      level: "Undergraduate",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
      description: "Global perspective on tourism industry with hands-on hospitality management experience.",
      duration: "4 Years",
      level: "Undergraduate",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "BSc (Hons) Computer Science",
      description:
        "Cutting-edge computer science program covering algorithms, software development, and emerging technologies.",
      duration: "4 Years",
      level: "Undergraduate",
      badge: "Subject to Approval",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "BSc (Hons) Cyber Security and Digital Forensics",
      description: "Specialized program in cybersecurity, digital investigation, and information security management.",
      duration: "4 Years",
      level: "Undergraduate",
      icon: <Shield className="w-6 h-6" />,
    },
  ]

  const features = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "UK Qualifications in Nepal",
      description:
        "Earn prestigious UK degrees from University of Sunderland and Pearson Edexcel without leaving Nepal.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Industry-Relevant Education",
      description: "Curriculum designed to bridge the gap between academia and industry requirements.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Holistic Learning Environment",
      description: "Project-based learning, interactive discussions, and diverse assessment methodologies.",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Global Competitive Edge",
      description: "International standards with local values, preparing students for the global job market.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ISMT</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Established 2011 • UK Partnership</Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                  Redefining Higher Education in <span className="text-blue-600">Nepal</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Earn internationally recognized UK qualifications from University of Sunderland and Pearson Edexcel,
                  right here in Nepal. Bridge the gap between academia and industry with our innovative approach.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Courses
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More About ISMT
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">13+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Degree Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">UK</div>
                  <div className="text-sm text-gray-600">Qualifications</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/campus-hero.jpg"
                  alt="ISMT Campus - Modern Educational Facility"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose ISMT?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class education with local values, designed to prepare you for global success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">About ISMT</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Contributing to Nepal's Higher Education Since 2011
                </h2>
                <p className="text-lg text-gray-600">
                  ISMT is on a mission to contribute to Nepal's higher education by providing internationally recognized
                  and industry-relevant qualifications. In academic partnership with the University of Sunderland, UK,
                  and Pearson Edexcel, UK, we are redefining higher education with a bold vision.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                    <p className="text-gray-600">
                      Inclusive and cost-effective educational approach with international standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Holistic Learning</h4>
                    <p className="text-gray-600">
                      Project-based work, interactive discussions, and diverse assessment methods
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Beyond Academics</h4>
                    <p className="text-gray-600">Sports clubs, workshops, bootcamps, and special interest groups</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/students-studying.jpg"
                alt="Students collaborating and studying at ISMT"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Campus Life at ISMT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our modern facilities, collaborative learning spaces, and vibrant campus community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/computer-lab.jpg"
                alt="State-of-the-art Computer Laboratory"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Computer Laboratory</h3>
                  <p className="text-sm text-gray-200">Modern computing facilities</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/business-class.jpg"
                alt="Interactive Business Management Classroom"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Business Classroom</h3>
                  <p className="text-sm text-gray-200">Interactive learning environment</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/images/library-study.jpg"
                alt="ISMT College Library and Study Area"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Library & Study Areas</h3>
                  <p className="text-sm text-gray-200">Quiet spaces for focused learning</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
              <Image
                src="/images/graduation-ceremony.jpg"
                alt="ISMT Graduation Ceremony - Students Celebrating Success"
                width={800}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-semibold text-2xl">Graduation Success</h3>
                  <p className="text-lg text-gray-200">
                    Celebrating our graduates' achievements with UK qualifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Degree Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of internationally recognized undergraduate programs, designed to meet industry
              demands and global standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg w-fit">{course.icon}</div>
                    {course.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {course.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.level}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{course.description}</CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Your Journey?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join ISMT and gain a competitive edge in the global job market with our internationally recognized UK
                qualifications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you start your educational journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ISMT College
                  <br />
                  Kathmandu, Nepal
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-green-50 rounded-full w-fit">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  +977-1-XXXXXXX
                  <br />
                  Mon-Fri 9AM-5PM
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-purple-50 rounded-full w-fit">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  info@ismt.edu.np
                  <br />
                  admissions@ismt.edu.np
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">ISMT</span>
              </div>
              <p className="text-gray-400">
                Redefining higher education in Nepal with internationally recognized qualifications and
                industry-relevant programs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:text-white transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Student Life
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Computer Systems Engineering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Business & Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tourism & Hospitality
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cyber Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Kathmandu, Nepal</li>
                <li>+977-1-XXXXXXX</li>
                <li>info@ismt.edu.np</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ISMT College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
