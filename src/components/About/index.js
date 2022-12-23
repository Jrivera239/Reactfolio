import React from "react";
import coverImage from "../../assets/cover/cover-image2.JPG";

const About = () => {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "50%" }}
        alt="cover"
      />
      <p>My name is Joel Rivera and I'm a graduated student from UCF Fullstack Development.</p>
    </section>
  );
};

export default About;
