import { Target, Leaf, Users, Globe, Heart, Sparkles, Sparkle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Her Passion',
      description: 'Born from one girl\'s dream to create pure, effective products that make a real difference.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Her Mission',
      description: 'To prove that with determination and hard work, one person can create positive change.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Her Commitment',
      description: 'Every ingredient is personally selected with care, ensuring only the best for our customers.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Her Vision',
      description: 'Building a brand that inspires others to pursue their dreams with courage and conviction.'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Story */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Sparkle />
                  <h3 className="text-3xl font-bold mb-4">Her Journey</h3>
                  <p className="opacity-90">Started in 2024</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-gray-600">Inspired Founder</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-gray-600">Hours of Dedication</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="font-semibold">The Story Behind Bloom</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              One Girl's <span className="text-primary">Dream</span>, Powered by Passion
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              In 2024, what began as a dream in one determined girl's heart 
              blossomed into something beautiful. With nothing but a vision, 
              relentless hard work, and an unwavering belief in her mission, 
              she built this brand from the ground up—hand-selecting every 
              ingredient, perfecting every formula, and pouring her soul into 
              every product.
            </p>
            
            <p className="text-gray-600 text-lg mb-8">
              Behind every bottle is late-night research, countless experiments, 
              and the courage to keep going when things got tough. This isn't 
              just a business—it's a testament to what happens when passion 
              meets perseverance, when one highly motivated individual decides 
              to make her mark on the world.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-3 bg-primary-light rounded-full w-fit text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Inspirational Quote */}
            <div className="mt-10 p-6 bg-gradient-to-r from-primary/10 to-pink-100 rounded-2xl border-l-4 border-primary">
              <p className="text-gray-700 italic">
                "I started with a dream and a determination to prove that one person, 
                no matter how ordinary they seem, can create something extraordinary."
              </p>
              <p className="mt-4 font-semibold text-gray-900 italic">— Praveena</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;