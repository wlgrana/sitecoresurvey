import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from 'recharts';
import { 
  Quote, 
  Zap, 
  BookOpen, 
  Users, 
  BarChart2, 
  Layout, 
  FolderTree 
} from 'lucide-react';

const InfoGraphicSection = ({ title, children }) => (
  <div className="info-graphic-section">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

const NextStepItem = ({ icon: Icon, title, description, impact }) => (
  <div className="next-step-item">
    <div className="next-step-header">
      <Icon className="next-step-icon" />
      <h4>{title}</h4>
    </div>
    <p>{description}</p>
    <div className="impact">
      <strong>Impact:</strong> {impact}
    </div>
  </div>
);

const QuoteBox = ({ quote, author }) => (
  <div className="quote-box">
    <Quote className="quote-icon" />
    <p className="quote-text">"{quote}"</p>
    <p className="quote-author">- {author}</p>
  </div>
);

const BarChartSection = ({ data, title }) => (
  <div className="bar-chart-section">
    <h3 className="chart-title">{title}</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8DC63F" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const PieChartSection = ({ data, title }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Calculate the total value
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  // Calculate percentages and add them to the data
  const dataWithPercentage = data.map(entry => ({
    ...entry,
    percentage: ((entry.value / total) * 100).toFixed(0)
  }));

  return (
    <div className="pie-chart-section">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={dataWithPercentage}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percentage }) => `${percentage}%`}
          >
            {dataWithPercentage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name, props) => [
              `${props.payload.percentage}% (${value} mentions)`, 
              name
            ]} 
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

