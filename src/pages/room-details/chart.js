import Chart from 'chart.js/auto';
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [{
      label: '# of Votes',
      data: [130, 65, 65, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      spacing: 2,
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        align: 'end',
        labels: {
          font: {
            family: "Montserrat",
            size: 14,
          }
        }
      }
    }
  }
});