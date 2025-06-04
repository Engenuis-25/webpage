import React from 'react';
import { useInView } from '../hooks/useInView';
import { BarChart2, Brain, Lightbulb, Settings, TrendingUp, Users } from 'lucide-react';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Leverage cutting-edge AI technologies to automate and optimize your business processes."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategic Consulting",
      description: "Expert guidance to navigate digital transformation and achieve your business goals."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Process Optimization",
      description: "Streamline operations and enhance efficiency with data-driven process improvements."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Make informed decisions with comprehensive BI solutions and real-time dashboards."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Navigate your digital journey with our expert guidance and proven methodologies."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs, powered by data and driven by results.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-300 w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;