import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Approach - Contours Analytics',
  description: 'Understand our proven methodology: Understand → Collect → Analyze → Visualize → Implement',
};

const approachSteps = [
  {
    step: 1,
    title: 'Understand',
    description: 'We begin by deeply understanding your business goals, challenges, and current data landscape.',
    icon: '🎯',
  },
  {
    step: 2,
    title: 'Collect',
    description: 'We gather and integrate data from all relevant sources to create a comprehensive dataset.',
    icon: '📦',
  },
  {
    step: 3,
    title: 'Analyze',
    description: 'Our experts apply advanced analytics and modeling techniques to extract meaningful insights.',
    icon: '🔍',
  },
  {
    step: 4,
    title: 'Visualize',
    description: 'We transform complex data into clear, actionable visualizations and dashboards.',
    icon: '📊',
  },
  {
    step: 5,
    title: 'Implement',
    description: 'We assist in implementing recommendations and strategies to drive tangible business results.',
    icon: '🚀',
  },
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Approach
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            A proven 5-step methodology designed to deliver measurable results and sustainable business transformation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {approachSteps.map((item, idx) => (
            <div key={item.step} className="flex gap-6 md:gap-10">
              {/* Step Number & Connector */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                {idx < approachSteps.length - 1 && (
                  <div className="w-1 h-20 bg-linear-to-b from-primary to-accent mt-4" />
                )}
              </div>

              {/* Step Content */}
              <div className="pb-12">
                <div className="bg-secondary-50 dark:bg-secondary-800 rounded-lg p-6 border border-secondary-200 dark:border-secondary-700">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-secondary-700 dark:text-secondary-300 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <div className="bg-linear-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Data-Driven
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Every decision backed by rigorous analysis and evidence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Client-Focused
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Your success is our success, tailored solutions for each client.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Leveraging cutting-edge technology and methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
