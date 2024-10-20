import React from 'react';

const CategoryTag = ({ category }) => {
  const categoryColors = {
    Article: 'bg-green-100 text-green-800',
    'Case Study': 'bg-yellow-100 text-yellow-800',
    Video: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${categoryColors[category]}`}>
      {category}
    </span>
  );
};

const BlogPost = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <a href={post.link} className="block">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
    </a>
    <div className="p-6">
      <CategoryTag category={post.category} />
      <a href={post.link} className="block group">
        <h3 className="text-xl font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition-colors duration-300">{post.title}</h3>
      </a>
      <p className="text-gray-600 text-sm mb-4">{post.description}</p>
      <div className="flex items-center">
        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="text-sm font-semibold">{post.author.name}</p>
          <p className="text-xs text-gray-600">{post.date}</p>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Article",
      title: "How to boost conversion rates of your website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Wade Warren",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      date: "July 19, 2022",
      link: "/blog/boost-conversion-rates"
    },
    {
      id: 2,
      category: "Case Study",
      title: "How to use search engine optimisation to drive sales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Wade Warren",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      date: "July 19, 2022",
      link: "/blog/seo-drive-sales"
    },
    {
      id: 3,
      category: "Video",
      title: "How to design customer experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nisi quis viverra quisque arcu id risus in. Quis adipiscing hendrerit sed cras amet, tempus non augue.",
      image: "/placeholder.svg?height=200&width=300",
      author: {
        name: "Wade Warren",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      date: "July 19, 2022",
      link: "/blog/design-customer-experience"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-2">From the blog</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis odio dolor in feugiat aliquet nulla nec praesent id. Sed risus orci porttitor molestie amet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;