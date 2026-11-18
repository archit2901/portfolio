/** Education, most recent first. Source: the Nov 2026 content brief. */

export interface Course {
  code?: string;
  title: string;
}

export interface School {
  school: string;
  degree: string;
  department?: string;
  location: string;
  start: string;
  end: string;
  gpa?: string;
  coursework: Course[];
}

export const education: School[] = [
  {
    school: "Northeastern University",
    degree: "MS in Computer Science",
    department: "Khoury College of Computer Sciences",
    location: "Boston, MA",
    start: "Jan 2025",
    end: "May 2027",
    gpa: "3.834 / 4.0",
    coursework: [
      { code: "CS5800", title: "Algorithms" },
      { code: "CS5500", title: "Foundations of Software Engineering" },
      { code: "CS6140", title: "Machine Learning" },
      { code: "CS6240", title: "Large-Scale Parallel Data Processing" },
      { code: "CS5340", title: "Computer/Human Interaction" },
      { code: "CS5520", title: "Mobile Application Development" },
    ],
  },
  {
    school: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Technology in Computer Science",
    location: "Delhi, India",
    start: "Jul 2018",
    end: "Jul 2022",
    gpa: "3.55 / 4.0",
    coursework: [
      { title: "Data Structures & Algorithms" },
      { title: "Operating Systems" },
      { title: "DBMS" },
      { title: "Computer Networks" },
      { title: "OOP" },
      { title: "AI/ML" },
    ],
  },
];
