import styles from "./CourseCard.module.css";
import Col from "react-bootstrap/Col";

const CourseCard = ({ course }) => {
  return (
    <Col lg="4" md="6" className="p-2">
      <div
        className={`${styles.card} bg-body p-3 rounded-2 gap-3 d-flex flex-column justify-content-between shadow-sm text-sm-start text-center`}
      >
        <img src={course.image} width={"100%"} className="rounded-3" />

        <div className="d-flex   flex-sm-row flex-column justify-content-between align-items-center ">
          <div className="d-flex gap-1 w-lg-50  -">
            {[1, 2].map((item) => (
              <span className={`${styles.lightText} px-1 border rounded-2`}>
                {item == 1 ? course.duration : course.level}
              </span>
            ))}
          </div>
          <div className={styles.boldText}>{course.instructor}</div>
        </div>

        <div className="pt-1">
          <h4 className={styles.titleText}>{course.title}</h4>
          <p className={`  m-0 ${styles.coursePara}` }>{course.description}</p>
        </div>
        <button className="btn btn-light p-2">Get It Now</button>
      </div>
    </Col>
  );
};

export default CourseCard;
