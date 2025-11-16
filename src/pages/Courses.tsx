import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonPlan {
  week: string;
  topic: string;
  objectives: string[];
  activities: string[];
  resources: string[];
}

interface PastPaper {
  year: string;
  paper: string;
  topics: string[];
}

interface SBA {
  title: string;
  description: string;
  requirements: string[];
  marks: string;
}

interface Course {
  id: string;
  name: string;
  grade: string;
  description: string;
  lessonPlans: LessonPlan[];
  pastPapers: PastPaper[];
  sba: SBA;
}

const courses: Course[] = [
  {
    id: "csec-math",
    name: "CSEC Mathematics",
    grade: "CSEC",
    description: "General Proficiency Mathematics - Algebra, Geometry, Trigonometry, and Statistics",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Number Theory and Computation",
        objectives: [
          "Master operations with integers, fractions, and decimals",
          "Apply order of operations and BODMAS",
          "Work with percentages, ratios, and rates"
        ],
        activities: [
          "Problem-solving exercises",
          "Real-world application scenarios",
          "Calculator skills practice"
        ],
        resources: [
          "CSEC Mathematics textbook",
          "Past paper questions",
          "Online math tools"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Algebra", "Geometry", "Trigonometry", "Statistics", "Vectors"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Number Theory", "Relations and Functions", "Measurement", "Graphs"]
      },
      {
        year: "2022",
        paper: "Paper 1 & 2",
        topics: ["Consumer Arithmetic", "Coordinate Geometry", "Transformations"]
      }
    ],
    sba: {
      title: "Mathematics School-Based Assessment",
      description: "Project-based assessment demonstrating mathematical problem-solving skills",
      requirements: [
        "Select a real-world problem requiring mathematical analysis",
        "Collect and organize data",
        "Apply appropriate mathematical techniques",
        "Present findings with graphs, tables, and calculations",
        "Write a comprehensive report (10-15 pages)"
      ],
      marks: "20% of final grade"
    }
  },
  {
    id: "csec-english-a",
    name: "CSEC English A",
    grade: "CSEC",
    description: "Language proficiency, comprehension, and written expression",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Reading Comprehension",
        objectives: [
          "Analyze different text types",
          "Identify main ideas and supporting details",
          "Make inferences and draw conclusions"
        ],
        activities: [
          "Comprehension passage analysis",
          "Vocabulary building exercises",
          "Critical reading discussions"
        ],
        resources: [
          "CSEC English A textbook",
          "Sample passages",
          "Reading comprehension guides"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Comprehension", "Summary Writing", "Argumentative Essay", "Narrative Writing"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Reading Skills", "Grammar in Context", "Report Writing"]
      }
    ],
    sba: {
      title: "English A Reflective Writing Portfolio",
      description: "Collection of reflective pieces demonstrating writing skills",
      requirements: [
        "Write 3 reflective pieces (minimum 400 words each)",
        "Include personal reflection on significant experiences",
        "Demonstrate proper grammar and structure",
        "Show evidence of editing and revision",
        "Submit with final edited versions"
      ],
      marks: "25% of final grade"
    }
  },
  {
    id: "csec-english-b",
    name: "CSEC English B",
    grade: "CSEC",
    description: "Literature analysis and critical appreciation",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Poetry Analysis",
        objectives: [
          "Identify literary devices and techniques",
          "Analyze themes and symbolism",
          "Write critical essays on poetry"
        ],
        activities: [
          "Close reading sessions",
          "Group discussions",
          "Essay writing practice"
        ],
        resources: [
          "Poetry anthology",
          "Literary terms guide",
          "Sample essays"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Poetry Analysis", "Drama Study", "Prose Analysis", "Unseen Commentary"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Caribbean Literature", "Literary Devices", "Theme Analysis"]
      }
    ],
    sba: {
      title: "Literary Analysis Portfolio",
      description: "Critical analysis of prescribed literary texts",
      requirements: [
        "Analyze 3 different literary pieces (poetry, prose, drama)",
        "Write 1000-1500 words per analysis",
        "Include thesis statements and textual evidence",
        "Demonstrate understanding of literary techniques",
        "Submit annotated bibliography"
      ],
      marks: "25% of final grade"
    }
  },
  {
    id: "csec-integrated-science",
    name: "CSEC Integrated Science",
    grade: "CSEC",
    description: "Biology, Chemistry, and Physics core concepts",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Scientific Method and Laboratory Skills",
        objectives: [
          "Understand scientific inquiry process",
          "Use laboratory equipment safely",
          "Record and analyze experimental data"
        ],
        activities: [
          "Lab safety demonstrations",
          "Hands-on experiments",
          "Data recording practice"
        ],
        resources: [
          "Lab equipment",
          "Science textbook",
          "Safety guidelines"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Cell Biology", "Chemical Reactions", "Energy & Work", "Ecology"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Human Systems", "Atomic Structure", "Forces & Motion", "Waves"]
      }
    ],
    sba: {
      title: "Scientific Investigation Project",
      description: "Independent scientific investigation with experimental component",
      requirements: [
        "Design and conduct a scientific experiment",
        "Formulate hypothesis and methodology",
        "Collect and analyze data",
        "Create graphs and tables",
        "Write scientific report (15-20 pages)",
        "Present findings to class"
      ],
      marks: "20% of final grade"
    }
  },
  {
    id: "csec-social-studies",
    name: "CSEC Social Studies",
    grade: "CSEC",
    description: "Caribbean society, culture, governance, and economic development",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Family and Society",
        objectives: [
          "Understand family structures in the Caribbean",
          "Analyze roles and relationships",
          "Examine social institutions"
        ],
        activities: [
          "Case study analysis",
          "Group discussions",
          "Research projects"
        ],
        resources: [
          "Social Studies textbook",
          "Current affairs articles",
          "Documentary videos"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Family", "Government", "Economic Systems", "Caribbean Identity"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Social Institutions", "Regional Integration", "Globalization"]
      }
    ],
    sba: {
      title: "Social Studies Research Project",
      description: "Research project on a social issue affecting the Caribbean",
      requirements: [
        "Select a relevant social issue",
        "Conduct primary research (surveys/interviews)",
        "Analyze secondary sources",
        "Present findings with statistics and evidence",
        "Propose solutions and recommendations",
        "Submit typed report (2000-2500 words)"
      ],
      marks: "25% of final grade"
    }
  },
  {
    id: "csec-spanish",
    name: "CSEC Spanish",
    grade: "CSEC",
    description: "Spanish language proficiency - reading, writing, listening, and speaking",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Conversational Spanish",
        objectives: [
          "Master common greetings and introductions",
          "Build vocabulary for everyday situations",
          "Practice pronunciation and accent"
        ],
        activities: [
          "Role-playing exercises",
          "Listening comprehension",
          "Conversation practice"
        ],
        resources: [
          "Spanish textbook",
          "Audio materials",
          "Flashcards"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1, 2 & 3",
        topics: ["Reading Comprehension", "Grammar", "Essay Writing", "Oral Exam"]
      },
      {
        year: "2023",
        paper: "Paper 1, 2 & 3",
        topics: ["Vocabulary", "Translation", "Letter Writing", "Conversation"]
      }
    ],
    sba: {
      title: "Spanish Speaking Assessment",
      description: "Oral proficiency demonstration through presentations and conversations",
      requirements: [
        "Prepare 3 oral presentations (5 minutes each)",
        "Topics: Personal life, Caribbean culture, Current events",
        "Demonstrate proper pronunciation and grammar",
        "Participate in conversational dialogue",
        "Submit written scripts with audio recordings"
      ],
      marks: "25% of final grade"
    }
  },
  {
    id: "csec-it",
    name: "CSEC Information Technology",
    grade: "CSEC",
    description: "Computer applications, programming, and information systems",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Computer Systems and Hardware",
        objectives: [
          "Identify computer hardware components",
          "Understand system architecture",
          "Learn about input/output devices"
        ],
        activities: [
          "Hardware identification exercise",
          "System assembly demonstration",
          "Research presentations"
        ],
        resources: [
          "Computer lab",
          "IT textbook",
          "Hardware diagrams"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Computer Systems", "Programming", "Databases", "Networks", "Web Design"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Software Applications", "Problem Solving", "Data Management"]
      }
    ],
    sba: {
      title: "IT Problem-Solving Project",
      description: "Develop a solution to a real-world problem using IT skills",
      requirements: [
        "Identify and define a problem",
        "Design a solution using appropriate software",
        "Create documentation (user manual, technical guide)",
        "Test and evaluate the solution",
        "Present project with demonstration",
        "Submit all files and documentation"
      ],
      marks: "25% of final grade"
    }
  },
  {
    id: "csec-poa",
    name: "CSEC Principles of Accounts",
    grade: "CSEC",
    description: "Financial accounting, bookkeeping, and business finance",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Introduction to Accounting",
        objectives: [
          "Understand basic accounting concepts",
          "Learn double-entry bookkeeping",
          "Prepare simple financial statements"
        ],
        activities: [
          "Ledger preparation exercises",
          "T-account practice",
          "Financial statement analysis"
        ],
        resources: [
          "Accounting textbook",
          "Practice ledgers",
          "Calculator"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Double Entry", "Trial Balance", "Final Accounts", "Cash Flow", "Ratios"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Ledgers", "Bank Reconciliation", "Depreciation", "Partnerships"]
      }
    ],
    sba: {
      title: "Accounting Project",
      description: "Comprehensive accounting project for a small business",
      requirements: [
        "Select or create a small business scenario",
        "Record transactions for 3 months",
        "Prepare all necessary ledgers and journals",
        "Create trial balance and financial statements",
        "Write business analysis report",
        "Submit complete accounting portfolio"
      ],
      marks: "25% of final grade"
    }
  },
  {
    id: "csec-pob",
    name: "CSEC Principles of Business",
    grade: "CSEC",
    description: "Business operations, entrepreneurship, and commercial activities",
    lessonPlans: [
      {
        week: "Week 1-2",
        topic: "Nature of Business",
        objectives: [
          "Define business and entrepreneurship",
          "Identify types of businesses",
          "Understand business objectives"
        ],
        activities: [
          "Case study analysis",
          "Business plan brainstorming",
          "Guest speaker sessions"
        ],
        resources: [
          "Business textbook",
          "Business magazines",
          "Local business case studies"
        ]
      }
    ],
    pastPapers: [
      {
        year: "2024",
        paper: "Paper 1 & 2",
        topics: ["Business Types", "Marketing", "Production", "Human Resources", "Finance"]
      },
      {
        year: "2023",
        paper: "Paper 1 & 2",
        topics: ["Entrepreneurship", "Consumer Protection", "Business Ethics", "CARICOM"]
      }
    ],
    sba: {
      title: "Business Plan Project",
      description: "Develop a comprehensive business plan for a proposed venture",
      requirements: [
        "Create a detailed business plan (20-25 pages)",
        "Include market research and analysis",
        "Develop marketing and operational strategies",
        "Prepare financial projections",
        "Design promotional materials",
        "Present business pitch to class"
      ],
      marks: "25% of final grade"
    }
  }
];

