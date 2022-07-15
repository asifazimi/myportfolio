import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
// Wrapper
import { AppWrap } from "../../wrapper";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Apps</span>
        <br />
        mean
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          const { title, description, imgUrl } = about;
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profiles-item"
              key={index}
            >
              <img src={urlFor(imgUrl)} alt={title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default AppWrap(About, "about");
