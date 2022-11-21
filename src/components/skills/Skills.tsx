import { SkillsProps } from "./Skills.types";
import { useState, useEffect } from "react";

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedin(true);
    }, 1001);
  }, []);

  return (
    <div>
      <ul>
        {skills.map((skill, index) => {
          return <li key={`skill-${index}`}>{skill}</li>;
        })}
      </ul>
      {isLoggedin ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedin(true)}>Login</button>
      )}
    </div>
  );
};

export default Skills;
