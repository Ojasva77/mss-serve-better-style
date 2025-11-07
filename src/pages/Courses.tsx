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

interface Course {
  id: string;
  name: string;
  grade: string;
  description: string;
  lessonPlans: LessonPlan[];
}

const courses: Course[] = [
  {
    id: "math-grade10",
    name: "Mathematics",
    grade: "Grade 10",
    description: "Algebra, Geometry, and Trigonometry fundamentals",
    lessonPlans: [
      {
        week: "Week 1",
        topic: "Introduction to Algebra",
        objectives: [
          "Understand algebraic expressions and equations",
          "Solve linear equations with one variable",
          "Apply algebraic concepts to real-world problems"
        ],
        activities: [
          "Group discussion on algebraic concepts",
          "Practice problems on the board",
          "Individual worksheet exercises"
        ],
        resources: [
          "Textbook: Chapter 1",
          "Online algebra calculator",
          "Practice worksheet set A"
        ]
      },
      {
        week: "Week 2",
        topic: "Quadratic Equations",
        objectives: [
          "Factor quadratic expressions",
          "Solve quadratic equations using multiple methods",
          "Graph quadratic functions"
        ],
        activities: [
          "Interactive graphing activity",
          "Peer teaching sessions",
          "Problem-solving challenges"
        ],
        resources: [
          "Textbook: Chapter 2",
          "Graphing calculator",
          "Online quadratic solver tools"
        ]
      }
    ]
  },
  {
    id: "english-grade10",
    name: "English Language Arts",
    grade: "Grade 10",
    description: "Literature analysis, creative writing, and communication skills",
    lessonPlans: [
      {
        week: "Week 1",
        topic: "Poetry Analysis",
        objectives: [
          "Identify poetic devices and techniques",
          "Analyze themes and meanings in poetry",
          "Write original poetry using learned techniques"
        ],
        activities: [
          "Close reading of selected poems",
          "Group analysis presentations",
          "Creative writing workshop"
        ],
        resources: [
          "Poetry anthology",
          "Literary analysis guides",
          "Writing prompts collection"
        ]
      },
      {
        week: "Week 2",
        topic: "Essay Writing",
        objectives: [
          "Develop strong thesis statements",
          "Structure essays effectively",
          "Use evidence to support arguments"
        ],
        activities: [
          "Brainstorming sessions",
          "Peer review workshops",
          "Individual writing practice"
        ],
        resources: [
          "Essay writing handbook",
          "Sample essays",
          "Rubric and checklist"
        ]
      }
    ]
  },
  {
    id: "science-grade10",
    name: "Integrated Science",
    grade: "Grade 10",
    description: "Biology, Chemistry, and Physics concepts",
    lessonPlans: [
      {
        week: "Week 1",
        topic: "Cell Structure and Function",
        objectives: [
          "Identify parts of plant and animal cells",
          "Explain cell organelle functions",
          "Compare prokaryotic and eukaryotic cells"
        ],
        activities: [
          "Microscope lab observation",
          "Cell model building activity",
          "Virtual cell exploration"
        ],
        resources: [
          "Microscopes and slides",
          "Cell model kits",
          "Online cell simulation"
        ]
      },
      {
        week: "Week 2",
        topic: "Chemical Reactions",
        objectives: [
          "Identify types of chemical reactions",
          "Balance chemical equations",
          "Observe and record chemical changes"
        ],
        activities: [
          "Lab experiments with reactions",
          "Equation balancing practice",
          "Safety demonstration"
        ],
        resources: [
          "Lab equipment and chemicals",
          "Safety goggles and gloves",
          "Reaction worksheet packet"
        ]
      }
    ]
  },
  {
    id: "social-studies-grade10",
    name: "Social Studies",
    grade: "Grade 10",
    description: "History, geography, and civics education",
    lessonPlans: [
      {
        week: "Week 1",
        topic: "Caribbean History",
        objectives: [
          "Understand colonization impact on Caribbean societies",
          "Analyze independence movements",
          "Discuss contemporary Caribbean identity"
        ],
        activities: [
          "Timeline creation activity",
          "Historical document analysis",
          "Class debate on independence"
        ],
        resources: [
          "History textbook chapters 3-4",
          "Primary source documents",
          "Documentary video clips"
        ]
      },
      {
        week: "Week 2",
        topic: "Government and Citizenship",
        objectives: [
          "Explain the structure of government",
          "Identify citizen rights and responsibilities",
          "Discuss democratic participation"
        ],
        activities: [
          "Mock parliament session",
          "Rights and responsibilities mapping",
          "Current events discussion"
        ],
        resources: [
          "Government textbook",
          "Constitution excerpts",
          "News articles"
        ]
      }
    ]
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
    <div className="min-h-screen bg-background">
      <Header onLogout={onLogout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
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
                className="cursor-pointer hover:shadow-lg transition-shadow"
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
              className="mb-6"
              onClick={() => setSelectedCourse(null)}
            >
              ← Back to Courses
            </Button>

            <Card>
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
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Lesson Plans</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {selectedCourse.lessonPlans.map((plan, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium">
                        {plan.week}: {plan.topic}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 pt-4">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              Learning Objectives
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              {plan.objectives.map((obj, i) => (
                                <li key={i}>{obj}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              Classroom Activities
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              {plan.activities.map((activity, i) => (
                                <li key={i}>{activity}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              Required Resources
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              {plan.resources.map((resource, i) => (
                                <li key={i}>{resource}</li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadPlan(selectedCourse.name, plan.week)}
                            className="mt-4"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Full Lesson Plan
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;
