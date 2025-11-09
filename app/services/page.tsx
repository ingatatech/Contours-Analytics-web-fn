import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Contours Analytics',
  description: 'Explore our comprehensive data analytics, actuarial, business intelligence, and credit rating services.',
};

const serviceCategories = [
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: '📊',
    description: 'Transform raw data into strategic insights',
    subservices: [
      {
        name: 'Descriptive Analytics',
        description: 'Analyze historical data to summarize performance trends and key metrics.',
      },
      {
        name: 'Diagnostic Analytics',
        description: 'Uncover root causes of business outcomes with advanced analysis.',
      },
      {
        name: 'Predictive Analytics',
        description: 'Forecast future trends using statistical modeling and machine learning.',
      },
    ],
  },
  {
    id: 'actuarial',
    title: 'Actuarial Services',
    icon: '🔢',
    description: 'Risk assessment and financial strategy expertise',
    subservices: [
      {
        name: 'Risk Modeling & Assessment',
        description: 'Develop sophisticated risk models for insurance and finance.',
      },
      {
        name: 'Pricing & Product Development',
        description: 'Design and evaluate insurance and financial products.',
      },
      {
        name: 'Pension & Benefits Consulting',
        description: 'Valuations for pension schemes and employee benefits.',
      },
    ],
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    icon: '🎯',
    description: 'Build scalable, data-driven ecosystems',
    subservices: [
      {
        name: 'Data Architecture & Integration',
        description: 'Design unified data systems for accessible insights.',
      },
      {
        name: 'BI Implementation',
        description: 'Develop solutions that translate data into actionable insights.',
      },
      {
        name: 'Data Strategy Development',
        description: 'Create clear data strategies aligned with business goals.',
      },
    ],
  },
  {
    id: 'credit-rating',
    title: 'Credit Rating',
    icon: '⭐',
    description: 'Comprehensive credit assessment services',
    subservices: [
      {
        name: 'Public Credit Ratings',
        description: 'Transparent ratings for improved market visibility.',
      },
      {
        name: 'Private Credit Ratings',
        description: 'Confidential ratings for strategic decision-making.',
      },
      {
        name: 'Credit Risk Modeling',
        description: 'Quantitative models for PD, LGD, and EAD estimation.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Comprehensive solutions across data analytics, actuarial services, business intelligence, and credit rating.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.id} className="scroll-mt-20">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-8 mb-8 border border-primary/20">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
                      {category.title}
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subservices */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.subservices.map((subservice, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-secondary-800 rounded-lg p-6 border border-secondary-200 dark:border-secondary-700 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                      {subservice.name}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {subservice.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-primary text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how our services can help achieve your business objectives.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary-50 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
