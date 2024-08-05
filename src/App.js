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
  FolderTree, 
  Briefcase, 
  FileText, 
  School, 
  Scale, 
  Laptop,
  Calendar,
  Clipboard
} from 'lucide-react';
import { Chart } from 'react-google-charts';
import GanttChart from './GanttChart';

const IconHeader = ({ Icon, title }) => (
  <h3 className="flex items-center gap-2 text-xl font-bold mb-3">
    <Icon className="w-6 h-6" />
    {title}
  </h3>
);

const BoldPhrase = ({ children }) => <strong className="text-blue-600">{children}</strong>;

const IconListItem = ({ Icon, children }) => (
  <div className="flex items-start gap-3 mb-4">
    <Icon className="w-6 h-6 mt-1 flex-shrink-0 text-blue-500" />
    <span>{children}</span>
  </div>
);

const TeamTable = () => {
  const teams = [
    { name: 'Marketing', icon: Users },
    { name: 'Product', icon: Briefcase },
    { name: 'Assessments', icon: FileText },
    { name: 'School & Industry Engagement', icon: School },
    { name: 'Legal', icon: Scale },
    { name: 'Technology', icon: Laptop }
  ];

  return (
    <div className="team-table">
      <h3>Teams Interviewed</h3>
      <div className="team-grid">
        {teams.map((team, index) => (
          <div key={index} className="team-item">
            <team.icon size={24} />
            <span>{team.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoGraphicSection = ({ title, children }) => (
  <div className="info-graphic-section">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

const NextStepItem = ({ icon: Icon, title, description, impact, partnerships, urgent }) => (
  <div className={`next-step-item ${urgent ? 'urgent' : ''}`}>
    <div className="next-step-header">
      <Icon className="next-step-icon" />
      <h4>{title}</h4>
      {urgent && <span className="urgent-label">Urgent</span>}
    </div>
    <div dangerouslySetInnerHTML={{ __html: description }}></div>
    <div className="impact">
      <strong>Impact:</strong> {impact}
    </div>
    <div className="partnerships">
      <strong>Partnerships:</strong> {partnerships}
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

const createGanttData = () => [
  { name: 'Phase 1', start: new Date(2024, 7, 1).getTime(), end: new Date(2024, 9, 28).getTime() },
  { name: 'Phase 2', start: new Date(2024, 9, 1).getTime(), end: new Date(2024, 11, 28).getTime() },
  { name: 'Phase 3', start: new Date(2024, 11, 1).getTime(), end: new Date(2025, 2, 28).getTime() },
];

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
      <div className="problem-statement">
        <h3>Problem Statement</h3>
        <p>
          GMAC's current utilization of Sitecore CMS falls short of the platform's full potential, resulting in user dissatisfaction and inefficiencies in content management. This underutilization hinders our ability to effectively empower business schools and candidates in their mutual discovery and evaluation process.
        </p>
      </div>
      <div className="opportunity">
        <h3>Opportunity to Maximize Sitecore</h3>
        <p>
          By addressing the challenges identified in our survey and implementing strategic improvements, we have a significant opportunity to maximize Sitecore's potential. This will enable us to streamline our content management processes, enhance user experience, and ultimately strengthen our digital presence in support of our mission.
        </p>
      </div>
      <div className="expected-outcomes">
        <h3>Expected Outcomes</h3>
        <div className="quick-wins">
          <h4>Quick Wins: Unlocking Sitecore & Empowering Staff</h4>
          <ul>
            <li>Unlock efficient workflows: Streamline content creation and publishing processes to reduce time-to-market</li>
            <li>Empower with intuitive interfaces: Enhance Sitecore's user interface for improved navigation and task efficiency</li>
            <li>Enable continuous learning: Integrate on-demand training and support resources directly within Sitecore</li>
            <li>Foster collaboration: Implement improved tools for seamless cross-departmental content management</li>
            <li>Unleash creativity: Provide easy access to Sitecore's design and layout tools for non-technical staff</li>
            <li>Boost productivity: Introduce time-saving features like content templates and reusable components</li>
          </ul>
        </div>
        <div className="long-term-benefits">
          <h4>Long-term Benefits: Peronalization to Drive Conversions </h4>
          <ul>
            <li>Personalization: Leverage existing personas to deliver highly tailored content experiences for business schools, candidates, and other stakeholders</li>
            <li>Tracking: Implement comprehensive user journey tracking across all touchpoints, aligned with our persona segments</li>
            <li>Conversions: Optimize conversion paths for key actions such as program inquiries, application starts, and submissions, personalized for each persona</li>
            <li>Analytics: Utilize Sitecore's advanced analytics to gain deeper insights into persona behavior, refining our understanding and approach over time</li>
          </ul>
        </div>
      </div>
    </p>
  </InfoGraphicSection>

  <InfoGraphicSection title="Our Research">
    <p className="challenges-intro">
      <div className="overview">
        <h3>Overview</h3>
        <p>
          At GMAC, our mission is to empower business schools and candidates to discover and evaluate each other. Sitecore CMS is a crucial tool in achieving this goal, serving as the backbone of our digital presence and content strategy. To ensure we're maximizing Sitecore's potential and empowering our users, we conducted a comprehensive survey with 26 participants from various departments.
        </p>
        <TeamTable />
        <p>
          This survey aimed to assess the current Sitecore CMS experience and identify areas where we can better leverage the platform to meet our business objectives. By understanding user challenges and needs, we can enhance our digital capabilities, improve content management, and ultimately provide better services to business schools and candidates.
        </p>
        <p>
          The average satisfaction score was 2.8 out of 5, indicating significant room for improvement. Our goal is to transform Sitecore from a tool of necessity to a powerful asset that drives our mission forward, empowering our team to create, manage, and deliver impactful content efficiently.
        </p>
      </div>
    </p>
    <BarChartSection data={satisfactionData} title="Overall Satisfaction Ratings" />
  </InfoGraphicSection>

      <InfoGraphicSection title="User Feedback">
  <p className="challenges-intro">
    Our survey revealed several critical challenges that are significantly impacting the effectiveness and efficiency of our Sitecore implementation. These issues span across technical performance, content management, user experience, and system utilization. By addressing these key challenges, we have the opportunity to dramatically improve our digital capabilities, streamline our content processes, and ultimately deliver greater value to our business schools and candidates. The following challenges were consistently highlighted by users across different roles and departments:
  </p>
  <PieChartSection data={challengesData} title="Distribution of Key Challenges" />
  <ul className="detailed-challenges">
  <br></br>
    <li>
      <strong>Technical issues & Performance</strong>
      <p>The majority of users reported frequent technical glitches and slow system performance. These issues significantly hinder their ability to efficiently update and publish content, often leading to delays in critical information dissemination and frustration among content creators.</p>
      <QuoteBox 
        quote="I spent half my day waiting for pages to load or fighting with the system to publish a simple update. It's incredibly frustrating and impacts our ability to deliver timely information to our audience."
        author="Marketing Specialist"
      />
    </li>
    <br></br>
    <li>
      <strong>Extremely difficult to find content and media</strong>
      <p>Users expressed significant frustration with the content and media organization within Sitecore. Many reported spending excessive time searching for specific assets or content pieces, leading to inefficiencies in content creation and management processes. This difficulty in locating resources hampers productivity and can result in duplicated efforts.</p>
      <QuoteBox 
        quote="I often feel like I'm playing a game of hide and seek with our content. It's not uncommon for me to recreate assets because I can't find the original. We need a better system to organize and locate our materials."
        author="Content Manager"
      />
    </li>
    <br></br>
    <li>
      <strong>Intimidation due to lack of training and know-how</strong>
      <p>A considerable number of users felt intimidated by the CMS due to insufficient training and understanding of its features. This lack of confidence in using Sitecore leads to underutilization of the platform's capabilities, reluctance to explore advanced features, and increased dependence on a small number of "power users" within the organization.</p>
      <QuoteBox 
        quote="There's so much Sitecore can do, but I feel like I'm only scratching the surface. Without proper training, I'm afraid to explore more advanced features for fear of breaking something. We're probably missing out on a lot of powerful functionality."
        author="Junior Content Creator"
      />
    </li>
    < br></br>
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

  <InfoGraphicSection title="Our Plan">
  <p className="challenges-intro">
    Based on our survey findings, we've developed a phased approach to address the challenges and maximize the potential of our Sitecore implementation. This plan is designed to progressively enhance our digital capabilities, user experience, and overall business impact.
    <GanttChart/>
  </p> 
        <h3>Phase 1: Foundation Improvements</h3>
        <NextStepItem
          icon={Zap}
          title="Performance Optimization - Phase 1"
          description={`
            <p>Our development team, in collaboration with Sitecore support, will conduct a thorough investigation to identify the root causes of the sluggish performance. We'll implement a multi-faceted approach to resolve these issues, which may include:</p>
            <ol>
              <li>Performance Dashboard that tracks like: Item Save Time (ms), Publish Time (s), Cache Hit Ratio (%), Media Library Access Time (ms), and more.</li>
              <li>Optimizing caching strategies at various levels (browser, CDN, Sitecore)</li>
              <li>Reviewing and potentially upgrading server specifications</li>
              <li>Analyzing and refining Sitecore pipelines and integrations for efficiency</li>
              <li>Implementing database optimizations</li>
            </ol>
          `}
          impact="This comprehensive approach will result in an immediate boost in system responsiveness, significantly reducing page load times and improving the overall user experience. It will lead to increased productivity for content creators and editors, reduced frustration among all users, and faster content delivery to our audience. Moreover, improved performance will positively impact our search engine rankings and user engagement metrics."
          partnerships="Technology Team at GMAC, Sitecore Support, Infrastructure Team"
          urgent={true}
        />
        <NextStepItem
          icon={BookOpen}
          title="Training and Learning Resources - Phase 1"
          description={`
            <p>We will develop a comprehensive training program and create a variety of learning resources to empower users at all levels. These resources will be centralized and easily accessible through Microsoft Teams and SharePoint, allowing users to search and find the training they need efficiently. Our initiative will include:</p>
            <ol>
              <li><strong>Role-Based Training Modules:</strong> Tailored training paths for content creators, editors, marketers, and developers, available on SharePoint.</li>
              <li><strong>Documentation and Quick Reference Guides:</strong> Easily searchable, up-to-date documentation on Sitecore features and best practices, available on SharePoint.</li>
              <li><strong>1-on-1 Training Sessions:</strong> Personalized training sessions that can be requested and scheduled through Teams. These sessions will be recorded and made available for re-watching on SharePoint.</li>
              <li><strong>Sandbox Environment:</strong> A safe space for users to experiment with Sitecore features without affecting the live site, with access instructions on SharePoint.</li>
            </ol>
            <p>All resources will be tagged and categorized for easy searching within SharePoint and Teams.</p>
          `}
          impact={`This comprehensive training approach will significantly boost user confidence and proficiency across all skill levels, leading to better utilization of Sitecore's advanced features and more dynamic content. By spreading expertise across teams, we'll reduce dependence on a small group of power users and foster enhanced collaboration between departments. New team members will onboard faster with easily accessible, centralized resources. The combination of on-demand materials and personalized 1-on-1 sessions will cater to individual learning styles and specific role requirements, allowing users to learn at their own pace and revisit content as needed.
          `}
          partnerships="TBD"
        />
        <NextStepItem
          icon={Users}
          title="Workflow Standardization - Phase 1"
          description={`
            We will define and implement standardized workflows for content creation and publishing in Sitecore. This initiative will:
            <ul>
              <li>Map out current content processes across departments</li>
              <li>Identify bottlenecks and inefficiencies in existing workflows</li>
              <li>Design streamlined, role-based approval processes</li>
              <li>Implement automated notifications and reminders within Sitecore</li>
              <li>Create clear documentation and guidelines for each workflow stage</li>
            </ul>
            These standardized workflows will be flexible enough to accommodate different content types and departmental needs while maintaining consistency in our publishing process.
          `}
          impact={`
            Implementing standardized workflows will streamline our content processes, significantly improving collaboration across teams. This will lead to more consistent content quality across all departments and faster time-to-publish for critical updates. By clearly defining roles and responsibilities within the workflow, we'll reduce confusion and minimize the risk of content errors or oversight. The improved efficiency will allow our teams to focus more on creating high-quality content rather than managing complex processes, ultimately enhancing our overall digital presence and responsiveness to market needs.
          `}
          partnerships="Marketing Team, Editorial Team"
        />
        <h3>Phase 2: Content Organization and Cleanup</h3>
        <NextStepItem
          icon={FolderTree}
          title="Content and Media Library Reorganization - Phase 2"
          description={`
            <p>We will embark on a comprehensive overhaul of our content and media library structure within Sitecore. This initiative involves a systematic review of all existing content and media assets, followed by the implementation of a new, intuitive organizational structure. We'll develop clear naming conventions, establish a logical hierarchy, and implement robust metadata tagging to enhance searchability. This reorganization will also include the creation of templates and guidelines to ensure consistency in future content uploads and organization.</p>
          `}
          impact={`
            This reorganization will significantly reduce time spent on content discovery, eliminating duplicates and improving overall asset management efficiency. By creating a more intuitive and user-friendly structure, we'll lower the learning curve for new users and improve the day-to-day experience for all Sitecore users. This enhanced organization will make Sitecore feel more intuitive and less overwhelming, encouraging broader adoption and more effective use of the platform across the organization. Ultimately, this will lead to faster content creation and publishing processes, ensuring our digital presence remains dynamic and up-to-date.
          `}
          partnerships="Content Management Team, Digital Asset Management Team, Marketing Team, UX Design Team"
        />
        <h3>Phase 3: Advanced Features and Optimization</h3>
        <NextStepItem
          icon={Users}
          title="Personalization - Phase 3"
          description={`
            <p>We will implement and optimize Sitecore 10.2's advanced personalization features to enhance user experience and content relevance. This process will include:</p>
            <ul>
              <li>Implementing rule-based personalization for content targeting based on user behavior, demographics, and context</li>
              <li>Utilizing Sitecore AI for automated, scalable personalization</li>
              <li>Setting up real-time personalization for immediate content adjustments</li>
              <li>Personalizing search results based on user profiles and behavior</li>
              <li>Ensuring consistent personalized experiences across all digital touchpoints</li>
              <li>Establishing comprehensive personalization reporting</li>
            </ul>
            <p>This implementation will require additional training for content creators and marketers, development of a personalization strategy aligned with business goals, creation of user segments and personas, and ongoing testing and optimization.</p>
          `}
          impact={`
            Leveraging Sitecore personalization features will allow us to provide tailored, highly relevant experiences to our users. This will lead to increased engagement, higher conversion rates, and ultimately better support for business schools and candidates in their decision-making processes.`}
          partnerships="Marketing Team, Content Strategy Team, UX Research Team, IT Support Team, Data Privacy Team"
        />
        <NextStepItem
          icon={BarChart2}
          title="Enable A/B Testing and Sitecore Analytics - Phase 3"
          description={`
            <p>We will activate and configure Sitecore's built-in A/B testing and analytics capabilities, tailoring them to our specific needs and objectives. This process will involve setting up key performance indicators (KPIs), creating custom dashboards, and integrating with our existing analytics tools. We'll develop a comprehensive training program to ensure all relevant team members can effectively use these features, covering topics such as creating and running A/B tests, interpreting analytics data, and using insights to inform content strategy.</p>
          `}
          impact={`
            Implementing A/B testing and analytics will revolutionize our approach to content creation and user experience optimization. By enabling data-driven decision making, we'll significantly improve content effectiveness and gain a deeper understanding of user behavior. This will lead to more engaging and personalized user experiences, potentially increasing conversion rates and user satisfaction. Teams will be able to quickly identify high-performing content and underperforming areas, allowing for rapid iterations and improvements. The insights gained will inform not just our content strategy, but also our overall digital strategy, ensuring our efforts are aligned with user needs and preferences. Moreover, this data-centric approach will foster a culture of continuous improvement, encouraging teams to experiment, learn, and refine our digital presence constantly.
          `}
          partnerships="Analytics Team, Marketing Team, Content Strategy Team, UX Research Team, IT Support Team"
        />
        <NextStepItem
          icon={Layout}
          title="Optimize Templates and Layouts for Content Impact - Phase 3"
          description={`
            We will enhance existing templates and create new layouts in Sitecore to maximize our content's potential and drive key performance indicators (KPIs). This process will involve:
            <ul>
              <li>Analyzing current content performance and identifying areas for improvement</li>
              <li>Enhancing existing templates to better showcase our content</li>
              <li>Developing new, flexible layouts that support various content types and campaign needs</li>
              <li>Ensuring all templates are optimized for conversions and user engagement</li>
              <li>Implementing easy-to-use content components that align with our KPIs</li>
            </ul>
          `}
          impact={`
            By optimizing our templates and layouts, we'll significantly enhance our ability to create high-impact content. This will lead to improved user engagement, higher conversion rates, and better achievement of our KPIs. Content creators will have the tools they need to present information more effectively, while maintaining brand consistency and adhering to best practices for digital content. Ultimately, this will result in a more powerful and flexible Sitecore implementation that directly supports our business objectives.
          `}
          partnerships="Content Strategy Team, UX Design Team, Marketing Team, Front-end Development Team"
        />    

    <InfoGraphicSection title="Next Steps">
      <div className="challenges-intro bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-6">
          
            <strong> Identify Necessary Resources:</strong> Conduct a comprehensive assessment of the resources required for successful Sitecore optimization. This includes:
            <ul className="list-disc pl-6 mt-2">
              <li>Technical expertise</li>
              <li>Content strategists and creators</li>
              <li>Project management</li>
              <li>Training resources</li>
            </ul>
            <strong>Create a Detailed Project Plan:</strong> Develop a comprehensive project plan with specific dates and milestones. Key components include:
            <ul className="list-disc pl-6 mt-2">
              <li>Deetailed timeline for each phase of the optimization process</li>
              <li>Specific tasks and subtasks with assigned responsibilities</li>
              <li>Key deliverables and their due dates</li>
            </ul>    
            <strong>Form a Cross-Functional Working Group:</strong> Establish a dedicated team to oversee and execute the Sitecore optimization project:
            <ul className="list-disc pl-6 mt-2">
              <li>Include representatives from IT, Marketing, Content, and key business units</li>
              <li>Define roles and responsibilities for each team member</li>
              <li>Set up regular meeting schedules and communication channels</li>
              <li>Establish decision-making processes and escalation procedures</li>
              <li>Create a framework for ongoing collaboration and knowledge sharing</li>
            </ul>
        </div>
      </div>
    </InfoGraphicSection>
                                                                                                                                             
      <InfoGraphicSection title="About This Report">
          <p>
            This Sitecore User Experience Survey report was prepared by the Digital Experience (DX) Team at GMAC. Our analysis synthesizes feedback from 26 participants across various departments, providing a holistic view of our current Sitecore implementation and outlining a strategic path forward.
          </p>
          <p>
            We've identified key challenges, prioritized improvements, and proposed a phased approach to enhance our digital capabilities. Our recommendations aim to empower all Sitecore users, streamline workflows, and ultimately deliver a more impactful digital experience for our audience.
          </p>
          <p>
            We welcome your feedback and are here to address any questions you may have about this report or our proposed initiatives. For further information or to discuss any aspects of this report in more detail, please don't hesitate to reach out.
          </p>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>Will Grana</strong><br />
              Digital Experience Team<br />
              Email: <a href="mailto:wgrana@gmac.com">wgrana@gmac.com</a>
            </p>
          </div>
        </InfoGraphicSection>
      </InfoGraphicSection>
    </div>
  );
}

export default App;