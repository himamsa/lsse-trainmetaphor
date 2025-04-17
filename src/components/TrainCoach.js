import React from "react";
import "./TrainCoach.css";

const TrainCoach = ({
  version,
  width,
  bgColor,
  onClick,
  title,
  content,
  featuresCount,
}) => {
  const windows = Array.from({ length: featuresCount > 0 ? featuresCount : 1 });

  return (
    <div className="coach-container" onClick={onClick}>
      <div
        className="coach"
        style={{ width: width || 120, backgroundColor: bgColor || "white" }}
        title={title}
      >
        <div className="coach-header">{version}</div>
        <div className="windows">
          {windows.map((_, i) => (
            <div className="window-box" key={i} />
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