interface CoursesProps {
  onLogout: () => void;
}

const Courses = ({ onLogout }: CoursesProps) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleDownloadPlan = (courseName: string, week: string) => {
    // In a real app, this would download a PDF
    alert(`Downloading lesson plan for ${courseName} - ${week}`);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-stone-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <Header onLogout={onLogout} />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-2">Courses & Lesson Plans</h1>
          <p className="text-muted-foreground">
            Resources and lesson plans to help new teachers deliver effective instruction
          </p>
        </div>

        {!selectedCourse ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className="glass-card shadow-elegant cursor-pointer hover-lift transition-bounce animate-fade-in-up"
                style={{ animationDelay: `${courses.indexOf(course) * 0.1}s` }}
                onClick={() => setSelectedCourse(course)}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {course.grade}
                    </span>
                  </div>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {course.lessonPlans.length} lesson plans available
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Button 
              variant="outline" 
              className="mb-6 hover:shadow-md transition-smooth"
              onClick={() => setSelectedCourse(null)}
            >
              ← Back to Courses
            </Button>

            <Card className="glass-card shadow-elegant animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {selectedCourse.grade}
                  </span>
                </div>
                <CardTitle className="text-3xl">{selectedCourse.name}</CardTitle>
                <CardDescription className="text-base">
                  {selectedCourse.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Past Papers Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    Past Papers
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCourse.pastPapers.map((paper, index) => (
                      <Card key={index} className="glass-card hover:shadow-md transition-smooth">
                        <CardHeader>
                          <CardTitle className="text-lg">{paper.year} - {paper.paper}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">Topics covered:</p>
                          <ul className="space-y-1 text-sm">
                            {paper.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-4"
                            onClick={() => alert(`Downloading ${paper.year} ${paper.paper}`)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* SBA Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">School-Based Assessment (SBA)</h2>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle>{selectedCourse.sba.title}</CardTitle>
                      <CardDescription>{selectedCourse.sba.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Requirements:</h3>
                        <ul className="space-y-2">
                          {selectedCourse.sba.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1 font-bold">{index + 1}.</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-sm font-semibold text-primary">
                          Assessment Weight: {selectedCourse.sba.marks}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Lesson Plans Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Sample Lesson Plans</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {selectedCourse.lessonPlans.map((plan, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="hover:text-primary transition-colors">
                          {plan.week}: {plan.topic}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-4">
                          <div>
                            <h3 className="font-semibold mb-2">Learning Objectives</h3>
                            <ul className="space-y-2">
                              {plan.objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{obj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2">Activities</h3>
                            <ul className="space-y-2">
                              {plan.activities.map((activity, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2">Resources</h3>
                            <ul className="space-y-2">
                              {plan.resources.map((resource, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{resource}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleDownloadPlan(selectedCourse.name, plan.week)}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download Lesson Plan
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;