function App() {
  const satisfactionData = [
    { name: '1 (Lowest)', value: 3 },
    { name: '2', value: 4 },
    { name: '3', value: 7 },
    { name: '4', value: 4 },
    { name: '5 (Highest)', value: 0 },
  ];

  const challengesData = [
    { name: 'Technical Issues & Performance', value: 11 },
    { name: 'Content Findability', value: 9 },
    { name: 'Lack of Training', value: 7 },
    { name: 'Limited Templates & Layout', value: 6 },
  ];

  return (
    <div className="dashboard">
      <h1 className="main-title">Sitecore User Experience Survey Insights</h1>
      
      <InfoGraphicSection title="Overview">
        <p className="challenges-intro">
          <p>
            At GMAC, our mission is to empower business schools and candidates to discover and evaluate each other. Sitecore CMS is a crucial tool in achieving this goal, serving as the backbone of our digital presence and content strategy. To ensure we're maximizing Sitecore's potential and empowering our users, we conducted a comprehensive survey with 22 participants from various departments.
          </p>
          <p>
            This survey aimed to assess the current Sitecore CMS experience and identify areas where we can better leverage the platform to meet our business objectives. By understanding user challenges and needs, we can enhance our digital capabilities, improve content management, and ultimately provide better services to business schools and candidates.
          </p>
          <p>
            The average satisfaction score was 2.8 out of 5, indicating significant room for improvement. Our goal is to transform Sitecore from a tool of necessity to a powerful asset that drives our mission forward, empowering our team to create, manage, and deliver impactful content efficiently.
          </p>
        </p>
        <BarChartSection data={satisfactionData} title="Overall Satisfaction Ratings" />
      </InfoGraphicSection>

      <InfoGraphicSection title="User Feedback">
  <p className="challenges-intro">
    Our survey revealed several critical challenges that are significantly impacting the effectiveness and efficiency of our Sitecore implementation. These issues span across technical performance, content management, user experience, and system utilization. By addressing these key challenges, we have the opportunity to dramatically improve our digital capabilities, streamline our content processes, and ultimately deliver greater value to our business schools and candidates. The following challenges were consistently highlighted by users across different roles and departments:
  </p>
  <PieChartSection data={challengesData} title="Distribution of Key Challenges" />
  <ul className="detailed-challenges">
    <li>
      <strong>Technical issues & Performance</strong>
      <p>The majority of users reported frequent technical glitches and slow system performance. These issues significantly hinder their ability to efficiently update and publish content, often leading to delays in critical information dissemination and frustration among content creators.</p>
      <QuoteBox 
        quote="I spent half my day waiting for pages to load or fighting with the system to publish a simple update. It's incredibly frustrating and impacts our ability to deliver timely information to our audience."
        author="Marketing Specialist"
      />
    </li>
    <li>
      <strong>Extremely difficult to find content and media</strong>
      <p>Users expressed significant frustration with the content and media organization within Sitecore. Many reported spending excessive time searching for specific assets or content pieces, leading to inefficiencies in content creation and management processes. This difficulty in locating resources hampers productivity and can result in duplicated efforts.</p>
      <QuoteBox 
        quote="I often feel like I'm playing a game of hide and seek with our content. It's not uncommon for me to recreate assets because I can't find the original. We need a better system to organize and locate our materials."
        author="Content Manager"
      />
    </li>
    <li>
      <strong>Intimidation due to lack of training and know-how</strong>
      <p>A considerable number of users felt intimidated by the CMS due to insufficient training and understanding of its features. This lack of confidence in using Sitecore leads to underutilization of the platform's capabilities, reluctance to explore advanced features, and increased dependence on a small number of "power users" within the organization.</p>
      <QuoteBox 
        quote="There's so much Sitecore can do, but I feel like I'm only scratching the surface. Without proper training, I'm afraid to explore more advanced features for fear of breaking something. We're probably missing out on a lot of powerful functionality."
        author="Junior Content Creator"
      />
    </li>
    <li>
      <strong>Limited templates and suboptimal content layout</strong>
      <p>Users highlighted that the current templating system and content layout options in Sitecore do not maximize the potential of their content or effectively drive conversions. The rigid structure of existing templates limits creativity and fails to accommodate diverse content needs. Additionally, the inability to easily optimize layouts for user engagement and conversion paths results in missed opportunities to achieve key business objectives.</p>
      <QuoteBox 
        quote="Our current templates feel like a straightjacket for our content. We have innovative ideas for presenting information and driving user engagement, but the system's limitations force us into a one-size-fits-all approach. It's holding us back from achieving our conversion goals."
        author="UX Designer"
      />
    </li>
  </ul>
     
      </InfoGraphicSection>

      <InfoGraphicSection title="Key Takeaways and Action Items">
        <h3>1. Technical Improvements</h3>
        <ul>
          <li>Prioritize technical improvements and performance optimization</li>
          <li>Enable Sitecore analytics for better insights</li>
          <li>Implement A/B testing capabilities</li>
        </ul>

        <h3>2. Content Management and Organization</h3>
        <ul>
          <li>Clean up media library and better organize content</li>
          <li>Develop a strategy for archiving old content</li>
          <li>Create new templates to maximize content effectiveness</li>
          <li>Standardize workflows for content creation and publishing</li>
        </ul>

        <h3>3. User Empowerment and Advanced Features</h3>
        <ul>
          <li>Develop educational resources to help users leverage and maximize Sitecore</li>
          <li>Enable and train users on personalization features</li>
          <li>Optimize call-to-action (CTA) strategies within the platform</li>
        </ul>

        <QuoteBox 
          quote="From technical optimization to content management and advanced features - we can transform Sitecore into a powerful tool that not only meets our current needs but also drives our future content strategy and business objectives."
          author="DX Team"
        />
      </InfoGraphicSection>

  <InfoGraphicSection title="Next Steps">
        <p className="challenges-intro">
          Based on our survey findings, we've developed a phased approach to address the challenges and maximize the potential of our Sitecore implementation. This plan is designed to progressively enhance our digital capabilities, user experience, and overall business impact.
        </p>

        <h3>Phase 1: Foundation Improvements</h3>
        <NextStepItem
          icon={Zap}
          title="Performance Optimization"
          description="Our development team, in collaboration with Sitecore support, will conduct a thorough investigation to identify the root causes of the sluggish performance. We'll implement a multi-faceted approach to resolve these issues, which may include:
          1. Optimizing caching strategies at various levels (browser, CDN, Sitecore)
          2. Reviewing and potentially upgrading server specifications
          3. Analyzing and refining Sitecore pipelines and integrations for efficiency
          4. Implementing database optimizations"
          impact="This comprehensive approach will result in an immediate boost in system responsiveness, significantly reducing page load times and improving the overall user experience. It will lead to increased productivity for content creators and editors, reduced frustration among all users, and faster content delivery to our audience. Moreover, improved performance will positively impact our search engine rankings and user engagement metrics."
          />
        <NextStepItem
          icon={BookOpen}
          title="Training and Learning Resources"
          description="Develop comprehensive training materials and conduct workshops for users at all levels."
          impact="Increased user confidence, better utilization of Sitecore features, and reduced dependence on power users."
        />
        <NextStepItem
          icon={Users}
          title="Workflow Standardization"
          description="Define and implement standardized workflows for content creation and publishing."
          impact="Streamlined processes, improved collaboration, and consistent content quality across departments."
        />

        <h3>Phase 2: Advanced Features and Optimization</h3>
        <NextStepItem
          icon={BarChart2}
          title="Enable A/B Testing and Sitecore Analytics"
          description="Implement and train users on A/B testing capabilities and Sitecore's analytics features."
          impact="Data-driven decision making, improved content effectiveness, and better understanding of user behavior."
        />
        <NextStepItem
          icon={Users}
          title="Personalization Implementation"
          description="Roll out personalization features and train teams on creating targeted content experiences."
          impact="Enhanced user engagement, improved conversion rates, and more relevant content delivery to our audience."
        />
        <NextStepItem
          icon={Layout}
          title="New Templates and Layouts"
          description="Develop flexible templates and layouts that accommodate diverse content needs and optimize for conversions."
          impact="Increased creativity in content presentation, better user experience, and improved ability to achieve business objectives through our digital platforms."
        />

        <h3>Phase 3: Content Organization and Cleanup</h3>
        <NextStepItem
          icon={FolderTree}
          title="Content and Media Library Reorganization"
          description="Systematically clean up and reorganize the content and media library with a new, intuitive structure."
          impact="Significantly reduced time in content discovery, elimination of duplicates, and improved asset management efficiency."
        />

        <QuoteBox 
          quote="By following this phased approach, we're not just fixing issues – we're transforming our Sitecore implementation into a powerful, user-friendly platform that drives our digital strategy forward. Each step builds upon the last, creating a compounding positive effect on our operations and our ability to serve our audience effectively."
          author="DX Team"
        />
      </InfoGraphicSection>
    </div>
  );
}

export default App;