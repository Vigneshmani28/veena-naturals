import { Leaf, Shield, Truck, Award, RefreshCw, BadgeCheck } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    {
      icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: '100% Organic',
      description: 'Certified ingredients'
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Cruelty Free',
      description: 'Never tested on animals'
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Free Shipping',
      description: 'On orders over ₹500'
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Premium Quality',
      description: 'Industry standards'
    },
    {
  icon: <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
  title: "MSME Certified",
  description: "Udyam Registered Business"
}

  ];

  return (
    <div className="bg-white py-8 border-y border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              <div className="p-2 sm:p-3 bg-primary-light rounded-full text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;