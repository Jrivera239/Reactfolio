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
      <p>
<span className="reaxt"> OBJECTIVE: </span>
To obtain a career as a Web Developer. I'm a fullstack web Developer who is recently out of UCF Bootcamp on 2022 and still studying to enhance my developer skills and portfolio. I'm currently educated in multiple languages such as<span className="reaxt"> HTML, CSS, Javascript, React, SQL noSQL and others.</span> Still sharping my tools and skills but hungry to learn and seeking for opportunities of all kinds including interns.
<span className="reaxt"> Accepting any entry positions or level 1 in the field and absolutely driven for success.</span></p>
    </section>
  );
};

export default About;
