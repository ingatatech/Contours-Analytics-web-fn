import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights - Contours Analytics',
  description: 'Explore our latest thought leadership articles, case studies, and industry insights.',
};

const insights = [
  {
    id: 1,
    title: 'Leveraging Predictive Analytics for Business Growth',
    category: 'Analytics',
    excerpt: 'Discover how predictive analytics can help your organization anticipate market trends and make proactive decisions.',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'IFRS 17 Compliance: A Comprehensive Guide',
    category: 'Actuarial',
    excerpt: 'Navigate the complexities of IFRS 17 implementation with our expert insights and best practices.',
    date: 'Nov 12, 2024',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Building a Data-Driven Organization',
    category: 'Business Intelligence',
    excerpt: 'Transform your organization with a strategic approach to data management and analytics.',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Credit Risk Assessment in Uncertain Times',
    category: 'Credit Rating',
    excerpt: 'Comprehensive strategies for evaluating credit risk in volatile economic conditions.',
    date: 'Nov 8, 2024',
    readTime: '7 min read',
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Stay informed with our latest articles, case studies, and industry research.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white dark:bg-secondary-800 rounded-xl border border-secondary-200 dark:border-secondary-700 hover:border-primary hover:shadow-lg transition-all duration-300 p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {insight.category}
                </span>
                <span className="text-sm text-secondary-500 dark:text-secondary-400">
                  {insight.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {insight.title}
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                {insight.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-secondary-200 dark:border-secondary-700">
                <span className="text-sm text-secondary-500 dark:text-secondary-400">
                  {insight.readTime}
                </span>
                <a
                  href="#"
                  className="text-primary font-medium hover:space-x-1 transition-all inline-flex items-center space-x-1"
                >
                  <span>Read More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-linear-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-12 text-center border border-primary/20">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 mb-6 max-w-2xl mx-auto">
            Get the latest insights, case studies, and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
