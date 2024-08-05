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
      start: 2, 
      duration: 3, 
      description: 'Clean up media library, organize content, and implement archiving strategy.'
    },
    { 
      name: 'Phase 3',
      subtitle: 'Advanced Features', 
      start: 4, 
      duration: 4, 
      description: 'Implement A/B testing, analytics, personalization, and new templates.'
    },
  ];

  const months = ['', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr','May'];

  return (
    <div className="gantt-chart">
      <h3>Implementation Timeline</h3>
      <div className="gantt-scroll-container">
        <div className="gantt-content">
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
                    marginLeft: `${phase.start * (100/8)}%`,
                    width: `${phase.duration * (100/8)}%`
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
      </div>
    </div>
  );
};

export default GanttChart;