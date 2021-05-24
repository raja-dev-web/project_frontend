ctx_vnt = document.getElementById("loghisto").getContext("2d");
venChart = new Chart(ctx_vnt, {
    type: 'bar',
    data: {
      labels: ["Jan", "Fev", "Mar", "Avr", "Mai","Jun","Jul","Août","Sep","Oct","Nov","Dec"],
      datasets: [{
          label: "Time",
          type: "line",
          borderColor: "#8e5ea2",
          data: [48,23,17,52,36,24,43,58,37,47,56,55],
          fill: false
        },
        {
          label: "Route",
          type: "bar",
          backgroundColor: ["#3cba9f", "#3cba9f","#3cba9f","#3cba9f","#3cba9f","#3cba9f", "#3cba9f","#3cba9f","#3cba9f","#3cba9f","#3cba9f","#3cba9f"],
          data: [48,23,17,52,36,24,43,58,37,47,56,55]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Average Delivery Time(hours) & Route(km)'
      }
    }
});
