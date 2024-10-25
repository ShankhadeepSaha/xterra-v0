import React, { useState } from 'react';

const CategoryTag = ({ category }) => {
  const categoryStyles = {
    Article: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    'Case Study': 'bg-amber-50 text-amber-700 border border-amber-200',
    Video: 'bg-rose-50 text-rose-700 border border-rose-200',
  };

  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        transition-all duration-300 hover:shadow-sm
        ${categoryStyles[category]}
      `}
    >
      {category}
    </span>
  );
};

const BlogPost = ({ post, index, visiblePosts }) => {
  const isNewlyVisible = index >= visiblePosts - 3;
  
  return (
    <div 
      className={`
        group bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl
        opacity-0 translate-y-8
        ${index < visiblePosts ? 'animate-fadeIn' : ''}
      `}
      style={{
        animationDelay: isNewlyVisible ? `${(index % 3) * 150}ms` : '0ms'
      }}
    >
      <a href={post.link} className="block relative overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      </a>
      <div className="p-6 space-y-4">
        <CategoryTag category={post.category} />
        
        <a href={post.link} className="block group">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h3>
        </a>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {post.description}
        </p>
        
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" 
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  const blogPosts = [
    {
      id: 1,
      category: "Article",
      title: "How to boost conversion rates of your website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/api/placeholder/600/400",
      author: {
        name: "Wade Warren",
        avatar: "/api/placeholder/40/40"
      },
      date: "July 19, 2022",
      link: "/blog/boost-conversion-rates"
    },
    {
      id: 2,
      category: "Case Study",
      title: "How to use search engine optimisation to drive sales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/api/placeholder/600/400",
      author: {
        name: "Wade Warren",
        avatar: "/api/placeholder/40/40"
      },
      date: "July 19, 2022",
      link: "/blog/seo-drive-sales"
    },
    {
      id: 3,
      category: "Video",
      title: "How to design customer experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/api/placeholder/600/400",
      author: {
        name: "Wade Warren",
        avatar: "/api/placeholder/40/40"
      },
      date: "July 19, 2022",
      link: "/blog/design-customer-experience"
    },
    {
      id: 4,
      category: "Video",
      title: "How to improve user engagement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/api/placeholder/600/400",
      author: {
        name: "Wade Warren",
        avatar: "/api/placeholder/40/40"
      },
      date: "July 19, 2022",
      link: "/blog/improve-user-engagement"
    },
    {
      id: 5,
      category: "Article",
      title: "The future of AI in business",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/api/placeholder/600/400",
      author: {
        name: "Wade Warren",
        avatar: "/api/placeholder/40/40"
      },
      date: "July 19, 2022",
      link: "/blog/ai-in-business"
    },
    {
      id: 6,
      category: "Case Study",
      title: "Building scalable systems",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/api/placeholder/600/400",
      author: {
        name: "Wade Warren",
        avatar: "/api/placeholder/40/40"
      },
      date: "July 19, 2022",
      link: "/blog/scalable-systems"
    }
  ];

  const handleSeeMore = () => {
    setIsAnimating(true);
    setVisiblePosts(blogPosts.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleSeeLess = () => {
    setVisiblePosts(3);
    window.scrollTo({
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-almirego">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600">
            Discover our latest thoughts on robotics, automation, and technological innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <BlogPost 
              key={post.id} 
              post={post} 
              index={index}
              visiblePosts={visiblePosts}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          {visiblePosts < blogPosts.length && !isAnimating && (
            <button
              onClick={handleSeeMore}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#4E148C] hover:bg-[#7939be] transition-colors duration-300"
            >
              See More
            </button>
          )}
          {visiblePosts > 3 && !isAnimating && (
            <button
              onClick={handleSeeLess}
              className="inline-flex items-center px-6 py-3 border border-[#4E148C] text-base font-medium rounded-full text-[#7939be] bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              See Less
            </button>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default BlogPage;