import React, { useRef } from "react";
import { SideBarInterview } from "../../Components/SideBarInterview/SideBarInterview";
import { FooterBar } from "../../Components/FooterBar/FooterBar";
import styles from "./InterviewQuestions.module.css";
import { ScrollIndicator } from "../../Components/ScrollIndicator/ScrollIndicator";

export const InterviewQuestions = () => {
  const quizeList = [
    {
      title: "Front End Developer Interview Questions for Freshers",
      list: [
        "1. What skills does a front-end developer need?",
        "2. Define HTML meta tags.",
        "3. Differentiate between div and span?",
        "4. What is React JS?",
        "5. Describe the advantages of REST web services?",
        "6. How browsers render the UI?",
        "7. What is a Grid system in CSS?",
        "8. Describe the distinction between Class and Prototypal inheritance in Javascript?",
        "9. Explain user-centered design?",
        "10. What is ClickJacking?",
        "11. Tell me when and why should I make use of Webpack?",
        "12. Mention three ways to decrease page load time?",
        "13. How does the server hanger the page in which content is present in several languages?",
        "14. Why did we utilize the data- the attribute in HTML and why it is now advised not to use?",
        "15. Mention the benefits of CoffeeScript over JavaScript?",
      ],
    },
    {
      title: "Front End Developer Interview Questions for Freshers",
      list: [
        "1. What skills does a front-end developer need?",
        "2. Define HTML meta tags.",
        "3. Differentiate between div and span?",
        "4. What is React JS?",
        "5. Describe the advantages of REST web services?",
        "6. How browsers render the UI?",
        "7. What is a Grid system in CSS?",
        "8. Describe the distinction between Class and Prototypal inheritance in Javascript?",
        "9. Explain user-centered design?",
        "10. What is ClickJacking?",
        "11. Tell me when and why should I make use of Webpack?",
        "12. Mention three ways to decrease page load time?",
        "13. How does the server hanger the page in which content is present in several languages?",
        "14. Why did we utilize the data- the attribute in HTML and why it is now advised not to use?",
        "15. Mention the benefits of CoffeeScript over JavaScript?",
      ],
    },
    {
      title: "Front End Developer Interview Questions for Freshers",
      list: [
        "1. What skills does a front-end developer need?",
        "2. Define HTML meta tags.",
        "3. Differentiate between div and span?",
        "4. What is React JS?",
        "5. Describe the advantages of REST web services?",
        "6. How browsers render the UI?",
        "7. What is a Grid system in CSS?",
        "8. Describe the distinction between Class and Prototypal inheritance in Javascript?",
        "9. Explain user-centered design?",
        "10. What is ClickJacking?",
        "11. Tell me when and why should I make use of Webpack?",
        "12. Mention three ways to decrease page load time?",
        "13. How does the server hanger the page in which content is present in several languages?",
        "14. Why did we utilize the data- the attribute in HTML and why it is now advised not to use?",
        "15. Mention the benefits of CoffeeScript over JavaScript?",
      ],
    },
  ];

  const ref = useRef();

  return (
    <>
      <ScrollIndicator />
      <div className="min-vh-100 d-flex align-items-start justify-content-end">
        <SideBarInterview
          list={quizeList}
          onItemClick={(event) => {
            ref.current
              .querySelector(`[id='${event.target.id}']`)
              .scrollIntoView();

            // quizeList.forEach((item) => {
            //   for (let i in item.list) {
            //     console.log(i);
            //   }
            // });

            // event.target.classList.toggle("bg-danger");
            // console.log(sideBarRef,'hello');

            console.log(
              ref.current.querySelector(`[id='${event.target.id}']`),
              "dhsgf"
            );
          }}
        />
        <div ref={ref} className={`${styles.main} py-4 d-flex flex-column`}>
          {quizeList.map((item, titleIndex) => (
            <div className="border border-dark p-2 m-2">
              <h3 className="py-2">{item.title}</h3>
              <ul>
                {item.list.map((quiz, listIndex) => (
                  <div
                    id={`${titleIndex}-${listIndex}`}
                    className="vh-100 border p-2 m-2"
                  >
                    <>
                      {/* <h2> {`${listIndex + 1}.${quiz}`}</h2> */}
                      <h4> {quiz}</h4>
                      {[1, 2, 3].map(() => (
                        <p>
                          Incididunt cupidatat ut id quis minim mollit aliquip
                          sit ullamco quis labore aliqua ad esse. Quis esse quis
                          pariatur incididunt. Esse exercitation ut ea aute nisi
                          esse tempor nostrud quis. Ut in aliquip fugiat
                          consectetur amet proident nostrud qui sint cillum anim
                          ad irure eiusmod. Tempor sunt sint voluptate amet.
                        </p>
                      ))}
                    </>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div className={styles.main}>
          <FooterBar />
        </div>
      </div>
    </>
  );
};
