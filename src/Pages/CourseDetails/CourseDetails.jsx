import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { GlobalContext } from "../../Context/GlobalContext";
import { DetailsCard } from "../../Components/DetailsCard/DetailsCard";

export const CourseDetails = () => {
  const { title } = useParams();
  const { state } = useLocation();
  const { trans, checkLang } = useContext(GlobalContext);
  useEffect(() => {
    return () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  }, []);

  const list = trans("courses.list", { returnObjects: true });
  const course = list.find((item) => item.id == state.courseID);

  const detailsList = [
    {
      id: "01",
      title: "Introduction to UI/UX Design",
      list: [
        "Understanding UI/UX Design Principles",
        "Importance of User-Centered Design",
        "The Role of UI/UX Design in Product Development",
      ],
    },
    {
      id: "02",
      title: "User Research and Analysis",
      list: [
        "Conducting User Research and Interviews",
        "Analyzing User Needs and Behavior",
        "Creating User Personas and Scenarios",
      ],
    },
    {
      id: "03",
      title: "Wireframing and Prototyping",
      list: [
        "Introduction to Wireframing Tools and Techniques",
        "Creating Low-Fidelity Wireframes",
        "Prototyping and Interactive Mockups",
      ],
    },

    {
      id: "04",
      title: "Visual Design and Branding",
      list: [
        "Color Theory and Typography in UI Design",
        "Visual Hierarchy and Layout Design",
        "Creating a Strong Brand Identity",
      ],
    },
    {
      id: "05",
      title: "Usability Testing and Iteration",
      list: [
        "Usability Testing Methods and Techniques",
        "Analyzing Usability Test Results",
        "Iterating and Improving UX Designs",
      ],
    },
  ];

  return (
    <div dir={checkLang ? "ltr" : "rtl"} className="bg-light py-3">
      <Container>
        <div style={{ height: "100px" }} />
        <div className="d-flex flex-md-row flex-column gap-3 align-items-md-center py-5 p-2">
          <h4 className="col-md-3">{course.title}</h4>
          <p className="px-2 fontSize14">{course.description}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <img
            src={course.image}
            width={"95%"}
            className="rounded-3 shadow"
          />
        </div>
        <div className="py-5 d-flex flex-wrap align-items-center justify-content-center">
          {detailsList.map((item) => (
            <DetailsCard key={item.id} details={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};
