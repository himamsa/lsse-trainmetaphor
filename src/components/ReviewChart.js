import React from "react";
import Plot from "react-plotly.js";

function ReviewChart({ sentiment }) {
  const total = sentiment.positive + sentiment.neutral + sentiment.negative;

  const labels = ["Positive", "Neutral", "Negative"];
  const values = [sentiment.positive, sentiment.neutral, sentiment.negative];
  const percentages = values.map((v) => ((v / total) * 100).toFixed(1) + "%");

  return (
    <Plot
      data={[
        {
          type: "bar",
          x: labels,
          y: values,
          text: percentages,
          textposition: "auto", // can also try 'inside' or 'outside'
          marker: {
            color: ["#4CAF50", "#FFC107", "#F44336"],
          },
        },
      ]}
      layout={{
        title: "Sentiment Breakdown",
        xaxis: { title: "Sentiment" },
        yaxis: { title: "Review Count" },
        height: 300,
        margin: { l: 40, r: 20, t: 40, b: 40 },
      }}
    />
  );
}

export default ReviewChart;
