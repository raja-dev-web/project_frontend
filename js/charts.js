
ctx = document.getElementById('chartHours').getContext("2d");
myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
    datasets: [{ 
        data: [12,23,18,19,24,28,32,28,30,20],
        label: "France",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [8,18,21,19,25,17,20,29,25,5],
        label: "Inde",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [23,34,22,20,33,23,17,22,25,18],
        label: "Etats-Unis",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [10,18,14,16,24,20,23,15,10,3],
        label: "Japon",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [19,25,28,16,27,18,20,21,22,10],
        label: "Espagne",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Profits par pays (en Millions)'
    }
  }
});

