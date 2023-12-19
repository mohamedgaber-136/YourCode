import { useContext, useEffect } from "react";
import styles from "./CourseCard.module.css";
import Col from "react-bootstrap/Col";
import Aos, { init } from "aos";
import "aos/dist/aos.css";
import { GlobalContext } from "../../Context/GlobalContext";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigator = useNavigate();
  const { trans } = useContext(GlobalContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Col
      lg="4"
      md="6"
      className="p-2  rounded-2 cardContainer"
      data-aos="zoom-in"
    >
      <div
        className={`${styles.card} bg-white p-3 rounded-2 gap-3 d-flex flex-column justify-content-between shadow-sm`}
      >
        <img src={course.image} width={"100%"} className="rounded-3" />

        <div className="d-flex   flex-sm-row flex-column justify-content-between align-items-center ">
          <div className="d-flex gap-1 w-lg-50  -">
            {[1, 2].map((item) => (
              <span
                key={item}
                className={`${styles.lightText} px-1 border rounded-2`}
              >
                {item == 1 ? course.duration : course.level}
              </span>
            ))}
          </div>
          <div className={styles.boldText}>{course.instructor}</div>
        </div>

        <div className="pt-1">
          <h4 className={styles.titleText}>{course.title}</h4>
          <p className={`  m-0 ${styles.coursePara}`}>{course.description}</p>
        </div>
        <button
          className="btn btn-light p-2"
          onClick={() =>
            navigator(`/CourseDetails/${course.title}`, {
              state: {
                courseID: course.id,
              },
            })
          }
        >
          {trans("courses.button")}
        </button>
      </div>
    </Col>
  );
};

export default CourseCard;
