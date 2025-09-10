import React from 'react';
import type { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="skill-badge">
      <span className="skill-name">{skill.name}</span>
      <div className="skill-proficiency">
        {Array.from({ length: 5 }, (_, i) => (
          <span 
            key={i} 
            className={`proficiency-dot ${i < skill.proficiency ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;