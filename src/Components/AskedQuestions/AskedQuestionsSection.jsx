import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import "./AskedQuestion.css";

export const AskedQuestionsSection = () => {
  const askedQue = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },

    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },

    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
  ];
  return (
    <div className=" container-fluid bg-dark">
      <Container className="py-4 mainSpacer rounded-2">
        <Row>
          <Col lg="4" className="text-light">
            <h3>Frequently Asked Questions</h3>
            <p className="fs-6">
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <button className="btn btn-light">See All FAQ’s</button>
          </Col>
          <Col>
            <Accordion defaultActiveKey="0" flush>
              {askedQue.map((item, index) => (
                <Accordion.Item
                  className="border m-2 rounded-2 overflow-hidden"
                  eventKey={index}
                >
                  <Accordion.Header className="fw-bolder" color="grey">
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.answer}
                    <br />
                    Eiusmod Lorem esse fugiat consequat ea qui exercitation non
                    id. Culpa fugiat culpa deserunt laborum elit fugiat id
                    cillum occaecat nostrud. Lorem consequat ea sit consequat
                    deserunt excepteur proident excepteur sint consectetur do
                    deserunt. Commodo eu incididunt pariatur consectetur elit do
                    irure anim. Aute veniam ea elit qui exercitation id culpa
                    aute in labore do.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
