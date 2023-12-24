/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mlsa11.jpeg";

const imageAltText = "blue snow mountains";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Certified: Azure AI Engineer Associate",
    description:
      "Certified in Microsoft Azure AI Engineer Associate AI-102.",
    url: "https://www.credly.com/badges/295b38ad-5387-40f0-a6a4-34b98799fbe7/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    description:
      "Certified in Microsoft Azure Fundamentals AZ-900.",
    url: "https://www.credly.com/badges/5de1dd26-7c11-40b4-8629-c11164be40e3/linked_in_profile",
  },
  {
    title: "Data Analysis Internship at Cognifyz Technologies",
    description:
      "Performing a comprehensive analysis of a dataset containing restaurant information.",
    url: "https://github.com/ASHIQ1710/Data-Analysis-Intern-at-Cognifyz-Technologies.git",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
