document.addEventListener("DOMContentLoaded", function () {
  // Function to simulate fetching data from NodeMCU
  function fetchData() {
    return {
      temperature: Math.random() * 100, // Example temperature value
      waterLevel: Math.random() * 100, // Example water level value
      toxicity: Math.random() * 100, // Example toxicity value
      tilt: Math.random() < 0.5 ? "Yes" : "No", // Random tilt value (Yes or No)
    };
  }

  // Update gauge chart data
  function updateChart(chart, value, valueElementId) {
    chart.data.datasets[0].data[0] = value;
    chart.update();
    document.getElementById(valueElementId).textContent = value.toFixed(2);
  }

  // Create gauge chart
  function createChart(elementId, label) {
    return new Chart(document.getElementById(elementId).getContext("2d"), {
      type: "doughnut",
      data: {
        labels: [label],
        datasets: [
          {
            data: [0],
            backgroundColor: ["#007bff"], // Blue
          },
        ],
      },
      options: {
        cutout: "80%", // Adjust this value to control the size of the circular chart
        rotation: -Math.PI,
        circumference: Math.PI,
        plugins: {
          legend: {
            display: false,
          },
        },
        tooltips: {
          enabled: false,
        },
      },
    });
  }

  // Update chart data
  function updateCharts() {
    const data = fetchData();

    // Update temperature chart
    updateChart(temperatureChart, data.temperature, "temperature-value");

    // Update water level chart
    updateChart(waterLevelChart, data.waterLevel, "water-level-value");

    // Update toxicity chart
    updateChart(toxicityChart, data.toxicity, "toxicity-value");

    // Update tilt
    document.getElementById("tilt").textContent = data.tilt;
  }

  // Update charts on page load
  const temperatureChart = createChart("temperature-chart", "Temperature");
  const waterLevelChart = createChart("water-level-chart", "Water Level");
  const toxicityChart = createChart("toxicity-chart", "Toxicity");
  updateCharts();

  // Update charts every 5 seconds
  setInterval(updateCharts, 5000);

  // Button click event
  document
    .getElementById("release-button")
    .addEventListener("click", function () {
      // Call function to release acids (replace with actual implementation)
      console.log("Acids released!");
    });
});
