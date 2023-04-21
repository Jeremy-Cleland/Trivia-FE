import React from "react";
import styles from "./About.module.css";
import Eli from "../Data/Eli.png";
import Jeremy from "../Data/Jeremy.png";
import Adrienne from "../Data/Adrienne.jpeg";
import Brandon from "../Data/Brandon.JPG";

class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>The Minds Behind the Battle</h1>

        <div className={styles.teamMemberContainer}>
          <h2 className={styles.memberName}>Jeremy Cleland</h2>
          <img
            className={styles.memberPicture}
            src={Jeremy}
            alt="team member pic"
          />
          <p className={styles.memberBio}>
            JavaScript developer with a strong technical knowledge of developing
            consumer-facing cross-platform applications.
          </p>
        </div>

        <div className={styles.teamMemberContainer}>
          <h2 className={styles.memberName}>Eli Bailey</h2>
          <img
            className={styles.memberPicture}
            src={Eli}
            alt="team member pic"
          />
          <p className={styles.memberBio}>
            Marine Corps Veteran, Logistics Supervisor Developed objectives for
            long range planning, implementation, and mission sustainability
            goals 5 years in the United States Marine Corps. Instructor and
            logistics specialist.
          </p>
        </div>

        <div className={styles.teamMemberContainer}>
          <h2 className={styles.memberName}>Adrienne Frey</h2>
          <img
            className={styles.memberPicture}
            src={Adrienne}
            alt="team member pic"
          />
          <p className={styles.memberBio}>
            My name is Adrienne Frey. I live in Bothell, Washington. My
            background is in healthcare but I am excited to now be moving into
            the tech world in hopes of building a successful career as a
            developer.
          </p>
        </div>

        <div className={styles.teamMemberContainer}>
          <h2 className={styles.memberName}>Brandon Perard</h2>
          <img
            className={styles.memberPicture}
            src={Brandon}
            alt="team member pic"
          />
          <p className={styles.memberBio}>
            I enjoy the challenge of creating simple solutions for complex
            problems, connecting with people, and adding joy to my teams.
            Collaboration is one of my favorite ways to learn while developing,
            and I believe it improves my ability to create & communicate new
            ideas.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
