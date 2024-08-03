import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>xTerra Robotics - Innovative Robotics Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.svg" alt="xTerra Robotics" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Solutions
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About Us
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Blog
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Header Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Discover Our Innovative Robotics Solutions
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Explore our cutting-edge products and experience the future of robotics.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Advanced Robotics Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our robotics solutions are designed to streamline processes, increase productivity, and reduce costs.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {/* Feature 1 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Icon */}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Advanced Robotics Solutions</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our robotics solutions are designed to streamline processes, increase productivity, and reduce costs.
                  </dd>
                </div>

                {/* Feature 2 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Icon */}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Innovative Design and Engineering</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We combine creativity and technical expertise to develop robots that are efficient, reliable, and adaptable.
                  </dd>
                </div>

                {/* Feature 3 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Icon */}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Seamless Integration and Scalability</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our solutions seamlessly integrate with existing systems and can be scaled to meet evolving needs.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Robotics Solutions
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {/* Service 1 */}
                <div className="relative">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Inspection in Construction</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our robots provide efficient and accurate inspections in construction sites, improving safety and productivity.
                  </p>
                </div>
                {/* Service 2 */}
                <div className="relative">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Oil and Gas Industry Solutions</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We offer specialized robotics for the oil and gas industry, enhancing operations in challenging environments.
                  </p>
                </div>
                {/* Service 3 */}
                <div className="relative">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Human-Machine Collaboration</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our robots are designed to work alongside humans, augmenting capabilities and improving efficiency.
                  </p>
                </div>
                {/* Service 4 */}
                <div className="relative">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Autonomous Operation on Uneven Terrains</h3>
                  <p className="mt-2 text-base text-gray-500">
                    xTerra robots can navigate and operate autonomously on various challenging terrains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Benefits</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose xTerra Robotics
              </p>
            </div>
            <div className="mt-10">
              <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/* Icon */}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Improved Safety</h4>
                      <p className="mt-2 text-base text-gray-500">
                        Our robots reduce human exposure to hazardous environments, enhancing overall safety.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/* Icon */}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Increased Efficiency</h4>
                      <p className="mt-2 text-base text-gray-500">
                        xTerra robots optimize processes, leading to significant improvements in operational efficiency.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/* Icon */}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Enhanced Reliability</h4>
                      <p className="mt-2 text-base text-gray-500">
                        Our solutions are built to perform consistently in harsh and challenging environments.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/* Icon */}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Cost-Effective</h4>
                      <p className="mt-2 text-base text-gray-500">
                        By automating tasks and improving efficiency, our robots help reduce operational costs.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to revolutionize your operations?</span>
              <span className="block">Get in touch with us today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Discover how xTerra Robotics can transform your business with our cutting-edge solutions.
            </p>
            
              <a href="#"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              {/* Facebook icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              {/* Twitter icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              {/* LinkedIn icon */}
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 xTerra Robotics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}