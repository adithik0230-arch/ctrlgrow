import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg py-32 pt-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, strategies, and tips to help you control your growth and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our latest insights on startup growth, digital marketing, and business strategy
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Featured Post 1 */}
            <Card className="card-gradient border-0 shadow-xl overflow-hidden">
              <div className="h-64 gradient-bg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-lg mx-auto mb-4"></div>
                  <span className="text-lg font-semibold">Startup Tools 2025</span>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Startup Tips
                  </span>
                  <span className="text-muted-foreground text-sm">December 15, 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">5 Must-Have Tools for Every Startup in 2025</h3>
                <p className="text-muted-foreground mb-6">
                  Starting up in 2025? Don't miss these essential tools for productivity, marketing, and growth. 
                  From CRM platforms to automation tools — we've listed them all.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-bg rounded-full"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Growth Strategist</p>
                    </div>
                  </div>
                  <Button variant="outline">Read More</Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Post 2 */}
            <Card className="card-gradient border-0 shadow-xl overflow-hidden">
              <div className="h-64 gradient-bg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-lg mx-auto mb-4"></div>
                  <span className="text-lg font-semibold">Marketing Strategy</span>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Marketing
                  </span>
                  <span className="text-muted-foreground text-sm">December 10, 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Cookie-Cutter Marketing Fails</h3>
                <p className="text-muted-foreground mb-6">
                  Learn why copy-paste strategies don't work in the modern digital space and how personalized 
                  marketing can drive real results for your brand.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-bg rounded-full"></div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">Marketing Director</p>
                    </div>
                  </div>
                  <Button variant="outline">Read More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest insights and strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Branding",
                title: "Building a Brand Identity That Stands Out",
                excerpt: "Discover the key elements of creating a memorable brand identity in today's competitive market.",
                author: "Emily Rodriguez",
                date: "Dec 8, 2024",
                readTime: "5 min read"
              },
              {
                category: "SEO",
                title: "Local SEO Strategies for Small Businesses",
                excerpt: "Boost your local search rankings with these proven SEO tactics specifically designed for small businesses.",
                author: "David Kim",
                date: "Dec 5, 2024",
                readTime: "7 min read"
              },
              {
                category: "Social Media",
                title: "Instagram Marketing Trends for 2025",
                excerpt: "Stay ahead of the curve with the latest Instagram marketing trends and features to watch in 2025.",
                author: "Lisa Wang",
                date: "Dec 3, 2024",
                readTime: "4 min read"
              },
              {
                category: "Growth Hacking",
                title: "10 Growth Hacks That Actually Work",
                excerpt: "Practical growth hacking strategies that have been proven to work for startups and small businesses.",
                author: "Alex Thompson",
                date: "Nov 30, 2024",
                readTime: "8 min read"
              },
              {
                category: "E-commerce",
                title: "Converting Visitors into Customers",
                excerpt: "Learn the psychology behind e-commerce conversions and how to optimize your store for maximum sales.",
                author: "Sarah Johnson",
                date: "Nov 28, 2024",
                readTime: "6 min read"
              },
              {
                category: "Analytics",
                title: "Data-Driven Decision Making for Startups",
                excerpt: "How to leverage data analytics to make informed decisions that drive your startup's growth.",
                author: "Michael Chen",
                date: "Nov 25, 2024",
                readTime: "9 min read"
              }
            ].map((post, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg group hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 gradient-bg rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                      Read →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 hero-bg">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto card-gradient border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and get the latest growth strategies, tips, and insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
                <Button className="gradient-bg text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;