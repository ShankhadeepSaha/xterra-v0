import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const CategoryBadge = ({ category }) => {
  const styleVariants = {
    Article: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    Update: "bg-amber-50 text-amber-700 border border-amber-200",
    Press: "bg-rose-50 text-rose-700 border border-rose-200",
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        transition-all duration-300 hover:shadow-sm
        ${styleVariants[category]}
      `}
    >
      {category}
    </span>
  );
};

const NewsCard = ({ item }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-gray-100">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <CategoryBadge category={item.category} />
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {item.readTime} min read
          </div>
        </div>

        <a href={item.link} className="block group">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {item.title}
          </h3>
        </a>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {item.summary}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {item.date}
          </div>
          <a
            href={item.link}
            className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const newsItems = [
    {
      id: 1,
      category: "Article",
      title: "Introducing our new AI-powered analytics platform",
      summary:
        "We're excited to announce the launch of our latest innovation in data analytics, combining powerful AI capabilities with intuitive design.",
      date: "Oct 25, 2024",
      readTime: 5,
      link: "/news/ai-analytics-platform",
    },
    {
      id: 2,
      category: "Update",
      title: "Q3 2024 Product Updates and Roadmap",
      summary:
        "Discover what's new in our latest quarterly update and get a sneak peek at upcoming features and improvements.",
      date: "Oct 20, 2024",
      readTime: 3,
      link: "/news/q3-updates",
    },
    {
      id: 3,
      category: "Press",
      title: "Company named leader in Gartner Magic Quadrant",
      summary:
        "We're proud to announce our positioning as a Leader in the 2024 Gartner Magic Quadrant for Analytics Platforms.",
      date: "Oct 15, 2024",
      readTime: 4,
      link: "/news/gartner-recognition",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Title Section - Now above the hero image */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2">
            News & Media
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-2xl">
            Keep informed on the newest robotics innovations and industry
            developments.
          </p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="sm:px-4">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[680px] overflow-hidden">
          <Image
            src="/images/media.jpg"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4">
        {/* Latest Insights Section */}
        <div className="max-w-2xl mx-auto text-center mb-16 mt-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-almirego">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600">
            Discover our latest thoughts on robotics, automation, and
            technological innovation.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
