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
      category: "Press",
      title: "Start-up Ideas: Robot for Patrolling and Surveillance by IIT Kanpur Students",
      summary:
        "This robot dog has been prepared. It competed with a real dog in the trial.",
      date: "Feb 7, 2024",
      readTime: 3,
      link: "https://hindi.news18.com/news/uttar-pradesh/kanpur-indias-first-robot-dog-will-help-in-intelligence-for-army-and-police-8165162.html",
    },
    {
      id: 2,
      category: "Press",
      title: "UP This Hour: This robot is acting like a dog. Svan M2 Robot || IIT Kanpur",
      summary:
        "Swan M-2: This robot is very useful. This robot runs on battery whose battery backup is about one hour. There is a camera installed in it for its monitoring and it is operated remotely. This robot can also jump when needed.",
      date: "May 28, 2024",
      readTime: 4,
      link: "https://www.youtube.com/watch?v=ZNp3axeLv3g",
    },
    {
      id: 3,
      category: "Press",
      title: "India's first robot dog: Will help in intelligence gathering for army and police, IIT Kanpur prepared",
      summary:
        "Dog is said to be the most loyal animal. That is why people keep dogs in their homes so that they can keep an eye on their house and also alert them if any outsider enters the house. Dogs are used by the police in a similar manner.",
      date: "March 20, 2024",
      readTime: 7,
      link: "https://www.bhaskar.com/local/uttar-pradesh/kanpur/news/iit-kanpur-made-dog-robot-132756408.html",
    }
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
            src="/images/stock.jpg"
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
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600">
            Discover our latest break through on robotics, automation, and
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
