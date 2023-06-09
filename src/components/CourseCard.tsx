import { Course } from "../../types.d";
import styles from "../styles/Card.module.css";

function CourseCard({ title, description, image }: Course) {
  return (
    <div className={styles.container}>
      <figure className={styles.imagecontainer}>
        <img src={image} className={styles.image} alt={title} />
      </figure>
      <p>{description}</p>
    </div>
  );
}

export default CourseCard;
