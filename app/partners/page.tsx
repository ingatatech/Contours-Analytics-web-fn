import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners - Contours Analytics',
  description: 'Meet our strategic partners and technology collaborators.',
};

const partners = [
  {
    id: 1,
    name: 'CloudTech Solutions',
    category: 'Technology',
    description: 'Cloud infrastructure and data solutions partner',
  },
  {
    id: 2,
    name: 'DataViz Pro',
    category: 'Analytics',
    description: 'Advanced data visualization and BI tools',
  },
  {
    id: 3,
    name: 'SecureNet',
    category: 'Security',
    description: 'Cybersecurity and compliance solutions',
  },
  {
    id: 4,
    name: 'InsightAI',
    category: 'AI/ML',
    description: 'Artificial intelligence and machine learning platform',
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Strategic collaborations that enhance our capabilities and deliver greater value to our clients.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {/* Partner Logo Placeholder */}
              <div className="w-full h-24 bg-linear-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center text-4xl font-bold text-primary group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                {partner.name.charAt(0)}
              </div>

              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {partner.name}
              </h3>

              <p className="text-sm font-medium text-primary mb-3">
                {partner.category}
              </p>

              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                🤝
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Proven Track Record
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                15+ years of successful partnerships and industry collaborations.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                🚀
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Innovation Focus
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Continuous investment in cutting-edge technology and methodologies.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                ⭐
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Client Success
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                98%+ client satisfaction and proven ROI for our partnership initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
            Interested in Partnering?
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
            We're always looking for innovative partners to collaborate with.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
