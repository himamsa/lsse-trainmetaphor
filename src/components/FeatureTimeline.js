import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function FeatureSentimentTimeline({ featureData, versionTopFeatures }) {
  const [plotData, setPlotData] = useState([]);
  const [avgScore, setAvgScore] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const [showFeatureBox, setShowFeatureBox] = useState(true);

  useEffect(() => {
    if (featureData?.matched_reviews?.length > 0) {
      const dataPoints = featureData.matched_reviews.map((r, i) => ({
        x: [r.timestamp],
        y: [r.score],
        type: "scatter",
        mode: "markers",
        marker: {
          size: 12,
          color: getColor(r.score),
        },
        name: `Review ${i + 1}`,
        showlegend: false
      }));

      setPlotData(dataPoints);
      setReviewCount(featureData.matched_reviews.length);

      const totalScore = featureData.matched_reviews.reduce((sum, r) => sum + r.score, 0);
      const average = totalScore / featureData.matched_reviews.length;
      setAvgScore(average.toFixed(2));
    } else {
      setPlotData([]);
      setAvgScore(null);
      setReviewCount(0);
    }
  }, [featureData]);

  const getColor = (score) => {
    if (score <= 1.4) return "red";
    if (score <= 2.9) return "orange";
    if (score <= 3.9) return "yellow";
    if (score <= 4.4) return "blue";
    return "lightgreen";
  };

  const getOverallSentiment = (avgScore) => {
    if (avgScore >= 4.2) return "Highly Positive";
    if (avgScore >= 3.5) return "Mostly Positive";
    if (avgScore >= 2.5) return "Some Negative";
    return "Strongly Negative";
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{featureData.feature_name}</h3>

      <button
        onClick={() => setShowFeatureBox(!showFeatureBox)}
        style={{ marginBottom: "10px", padding: "5px 10px", cursor: "pointer" }}
      >
        {showFeatureBox ? "Hide Feature Description" : "Show Feature Description"}
      </button>

      {showFeatureBox && (
        <div style={{ background: "#eef6ff", padding: "10px", marginBottom: "20px", borderRadius: "8px" }}>
          <p>{featureData.feature_description}</p>
        </div>
      )}

      {versionTopFeatures?.length > 0 && (
        <div style={{ background: "#dfffe0", padding: "10px", marginBottom: "15px", borderRadius: "8px" }}>
          <strong>Top 3 Features for this Version:</strong>
          <ol style={{ paddingLeft: "20px" }}>
            {versionTopFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx}><strong>{idx + 1}.</strong> {feat.feature_name} (Avg: {feat.average_score.toFixed(2)})</li>
            ))}
          </ol>
        </div>
      )}

      <button 
        onClick={() => setShowDetails(!showDetails)}
        style={{ marginBottom: "10px", padding: "5px 10px", cursor: "pointer" }}
      >
        {showDetails ? "Hide Chart & Stats" : "Show Chart & Stats"}
      </button>

      {showDetails && (
        <div>
          <p><strong>Total Reviews:</strong> {reviewCount}</p>
          {avgScore && (
            <>
              <p><strong>Average Score:</strong> {avgScore}</p>
              <p><strong>Overall Sentiment:</strong> {getOverallSentiment(avgScore)}</p>
            </>
          )}

          <Plot
            data={plotData}
            layout={{
              title: "Review Timeline (Y: Score, X: Date)",
              xaxis: { title: "Date", type: "date" },
              yaxis: { title: "Score", range: [0, 5] },
              height: 400,
              margin: { l: 50, r: 30, t: 50, b: 50 },
              showlegend: false
            }}
            useResizeHandler
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
}

export default FeatureSentimentTimeline;
