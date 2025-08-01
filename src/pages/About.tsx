import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg py-32 pt-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Enspirit</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a digital-first agency passionate about creating products that make a real impact. 
            Our team combines strategic thinking with creative execution to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Enspirit, we believe that great digital products have the power to transform businesses 
                and improve lives. Our mission is to partner with forward-thinking organizations to create 
                digital experiences that truly matter.
              </p>
              <p className="text-lg text-muted-foreground">
                We don't just build products – we craft solutions that drive growth, engagement, 
                and meaningful change in the world.
              </p>
            </div>
            <div className="card-gradient rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">17+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Years Experience</h3>
                    <p className="text-muted-foreground">Delivering digital solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">200+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Projects Completed</h3>
                    <p className="text-muted-foreground">Across various industries</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">50+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Happy Clients</h3>
                    <p className="text-muted-foreground">From startups to Fortune 500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve."
              },
              {
                title: "Quality",
                description: "Excellence is non-negotiable. We deliver nothing less than exceptional results."
              },
              {
                title: "Collaboration",
                description: "We believe in true partnership, working closely with clients to achieve shared goals."
              },
              {
                title: "Impact",
                description: "Every project we take on must have the potential to create meaningful, lasting impact."
              }
            ].map((value, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in design, development, and strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", experience: "15+ years in digital strategy" },
              { name: "Michael Chen", role: "CTO", experience: "12+ years in software development" },
              { name: "Emily Rodriguez", role: "Head of Design", experience: "10+ years in UX/UI design" },
              { name: "David Kim", role: "Lead Developer", experience: "8+ years in full-stack development" },
              { name: "Lisa Wang", role: "Project Manager", experience: "7+ years in project management" },
              { name: "Alex Thompson", role: "Marketing Director", experience: "9+ years in digital marketing" }
            ].map((member, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 gradient-bg rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;