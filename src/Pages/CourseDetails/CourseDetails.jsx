import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { GlobalContext } from "../../Context/GlobalContext";
import { DetailsCard } from "../../Components/DetailsCard/DetailsCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent, {
  timelineContentClasses,
} from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
} from "react-icons/ri";

import styles from "./CourseDetails.module.css";

export const CourseDetails = () => {
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

  const numbers = [
    <RiNumber1 />,
    <RiNumber2 />,
    <RiNumber3 />,
    <RiNumber4 />,
    <RiNumber5 />,
    <RiNumber6 />,
    <RiNumber7 />,
    <RiNumber8 />,
    <RiNumber9 />,
  ];

  const [timelinePosition, setTimelinePosition] = useState("alternate");

  window.addEventListener("resize", () => {
    console.log(document.documentElement.clientWidth, "width");

    if (document.documentElement.clientWidth <= 576) {
      setTimelinePosition("right");
    } else {
      setTimelinePosition("alternate");
    }
  });

  return (
    <div dir={checkLang ? "ltr" : "rtl"} className="bg-light">
      <div className={styles.head}>
        <h3 className="p-2 mt-auto">{course.title}</h3>
        <p className="px-2 fontSize14 ">{course.description}</p>
        <div className="d-flex align-items-center justify-content-center p-5">
          <img src={course.image} width={"80%"} className="rounded-3" />
        </div>
      </div>

      <div className="bg-secondary-subtle"></div>

      <Container className="py-3">
        <Timeline
          position={timelinePosition}
          // position="alternate"
          // sx={{
          //   [`& .${timelineContentClasses.root}`]: {

          //   },
          // }}
        >
          {detailsList.map((detail, index) => (
            <TimelineItem key={detail.id}>
              <TimelineOppositeContent
                // sx={{ m: "auto 0" }}
                align="center"
                variant="body2"
                color="text.secondary"
              >
                {`Step ${index + 1}`}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                {/* {index != 0 ? (
                  <TimelineConnector />
                ) : (
                  <TimelineConnector className="bg-transparent" />
                )} */}
                <TimelineDot variant="outlined">
                  {/* <AiOutlineNumber /> */}
                  {/* {numbers[index]} */}
                  {/* <div
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "cornflowerblue",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin:'10px 0',

                    }}
                  >
                    {index + 1}
                  </div> */}
                </TimelineDot>
                <TimelineConnector />
                {/* {index != detailsList.length - 1 ? (
                  <TimelineConnector />
                ) : (
                  <TimelineConnector className="bg-transparent" />
                )} */}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <DetailsCard details={detail} key={`card-${index}`} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>

      {/* <Container className="border">
        <div className="vh-100 d-flex flex-column gap-3 align-items-center ">
          <h3>{course.title}</h3>
          <p className="px-2 fontSize14">{course.description}</p>
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={course.image}
              width={"70%"}
              className="rounded-3 shadow"
            />
          </div>
        </div>

        <div className="py-5 d-flex CourseDetailCardParent flex-wrap align-items-center justify-content-center">
          {detailsList.map((item) => (
            <DetailsCard key={item.id} details={item} />
          ))}
        </div>
      </Container> */}
    </div>
  );
};
