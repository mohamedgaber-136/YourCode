import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import charc from "./3d-character-guy-png.webp";
import "./AskedQuestion.css";
import { GlobalContext } from "../../Context/GlobalContext";

export const AskedQuestionsSection = () => {
  const { trans, checkLang } = useContext(GlobalContext);
  return (
    <section dir={checkLang ? "ltr" : "rtl"}>
      <div className="  bg-LightDark">
        {/* <div style={{ overflow: "hidden" }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "#fff", width: "100%", height: 176 }}
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
        </div> */}
        <div className="container-fluid">
          <Container className="mainSpacer  d-flex flex-column justify-content-center align-items-center ">
            <Row className=" justify-content-center ">
              <Col
                lg="4"
                className="text-light  p-4 p-lg-0 askedImg d-flex flex-column align-items-center "
              >
                <div>
                  <h3>{trans("askedQue.title")}</h3>
                  <p className="fs-6">{trans("askedQue.descrip")}</p>
                  <button className="btn btn-light">
                    {trans("askedQue.button")}
                  </button>
                </div>
                <img src={charc} alt="Charcater" loading="lazy" />
              </Col>
              <Col className=" d-flex justify-content-center ">
                <Accordion defaultActiveKey="0" flush>
                  {trans("askedQue.list", { returnObjects: true }).map(
                    (item, index) => (
                      <Accordion.Item
                        key={`accd-${index}`}
                        className="border m-2 rounded-2 overflow-hidden HomeAccordion"
                        eventKey={index}
                      >
                        <Accordion.Button className="fontSize12 fw-bolder">
                          {item.question}

                          <div className="iconBox">
                            <svg viewBox="0 0 24 24" className="pinSvg">
                              <path
                                d="M0,19.3v4.1C0,23.7,0.3,24,0.7,24h4.1c0.2,0,0.3-0.1,0.5-0.2L19.7,9.3l-5-5L0.2,18.8C0.1,18.9,0,19.1,0,19.3z
  M23.6,5.4c0.5-0.5,0.5-1.4,0-1.9l-3.1-3.1c-0.5-0.5-1.4-0.5-1.9,0l-2.4,2.4l5,5L23.6,5.4z"
                                className="PenIcon__Path-sc-df7eee32-2 kZYdRV"
                              ></path>
                            </svg>
                          </div>
                        </Accordion.Button>
                        <Accordion.Body className="fontSize12">
                          {item.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    )
                  )}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* <div style={{ overflow: "hidden" }}>
        <div className="bg-white">
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
      </div> */}
    </section>
  );
};
