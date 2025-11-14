// servicesData.ts
import { BarChart3, Shield, Database, TrendingUp } from 'lucide-react'

export interface Contact {
  image: string
  name: string
  title: string
  phone: string
  email: string
  linkedin: string
}

export interface SubService {
  id: string
  name: string
  description: string
  keyContacts: Contact[]
}

export interface Service {
  id: string
  name: string
  icon: any
  gradient: string
  description: string
  longDescription: string
  subServices: SubService[]
}

export const servicesData: Service[] = [
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: BarChart3,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Transform raw data into strategic insights that guide business growth',
    longDescription: 'Contours Analytics empowers organizations to harness the full potential of their data. Our analytics services transform raw information into strategic insights that guide business growth, efficiency, and innovation.',
    subServices: [
      {
        id: 'descriptive-analytics',
        name: 'Descriptive Analytics',
        description: 'We analyze historical data to summarize performance trends, key metrics, and business patterns. This helps clients understand what has happened in their operations and identify areas of strength and improvement.',
    
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Dr. Sarah Chen',
            title: 'Lead Analytics Consultant',
            phone: '+250 788 123 456',
            email: 'sarah.chen@contours.com',
            linkedin: 'https://linkedin.com/in/sarahchen'
          },
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop/contacts/james-wilson.jpg',
            name: 'James Wilson',
            title: 'Senior Data Analyst',
            phone: '+250 788 123 457',
            email: 'james.wilson@contours.com',
            linkedin: 'https://linkedin.com/in/jameswilson'
          }
        ]
      },
      {
        id: 'diagnostic-analytics',
        name: 'Diagnostic Analytics',
        description: 'We go beyond surface-level data by uncovering the why behind business outcomes. Our diagnostic models identify root causes of performance issues, enabling organizations to take informed corrective actions.',
   
        keyContacts: [
          {
            image: '/contacts/michael-rodriguez.jpg',
            name: 'Michael Rodriguez',
            title: 'Diagnostic Analytics Specialist',
            phone: '+250 788 123 458',
            email: 'michael.rodriguez@contours.com',
            linkedin: 'https://linkedin.com/in/michaelrodriguez'
          }
        ]
      },
      {
        id: 'predictive-analytics',
        name: 'Predictive Analytics',
        description: 'Using statistical modeling and machine learning, we forecast future trends, customer behaviors, and business risks. Predictive analytics helps clients anticipate change and prepare proactive strategies.',
     
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Dr. Emily Park',
            title: 'Machine Learning Director',
            phone: '+250 788 123 459',
            email: 'emily.park@contours.com',
            linkedin: 'https://linkedin.com/in/emilypark'
          }
        ]
      }
    ]
  },
  {
    id: 'actuarial',
    name: 'Actuarial Services',
    icon: Shield,
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Quantitative expertise combined with deep industry knowledge',
    longDescription: 'Our actuarial professionals combine quantitative expertise with deep industry knowledge to help clients assess risk, design financial strategies, and maintain long-term stability.',
    subServices: [
      {
        id: 'risk-modeling',
        name: 'Risk Modeling & Assessment',
        description: 'We develop sophisticated risk models that quantify exposure and assess the financial impact of uncertainty. Our models support decision-making in insurance, finance, and corporate planning.',

        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Robert Chang',
            title: 'Chief Actuary',
            phone: '+250 788 123 460',
            email: 'robert.chang@contours.com',
            linkedin: 'https://linkedin.com/in/robertchang'
          }
        ]
      },
      {
        id: 'pricing-development',
        name: 'Pricing & Product Development',
        description: 'We assist in designing, pricing, and evaluating insurance and financial products. Our actuarial models balance profitability with competitiveness, ensuring sustainable product performance.',
      
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Lisa Thompson',
            title: 'Pricing Actuary',
            phone: '+250 788 123 461',
            email: 'lisa.thompson@contours.com',
            linkedin: 'https://linkedin.com/in/lisathompson'
          }
        ]
      },
      {
        id: 'reserving-valuation',
        name: 'Reserving & Valuation',
        description: 'We calculate technical reserves and liabilities that comply with industry regulations and accounting standards. Our valuations provide transparency and confidence for financial reporting and audits.',
   
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'David Kim',
            title: 'Valuation Specialist',
            phone: '+250 788 123 462',
            email: 'david.kim@contours.com',
            linkedin: 'https://linkedin.com/in/davidkim'
          }
        ]
      },
      {
        id: 'pension-benefits',
        name: 'Pension & Employee Benefits Consulting',
        description: 'We deliver actuarial valuations for pension schemes and employee benefits. Our services include funding strategy design, compliance reporting, and long-term plan sustainability assessments.',
    
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Amanda Brooks',
            title: 'Pension Consultant',
            phone: '+250 788 123 463',
            email: 'amanda.brooks@contours.com',
            linkedin: 'https://linkedin.com/in/amandabrooks'
          }
        ]
      },
      {
        id: 'regulatory-compliance',
        name: 'Regulatory Compliance & IFRS 17 Support',
        description: 'We help clients meet actuarial and accounting requirements under international standards such as IFRS 17, Solvency II, and other regulatory frameworks. Our experts ensure accuracy, transparency, and compliance.',
      
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Thomas Müller',
            title: 'Regulatory Compliance Director',
            phone: '+250 788 123 464',
            email: 'thomas.muller@contours.com',
            linkedin: 'https://linkedin.com/in/thomasmuller'
          }
        ]
      }
    ]
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence & Data Strategy',
    icon: Database,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Build scalable, data-driven ecosystems for informed decision-making',
    longDescription: 'We help organizations build scalable, data-driven ecosystems that support informed decision-making, operational efficiency, and strategic transformation.',
    subServices: [
      {
        id: 'data-architecture',
        name: 'Data Architecture & Integration',
        description: 'We design and implement data systems that unify multiple data sources into cohesive, accessible structures. This ensures that businesses have a single, reliable source of truth.',
      
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Carlos Santos',
            title: 'Data Architecture Lead',
            phone: '+250 788 123 465',
            email: 'carlos.santos@contours.com',
            linkedin: 'https://linkedin.com/in/carlossantos'
          }
        ]
      },
      {
        id: 'bi-implementation',
        name: 'Business Intelligence Implementation',
        description: 'We develop BI solutions that translate complex data into actionable insights. Our BI systems enable real-time performance monitoring, KPI tracking, and executive reporting.',
    
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Priya Sharma',
            title: 'BI Solutions Architect',
            phone: '+250 788 123 466',
            email: 'priya.sharma@contours.com',
            linkedin: 'https://linkedin.com/in/priyasharma'
          }
        ]
      },
      {
        id: 'data-strategy',
        name: 'Data Strategy Development',
        description: 'We partner with clients to define clear data strategies that align with business goals. Our approach includes data maturity assessments, roadmap creation, and governance planning.',
    
        keyContacts: [
          {
             image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'William Foster',
            title: 'Strategy Consultant',
            phone: '+250 788 123 467',
            email: 'william.foster@contours.com',
            linkedin: 'https://linkedin.com/in/williamfoster'
          }
        ]
      },
      {
        id: 'automation-optimization',
        name: 'Automation & Process Optimization',
        description: 'We leverage analytics and automation to streamline workflows, eliminate inefficiencies, and enhance productivity. Our solutions reduce manual effort and increase operational accuracy.',
 
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Sophia Martinez',
            title: 'Process Optimization Expert',
            phone: '+250 788 123 468',
            email: 'sophia.martinez@contours.com',
            linkedin: 'https://linkedin.com/in/sophiamartinez'
          }
        ]
      }
    ]
  },
  {
    id: 'credit-rating',
    name: 'Credit Rating',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-500',
    description: 'Comprehensive credit evaluation and risk assessment services',
    longDescription: 'Contours Analytics provides comprehensive Credit Rating and Risk Assessment services that help organizations, financial institutions, and investors evaluate creditworthiness, manage exposure, and make informed financial decisions.',
    subServices: [
      {
        id: 'public-ratings',
        name: 'Public Credit Ratings',
        description: 'We provide publicly available ratings that enhance investor confidence, improve market transparency, and support access to diversified capital markets. Our public ratings enable fair comparison of issuers, debt instruments, and counterparties.',
        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Richard Evans',
            title: 'Senior Credit Analyst',
            phone: '+250 788 123 469',
            email: 'richard.evans@contours.com',
            linkedin: 'https://linkedin.com/in/richardevans'
          }
        ]
      },
      {
        id: 'private-ratings',
        name: 'Private Credit Ratings',
        description: 'We deliver confidential ratings for issuers, lenders, and investors seeking in-depth analysis without public disclosure. Services include entity-level and loan-level ratings, private placement evaluations, and secure data room access.',

        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Jennifer Lee',
            title: 'Private Ratings Specialist',
            phone: '+250 788 123 470',
            email: 'jennifer.lee@contours.com',
            linkedin: 'https://linkedin.com/in/jenniferlee'
          }
        ]
      },
      {
        id: 'credit-risk-modeling',
        name: 'Credit Risk Modeling',
        description: 'We build quantitative models to estimate Probability of Default (PD), Loss Given Default (LGD), and Exposure at Default (EAD). These models integrate financial ratios, historical data, and macroeconomic indicators to provide precise risk quantification.',

        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Dr. Alexander Petrov',
            title: 'Credit Risk Modeler',
            phone: '+250 788 123 471',
            email: 'alexander.petrov@contours.com',
            linkedin: 'https://linkedin.com/in/alexanderpetrov'
          }
        ]
      },
      {
        id: 'credit-scoring',
        name: 'Credit Scoring Systems',
        description: 'Our credit scoring frameworks blend statistical modeling with AI and machine learning to classify borrowers and portfolios by risk profile. We tailor models to align with each client\'s data environment and regulatory context.',

        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Maria Garcia',
            title: 'Scoring Systems Developer',
            phone: '+250 788 123 472',
            email: 'maria.garcia@contours.com',
            linkedin: 'https://linkedin.com/in/mariagarcia'
          }
        ]
      },
      {
        id: 'portfolio-analytics',
        name: 'Portfolio Risk Analytics',
        description: 'We evaluate portfolio-level risk and concentration through stress testing, scenario analysis, and Monte Carlo simulations, ensuring clients maintain balanced, compliant, and profitable portfolios.',

        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Kevin Brown',
            title: 'Portfolio Risk Analyst',
            phone: '+250 788 123 473',
            email: 'kevin.brown@contours.com',
            linkedin: 'https://linkedin.com/in/kevinbrown'
          }
        ]
      },
      {
        id: 'rating-advisory',
        name: 'Credit Rating Advisory',
        description: 'We support clients in preparing for external rating agency evaluations through readiness reviews, benchmarking, and financial optimization strategies. Our advisory services strengthen market perception and rating outcomes.',

        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Olivia Taylor',
            title: 'Rating Advisory Consultant',
            phone: '+250 788 123 474',
            email: 'olivia.taylor@contours.com',
            linkedin: 'https://linkedin.com/in/oliviataylor'
          }
        ]
      },
      {
        id: 'regulatory-support',
        name: 'Regulatory & Compliance Support',
        description: 'We ensure all credit models and processes adhere to international standards such as Basel III, IFRS 9, and Solvency II. Our consultants align credit risk frameworks with evolving regulatory expectations and best practices.',

        keyContacts: [
          {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            name: 'Nathan White',
            title: 'Regulatory Compliance Manager',
            phone: '+250 788 123 475',
            email: 'nathan.white@contours.com',
            linkedin: 'https://linkedin.com/in/nathanwhite'
          }
        ]
      }
    ]
  }
]

export const getServiceById = (serviceId: string): Service | undefined => {
  return servicesData.find(service => service.id === serviceId)
}

export const getSubServiceById = (serviceId: string, subServiceId: string): SubService | undefined => {
  const service = getServiceById(serviceId)
  return service?.subServices.find(sub => sub.id === subServiceId)
}