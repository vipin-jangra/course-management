const courses = [
    {
        id: 1, // Unique identifier for the course
        name: 'React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and',
        enrollmentStatus: 'Open',
        thumbnail: 'https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
            {
                week: 3,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 4,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            {
                week: 5,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
                
            {
                week: 6,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        // Additional weeks and topics...
        ],
        students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
        // Additional enrolled students...
        ],
    },
    {
        id: 2, // Unique identifier for the course
        name: 'React JS',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and',
        enrollmentStatus: 'Open',
        thumbnail: 'https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
        // Additional weeks and topics...
        ],
        students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
        // Additional enrolled students...
        ],
    },
    {
        id: 3, // Unique identifier for the course
        name: 'Javascript',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and',
        enrollmentStatus: 'Open',
        thumbnail: 'https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
        // Additional weeks and topics...
        ],
        students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
        // Additional enrolled students...
        ],
    },
    {
        id: 4, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and',
        enrollmentStatus: 'Open',
        thumbnail: 'https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
        // Additional weeks and topics...
        ],
        students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
        // Additional enrolled students...
        ],
    },
    {
        id: 5, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and',
        enrollmentStatus: 'Open',
        thumbnail: 'https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg',//Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
        // Additional weeks and topics...
        ],
        students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
        // Additional enrolled students...
        ],
    },
    {
        id: 6, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and',
        enrollmentStatus: 'Open',
        thumbnail: 'https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
        // Additional weeks and topics...
        ],
        students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
        // Additional enrolled students...
        ],
    },{
        id: 7, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and',
        enrollmentStatus: 'Open',
        thumbnail: 'https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
        // Additional weeks and topics...
        ],
        students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
        // Additional enrolled students...
        ],
    }
    
]

export default courses;