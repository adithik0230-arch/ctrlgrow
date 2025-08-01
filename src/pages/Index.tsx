import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-enspirit.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">At CTRL + Grow, we don't</span>
                <span className="gradient-text block">copy and paste strategies.</span>
                <span className="block">We craft them.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-lg">
                We believe every brand deserves its own unique identity. That's why we don't follow the crowd — we build and grow brands from scratch.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                From startup essentials to digital marketing, we're not just service providers — we're your growth partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="gradient-bg text-white px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                  Book a Free Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Digital Innovation" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CTRL + Grow Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose CTRL + Grow</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're a digital-first startup accelerator focused on helping brands discover their identity, define their voice, and dominate their digital presence.
          </p>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {[
              { title: "Authenticity", desc: "We believe in genuine strategies" },
              { title: "Innovation", desc: "Cutting-edge solutions for growth" },
              { title: "Measurable Growth", desc: "Data-driven results that matter" },
              { title: "Collaboration", desc: "True partnership in your success" }
            ].map((value, i) => (
              <div key={i} className="card-gradient rounded-lg p-6 text-center">
                <div className="w-12 h-12 gradient-bg rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services to accelerate your startup's growth and digital presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Digital Marketing",
                description: "SEO, Social Media Management, Paid Ads, and Content Marketing"
              },
              {
                title: "Startup Support", 
                description: "Business Branding, Logo Design, Pitch Decks, and Market Analysis"
              },
              {
                title: "Web & Tech Solutions",
                description: "Website Development, UI/UX Design, E-Commerce, and Analytics"
              },
              {
                title: "Growth Strategy",
                description: "Lead Generation, Email Marketing, Automation, and Competitor Analysis"
              }
            ].map((service, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 gradient-bg rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Control Your Growth?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help accelerate your startup's success.
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

export default Index;
