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

  return (
    <Container className="mainSpacer bg-light d-flex flex-column justify-content-center align-items-center">
      <SectionLabel
        title={"Our Courses"}
        description={
          "Developing software applications, working with different operating systems, database creation, troubleshooting and more.  Whether you have your sights set on working for Google or a start-up, a computer programming course will provide the stepping stones needed. "
        }
      />
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {courseseList.map((item) => (
          <CourseCard key={item.id} course={item} />
        ))}
      </div>
    </Container>
  );
};

export default OurCoursesSection;
