import React from 'react';

const SkillRow = ({ skills }) => {
  const renderSkillBars = () => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-column">
        {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" style={{height: '50px' }}/>}
        <div className="skill-info">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: `${skill.percentage}%` }}></div>
            <div className="skill-percentage">{skill.percentage}%</div>
          </div>
        </div>
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
