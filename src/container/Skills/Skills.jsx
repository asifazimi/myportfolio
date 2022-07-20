import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [tooltip, showTooltip] = useState(true);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => {
            const { name, bgColor, icon } = skill;
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={index}
              >
                <div className="app__flex" style={{ backgroundColor: bgColor }}>
                  <img src={urlFor(icon)} alt={name} />
                </div>
                <p className="p-text">{name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => {
            const { works, year } = experience;
            return (
              <motion.div className="app__skills-exp-item" key={year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {works.map((work) => {
                    const { name, company, desc } = work;
                    return (
                      <>
                        {tooltip && (
                          <ReactTooltip
                            id={name}
                            aria-haspopup="true"
                            effect="solid"
                            className="skills-tooltip"
                            delayHide={50}
                            delayUpdate={50}
                          />
                        )}
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip={desc}
                          data-for={name}
                          onMouseOver={() => showTooltip(true)}
                          onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 50);
                          }}
                          key={name}
                        >
                          <h4 className="bold-text">{name}</h4>
                          <p className="p-text">{company}</p>
                        </motion.div>
                      </>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
