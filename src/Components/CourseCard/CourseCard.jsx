import styles from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
  console.log(course, "props");
  return (
    <div className="bg-body col-lg-5 p-4 m-2 rounded-2 gap-3 d-flex flex-column justify-content-between shadow-sm text-sm-start text-center">
      <img src={course.image} width={"100%"} className="rounded-3" />

      <div
        // className={styles.labelInfo}
        className="d-flex flex-sm-row flex-column justify-content-between align-items-center gap-2"
      >
        <div className="d-flex gap-2">
          {[1, 2].map((item) => (
            <span className={`${styles.lightText} p-1 border rounded-2`}>
              {item == 1 ? course.duration : course.level}
            </span>
          ))}
        </div>
        <span className={styles.boldText}>{course.instructor}</span>
      </div>

      <div className="pt-1">
        <h4 className={styles.titleText}>{course.title}</h4>
        <p className="lead fs-6">{course.description}</p>
      </div>

      <button className="btn btn-light p-2">Get It Now</button>
    </div>
  );
};

export default CourseCard;
