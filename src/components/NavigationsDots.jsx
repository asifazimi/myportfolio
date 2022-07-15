import React from "react";
import { links } from "../data";

const NavigationsDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {links.map((link) => {
        const { id, text } = link;
        return (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={`#${text}`}
            key={id}
            className="app__navigation-dot"
            style={active === text ? { backgroundColor: "#313BAC" } : {}}
          />
        );
      })}
    </div>
  );
};

export default NavigationsDots;
