export const projects = [
  {
    slug: 'verivoice',
    title: 'VeriVoice',
    subtitle: 'Voice-Based Attendance System',
    summary:
      'A voice-based attendance system that uses the voice samples of students to verify their presence in class.',
    cardTags: ['Whisper', 'SpeechBrain', 'FastAPI', 'PostgreSQL', 'React'],
    headline: 'Rethinking classroom attendance through voice recognition and speaker verification.',
    intro:
      'VeriVoice is a voice-based attendance system that combines automatic speech recognition and speaker verification to automate classroom attendance. Students verify their presence by speaking a predefined attendance phrase, while the system checks both the spoken phrase and the speaker’s voice against previously enrolled voice samples.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Whisper', 'SpeechBrain'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/Esther-Idumu/voice-based-attendance-system',
      },
    ],
    // Demo video shown under the intro. The files are in public/demo/.
    demo: {
      title: 'Demo video',
      video: '/demo/verivoice-demo.mp4',
      poster: '/demo/verivoice-demo-poster.jpg',
      caption:
        'A student with enrolled voice samples says “present”. The system verifies the voice and marks attendance.',
    },
    sections: [
      {
        title: 'Project overview',
        blocks: [
          {
            heading: 'The problem',
            paragraphs: [
              'Traditional classroom attendance systems often rely on paper registers and manual roll calls. These approaches can be time-consuming, prone to human error and susceptible to attendance impersonation.',
              'VeriVoice explores how speech technologies can make attendance recording more efficient while introducing an additional layer of identity verification.',
            ],
          },
          {
            heading: 'The solution',
            paragraphs: [
              'I developed a working platform that uses speech recognition to identify the attendance keyword and speaker verification to determine whether the submitted voice belongs to an enrolled student.',
              'The system combines these processes to validate attendance before recording it against the relevant course.',
            ],
          },
          {
            heading: 'Key features',
            list: [
              'Student registration and management.',
              'Course management and student-course enrolment.',
              'Voice sample enrolment for individual students.',
              'Speech-to-text processing using Whisper.',
              'Speaker verification using SpeechBrain.',
              'Voice similarity comparison using cosine similarity.',
              'Course-specific attendance verification.',
              'Duplicate attendance prevention for the same course and day.',
            ],
          },
        ],
      },
      {
        title: 'Technical implementation',
        blocks: [
          {
            paragraphs: [
              'The application uses a React frontend, FastAPI backend and PostgreSQL database.',
              'Its voice verification workflow combines two separate AI-powered processes:',
            ],
            steps: [
              {
                title: 'Speech recognition',
                text: 'Whisper processes the submitted audio and transcribes the speech. The system checks whether the expected attendance keyword, “present”, was spoken.',
              },
              {
                title: 'Speaker verification',
                text: 'SpeechBrain’s ECAPA-TDNN speaker recognition model generates speaker embeddings from the submitted audio. The generated embedding is compared against the student’s enrolled voice representation using cosine similarity. A similarity threshold determines whether the submitted voice sufficiently matches the enrolled speaker.',
              },
              {
                title: 'Attendance recording',
                text: 'The backend combines the speech recognition and speaker verification results before processing the attendance request. Validated attendance is recorded against the relevant student and course, with duplicate submissions prevented for the same day.',
              },
            ],
          },
        ],
      },
      {
        title: 'Architecture and technologies',
        blocks: [
          {
            table: {
              columns: ['Component', 'Technology', 'Purpose'],
              rows: [
                ['Frontend', 'React', 'User interface and audio recording'],
                ['Backend', 'FastAPI', 'API endpoints and application logic'],
                ['Database', 'PostgreSQL', 'Student, course and attendance records'],
                ['ORM', 'SQLAlchemy', 'Database operations'],
                ['Speech recognition', 'Whisper', 'Speech transcription'],
                ['Speaker verification', 'SpeechBrain', 'Voice embeddings'],
                ['Audio processing', 'FFmpeg', 'Audio format conversion'],
              ],
            },
          },
        ],
      },
      {
        title: 'Challenges and engineering decisions',
        blocks: [
          {
            paragraphs: [
              'One of the most challenging aspects of this project was integrating multiple audio-processing components into a single working system.',
              'I had to work through audio format compatibility, including converting browser-recorded audio into the format required by the speech-processing models.',
              'Another challenge was understanding and implementing speaker verification. This involved collecting voice samples, generating embeddings, comparing speaker representations and determining an appropriate similarity threshold.',
              'For privacy considerations, the system stores speaker embeddings rather than retaining raw voice recordings as its verification reference.',
            ],
          },
        ],
      },
    ],
  },


  {
    slug: 'devlink',
    title: 'DevLink',
    subtitle: 'Developer Collaboration Platform',
    summary: 'A collaboration platform where developers find each other and build together.',
    cardTags: ['React', 'Python', 'Django', 'CSS'],
    headline: 'Creating a platform where developers find people to build with.',
    intro:
      'DevLink is a developer collaboration platform designed to connect developers with project owners looking for collaborators. It provides a space where developers can discover projects, apply to contribute, and work together to gain practical experience and build their portfolios.',
    tags: ['React', 'Django', 'Python', 'PostgreSQL'],
    links: [
    { label: 'Live demo', href: 'https://devlink-collab.vercel.app/' },
    { label: 'GitHub repository', href: 'https://github.com/Esther-Idumu/developer_collaboration_platform' },
  ],
    sections: [
      {
        title: 'Project overview',
        blocks: [
          {
            heading: 'The problem',
            paragraphs: [
              'Finding meaningful opportunities to gain practical software development experience can be difficult, particularly for developers who are still building their professional portfolios.',
              'Developers may have the skills and willingness to contribute but lack access to collaborative projects or people with complementary technical skills.',
            ],
          },
          {
            heading: 'The solution',
            paragraphs: [
              'DevLink provides a platform where project owners can publish projects and recruit developers based on the roles they need. Developers can explore available opportunities, submit applications and become members of projects when accepted.',
            ],
          },
          {
            heading: 'Key features',
            list: [
              'User registration and authentication.',
              'Developer profiles with skills, experience and portfolio links.',
              'Project creation and management.',
              'Project discovery and browsing.',
              'Applications to join projects.',
              'Application acceptance, rejection and withdrawal.',
              'Project membership and role assignment.',
              'Project progress tracking through defined statuses.',
              'Messaging for accepted project collaborators.',
            ],
          },
        ],
      },
      {
        title: 'Technical implementation',
        blocks: [
          {
            paragraphs: [
              'DevLink uses a Django REST backend and a React frontend, with PostgreSQL handling persistent data storage.',
              'The backend is structured around separate application domains, including accounts, profiles, projects and applications.',
              'Some important implementation decisions include:',
            ],
            definitions: [
              {
                term: 'Custom authentication',
                text: 'Implemented a custom Django user model using email-based login.',
              },
              {
                term: 'Relational database design',
                text: 'Structured relationships between users, projects, applications and project members.',
              },
              {
                term: 'Application workflow',
                text: 'Implemented application statuses and owner-controlled acceptance and rejection.',
              },
              {
                term: 'Membership management',
                text: 'Project membership is created through the application acceptance process, with role assignment and capacity checks.',
              },
              {
                term: 'Access control',
                text: 'Restricted project management actions to authorized project owners.',
              },
              {
                term: 'Automated testing',
                text: 'Added backend tests to verify important project and application workflows.',
              },
            ],
          },
        ],
      },
      {
        title: 'Challenges and engineering decisions',
        blocks: [
          {
            paragraphs: [
              'A major part of developing DevLink was thinking through the relationships between users, projects and applications.',
              'For example, accepting an application is more than changing an application’s status. It also involves creating a project membership, assigning a role and ensuring that the project’s capacity is respected.',
              'I had to consider these relationships and business rules carefully to maintain data consistency and prevent invalid operations.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'playpop',
    title: 'PlayPop',
    subtitle: 'Mini Games Arcade',
    summary:
      'A mini-games arcade featuring independently implemented game logic and reusable utility functions for event handling, game loops and timer management.',
    cardTags: ['HTML', 'CSS', 'JS'],
    headline: 'Building a modular browser-based mini-games arcade.',
    intro:
      'PlayPop is a browser-based mini-games arcade built with vanilla JavaScript. It brings multiple interactive games together in one interface, with reusable utility functions and a modular structure that makes individual games easier to develop, manage and extend.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Live demo', href: 'https://playpop-iota.vercel.app/' },
      { label: 'GitHub repository', href: 'https://github.com/Esther-Idumu/playpop' },
    ],
    sections: [
      {
        title: 'Project overview',
        blocks: [
          {
            heading: 'The idea',
            paragraphs: [
              'I wanted to build something interactive that went beyond a conventional static website. PlayPop started as an opportunity to explore JavaScript through game development, focusing on event handling, application state, timers and DOM manipulation.',
            ],
          },
          {
            heading: 'Key features',
            list: [
              'Multiple games accessible through a central game hub.',
              'Individual game implementations with separate logic and styling.',
              'Shared utility functions for event handling and timer management.',
              'Game restart and navigation controls.',
              'A reusable structure that makes adding new games easier.',
            ],
          },
        ],
      },
      {
        title: 'Technical implementation',
        blocks: [
          {
            paragraphs: [
              'One of the main architectural decisions was keeping individual game implementations separate from the application’s central navigation logic.',
              'I structured the application around:',
            ],
            definitions: [
              {
                term: 'main.js',
                text: 'Manages the game registry, navigation, game selection and restart functionality.',
              },
              {
                term: 'helpers.js',
                text: 'Provides reusable utilities for event listeners, intervals, timeouts and game-over handling.',
              },
              { term: 'games/', text: 'Contains the individual game implementations.' },
              { term: 'css/', text: 'Separates global styling from game-specific styles.' },
            ],
          },
        ],
      },
      {
        title: 'Challenges and engineering decisions',
        blocks: [
          {
            paragraphs: [
              'Managing timers and event listeners across different games was an important consideration. Without proper cleanup, background intervals or timeouts could continue running after a player leaves a game.',
              'To address this, I implemented shared timer and event-handling utilities that make it easier to manage game lifecycles and prevent unnecessary background execution.',
            ],
          },
        ],
      },
    ],
  }
];