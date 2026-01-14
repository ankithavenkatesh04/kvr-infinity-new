import React, { useState } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const MainContentSection = () => {
  const [activeCategory, setActiveCategory] = useState("Design");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  const categories = [
    { name: "Design" },
    { name: "Tech" },
    { name: "Finance" },
    { name: "AI/ML" },
    { name: "Marketing" },
  ];

  const blogPostsData = {
    Design: [
      {
        id: "design-1",
        author: "Sarah Johnson",
        role: "UI/UX Designer",
        content:
          "Design thinking is revolutionizing how we approach problem-solving in the digital age. By putting users at the center of our design process, we create more intuitive and meaningful experiences. The key is to empathize with users, define problems clearly, ideate creative solutions, prototype rapidly, and test iteratively.",
        likes: "2.1K",
      },
      {
        id: "design-2",
        author: "Michael Chen",
        role: "Product Designer",
        content:
          "Color psychology plays a crucial role in user interface design. Different colors evoke different emotions and behaviors from users...",
        likes: "1.8K",
      },
       {
        id: "design-4",
        author: "David Kim",
        role: "UX Researcher",
        content: "User research is the foundation of successful design. Through interviews, surveys, and usability testing, we uncover insights that drive design decisions. Observing how users interact with prototypes reveals pain points and opportunities for improvement. This data-driven approach reduces assumptions and creates products that truly resonate with target audiences.",
        likes: "2.3K",
      },
      {
        id: "design-5",
        author: "Lisa Wang",
        role: "Interaction Designer",
        content: "Microinteractions are the small details that make big differences in user experience. A subtle hover effect, a smooth transition, or a delightful loading animation can transform a mundane task into an engaging experience. These tiny moments of interaction provide feedback, guide users, and add personality to digital products.",
        likes: "1.9K",
      },
      {
        id: "design-6",
        author: "James Thompson",
        role: "Design Systems Lead",
        content: "Design systems ensure consistency and efficiency across large-scale products. By creating reusable components, standardized patterns, and clear guidelines, teams can work faster while maintaining quality. A well-documented design system serves as a single source of truth, reducing design debt and improving collaboration between designers and developers.",
        likes: "2.7K",
      },
      {
        id: "design-7",
        author: "Anna Petrov",
        role: "Mobile Designer",
        content: "Mobile-first design is no longer optional—it's essential. With over 60% of web traffic coming from mobile devices, designing for smaller screens first ensures optimal user experiences across all platforms. This approach forces designers to prioritize content, simplify navigation, and focus on core functionality that matters most to users.",
        likes: "1.6K",
      },
      {
        id: "design-8",
        author: "Carlos Martinez",
        role: "Brand Designer",
        content: "Brand consistency across digital touchpoints builds trust and recognition. Every element—from logo placement to color usage—should reinforce brand identity. Consistent visual language helps users feel confident and familiar with your product, leading to increased engagement and loyalty over time.",
        likes: "2.0K",
      },
    ],
    Tech: [
      {
        id: "tech-1",
        author: "Alex Kumar",
        role: "Full Stack Developer",
        content: "Modern web development has evolved dramatically with the rise of JavaScript frameworks like React, Vue, and Angular. These tools enable developers to build complex, interactive user interfaces with reusable components. The component-based architecture promotes code reusability, maintainability, and faster development cycles, making it easier to scale applications.",
        likes: "3.2K",
      },
      {
        id: "tech-2",
        author: "Rachel Green",
        role: "DevOps Engineer",
        content: "Cloud computing has transformed how we deploy and scale applications. Services like AWS, Google Cloud, and Azure provide on-demand resources that can automatically scale based on traffic. This shift from traditional servers to cloud infrastructure reduces costs, improves reliability, and enables global reach for applications of any size.",
        likes: "2.8K",
      },
      {
        id: "tech-3",
        author: "Tom Wilson",
        role: "Backend Developer",
        content: "API design is crucial for modern application architecture. RESTful APIs provide a standardized way for different systems to communicate, while GraphQL offers more flexible data fetching. Well-designed APIs improve developer experience, enable third-party integrations, and support the microservices architecture that powers today's scalable applications.",
        likes: "2.4K",
      },
      {
        id: "tech-4",
        author: "Priya Sharma",
        role: "Frontend Developer",
        content: "Progressive Web Apps (PWAs) bridge the gap between web and mobile applications. They offer native app-like experiences through web browsers, including offline functionality, push notifications, and home screen installation. PWAs provide broader reach than native apps while maintaining performance and user engagement.",
        likes: "2.1K",
      },
      {
        id: "tech-5",
        author: "Mark Johnson",
        role: "Security Engineer",
        content: "Cybersecurity is more critical than ever as digital threats evolve. Implementing proper authentication, encryption, and security headers protects user data and maintains trust. Regular security audits, penetration testing, and staying updated with the latest security practices are essential for any modern application.",
        likes: "2.9K",
      },
      {
        id: "tech-6",
        author: "Sophie Chen",
        role: "Data Engineer",
        content: "Big data analytics drives informed decision-making across industries. Tools like Apache Spark, Hadoop, and modern data warehouses enable processing of massive datasets to extract valuable insights. Real-time analytics and machine learning integration help businesses respond quickly to changing market conditions.",
        likes: "2.6K",
      },
      {
        id: "tech-7",
        author: "Ryan Davis",
        role: "Mobile Developer",
        content: "Cross-platform mobile development with React Native and Flutter allows developers to write once and deploy everywhere. These frameworks significantly reduce development time and maintenance costs while providing near-native performance. The shared codebase approach is revolutionizing mobile app development.",
        likes: "2.3K",
      },
      {
        id: "tech-8",
        author: "Nina Patel",
        role: "QA Engineer",
        content: "Automated testing ensures code quality and reduces bugs in production. Unit tests, integration tests, and end-to-end testing create a safety net that catches issues early. Continuous integration pipelines run these tests automatically, providing immediate feedback and maintaining high code standards throughout development.",
        likes: "2.0K",
      },
    ],
    Finance: [
      {
        id: "finance-1",
        author: "Robert Smith",
        role: "Financial Analyst",
        content: "Fintech is revolutionizing traditional banking through digital innovation. Mobile payments, cryptocurrency, and blockchain technology are creating new opportunities for financial inclusion. These technologies reduce transaction costs, increase accessibility, and provide financial services to previously underserved populations worldwide.",
        likes: "1.8K",
      },
      {
        id: "finance-2",
        author: "Jennifer Lee",
        role: "Investment Advisor",
        content: "Robo-advisors are democratizing investment management by providing automated, algorithm-driven financial planning services. These platforms use modern portfolio theory to create diversified portfolios at lower costs than traditional advisors. They make professional investment management accessible to retail investors with smaller portfolios.",
        likes: "1.5K",
      },
      {
        id: "finance-3",
        author: "Michael Brown",
        role: "Risk Manager",
        content: "Risk management in the digital age requires sophisticated modeling and real-time monitoring. Advanced analytics and machine learning help identify potential risks before they materialize. Stress testing, scenario analysis, and continuous monitoring ensure financial institutions can navigate volatile market conditions effectively.",
        likes: "1.9K",
      },
      {
        id: "finance-4",
        author: "Sarah Davis",
        role: "Compliance Officer",
        content: "Regulatory technology (RegTech) is streamlining compliance processes in financial services. Automated reporting, real-time monitoring, and AI-powered risk assessment help institutions meet regulatory requirements more efficiently. This technology reduces compliance costs while improving accuracy and reducing human error.",
        likes: "1.4K",
      },
      {
        id: "finance-5",
        author: "Kevin Zhang",
        role: "Cryptocurrency Analyst",
        content: "Decentralized Finance (DeFi) is creating new financial primitives without traditional intermediaries. Smart contracts enable lending, borrowing, and trading directly on blockchain networks. While still emerging, DeFi protocols are demonstrating the potential for more open, transparent, and accessible financial systems.",
        likes: "2.2K",
      },
      {
        id: "finance-6",
        author: "Amanda Wilson",
        role: "Personal Finance Coach",
        content: "Financial literacy is crucial in today's complex economic environment. Understanding budgeting, investing, and debt management empowers individuals to make informed financial decisions. Digital tools and apps are making financial education more accessible and helping people track their progress toward financial goals.",
        likes: "1.7K",
      },
      {
        id: "finance-7",
        author: "Daniel Kim",
        role: "Corporate Finance Manager",
        content: "ESG (Environmental, Social, and Governance) investing is reshaping corporate finance strategies. Companies are increasingly focusing on sustainable practices and social responsibility to attract investment and meet stakeholder expectations. This shift is driving innovation in green finance and impact investing.",
        likes: "1.6K",
      },
      {
        id: "finance-8",
        author: "Lisa Rodriguez",
        role: "Banking Technology Lead",
        content: "Open banking APIs are fostering innovation in financial services by allowing third-party developers to build applications around financial institutions. This creates new opportunities for personalized financial products, improved customer experiences, and increased competition in the banking sector.",
        likes: "1.8K",
      },
    ],
    "AI/ML": [
      {
        id: "aiml-1",
        author: "Dr. Alan Turing",
        role: "AI Researcher",
        content: "Machine learning is transforming industries by enabling computers to learn from data without explicit programming. Deep learning neural networks can recognize patterns in images, understand natural language, and make predictions with remarkable accuracy. These capabilities are driving innovations in healthcare, finance, and autonomous systems.",
        likes: "4.1K",
      },
      {
        id: "aiml-2",
        author: "Maya Patel",
        role: "Data Scientist",
        content: "Natural Language Processing (NLP) is bridging the gap between human communication and machine understanding. Large language models like GPT can generate human-like text, translate languages, and answer complex questions. These advances are revolutionizing customer service, content creation, and information retrieval.",
        likes: "3.8K",
      },
      {
        id: "aiml-3",
        author: "Chris Anderson",
        role: "ML Engineer",
        content: "Computer vision is enabling machines to interpret and understand visual information from the world. Applications range from medical image analysis to autonomous vehicle navigation. Convolutional neural networks can detect objects, recognize faces, and even generate realistic images, opening new possibilities across industries.",
        likes: "3.5K",
      },
      {
        id: "aiml-4",
        role: "AI Ethics Researcher",
        author: "Dr. Aisha Johnson",
        content: "AI ethics and responsible AI development are crucial as these technologies become more prevalent. Addressing bias in algorithms, ensuring transparency in decision-making, and protecting privacy are essential considerations. Building ethical AI systems requires diverse teams and ongoing evaluation of societal impacts.",
        likes: "3.2K",
      },
      {
        id: "aiml-5",
        author: "Zhang Wei",
        role: "Robotics Engineer",
        content: "Reinforcement learning is enabling AI agents to learn through interaction with their environment. This approach has achieved superhuman performance in games like Go and chess, and is now being applied to robotics, autonomous driving, and resource optimization. The trial-and-error learning process mimics how humans acquire new skills.",
        likes: "3.9K",
      },
      {
        id: "aiml-6",
        author: "Elena Volkov",
        role: "AI Product Manager",
        content: "Edge AI is bringing machine learning capabilities directly to devices, reducing latency and improving privacy. By processing data locally rather than in the cloud, edge AI enables real-time decision-making in smartphones, IoT devices, and autonomous systems. This distributed approach is crucial for applications requiring immediate responses.",
        likes: "3.3K",
      },
      {
        id: "aiml-7",
        author: "Marcus Thompson",
        role: "MLOps Engineer",
        content: "MLOps practices are essential for deploying and maintaining machine learning models in production. Continuous integration, automated testing, and model monitoring ensure that AI systems remain accurate and reliable over time. These practices bridge the gap between data science experimentation and production deployment.",
        likes: "3.0K",
      },
      {
        id: "aiml-8",
        author: "Dr. Yuki Tanaka",
        role: "AI Research Scientist",
        content: "Generative AI is creating new possibilities for content creation and design. From generating realistic images to composing music and writing code, these models are augmenting human creativity. The ability to generate novel content based on learned patterns is transforming creative industries and accelerating innovation.",
        likes: "4.3K",
      },
    ],
    Marketing: [
      {
        id: "marketing-1",
        author: "Jessica Parker",
        role: "Digital Marketing Manager",
        content: "Digital marketing has evolved beyond traditional advertising to focus on building authentic relationships with customers. Social media platforms, content marketing, and influencer partnerships create opportunities for brands to engage directly with their audience. The key is providing value and building trust through consistent, relevant communication.",
        likes: "2.4K",
      },
      {
        id: "marketing-2",
        author: "Ryan Mitchell",
        role: "SEO Specialist",
        content: "Search engine optimization remains crucial for online visibility, but the focus has shifted from keyword stuffing to creating high-quality, user-focused content. Google's algorithms now prioritize expertise, authoritativeness, and trustworthiness. Modern SEO requires understanding user intent and providing comprehensive answers to search queries.",
        likes: "2.1K",
      },
      {
        id: "marketing-3",
        author: "Samantha Lee",
        role: "Content Strategist",
        content: "Content marketing builds brand authority by providing valuable information to target audiences. Blog posts, videos, podcasts, and infographics educate customers while subtly promoting products or services. The most effective content addresses real customer pain points and positions the brand as a helpful resource rather than just a seller.",
        likes: "2.0K",
      },
      {
        id: "marketing-4",
        author: "Carlos Mendez",
        role: "Social Media Manager",
        content: "Social media marketing requires authentic engagement and community building. Successful brands use social platforms to share their story, showcase company culture, and respond to customer feedback. The goal is creating a loyal community that advocates for the brand and shares content organically with their networks.",
        likes: "1.9K",
      },
      {
        id: "marketing-5",
        author: "Taylor Swift",
        role: "Email Marketing Specialist",
        content: "Email marketing remains one of the highest ROI marketing channels when done correctly. Personalized, segmented campaigns that provide value to subscribers generate better engagement than generic mass emails. Automation workflows can nurture leads, onboard new customers, and re-engage inactive subscribers effectively.",
        likes: "2.3K",
      },
      {
        id: "marketing-6",
        author: "Ahmed Hassan",
        role: "Performance Marketing Lead",
        content: "Data-driven marketing enables precise targeting and measurement of campaign effectiveness. Analytics tools provide insights into customer behavior, conversion paths, and ROI across different channels. This data helps marketers optimize campaigns in real-time and allocate budgets to the most effective strategies.",
        likes: "2.2K",
      },
      {
        id: "marketing-7",
        author: "Olivia Chen",
        role: "Brand Manager",
        content: "Brand storytelling creates emotional connections that drive customer loyalty. Successful brands craft narratives that resonate with their target audience's values and aspirations. These stories are consistently communicated across all touchpoints, from advertising to customer service, creating a cohesive brand experience.",
        likes: "1.8K",
      },
      {
        id: "marketing-8",
        author: "Nathan Brooks",
        role: "Growth Marketing Manager",
        content: "Growth hacking combines marketing, product development, and data analysis to achieve rapid, sustainable growth. This approach focuses on experimenting with different strategies, measuring results, and scaling successful tactics. Growth marketers use creativity and analytics to find unconventional ways to acquire and retain customers.",
        likes: "2.5K",
      },
    ],
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleLikeClick = (postId) => {
    setLikedPosts((prev) => {
      const newLikedPosts = new Set(prev);
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId);
      } else {
        newLikedPosts.add(postId);
      }
      return newLikedPosts;
    });
  };

  const handleToggleExpand = (postId) => {
    setExpandedPosts((prev) => {
      const newExpandedPosts = new Set(prev);
      if (newExpandedPosts.has(postId)) {
        newExpandedPosts.delete(postId);
      } else {
        newExpandedPosts.add(postId);
      }
      return newExpandedPosts;
    });
  };

  const currentPosts = blogPostsData[activeCategory] || [];

  return (
    <section className="w-full max-w-4xl mx-auto space-y-6 mt-12 animate-fade-in [--animation-delay:0ms]">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 px-2 sm:px-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`h-auto px-4 sm:px-6 py-2 rounded-[20px] text-sm sm:text-base font-normal transition-colors ${
              activeCategory === category.name
                ? "bg-[#a81717] text-white hover:bg-[#a81717]/90"
                : "bg-white text-black border-[#a81717] border hover:bg-[#a81717]/10"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="h-[800px] overflow-y-auto space-y-6 pr-2 blog-scrollbar">
        {currentPosts.map((post, index) => {
          const isExpanded = expandedPosts.has(post.id);
          const previewText = post.content.slice(0, 200);

          return (
            <Card
              key={post.id}
              className="w-full bg-white rounded-[10px] shadow-[0px_4px_4px_2px_#00000040] border-0 animate-fade-in"
              style={{ "--animation-delay": `${400 + index * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Image */}
                  <img
                    className="w-full sm:w-[292px] h-[180px] sm:h-[200px] rounded-[10px] object-cover"
                    src={`https://picsum.photos/292/200?random=${post.id}`}
                    alt={`${activeCategory} related`}
                  />

                  {/* Content */}
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src={`https://i.pravatar.cc/40?u=${post.author.replace(/\s+/g, "")}`}
                          alt={post.author}
                        />
                        <AvatarFallback className="bg-[#d9d9d9] text-xs sm:text-sm">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-black text-sm sm:text-base">
                          {post.author}
                        </div>
                        <div className="font-medium text-[#666666] text-[10px] sm:text-xs">
                          {post.role}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <img
                          className="w-3 sm:w-[13px] h-[2px] sm:h-[3px]"
                          alt="More options"
                          src="https://c.animaapp.com/mfdi4vp321jtYQ/img/vector-5.svg"
                        />
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="font-normal text-black text-xs sm:text-sm leading-relaxed">
                      {isExpanded ? post.content : `${previewText}...`}
                      <button
                        onClick={() => handleToggleExpand(post.id)}
                        className="ml-1 text-[#a81717] font-medium hover:underline text-xs sm:text-sm"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    </div>

                    {/* Like Button */}
                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => handleLikeClick(post.id)}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill={likedPosts.has(post.id) ? "#a81717" : "none"}
                            stroke={likedPosts.has(post.id) ? "#a81717" : "currentColor"}
                            strokeWidth="2"
                            className="w-5 h-5"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </div>
                        <span className="font-medium text-[#666666] text-xs sm:text-sm">
                          {post.likes}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
