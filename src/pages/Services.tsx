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
            From startup essentials to digital marketing, we provide comprehensive services 
            that help you craft tailored strategies and build a powerful digital presence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                title: "🟢 Digital Marketing",
                description: "Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.",
                features: [
                  "SEO (On-page & Off-page)",
                  "Social Media Management", 
                  "Paid Ad Campaigns (Google Ads, Facebook/Instagram Ads)",
                  "Content Marketing",
                  "Email Marketing Campaigns"
                ]
              },
              {
                title: "🟢 Startup Support",
                description: "Complete startup ecosystem support to help you establish and grow your business from the ground up.",
                features: [
                  "Business Branding & Naming",
                  "Logo Design & Visual Identity",
                  "Pitch Decks & Presentations",
                  "Product-Market Fit Analysis",
                  "Business Strategy Development"
                ]
              },
              {
                title: "🟢 Web & Tech Solutions",
                description: "Modern web development and technical solutions that provide a strong foundation for your digital presence.",
                features: [
                  "Website Design & Development",
                  "UI/UX Design",
                  "E-Commerce Development",
                  "Web Maintenance & Analytics",
                  "Mobile-Responsive Solutions"
                ]
              },
              {
                title: "🟢 Growth Strategy",
                description: "Data-driven growth strategies and automation tools to scale your business efficiently and effectively.",
                features: [
                  "Lead Generation",
                  "Email Marketing Automation",
                  "Automation Tools Integration",
                  "Competitor Analysis",
                  "Performance Analytics & Reporting"
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
              We follow a proven methodology focused on crafting tailored strategies, not copy-paste solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We start by understanding your brand, goals, and challenges to craft a tailored strategy unique to your business."
              },
              {
                step: "02", 
                title: "Creative Execution",
                description: "Our team brings your strategy to life through creative design, compelling content, and powerful digital tools."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute your customized plan with precision, ensuring every element aligns with your brand identity."
              },
              {
                step: "04",
                title: "Growth & Optimization",
                description: "We monitor, analyze, and continuously optimize your results to ensure sustainable growth and success."
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
            <h2 className="text-4xl font-bold mb-4">Tools & Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage the best tools and platforms to deliver exceptional results for your business
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Google Ads", "Facebook Ads", "HubSpot", "WordPress", "Shopify", "Canva",
              "Figma", "Google Analytics", "Mailchimp", "Hootsuite", "Slack", "Zoom"
            ].map((tool, index) => (
              <div key={index} className="card-gradient rounded-lg p-6 text-center">
                <div className="w-12 h-12 gradient-bg rounded-lg mx-auto mb-3"></div>
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Control Your Growth?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how our tailored services can help accelerate your startup's success.
          </p>
          <Button className="gradient-bg text-white px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;