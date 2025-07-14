import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'uddhavsaikia@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Uddhav, I am reaching out to you because...',

    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Uddhav-Saikia/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/uddhavsaikia/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Brain Tumor Detection Using Deep Learning',
        slug: 'brain-tumor-detection',
        techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
        thumbnail: '/projects/thumbnail/brain-tumor.jpg',
        longThumbnail: '/projects/long/brain-tumor.jpg',
        images: ['/projects/images/brain-tumor.jpg'],
        liveUrl: '',
        year: 2025,
        description: `Achieved 91% classification accuracy on MRI brain scan validation datasets by building and training a CNN model using TensorFlow and Keras. Reduced false positives by 20% through image preprocessing and data augmentation techniques such as rotation and flipping.`,
        role: `Independently handled model design and training. Focused on CNN architecture optimization and image preprocessing for improving detection accuracy.`,
    },
    {
        title: 'Carbon Footprint Analyser',
        slug: 'carbon-footprint-analyser',
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'GraphQL',
            'ExcelJS',
        ],
        thumbnail: '/projects/thumbnail/carbon-footprint.jpg',
        longThumbnail: '/projects/long/carbon-footprint.jpg',
        images: ['/projects/images/carbon-footprint.jpg'],
        liveUrl: '',
        year: 2025,
        description: `Built a full-stack application that enables users to calculate and visualize their carbon footprint through interactive charts, enhancing climate awareness. Implemented JWT authentication for user security and personalized tracking.`,
        role: `Led both frontend and backend development. Built visualizations, managed GraphQL integration, and implemented secure user authentication.`,
    },
    {
        title: 'AI-Powered Mental Health Chatbot',
        slug: 'mental-health-chatbot',
        techStack: ['Python', 'NLP', 'PyTorch', 'MERN Stack'],
        thumbnail: '/projects/thumbnail/mental-health.jpg',
        longThumbnail: '/projects/long/mental-health.jpg',
        images: ['/projects/images/mental-health.jpg'],
        liveUrl: '',
        year: 2024,
        description: `Developed a chatbot providing empathetic support using NLP and sentiment analysis. Enhanced emotional accuracy through intent recognition and fine-tuned NLP models.`,
        role: `Focused on model training and integration with MERN-based frontend. Tuned NLP pipeline for context-aware emotional responses.`,
    },
    {
        title: 'Robotics & Embedded Systems',
        slug: 'robotics-and-embedded-systems',
        techStack: ['Arduino', 'C++', 'Sensors', 'Motors'],
        thumbnail: '/projects/thumbnail/robotics.jpg',
        longThumbnail: '/projects/long/robotics.jpg',
        images: ['/projects/images/robotics.jpg'],
        liveUrl: '',
        year: 2024,
        description: `Designed autonomous and sensor-driven robots including self-balancing bots, maze-solving rovers, and quadcopters. Covered full-cycle hardware integration, control logic, and testing.`,
        role: `Worked across multiple bots, from circuit wiring to embedded programming. Led PID tuning, IR sensor logic, and documentation tasks.`,
    },
    {
        title: 'NERDS Robotics Club Website',
        slug: 'nerds-website',
        techStack: ['MERN Stack', 'REST APIs', 'CI/CD'],
        thumbnail: '/projects/thumbnail/nerds.jpg',
        longThumbnail: '/projects/long/nerds.jpg',
        images: ['/projects/images/nerds.jpg'],
        liveUrl: '',
        year: 2024,
        description: `Developed the official club website to showcase robotics projects and manage internal documentation. Added features like admin CMS, project dashboards, and continuous deployment workflows.`,
        role: `Handled full-stack development. Built CMS tools, integrated GitHub CI/CD pipelines, and structured documentation portal.`,
    },
    {
        title: 'Facial Recognition Attendance',
        slug: 'facial-recognition-attendance',
        techStack: ['Python', 'OpenCV'],
        thumbnail: '/projects/thumbnail/face-attendance.jpg',
        longThumbnail: '/projects/long/face-attendance.jpg',
        images: ['/projects/images/face-attendance.jpg'],
        liveUrl: '',
        year: 2021,
        description: `Developed facial recognition software using ML algorithms to detect and identify individuals for attendance purposes.`,
        role: `Implemented the image preprocessing, facial feature extraction, and comparison logic using OpenCV and Python.`,
    },
    {
        title: 'Automatic Floor Cleaner',
        slug: 'automatic-floor-cleaner',
        techStack: ['Arduino', 'C++', 'Motors'],
        thumbnail: '/projects/thumbnail/floor-cleaner.jpg',
        longThumbnail: '/projects/long/floor-cleaner.jpg',
        images: ['/projects/images/floor-cleaner.jpg'],
        liveUrl: '',
        year: 2019,
        description: `Designed a manually operable floor cleaner combining a vacuum, water dispenser, and mop. Delivered a compact and user-friendly cleaning solution.`,
        role: `Involved in both mechanical design and embedded programming using Arduino and motor control.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Core Member.',
        company: 'Google Developer Groups On Campus, NIT Silchar',
        duration: 'Aug 2024 - Present',
    },
    {
        title: 'Head of Operations',
        company: 'N.E.R.D.S., NIT Silchar',
        duration: 'Jun 2025 - Present',
    },
    {
        title: 'Cadet',
        company: 'National Cadet Corps',
        duration: 'Oct 2023 - Present',
    },
    {
        title: 'Moderator',
        company: 'Music Club NIT Silchar',
        duration: 'Nov 2023 - Present',
    },
];
