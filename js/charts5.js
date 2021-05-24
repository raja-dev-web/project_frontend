ctx = document.getElementById('logpie').getContext('2d');
myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ["Within Limit in %","Out of Limit in %"],
            datasets: [{ 
                data: [73,27],
                borderColor:[
                  "#4DB8B4",
                  "#061623",
                ],
                backgroundColor: [
                  "rgb(77,184,180)",
                  "rgb(6,22,35)",
                ],
                borderWidth:2,
              }]
          },
        options: {
          title: {
        display: true,
        text: 'Delivery Status'
      },
          scales: {
            xAxes: [{ 
               display: false,
            }],
            yAxes: [{
               display: false,
            }],
          }
        },
      });