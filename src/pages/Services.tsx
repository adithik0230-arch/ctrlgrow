import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg py-32 pt-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch and beyond, we provide comprehensive digital solutions 
            that drive growth and create lasting impact.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                title: "Product Strategy & Consulting",
                description: "We help you define your product vision, identify market opportunities, and create a roadmap for success.",
                features: [
                  "Market Research & Analysis",
                  "Product Roadmap Development", 
                  "Competitive Analysis",
                  "Business Model Design",
                  "Go-to-Market Strategy"
                ]
              },
              {
                title: "UI/UX Design",
                description: "Create engaging user experiences that drive conversion and build lasting relationships with your customers.",
                features: [
                  "User Research & Testing",
                  "Wireframing & Prototyping",
                  "Visual Design & Branding",
                  "Design System Creation",
                  "Usability Testing"
                ]
              },
              {
                title: "Web & Mobile Development",
                description: "Build scalable, high-performance applications using the latest technologies and best practices.",
                features: [
                  "React & Next.js Development",
                  "Mobile App Development",
                  "Backend API Development",
                  "Database Design",
                  "Cloud Infrastructure"
                ]
              },
              {
                title: "Digital Marketing",
                description: "Grow your digital presence and reach your target audience with data-driven marketing strategies.",
                features: [
                  "SEO & Content Marketing",
                  "Social Media Marketing",
                  "Paid Advertising (PPC)",
                  "Email Marketing",
                  "Analytics & Reporting"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-bg rounded-lg mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and challenges through in-depth research and stakeholder interviews."
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific needs."
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Our team brings the strategy to life through thoughtful design and robust development practices."
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "We launch your product and continue to optimize based on real user feedback and performance data."
              }
            ].map((phase, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg text-center relative">
                <CardContent className="p-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-4">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build scalable, maintainable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
              "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "GraphQL", "Tailwind CSS"
            ].map((tech, index) => (
              <div key={index} className="card-gradient rounded-lg p-6 text-center">
                <div className="w-12 h-12 gradient-bg rounded-lg mx-auto mb-3"></div>
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how our services can help you achieve your goals.
          </p>
          <Button className="gradient-bg text-white px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;