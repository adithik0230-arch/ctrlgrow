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
                <span className="block">Building Products</span>
                <span className="gradient-text block">that Matter</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                We partner with startups and enterprises to build digital products that scale, engage, and make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="gradient-bg text-white px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity">
                  Let's Bring Your Vision to Life!
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

      {/* Trusted By Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by global leaders and disruptive startups</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            17+ years of experience delivering impactful digital products for Fortune 500s, enterprises, and startups, driving results and scalability.
          </p>
          
          {/* Logo Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card-gradient rounded-lg p-6 h-16 flex items-center justify-center">
                <div className="w-20 h-8 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we deliver comprehensive digital solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product Strategy",
                description: "Strategic planning and roadmap development for digital products"
              },
              {
                title: "UI/UX Design", 
                description: "User-centered design that drives engagement and conversion"
              },
              {
                title: "Development",
                description: "Scalable web and mobile applications built with modern technologies"
              },
              {
                title: "Digital Marketing",
                description: "Data-driven marketing strategies to grow your digital presence"
              },
              {
                title: "Consulting",
                description: "Expert guidance on digital transformation and innovation"
              },
              {
                title: "Support",
                description: "Ongoing maintenance and optimization for your digital products"
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help bring your vision to life.
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

export default Index;
