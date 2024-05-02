import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Backpacks R Us
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="banner h-96 flex items-center text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Explore the Great Outdoors with Our Backpacks
          </h1>
          <p className="text-lg mb-8">
            Discover our range of high-quality backpacks for all your
            adventures.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600"
          >
            Shop Now
          </a>
        </div>
      </header>

      {/* Remaining HTML Sections */}
      {/* Insert the remaining HTML sections here, such as Backpack Section, Key Features Section, Testimonials Section, Footer, etc. */}

      {/* Example: */}
      <section className="py-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/images/2.jpg" // Replace with the correct path to your image
              alt="Backpack"
              width={100}
              height={100}                   
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold mb-4">
              Discover Our Eco-Friendly Backpack
            </h2>
            <p className="text-gray-700 mb-4">
  Our eco-friendly travel backpack is designed with sustainability
  in mind. Made from recycled materials, it not only reduces
  environmental impact but also offers durability and style. With
  innovative storage solutions and water-resistant features, it&lsquo;s
  the perfect companion for your adventures.
</p>

            <a
              href="#"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
