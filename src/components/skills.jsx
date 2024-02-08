import React from 'react';

const SkillRow = ({ skills }) => {
  const renderSkillBars = () => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-container">
        <div className="skill-circle">
          {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" />}
          <div className="skill-bar" style={{ width: `${skill.percentage}%` }}>
            <div className="skill-percentage">{skill.percentage}%</div>
          </div>
        </div>
        <div className="skill-name">{skill.name}</div>
      </div>
    ));
  };

  return (
    <div className="skill-row">
      {renderSkillBars()}
    </div>
  );
};

export default SkillRow;
