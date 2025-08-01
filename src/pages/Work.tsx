import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Work = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg py-32 pt-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of digital products and solutions that have helped businesses 
            transform, grow, and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Project 1 */}
            <div className="space-y-6">
              <div className="card-gradient rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 gradient-bg rounded-lg mx-auto mb-4"></div>
                  <span className="text-xl font-semibold">FinTech Dashboard</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Modern Banking Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive digital banking solution that revolutionizes how customers 
                  interact with their finances through intuitive design and powerful features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline">View Case Study</Button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="space-y-6">
              <div className="card-gradient rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 gradient-bg rounded-lg mx-auto mb-4"></div>
                  <span className="text-xl font-semibold">E-Commerce Platform</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Next-Gen Retail Experience</h3>
                <p className="text-muted-foreground mb-4">
                  An AI-powered e-commerce platform that delivers personalized shopping 
                  experiences and drives 300% increase in conversion rates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "Python", "MongoDB", "Stripe"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline">View Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">More Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent work across various industries and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare App",
                category: "Mobile Development",
                description: "Telemedicine platform connecting patients with healthcare providers"
              },
              {
                title: "SaaS Dashboard",
                category: "Web Application",
                description: "Analytics platform for marketing teams to track campaign performance"
              },
              {
                title: "Education Portal",
                category: "EdTech",
                description: "Online learning platform with interactive courses and assessments"
              },
              {
                title: "Food Delivery App",
                category: "Mobile App",
                description: "On-demand food delivery service with real-time tracking"
              },
              {
                title: "Real Estate Platform",
                category: "Web Development",
                description: "Property management system with virtual tours and CRM integration"
              },
              {
                title: "Fitness Tracker",
                category: "IoT Application",
                description: "Wearable device companion app with social features"
              }
            ].map((project, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg group hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="h-48 gradient-bg rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                      View Project →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the companies we've helped transform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Enspirit transformed our digital presence and helped us scale our business to new heights. Their expertise is unmatched.",
                author: "Sarah Johnson",
                company: "TechStart Inc.",
                role: "CEO"
              },
              {
                quote: "The team's attention to detail and commitment to quality exceeded our expectations. Our new platform has been a game-changer.",
                author: "Michael Chen",
                company: "GrowthCorp",
                role: "CTO"
              },
              {
                quote: "Working with Enspirit was seamless. They understood our vision and brought it to life better than we imagined.",
                author: "Emily Rodriguez",
                company: "InnovateNow",
                role: "Product Manager"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <p className="text-foreground italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-bg rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Great?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and create a digital solution that drives real results.
          </p>
          <Button className="gradient-bg text-white px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;