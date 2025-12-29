import { CheckCircle, Leaf, Heart, Users, Globe, Clock, Hand, Handshake } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Pure Natural Ingredients',
      description: 'Sourced directly from organic farms, no artificial additives'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Every product crafted with care and attention to detail'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Focused',
      description: 'Supporting local farmers and sustainable practices'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Eco-Friendly',
      description: 'Biodegradable packaging and zero-waste initiatives'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Handmade Quality',
      description: 'Small-batch production for maximum freshness'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Guaranteed',
      description: 'Rigorous testing and quality control standards'
    }
  ];

  return (
    <section id="why-us" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-primary">VeenaNaturals</span> Difference
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We're not just another brand. We're a movement towards cleaner, 
              healthier living. Our commitment to purity and sustainability 
              sets us apart in every product we create.
            </p>
            
            <div className="space-y-4">
              {[
                'Certified organic by UDYAM(MSME) standards',
                'Cruelty-free & vegan friendly',
                'Sustainable sourcing practices',
                'Transparent ingredient lists',
                'Carbon-neutral shipping',
                '30-day satisfaction guarantee'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="btn-primary mt-8">
              <a href="https://www.instagram.com/reel/DPnEgmoCcJq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                Learn More About Us
              </a>
            </button>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 hover:border-l-4 hover:border-primary"
              >
                <div className="p-3 bg-primary-light rounded-full w-fit text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;