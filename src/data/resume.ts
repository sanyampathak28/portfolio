const resume = {
  name: 'Sanyam Pathak',
  title: 'Software Development Engineer',
  contact: {
    email: 'sanyampathak51@gmail.com',
    phone: '+91-7060617948',
    linkedin: 'https://in.linkedin.com/in/sanyam-pathak-baa755192',
    leetcode: 'https://leetcode.com/u/sanyampathak/',
    hackerrank: 'https://www.hackerrank.com/profile/sanyampathak111'
  },
  summary: '',
  experiences: [
    {
      company: 'Publicis Sapient',
      location: 'Bengaluru, India',
      role: 'Software Development Engineer',
      dateRange: 'Feb - Dec 2024',
      project: 'OKR Tracker Application',
      bullets: [
        'Led design and implementation of a Spring Boot microservices OKR platform used by 1,000+ employees — delivered end-to-end features for goal tracking, progress visualization, and manager reviews.',
        'Engineered services to meet strict NFRs: sustained 30+ RPS and maintained sub-250ms avg API latency under load, improving user experience and reducing time-to-dashboard.',
        'Improved production reliability to 99.8% uptime by introducing stateless services, health checks, and automated restarts — cut incident volume by ~60% during peak periods.',
        'Built robust RBAC and authentication flows securing 10,000+ OKR records across 4 user roles, with zero authorization incidents in production.',
        'Owned cloud deployment on AWS (EKS, API Gateway, CloudFront) with CloudFormation; implemented rate-limiting and horizontal autoscaling to handle traffic spikes.'
      ]
    },
    {
      company: 'Publicis Sapient',
      location: 'Bengaluru, India',
      role: 'Backend',
      dateRange: 'Jan 2025 - Present',
      project: 'ERCP – Goldman Sachs',
      bullets: [
        'Architected a backend service that automated reconciliation file generation for Goldman Sachs, processing 50k+ transactions per run and delivering reliable data to downstream systems.',
        'Optimized complex DB queries and ETL logic to produce CSV outputs with 100% schema compliance, reducing downstream parsing errors and manual corrections.',
        'Automated secure SFTP transfers and end-to-end batch orchestration, removing manual handoffs and cutting operational effort by ~80%.',
        'Built robust validation and retry logic to catch mismatches early — decreased reconciliation defects by ~60% and ensured zero missed SLA windows.',
        'Instrumented monitoring and alerting to surface failures quickly and reduce mean time to recovery for batch jobs.'
      ]
    }
  ],
  skills: {
    technical: ['Java', 'Python', 'OOP', 'NoSQL', 'Data Structures', 'DBMS', 'Operating Systems', 'Problem Solving', 'Computer Networking', 'AWS', 'Kubernetes'],
    tools: ['MongoDB', 'IntelliJ IDEA', 'Redis', 'Docker', 'Jenkins', 'PostgreSQL', 'JavaScript', 'React', 'Spring Boot', 'Apache Kafka', 'JBehave', 'JUnit'],
    ai: ['Machine Learning Fundamentals', 'Supervised & Unsupervised Learning', 'Logistic Regression', 'Recommendation Systems', 'Agentic AI', 'n8n', 'RAG', 'Transformers']
  },
  education: {
    school: 'Vellore Institute of Technology',
    location: 'India',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    gpa: '8.40',
    dateRange: 'June 2019 - May 2023',
    courses: ['Operating Systems', 'Data Structures', 'Analysis Of Algorithms', 'Networking', 'Databases']
  },
  certifications: ['AWS Cloud Practitioner', 'Full-Stack Web Development', 'Introduction to Java', 'Data Structures in Java'],
  projects: [
    {
      name: 'Handwritten Number Recognizer',
      desc: 'Built and shipped an image-classification pipeline that identifies handwritten digits (0–9) with high precision; preprocessed grayscale images, trained models, and evaluated performance to maximize accuracy.',
      tech: ['Python', 'scikit-learn', 'NumPy', 'OpenCV']
    },
    {
      name: 'n8n Automation Flow for Social Media Posts',
      desc: 'Designed an n8n-driven automation that uses AI-generated copy, scheduling logic, and API integrations to publish social posts — cut manual posting time and maintained consistent audience engagement.',
      tech: ['n8n', 'REST APIs', 'AI Content Generation', 'Webhooks']
    }
  ]
}

export default resume
