import React, { useState } from "react";

const CategoryTag = ({ category }) => {
  const categoryStyles = {
    Article: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    "Case Study": "bg-amber-50 text-amber-700 border border-amber-200",
    Video: "bg-rose-50 text-rose-700 border border-rose-200",
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
        opacity-0 translate-y-8 font-poppins
        ${index < visiblePosts ? "animate-fadeIn" : ""}
      `}
      style={{
        animationDelay: isNewlyVisible ? `${(index % 3) * 150}ms` : "0ms",
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
              {/* <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              /> */}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {post.author.name}
              </p>
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
      category: "Video",
      title:
        "Start-up Ideas: Robot for Patrolling and Surveillance by IIT Kanpur Students",
      description:
        "This robot dog has been prepared. It competed with a real dog in the trial.",
      image: "/images/iitk.jpg",
      author: {
        name: "Times of India",
        avatar: "/api/placeholder/40/40",
      },
      date: "Nov 13, 2024",
      link: "https://timesofindia.indiatimes.com/city/kanpur/innovative-startups-from-iit-kanpurs-siic-transforming-defence-robotics-and-semiconductor-industries/articleshow/115189662.cms",
    },
    {
      id: 2,
      category: "Article",
      title:
        "IIT Kanpur students then showed awesome, crafted robotic dog, learn specialty",
      description:
        "IIT Kanpur students have designed a robot dog equipped with technical facilities that is capable of going to every dangerous place. This dog can carry five forts.",
      image: "/images/team/1.png",
      author: {
        name: "ABP Live ",
        avatar: "/api/placeholder/40/40",
      },
      date: "Nov 12, 2024",
      link: "https://www.abplive.com/states/up-uk/iit-kanpur-students-prepared-robotic-dog-will-protect-the-house-ann-2821509",
    },
    {
      id: 3,
      category: "Article",
      title:
        "India's first robot dog: Will help in intelligence gathering for army and police, IIT Kanpur prepared",
      description:
        "Dog is said to be the most loyal animal. That is why people keep dogs in their homes so that they can keep an eye on their house and also alert them if any outsider enters the house. Dogs are used by the police in a similar manner.",
      image: "/images/Public.png",
      author: {
        name: "Bhaskar",
        avatar: "/api/placeholder/40/40",
      },
      date: "March 20, 2024",
      link: "https://www.bhaskar.com/local/uttar-pradesh/kanpur/news/iit-kanpur-made-dog-robot-132756408.html",
    },
    {
      id: 4,
      category: "Article",
      title: "IIT Kanpur innovates to add to defense infra of India",
      description:
        "The Start-up Incubation and Innovation Centre (SIIC) at IIT Kanpur, one of India’s oldest and most distinguished technology business incubators founded in 2000, today showcased three pioneering start-ups, VU Dynamics, xTerra Robotics, and Ananant Systems .",
      image: "/images/img/svanM2IITK.jpeg",
      author: {
        name: "The Lucknow Tribune",
        avatar: "/api/placeholder/40/40",
      },
      date: "Nov 12, 2024",
      link: "https://thelucknowtribune.org/iit-kanpur-innovates-to-add-to-defense-infra-of-india/",
    },
    {
      id: 5,
      category: "Article",
      title:
        "IIT Kanpur’s Startup Incubation and Innovation Centre Showcases Groundbreaking Startups in Defense, Robotics, and Semiconductor Technologies",
      description:
        "The Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk), one of India’s oldest and most distinguished technology business incubators founded in 2000, showcased three pioneering startups, VU Dynamics, xTerra Robotics, and Ananant Systems, engaged in developing breakthrough technologies in defense, robotics, and semiconductor infrastructure. ",
      image: "/images/iitk.jpg",
      author: {
        name: "IIT Kanpur",
        avatar: "/api/placeholder/40/40",
      },
      date: "Nov 13, 2024",
      link: "https://www.linkedin.com/posts/indian-institute-of-technology-kanpur_startupindia-startups-innovation-activity-7262076583060938753-N3_j/?utm_source=share&utm_medium=member_android",
    },
    {
      id: 6,
      category: "Video",
      title:
        "IIT Kanpur News: What did the IIT Kanpur students make jokingly?",
      description:
        "IIT Kanpur students have developed a robot dog that can easily reach dangerous places. This robot has been named M-2, and it looks like a dog, with movements similar to that of a dog. The robot can rotate 360 degrees and can carry up to 5 kg of weight to any location.",
      image: "/images/img/Img1_lab.jpeg",
      author: {
        name: "UP Tak",
        avatar: "/api/placeholder/40/40",
      },
      date: "Nov 12, 2024",
      link: "https://www.youtube.com/watch?v=bs-yE2_rxrQ",
    },
  ];

  const handleSeeMore = () => {
    setIsAnimating(true);
    setVisiblePosts(blogPosts.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleSeeLess = () => {
    setVisiblePosts(3);
    window.scrollTo({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-white font-poppins">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600">
            Discover our latest thoughts on robotics, automation, and
            technological innovation.
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#101820] hover:bg-[#2c3e50] transition-colors duration-300"
            >
              See More
            </button>
          )}
          {visiblePosts > 3 && !isAnimating && (
            <button
              onClick={handleSeeLess}
              className="inline-flex items-center px-6 py-3 border border-[#101820] text-base font-medium rounded-full text-[#101820] bg-white hover:bg-gray-50 transition-colors duration-300"
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
