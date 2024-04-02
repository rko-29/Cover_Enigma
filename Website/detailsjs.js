document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch data from NodeMCU
  function fetchData() {
    // You should replace this with actual code to fetch data from NodeMCU
    // For example, you might use AJAX to send a request to the NodeMCU server
    // and receive sensor data in response
    return {
      temperature: /* Replace with actual temperature reading from NodeMCU */,
      waterLevel: /* Replace with actual water level reading from NodeMCU */,
      toxicity: /* Replace with actual toxicity reading from NodeMCU */,
      tilt: /* Replace with actual tilt reading from NodeMCU */,
    };
  }

  // Update gauge chart data
  function updateChart(chart, value, valueElementId) {
    chart.data.datasets[0].data[0] = value;
    chart.update();
    document.getElementById(valueElementId).textContent = value.toFixed(2);
  }

  // Update sensor values
  function updateSensorValues(data) {
    // Update temperature chart
    updateChart(temperatureChart, data.temperature, "temperature-value");

    // Update water level chart
    updateChart(waterLevelChart, data.waterLevel, "water-level-value");

    // Update toxicity chart
    updateChart(toxicityChart, data.toxicity, "toxicity-value");

    // Update tilt
    document.getElementById("tilt").textContent = data.tilt;
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

  // Create charts on page load
  const temperatureChart = createChart("temperature-chart", "Temperature");
  const waterLevelChart = createChart("water-level-chart", "Water Level");
  const toxicityChart = createChart("toxicity-chart", "Toxicity");

  // Update charts with NodeMCU data
  function updateCharts() {
    const data = fetchData();
    updateSensorValues(data);
  }

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
