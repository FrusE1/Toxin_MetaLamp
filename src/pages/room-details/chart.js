import Chart from 'chart.js/auto';
import { removeData } from 'jquery';
const ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.parentNode.style.height = "124px";
ctx.canvas.parentNode.style.width = "124px";
let chartArr = [130, 65, 65, 0];
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Удовлетворительно', 'Хорошо', 'Разочарован'],
    datasets: [{
      data: [chartArr[0], chartArr[1], chartArr[2], chartArr[3]],
      backgroundColor: [
        'rgba(255, 227, 156, 1)',
        'rgba(188, 156, 255, 1)',
        'rgba(111, 207, 151, 1)',
        'rgba(145, 145, 145, 1)'
      ],
      spacing: 0.5,
      cutout: '89%',
    }],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    rotation: 180,
    maintainAspectRatio: false,
  },
});
// Центральный текст внутри диаграммы
const chartText = document.querySelector('.text-chart__num');
chartText.innerHTML = `${chartArr[0] + chartArr[1] + chartArr[2] + chartArr[3]}`