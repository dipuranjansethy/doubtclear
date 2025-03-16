const Teachers = [
  {
    id: "T001",
    name: "Dr. Sarah Johnson",
    age: 42,
    proficiency: "Advanced",
    rating: 4.8,
    distance: 3.2, // Distance in miles
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    reviews: [
      { id: "R001", studentId: "S137", comment: "Exceptional explanations for complex topics", rating: 5 },
      { id: "R002", studentId: "S254", comment: "Very patient and thorough", rating: 5 },
      { id: "R003", studentId: "S112", comment: "Great teaching style but sometimes moves too quickly", rating: 4 }
    ],
    subjects: ["Mathematics", "Statistics", "Data Science"],
    classesOffered: [
      { id: "C101", subject: "Mathematics", standard: [10, 11, 12], format: "In-person and Online" },
      { id: "C102", subject: "Statistics", standard: [11, 12], format: "Online" },
      { id: "C103", subject: "Mathematics", standard: [8, 9], format: "In-person" }
    ],
    qualifications: [
      { degree: "PhD", field: "Applied Mathematics", institution: "MIT", year: 2010 },
      { degree: "MSc", field: "Statistics", institution: "Stanford University", year: 2006 },
      { degree: "BSc", field: "Mathematics", institution: "UC Berkeley", year: 2004 }
    ],
    about: "Dr. Johnson specializes in making complex mathematical concepts accessible to students of all levels. With over 15 years of teaching experience in both academic and professional settings, she combines theoretical knowledge with practical applications."
  },
  {
    id: "T002",
    name: "Prof. Michael Chen",
    age: 38,
    proficiency: "Expert",
    rating: 4.9,
    distance: 5.7, // Distance in miles
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    reviews: [
      { id: "R004", studentId: "S098", comment: "Best physics teacher I've ever had", rating: 5 },
      { id: "R005", studentId: "S127", comment: "Makes quantum physics understandable", rating: 5 },
      { id: "R006", studentId: "S204", comment: "Excellent lectures but assignments are very challenging", rating: 4 }
    ],
    subjects: ["Physics", "Astronomy", "Engineering Fundamentals"],
    classesOffered: [
      { id: "C201", subject: "Physics", standard: [11, 12], format: "In-person" },
      { id: "C202", subject: "Physics", standard: [9, 10], format: "Online" },
      { id: "C203", subject: "Astronomy", standard: [8, 9, 10, 11, 12], format: "Hybrid" }
    ],
    qualifications: [
      { degree: "PhD", field: "Theoretical Physics", institution: "California Institute of Technology", year: 2012 },
      { degree: "MSc", field: "Physics", institution: "Princeton University", year: 2008 },
      { degree: "BSc", field: "Physics and Mathematics", institution: "Harvard University", year: 2006 }
    ],
    about: "Prof. Chen is renowned for his ability to explain complex physical phenomena using intuitive examples. His research in quantum field theory has been published in leading journals, and he brings cutting-edge knowledge to his teaching."
  },
  {
    id: "T003",
    name: "Ms. Olivia Martinez",
    age: 35,
    proficiency: "Advanced",
    rating: 4.7,
    distance: 1.8, // Distance in miles
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    reviews: [
      { id: "R007", studentId: "S045", comment: "Fantastic at teaching literature analysis", rating: 5 },
      { id: "R008", studentId: "S162", comment: "Very engaging and inspiring", rating: 5 },
      { id: "R009", studentId: "S089", comment: "Great feedback on essays but classes can be long", rating: 4 }
    ],
    subjects: ["English Literature", "Creative Writing", "Literary Analysis"],
    classesOffered: [
      { id: "C301", subject: "English", standard: [6, 7, 8], format: "In-person" },
      { id: "C302", subject: "English Literature", standard: [9, 10], format: "Online" },
      { id: "C303", subject: "Creative Writing", standard: [3, 4, 5, 6, 7], format: "In-person" }
    ],
    qualifications: [
      { degree: "MFA", field: "Creative Writing", institution: "University of Iowa", year: 2014 },
      { degree: "MA", field: "English Literature", institution: "Columbia University", year: 2011 },
      { degree: "BA", field: "English", institution: "New York University", year: 2009 }
    ],
    about: "Ms. Martinez combines her passion for literature with creative teaching methods. Her classes focus on developing critical thinking and analytical skills through deep engagement with texts. She has published two poetry collections and is working on a novel."
  },
  {
    id: "T004",
    name: "Dr. James Wilson",
    age: 45,
    proficiency: "Expert",
    rating: 4.6,
    distance: 7.2, // Distance in miles
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    reviews: [
      { id: "R010", studentId: "S176", comment: "Incredible depth of historical knowledge", rating: 5 },
      { id: "R011", studentId: "S088", comment: "Brings history to life with great storytelling", rating: 5 },
      { id: "R012", studentId: "S134", comment: "Excellent but sometimes goes off on tangents", rating: 4 }
    ],
    subjects: ["World History", "European History", "Historical Research Methods"],
    classesOffered: [
      { id: "C401", subject: "History", standard: [8, 9, 10], format: "In-person" },
      { id: "C402", subject: "World History", standard: [11, 12], format: "Online" },
      { id: "C403", subject: "Social Studies", standard: [5, 6, 7], format: "Hybrid" }
    ],
    qualifications: [
      { degree: "PhD", field: "History", institution: "Oxford University", year: 2006 },
      { degree: "MPhil", field: "European Studies", institution: "Cambridge University", year: 2002 },
      { degree: "BA", field: "History", institution: "University of Edinburgh", year: 2000 }
    ],
    about: "Dr. Wilson is a historian specializing in European medieval and early modern periods. His approach combines rigorous historical methods with engaging narratives, helping students connect past events to contemporary issues."
  },
  {
    id: "T005",
    name: "Mr. Robert Taylor",
    age: 32,
    proficiency: "Intermediate",
    rating: 4.5,
    distance: 2.9, // Distance in miles
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    reviews: [
      { id: "R013", studentId: "S201", comment: "Makes programming fun and accessible", rating: 5 },
      { id: "R014", studentId: "S067", comment: "Very patient with beginners", rating: 5 },
      { id: "R015", studentId: "S145", comment: "Good for fundamentals but advanced topics need more depth", rating: 3 }
    ],
    subjects: ["Computer Science", "Web Development", "Python Programming"],
    classesOffered: [
      { id: "C501", subject: "Computer Science", standard: [9, 10], format: "Online" },
      { id: "C502", subject: "Programming", standard: [11, 12], format: "Online" },
      { id: "C503", subject: "Coding Basics", standard: [6, 7, 8], format: "In-person" }
    ],
    qualifications: [
      { degree: "MSc", field: "Computer Science", institution: "Georgia Tech", year: 2018 },
      { degree: "BSc", field: "Software Engineering", institution: "University of Washington", year: 2015 },
      { certification: "AWS Certified Solutions Architect", institution: "Amazon Web Services", year: 2019 }
    ],
    about: "Mr. Taylor transitioned from industry to teaching after working as a software developer for 5 years. He focuses on practical, project-based learning that prepares students for real-world programming challenges."
  },
  {
    id: "T006",
    name: "Dr. Aisha Patel",
    age: 40,
    proficiency: "Expert",
    rating: 4.9,
    distance: 4.5, // Distance in miles
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    reviews: [
      { id: "R016", studentId: "S078", comment: "Exceptional teaching of organic chemistry", rating: 5 },
      { id: "R017", studentId: "S092", comment: "Makes complex concepts simple to understand", rating: 5 },
      { id: "R018", studentId: "S183", comment: "Brilliant lecturer and very supportive", rating: 5 }
    ],
    subjects: ["Chemistry", "Biochemistry", "Organic Chemistry"],
    classesOffered: [
      { id: "C601", subject: "Chemistry", standard: [11, 12], format: "In-person" },
      { id: "C602", subject: "Chemistry", standard: [9, 10], format: "Hybrid" },
      { id: "C603", subject: "Science", standard: [6, 7, 8], format: "Online" }
    ],
    qualifications: [
      { degree: "PhD", field: "Organic Chemistry", institution: "University of Chicago", year: 2009 },
      { degree: "MSc", field: "Chemistry", institution: "University of Michigan", year: 2005 },
      { degree: "BSc", field: "Chemistry", institution: "Northwestern University", year: 2003 }
    ],
    about: "Dr. Patel combines her research expertise with innovative teaching methods. Her laboratory experience informs her practical approach to chemistry education, emphasizing hands-on experiments and real-world applications."
  },
  {
    id: "T007",
    name: "Ms. Lisa Nguyen",
    age: 29,
    proficiency: "Advanced",
    rating: 4.7,
    distance: 6.1, // Distance in miles
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    reviews: [
      { id: "R019", studentId: "S156", comment: "Excellent French teacher for beginners", rating: 5 },
      { id: "R020", studentId: "S073", comment: "Makes learning a new language fun", rating: 5 },
      { id: "R021", studentId: "S199", comment: "Great conversation practice but could use more grammar focus", rating: 4 }
    ],
    subjects: ["French", "Spanish", "Language Acquisition Methodology"],
    classesOffered: [
      { id: "C701", subject: "French", standard: [3, 4, 5], format: "Online" },
      { id: "C702", subject: "Spanish", standard: [6, 7, 8], format: "In-person" },
      { id: "C703", subject: "French", standard: [9, 10, 11, 12], format: "In-person" }
    ],
    qualifications: [
      { degree: "MA", field: "Applied Linguistics", institution: "Georgetown University", year: 2020 },
      { degree: "BA", field: "Modern Languages", institution: "Boston University", year: 2017 },
      { certification: "CELTA", institution: "Cambridge English Language Assessment", year: 2018 }
    ],
    about: "Ms. Nguyen is fluent in five languages and specializes in communicative language teaching methods. Her classes emphasize practical conversation skills and cultural understanding alongside grammar and vocabulary."
  },
  {
    id: "T008",
    name: "Prof. David Garcia",
    age: 51,
    proficiency: "Expert",
    rating: 4.8,
    distance: 8.3, // Distance in miles
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    reviews: [
      { id: "R022", studentId: "S102", comment: "Profound insights into economic theory", rating: 5 },
      { id: "R023", studentId: "S187", comment: "Explains complex economic concepts clearly", rating: 5 },
      { id: "R024", studentId: "S064", comment: "Excellent but courses are very demanding", rating: 4 }
    ],
    subjects: ["Economics", "Finance", "International Trade"],
    classesOffered: [
      { id: "C801", subject: "Economics", standard: [11, 12], format: "In-person" },
      { id: "C802", subject: "Business Studies", standard: [9, 10], format: "Online" },
      { id: "C803", subject: "Finance", standard: [11, 12], format: "Hybrid" }
    ],
    qualifications: [
      { degree: "PhD", field: "Economics", institution: "University of Chicago", year: 2001 },
      { degree: "MSc", field: "Economics", institution: "London School of Economics", year: 1997 },
      { degree: "BA", field: "Economics and Mathematics", institution: "Yale University", year: 1995 }
    ],
    about: "Prof. Garcia has advised central banks and financial institutions throughout his career. His teaching combines theoretical rigor with practical insights from his consulting work, preparing students for careers in economics, finance, and public policy."
  },
  {
    id: "T009",
    name: "Mrs. Emma Thompson",
    age: 36,
    proficiency: "Advanced",
    rating: 4.6,
    distance: 3.7, // Distance in miles
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    reviews: [
      { id: "R025", studentId: "S091", comment: "Fantastic art teacher for all skill levels", rating: 5 },
      { id: "R026", studentId: "S143", comment: "Very encouraging and insightful feedback", rating: 5 },
      { id: "R027", studentId: "S208", comment: "Great technical instruction but classes could be better structured", rating: 4 }
    ],
    subjects: ["Studio Art", "Art History", "Digital Illustration"],
    classesOffered: [
      { id: "C901", subject: "Art", standard: [1, 2, 3, 4, 5], format: "In-person" },
      { id: "C902", subject: "Art History", standard: [0,-1,-2], format: "Online" },
      { id: "C903", subject: "Digital Art", standard: [9, 10, 11, 12], format: "Online" }
    ],
    qualifications: [
      { degree: "MFA", field: "Fine Arts", institution: "Rhode Island School of Design", year: 2015 },
      { degree: "BFA", field: "Painting", institution: "School of the Art Institute of Chicago", year: 2011 },
      { exhibition: "Contemporary Gallery NYC", detail: "Solo Exhibition", year: 2018 }
    ],
    about: "Mrs. Thompson is a practicing artist who brings studio experience to her teaching. Her approach emphasizes developing individual style while mastering technical skills. Her work has been exhibited in galleries across the country."
  },
  {
    id: "T010",
    name: "Dr. Kevin Park",
    age: 43,
    proficiency: "Expert",
    rating: 4.9,
    distance: 5.0, // Distance in miles
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    reviews: [
      { id: "R028", studentId: "S114", comment: "Extraordinary teacher for biological sciences", rating: 5 },
      { id: "R029", studentId: "S195", comment: "Makes molecular biology fascinating and accessible", rating: 5 },
      { id: "R030", studentId: "S052", comment: "Brilliant lectures and very helpful outside class", rating: 5 }
    ],
    subjects: ["Biology", "Genetics", "Molecular Biology"],
    classesOffered: [
      { id: "C1001", subject: "Biology", standard: [11, 12], format: "In-person" },
      { id: "C1002", subject: "Science", standard: [6, 7, 8], format: "Hybrid" },
      { id: "C1003", subject: "Biology", standard: [9, 10], format: "Online" }
    ],
    qualifications: [
      { degree: "PhD", field: "Molecular Biology", institution: "Johns Hopkins University", year: 2008 },
      { degree: "MD", field: "Medicine", institution: "University of Pennsylvania", year: 2006 },
      { degree: "BSc", field: "Biochemistry", institution: "Duke University", year: 2002 }
    ],
    about: "Dr. Park combines his medical background with research expertise in genetics. His teaching approach connects theoretical concepts with medical applications, making complex biological processes relevant to students' future careers in medicine and research."
  }
];

export default Teachers;