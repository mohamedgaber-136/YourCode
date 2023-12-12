import React from "react";
import { BenefitCard } from "../BenefitCard/BenefitCard";
import Container from "react-bootstrap/Container";
import SectionLabel from "../SectionLabel/SectionLabel";

export const BenefitsSection = () => {
  const benefitsList = [
    {
      title: "Flexible Learning Schedule",
      description:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      title: "Expert Instruction",
      description:
        "Learn from industry experts who have hands-on experience in design and development.",
    },

    {
      title: "Diverse Course Offerings",
      description:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      title: "Updated Curriculum",
      description:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      title: "Practical Projects and Assignments",
      description:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      title: "Interactive Learning Environment",
      description:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },

    {
      title: "Flexible Learning Schedule",
      description:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      title: "Expert Instruction",
      description:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
  ];
  return (
    <Container className="mainSpacer bg-light d-flex flex-column justify-content-center align-items-center">
      <SectionLabel
        title={"Benefits"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {benefitsList.map((item, index) => (
          <BenefitCard key={`benefit-${index}`} item={item} index={index+1}/>
        ))}
      </div>
    </Container>
  );
};
