import React, { useState } from "react";
import TrainCoach from "./components/TrainCoach";
import ReviewChart from "./components/ReviewChart";
import FeatureTimeline from "./components/FeatureTimeline";
import trainData from "./data/trainData.json";
import traceabilityData from "./data/Traceability_By_Version_and_Feature.json";
import "./App.css";

function App() {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [featureOpen, setFeatureOpen] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(null);

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
  const engineSize = coachHeight * 0.4;

  const getColorByScore = (score) => {
    if (score >= 4.2) return "#4CAF50"; // green
    if (score >= 4.0) return "#2196F3"; // blue
    return "#F44336"; // red
  };

  const getFeatureOptionsForVersion = (version) => {
    return traceabilityData
      .filter((item) => item.version === version)
      .map((f) => f.feature_description);
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
            width: "5cm",
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
              const versionFeatures = getFeatureOptionsForVersion(item.version);

              return (
                <div className="coach-wrapper" key={item.version}>
                  <TrainCoach
                    version={item.version}
                    width={dynamicWidth}
                    bgColor={getColorByScore(item.average_score)}
                    title={`Released: ${item.release_month} ${item.release_year}\nAvg Score: ${item.average_score}`}
                    content={`${item.feature_count} features`}
                    onClick={() => {
                      setSelectedVersion(item.version);
                      setFeatureOpen((prev) =>
                        selectedVersion === item.version ? !prev : true
                      );
                      setSelectedFeature(null);
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
                          <li key={i}>{i + 1}. {feat}</li>
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
                      {versionFeatures.length > 0 && (
                        <>
                          <h4>Select a Feature for Timeline:</h4>
                          <select
                            onChange={(e) => setSelectedFeature(e.target.value)}
                            value={selectedFeature || ""}
                          >
                            <option value="">Select a Feature</option>
                            {versionFeatures.map((f, idx) => (
                              <option key={idx} value={f}>{f}</option>
                            ))}
                          </select>
                          {selectedFeature && (
                            <FeatureTimeline
                              featureData={traceabilityData.find(
                                (f) =>
                                  f.feature_description === selectedFeature &&
                                  f.version === item.version
                              )}
                            />
                          )}
                        </>
                      )}
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
