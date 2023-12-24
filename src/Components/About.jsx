/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mlsa12.jpeg";

const imageAltText = "orange snow mountains";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a AI/ML student studying at Pragati Engineering College. I fuse academic knowledge with practical expertise as a Microsoft Azure certified professional, Google Cloud Associate Cloud Engineer, and Salesforce certified specialist, contributing to Alpha MLSA's innovative approach in the dynamic field of data science and artificial intelligence";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Science-AI/ML Lead at GDSC-PEC",
  "Alpha MLSA",
  "Microsoft Azure certified",
  "Google Cloud Associate Cloud Engineer certified",
  "Salesforce certified",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a Data Science-AI/ML Lead at GDSC-PEC, I leverage my expertise as a Microsoft Azure certified professional, Google Cloud Associate Cloud Engineer, and Salesforce certified specialist. Contributing to Alpha MLSA, I bring a holistic approach to cutting-edge technologies, driving innovation in the realm of data science and artificial intelligence.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
