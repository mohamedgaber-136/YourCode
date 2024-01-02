import React, { useContext, useEffect } from "react";
import { BenefitCard } from "../BenefitCard/BenefitCard";
import Container from "react-bootstrap/Container";
import SectionLabel from "../SectionLabel/SectionLabel";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BenefitSection.css";
import { GlobalContext } from "../../Context/GlobalContext";
import { MultiWaveSvg } from "../MultiWaveSvg/MultiWaveSvg";
export const BenefitsSection = () => {
  const { trans, checkLang } = useContext(GlobalContext);
  // const benefitsList = [
  //   {
  //     title: "Flexible Learning Schedule",
  //     description:
  //       "Fit your coursework around your existing commitments and obligations.",
  //   },
  //   {
  //     title: "Expert Instruction",
  //     description:
  //       "Learn from industry experts who have hands-on experience in design and development.",
  //   },

  //   {
  //     title: "Diverse Course Offerings",
  //     description:
  //       "Explore a wide range of design and development courses covering various topics.",
  //   },
  //   {
  //     title: "Updated Curriculum",
  //     description:
  //       "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  //   },
  //   {
  //     title: "Practical Projects and Assignments",
  //     description:
  //       "Develop a portfolio showcasing your skills and abilities to potential employers.",
  //   },
  //   {
  //     title: "Interactive Learning Environment",
  //     description:
  //       "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  //   },

  //   {
  //     title: "Flexible Learning Schedule",
  //     description:
  //       "Fit your coursework around your existing commitments and obligations.",
  //   },
  //   {
  //     title: "Expert Instruction",
  //     description:
  //       "Learn from industry experts who have hands-on experience in design and development.",
  //   },
  // ];
  useEffect(() => {
    // Aos.init();
  }, []);
  return (
    <section dir={checkLang ? "ltr" : "rtl"} className="min-vh-100 ">
      {/* <MultiWaveSvg/> */}
      <div className="benefitBackground">
        <Container className="mainSpacer  d-flex flex-column justify-content-center align-items-center ">
          <SectionLabel
            color={"white"}
            title={trans("benefits.title")}
            description={trans("benefits.descrip")}
            buttonText={trans("label.button")}
            buttonColor={"light"}
          />
          <div
            className="d-flex benefitParent flex-wrap justify-content-center align-items-center"
            // data-aos="fade-down"
            // data-aos-delay="500"
            // data-aos-once="true"
            // data-aos-duration="2000"
            // data-aos-easing="linear"
          >
            {trans("benefits.list", { returnObjects: true }).map(
              (item, index) => (
                <BenefitCard
                  key={`benefit-${index}`}
                  item={item}
                  index={index + 1}
                />
              )
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};
