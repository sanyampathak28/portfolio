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
        'Designed and developed an enterprise-level OKR management system using Spring Boot microservices, enabling 1000+ employees to track goals, progress, and performance.',
        'Fulfilled non-functional requirements capable of sustaining 30+ requests/sec, supporting 1,000+ active OKRs across 150+ teams, while maintaining sub-250 ms average API latency under concurrent load.',
        'Achieved 99.8% service availability by implementing stateless Spring Boot services, health checks, and automated restarts, reducing production incidents by 60% during peak usage periods.',
        'Implemented role-based access control and secure authentication, enforcing permissions across 4 user roles and protecting 10,000+ sensitive OKR records, with zero reported authorization breaches.',
        'Deployed backend Java services on AWS EKS and frontend via CloudFront using CloudFormation, designing API Gateway with rate limiting and configuring EKS auto-scaling.'
      ]
    },
    {
      company: 'Publicis Sapient',
      location: 'Bengaluru, India',
      role: 'Backend',
      dateRange: 'Jan 2025 - Present',
      project: 'ERCP – Goldman Sachs',
      bullets: [
        'Designed and implemented a backend service to automate reconciliation file generation and transfer, processing 50,000+ financial transactions per run for downstream enterprise systems.',
        'Built optimized database queries to extract reconciliation data, transforming results into structured CSV files with 100% schema compliance for external consumption.',
        'Automated secure FTP-based file transfers between internal and external servers, eliminating manual steps and reducing operational effort by 80%.',
        'Scheduled and executed batch workflows with end-to-end automation, ensuring timely delivery of reconciliation files with zero missed SLA windows.',
        'Implemented validation and error-handling mechanisms, detecting data mismatches and transfer failures early, reducing reconciliation defects by 60%.'
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
      desc: 'Developed a machine learning model to recognize handwritten digits using image classification techniques, trained on grayscale digit images to accurately predict numbers from 0–9.',
      tech: ['Python', 'scikit-learn', 'NumPy', 'OpenCV']
    },
    {
      name: 'n8n Automation Flow for Social Media Posts',
      desc: 'Designed and implemented an end-to-end automation workflow using n8n to generate and publish social media posts automatically, integrating AI-based content generation, scheduling, and platform APIs.',
      tech: ['n8n', 'REST APIs', 'AI Content Generation', 'Webhooks']
    }
  ]
}

export default resume
