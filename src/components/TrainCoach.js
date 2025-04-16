import React from 'react';
import './TrainCoach.css';

const TrainCoach = ({
  version,
  width,
  bgColor,
  onClick,
  title,
  content,
  featuresCount,
  isSelected,
}) => {
  const windows = Array.from({ length: featuresCount || 0 });

  return (
    <div className="coach-container">
      <div
        className={`coach ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        style={{ width: width || 120, backgroundColor: bgColor || '#eee' }}
        title={title}
      >
        <div className="coach-header">{version}</div>
        <div className="windows">
          {windows.map((_, i) => (
            <div className="window" key={i} />
          ))}
        </div>
        <div className="coach-content">{content}</div>
      </div>
      <div className="coach-wheels">
        <div className="wheel" />
        <div className="wheel" />
      </div>
    </div>
  );
};

export default TrainCoach;
