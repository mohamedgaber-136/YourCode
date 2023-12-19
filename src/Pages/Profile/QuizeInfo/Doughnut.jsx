import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export function Doughnuts({questionData}) {
    ChartJS.register(ArcElement, Tooltip, Legend);
 const data = {
  labels: ['Total', 'Wrong'],
  datasets: [
    {
      label: '# of Votes',
      data: [questionData.map((a)=>a.total).reduce((a,b)=>a+b), questionData.map((a)=>a.wrong).reduce((a,b)=>a+b)],
      backgroundColor: [
        'rgba(0, 100, 0, 1)',
        'rgba(100, 0, 0, 1)',
      
      ],
      borderColor: [
        'rgba(0, 255, 0, 1)',
        'rgba(255, 0, 0, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};
  return <div className=' dognhutParent'>
  <Doughnut data={data} />
  
  </div>
}
