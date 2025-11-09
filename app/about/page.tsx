import { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'About Us - Contours Analytics',
  description: 'Learn about Contours Analytics, our mission, vision, and the team behind our success.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            A leading provider of comprehensive data analytics, actuarial services, and business intelligence solutions.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission & Vision */}
          <div className="space-y-6">
            <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold text-primary mb-4">Mission</h2>
              <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                Our mission is to empower businesses with actionable insights and innovative solutions, driving sustainable growth and success in an ever-evolving landscape.
              </p>
            </div>

            <div className="bg-accent/5 dark:bg-accent/10 p-8 rounded-xl border border-accent/20">
              <h2 className="text-2xl font-bold text-accent mb-4">Vision</h2>
              <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                Our vision is to pioneer innovative solutions that redefine industry standards, leveraging cutting-edge technology and unparalleled expertise to empower businesses worldwide.
              </p>
            </div>
          </div>

          {/* About Description */}
          <div className="space-y-4">
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              With a team of highly skilled professionals and cutting-edge technology, we empower businesses to make informed decisions and mitigate risks effectively.
            </p>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              Our integrated approach combines advanced statistical modeling, predictive analytics, and actuarial expertise to deliver actionable insights across various industries.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                <span className="text-secondary-700 dark:text-secondary-300">15+ years of industry expertise</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                <span className="text-secondary-700 dark:text-secondary-300">500+ successfully completed projects</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                <span className="text-secondary-700 dark:text-secondary-300">98%+ client satisfaction rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-12">
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Our Leadership</h2>
          <p className="text-secondary-600 dark:text-secondary-400 text-center max-w-3xl mx-auto">
            Our leadership team brings together decades of combined experience in data science, actuarial science, and business strategy, ensuring innovative and reliable solutions for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
