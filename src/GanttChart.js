import React from 'react';
import './GanttChart.css';

const GanttChart = () => {
  const phases = [
    { 
      name: 'Phase 1',
      subtitle: 'Foundation Improvements', 
      start: 0, 
      duration: 3, 
      description: 'Performance optimization, training, and workflow standardization.'
    },
    { 
      name: 'Phase 2',
      subtitle: 'Content Organization',
      start: 0, 
      duration: 3, 
      description: 'Clean up media library, organize content, and implement archiving strategy.'
    },
    { 
      name: 'Phase 3',
      subtitle: 'Advanced Features', 
      start: 3, 
      duration: 3, 
      description: 'Implement A/B testing, analytics, personalization, and new templates.'
    },
  ];

  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="gantt-chart">
      <h3>Implementation Timeline</h3>
      <div className="gantt-timeline">
        {months.map((month, index) => (
          <div key={month} className="gantt-month">{month}</div>
        ))}
      </div>
      {phases.map((phase, index) => (
        <div key={phase.name} className="gantt-bar-container">
          <div className="gantt-bar-label">{phase.name}</div>
          <div className="gantt-bar-timeline">
            <div 
              className="gantt-bar" 
              style={{
                marginLeft: `${phase.start * (100/6)}%`,
                width: `${phase.duration * (100/6)}%`
              }}
            >
              <div className="gantt-tooltip">
                <div className="gantt-tooltip-title">{phase.subtitle}</div>
                {phase.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GanttChart;