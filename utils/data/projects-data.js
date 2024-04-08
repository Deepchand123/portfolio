import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'WebBased Networking Platform for Education & Career Progression',
        description: "In this project, we developed a Web-Based Networking Platform for Education and Career Progression where students can access all the required knowledge, and skills as well as interact with the community and other users in one place for career guidance. An automated Chatbot is integrated to solve customer concerns and queries.",
        tools: ['React', 'MySQL', 'HTML', 'CSS', 'CICD', 'AWS S3', 'JavaScript', 'Machine Learning', 'EC2', 'VS Code', 'Apache'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Cloud Native DevOps Monitoring Application',
        description: 'Developed the Cloud Native Monitoring App utilizing Python Flask, Docker, and Kubernetes, focusing on real time CPU and Memory monitoring capabilities within Docker containers. Employing Terraform, the application seamlessly deploys on Amazon ECR and Amazon EKS, establishing a scalable infrastructure. Enables streamlined resource tracking, optimizing container performance.',
        tools: ['Python', 'Flask', "Amazon EC2", "Docker", "Amazon ECR", "Kubernetes", "Aamazon ECS"],
        role: 'DevOps Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Career Prediction Model',
        description: ' In this project, I’ve developed a machine learning model to predict individuals’ careers. This prediction and accuracy is based on a dataset that includes 6902 rows and 20 features. I employed Decision Tree, Random Forest, and SVM algorithms. Notably, the accuracy of Decision Tree and Random Forest surpasses that of the SVM.',
        tools: ['Machine Learning', 'Jyputer', 'VS code', 'Python', 'NumPy', 'Pandas', 'Data Analysis', 'Data Visualization', 'Streamlit'],
        code: '',
        role: 'Machine Learning',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Microcontroller Based Distance Maintaining Device',
        description: "In this project, we understand distance management techniques, the working of microcontrollers, and other electronic components. We programmed the microcontroller in such a manner that if some obstacle is detected within the given distance range, then the buzzer will give an alert to the user, and the distance with the message will be displayed on the LCD.",
        tools: ['Embedded C', 'Microcontroller', 'Arduino', 'Circuit Design', "Assemble"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Microcontroller',
    },
    {
        id: 5,
        name: ' IMDB Movies Data Analysis & Visualization',
        description: "The project aimed to identify top IMDB-rated movies using criteria such as rating, number of votes, and gross.Acquired skills in NumPy, Pandas, Data analysis, Data Visualization, Correlation, and Statistical operations through the project.",
        tools: ['Data Analysis', 'Data Visualization', 'Python', 'Staticstics', "Correlation"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Data Science',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },