import React, { useState } from "react";
import TrainCoach from "./components/TrainCoach";
import ReviewChart from "./components/ReviewChart";
import trainData from "./data/trainData.json";
import "./App.css";

function App() {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [featureOpen, setFeatureOpen] = useState(true);

  const versionToArray = (version) =>
    version.split(".").map((num) => parseInt(num, 10));

  const sortedData = [...trainData].sort((a, b) => {
    const vA = versionToArray(a.version);
    const vB = versionToArray(b.version);
    for (let i = 0; i < Math.max(vA.length, vB.length); i++) {
      const partA = vA[i] || 0;
      const partB = vB[i] || 0;
      if (partA !== partB) return partA - partB;
    }
    return 0;
  });

  const coachHeight = 100 + sortedData[0].total_reviews * 0.05;
  const engineSize = coachHeight * 0.25;

  const getColorByScore = (score) => {
    if (score >= 4.2) return "#4CAF50"; // green
    if (score >= 4.0) return "#2196F3"; // blue
    return "#F44336"; // red
  };

  return (
    <div className="train-track">
      <h1>🚂 Feature Train Timeline</h1>

      {/* Color Legend */}
      <div className="color-legend">
        <span><span className="legend-box green" /> Avg ≥ 4.2 </span>
        <span><span className="legend-box blue" /> 4.0 – 4.19 </span>
        <span><span className="legend-box red" /> Below 4.0 </span>
      </div>

      <div className="train-layout">
        {/* Engine */}
        <div
          className="train-engine"
          style={{
            fontSize: `${engineSize}px`,
            width: "10cm",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "5px",
          }}
        >
          🚂
        </div>

        <div className="train-coach-scroll">
          <div className="train-coaches">
            {sortedData.map((item) => {
              const isSelected = selectedVersion === item.version;
              const dynamicWidth = 100 + item.total_reviews * 0.05;

              return (
                <div className="coach-wrapper" key={item.version}>
               <TrainCoach
  version={item.version}
  width={dynamicWidth}
  bgColor={getColorByScore(item.average_score)}
  title={`Released: ${item.release_month} ${item.release_year}`}
  content={`${item.feature_count} features`}
  onClick={() => {
    setSelectedVersion(item.version);
    setFeatureOpen((prev) =>
      selectedVersion === item.version ? !prev : true
    );
  }}
  isSelected={isSelected}
  averageScore={item.average_score}
  releaseMonth={item.release_month}
  releaseYear={item.release_year}
  featuresCount={item.feature_count}
/>

                  {isSelected && featureOpen && (
                    <div className="details-panel">
                      <h3>Features:</h3>
                      <ul className="feature-list">
                        {item.features.map((feat, i) => (
                          <li key={i}>
                            {i + 1}. {feat}
                          </li>
                        ))}
                      </ul>
                      <h4>Sentiment Breakdown:</h4>
                      <ReviewChart
                        sentiment={{
                          positive: item.positive_reviews,
                          neutral: item.neutral_reviews,
                          negative: item.negative_reviews,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
