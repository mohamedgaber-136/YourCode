import CourseCard from "../CourseCard/CourseCard";
import courseImg1 from "../../assets/CourseImage.png";
import courseImg2 from "../../assets/CourseImage_2.png";
import courseImg3 from "../../assets/CourseImage_3.png";
import courseImg4 from "../../assets/CourseImage_4.png";
import courseImg5 from "../../assets/CourseImage_5.png";
import courseImg6 from "../../assets/CourseImage_6.png";
import Container from "react-bootstrap/Container";
import SectionLabel from "../SectionLabel/SectionLabel";

const OurCoursesSection = () => {
  const courseseList = [
    {
      id: "01",
      title: "Web Design Fundamentals",
      image: courseImg1,
      level: "Beginner",
      duration: "4 Weeeks",
      instructor: "By John Smith",
      description:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    },
    {
      id: "02",
      title: "UI/UX Design",
      image: courseImg2,
      level: "Intermediate",
      duration: "6 Weeks",
      instructor: "By Emily Johnson",
      description:
        "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    },
    {
      id: "03",
      title: "Mobile App Development",
      image: courseImg3,
      level: "Intermediate",
      duration: "8 Weeks",
      instructor: "By David Brown",
      description:
        "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    },
    {
      id: "04",
      title: "Graphic Design for Beginners",
      image: courseImg4,
      level: "Beginner",
      duration: "10 Weeks",
      instructor: "By Sarah Thompson",
      description:
        "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    },
    {
      id: "05",
      title: "Front-End Web Development",
      image: courseImg5,
      level: "Intermediate",
      duration: "10 Weeks",
      instructor: "By Michael Adams",
      description:
        "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    },
    {
      id: "06",
      title: "Advanced JavaScript",
      image: courseImg6,
      level: "Advance",
      duration: "6 Weeks",
      instructor: "By Jennifer Wilson",
      description:
        "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    },
  ];

  return (<div className="bg-white">
    <div style={{ overflow: " hidden;" }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#000", width: "100%", height: 176 }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
    <Container className="mainSpacer bg-white d-flex flex-column justify-content-center align-items-center">
      <SectionLabel
        title={"Our Courses"}
        description={
          "Developing software applications, working with different operating systems, database creation, troubleshooting and more.  Whether you have your sights set on working for Google or a start-up, a computer programming course will provide the stepping stones needed. "
        }
      />
      <div className="d-flex flex-wrap justify-content-center  align-items-center">
        {courseseList.map((item) => (
          <CourseCard key={item.id} course={item} />
        ))}
      </div>
    </Container>
  </div>
  );
};

export default OurCoursesSection;
