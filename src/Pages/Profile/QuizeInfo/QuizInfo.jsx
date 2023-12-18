import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useOutletContext } from "react-router-dom";
export const QuizInfo = () => {
  const questionData = useOutletContext()
  useEffect(() => {
    // Register a custom plugin for the wavy effect
    Chart.register({
      id: 'wavyLines',
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const xAxis = chart.scales['x-axis-0'];
        const yAxis = chart.scales['y-axis-0'];

        if (xAxis && yAxis) {
          const waveHeight = 15;
          const frequency = 0.05;
          const amplitude = 5;

          const originalLineTo = ctx.lineTo.bind(ctx);

          ctx.lineTo = (x, y) => {
            const newY = y + amplitude * Math.sin(frequency * x);
            originalLineTo(x, newY);
          };
        }
      },
    });
  }, []);

  const data = {
    labels: questionData.map((question, index) => `day ${index + 1}`),
    datasets: [
      {
        label: 'Question to Wrong Answer Ratio',
        data: questionData.map((question) => ((question.total-question.wrong)/question.total*100)),
        borderColor: 'rgb(255,0,0)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(255,0,0)',
        pointRadius: 5,
        pointHitRadius: 10,
        fill: true, // Ensure the line is not filled
      },
    ],
  };

  const options= {
   }
  

  return (
    <Line data={data} options={{
   
      scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 100
        }
      },
      plugins: {
        legend: {
          display: true
        },
        title:{
          text:`(TotalQuestions ${questionData.map((a)=>a.total).reduce((a,b)=>a+b)} )  (wrong ${questionData.map((a)=>a.wrong).reduce((a,b)=>a+b)})`,
          display:true
        }
     
      }
    }} plugins={['wavyLines']} />
  )
}
