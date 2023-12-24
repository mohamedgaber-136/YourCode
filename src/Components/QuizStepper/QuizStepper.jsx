import React from "react";
import Container from "react-bootstrap/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

export const QuizStepper = () => {
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    console.log("hello");
    if (activeStep == step) {
      setActiveStep(detailsList.length);
    } else {
      setActiveStep(step);
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={handleStep(index)}>
            <StepButton />
            {/* <StepLabel>{step.id}</StepLabel> */}
            {/* <StepContent>
            <DetailsCard details={step} key={`card-${index}`} />
          </StepContent> */}
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};
