import Image from "next/image";;
import whiteLogo from '/images/white-logo.png';
import gw from '/images/g4.jpg';
import gnine from '/images/g9.jpg';
import four from '/images/4.jpg';
import three from '/images/3.jpg';
import five from '/images/5.jpg';
import gthree from '/images/g3.jpg';
import gtwo from '/images/g2.jpg';
import twos from '/images/2.jpg';
import onew from '/images/1.jpg';
import gsix from '/images/g6.jpg';
import gfive from '/images/g5.jpg';
import logoa from '/images/l1.png';
import logob from '/images/l2.png';
import logoc from '/images/l3.png';
import logod from '/images/l4.png';
import logoe from '/images/l5.png';
import clientimg from '/images/client.avif';



export default function Home() {
  return (
    <>
    <nav className="bg-bg-transparent  text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
           <Image src={whiteLogo} alt="Backpack" className="w-40" />
            <ul className="flex space-x-4">
				<li><button className="bg-white hover:bg-gray-900 hover:text-white text-black font-bold py-2 px-4 rounded-full">
 Contact Us
</button></li>
            </ul>
        </div>
    </nav>


    <section className="banner h-96 flex items-center text-white" style={{
  marginTop: '-87px',
  backgroundImage: 'url("https://homedecor.uniworktechnologies.com/wp-content/uploads/2024/05/12.webp")', 
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  height: "100vh"
}}>
        <div className="container mx-auto text-center max-w-800 bg-black bg-opacity-25 p-10 w-full">
             <h1 className="mb-4 text-4xl font-extrabold leading-11 sm:leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">Explore the Great Outdoors with  <span className="underline underline-offset-3 decoration-8 decoration-white-400 dark:decoration-blue-600">Our Backpacks</span></h1>
             <p className="text-lg font-normal text-white-500 lg:text-2xl dark:text-white-400">Discover our range of high-quality backpacks for all your adventures.</p>
        </div>
    </section>

<section className="py-12 bg-white">
    <div className="container px-4 md:px-0 2xl:gap-20 sm:gap-6 mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
            <Image  src={gw} alt="Backpack" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-12">
         <div className="inline-block border border-black px-4 py-2 mb-8">
    <p>About Us</p>
      </div>
            <h2 className="text-3xl font-semibold mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Discover Our Eco-Friendly Backpack</h2>
            <p className="text-gray-700 mb-4">Our eco-friendly travel backpack is designed with sustainability in mind. Made from recycled materials, it not only reduces environmental impact but also offers durability and style. With innovative storage solutions and water-resistant features, it&apos;s the perfect companion for your adventures.</p>
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8">
    <div className="border border-black p-4 text-center">
        <h3 className="font-bold text-lg sm:text-3xl">7K+</h3>
        <p className="leading-6 sm:leading-8">Happy Customers</p>
    </div>
    <div className="border border-black p-4 text-center">
        <h3 className="font-bold text-lg sm:text-3xl">12,500</h3>
        <p className="leading-6 sm:leading-8">Products Available</p>
    </div>
    <div className="border border-black p-4 text-center">
        <h3 className="font-bold text-lg sm:text-3xl">4.8</h3>
        <p className="leading-6 sm:leading-8">Customer Rating</p>
    </div>
</div>
</div>
    </div>
</section>


<section className="py-12 bg-gray-100">
    <div className="container px-4 md:px-0 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
                <Image src={gnine} alt="Sustainable Materials" className="w-30 h-30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
                <p className="text-gray-700 text-center">Crafted using eco-friendly and recyclable materials.</p>
            </div>
            <div className="flex flex-col items-center">
               <Image src={four} alt="Sustainable Materials" className="w-30 h-30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovative Storage</h3>
                <p className="text-gray-700 text-center">Smart compartments and pockets for organized packing.</p>
            </div>
            <div className="flex flex-col items-center">
               <Image  src={three} alt="Sustainable Materials" className="w-30 h-30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Water-Resistant</h3>
                <p className="text-gray-700 text-center">Keeps your belongings safe from rain and moisture.</p>
            </div>
            <div className="flex flex-col items-center">
               <Image src={five} alt="Sustainable Materials" className="w-30 h-30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multiple Colors</h3>
                <p className="text-gray-700 text-center">Available in a variety of stylish colors.</p>
            </div>
        </div>
    </div>
</section>

  <section className="benbck py-12 relative overflow-hidden" style={{ backgroundImage: 'url("https://homedecor.uniworktechnologies.com/wp-content/uploads/2024/05/7-scaled.jpg")',  backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover', padding: '100px 0px' }}>
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="container px-4 md:px-0 mx-auto relative z-10 flex flex-col justify-center items-center text-center">
	  
               <h2 className="text-5xl font-semibold text-white mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Elevate Your Travel Experience</h2>
        <p className="text-lg text-white mb-10">Discover the unmatched benefits of our eco-friendly travel backpacks.</p>
    </div>
</section>

<div className="sm:flex grid justify-center sm:gap-4 sm:pb-8 sm:pt-8 items-center py-6 border-b border-b-solid border-gray-300">
    <p className="ml-4 mb-4 text-xl 	sm:mb-0 text-center">As Seen In :</p> 
    <Image  src={logoa} alt="Logo 1" className="w-40 mx-6 my-6" />

    <Image src={logob} alt="Logo 2" className="w-40 mx-6 my-6" />

    <Image src={logoc} alt="Logo 3" className="w-40 mx-6 my-6" />

    <Image src={logod}alt="Logo 4" className="w-40 mx-6 my-6" />

    <Image src={logoe} alt="Logo 5" className="w-40 mx-6 my-6" />
</div>



<section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Explore Our Backpacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image  src={gthree} alt="Gallery Item 1" className="w-full h-auto hover:opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
				<div className="px-6"> 
                    <p className="text-lg leading-6">Perfect for day hikes, this backpack offers ample storage and comfortable straps.</p>
                </div>
				</div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image src={gtwo} alt="Gallery Item 2" className="w-full h-auto hover:opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
				<div className="px-6"> 
                    <p className="text-lg leading-6">Compact and lightweight, this backpack is perfect for everyday use or short trips.</p>
                </div>
				</div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image src={twos} alt="Gallery Item 3" className="w-full h-auto hover:opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
				<div className="px-6"> 
                   <p className="text-lg leading-6">This versatile backpack is great for traveling, with multiple compartments and a laptop sleeve.</p>
                </div>
				</div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image src={onew} alt="Gallery Item 4" className="w-full h-auto hover:opacity-75" /> 
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
				 <div className="px-6"> 
                   <p className="text-lg leading-6">Stay organized with this backpack, featuring multiple pockets and a water bottle holder.</p>
                </div>
				</div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image  src={gsix} alt="Gallery Item 5" className="w-full h-auto hover:opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
				<div className="px-6"> 
                   <p className="text-lg leading-6">A stylish choice for daily commutes, this backpack is both functional and fashionable.</p>
                </div>
				</div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image  src={gfive} alt="Gallery Item 6" className="w-full h-auto hover:opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
				<div className="px-6"> 
                    <p className="text-lg leading-6">Ideal for camping trips, this backpack is durable and weather-resistant.</p>
                </div>
				</div>
            </div>
        </div>
    </div>
</section>



<div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-20">
    <div className="lg:col-span-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

      <div className="mt-3 flex items-center">
        <div>
          <div className="flex items-center">
        
            <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
            </svg>
            <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
            </svg>
            <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
            </svg>
            <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
            </svg>
            <svg className="h-5 w-5 flex-shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
            </svg>
          </div>
          <p className="sr-only">4 out of 5 stars</p>
        </div>
        <p className="ml-2 text-sm text-gray-900">Based on 1624 reviews</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Review data</h3>

        <dl className="space-y-3">
          <div className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <p className="w-3 font-medium text-gray-900">5<span className="sr-only"> star reviews</span></p>
              <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>

                <div className="relative ml-3 flex-1">
                  <div  className="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                  <div style={{width: 'calc(1019 / 1624 * 100%)'}} className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                </div>
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">63%</dd>
          </div>
          <div className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <p className="w-3 font-medium text-gray-900">4<span className="sr-only"> star reviews</span></p>
              <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>

                <div className="relative ml-3 flex-1">
                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                  <div style={{width: 'calc(162 / 1624 * 100%)'}}  className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                </div>
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">10%</dd>
          </div>
          <div className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <p className="w-3 font-medium text-gray-900">3<span className="sr-only"> star reviews</span></p>
              <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>

                <div className="relative ml-3 flex-1">
                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                  <div style={{width: 'calc(97 / 1624 * 100%)'}}  className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                </div>
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">6%</dd>
          </div>
          <div className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <p className="w-3 font-medium text-gray-900">2<span className="sr-only"> star reviews</span></p>
              <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>

                <div className="relative ml-3 flex-1">
                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                  <div  style={{width: 'calc(199 / 1624 * 100%)'}}  className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                </div>
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">12%</dd>
          </div>
          <div className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <p className="w-3 font-medium text-gray-900">1<span className="sr-only"> star reviews</span></p>
              <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>

                <div className="relative ml-3 flex-1">
                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                  <div style={{width: 'calc(147 / 1624 * 100%)'}}   className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                </div>
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">9%</dd>
          </div>
        </dl>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
        <p className="mt-1 text-sm text-gray-600">If you’ve used this product, share your thoughts with other customers</p>

        <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full">Write a review</a>
      </div>
    </div>

    <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
      <h3 className="sr-only">Recent reviews</h3>

      <div className="flow-root">
        <div className="-my-12 divide-y divide-gray-200">
          <div className="py-12">
            <div className="flex items-center">
              <Image  src={clientimg} alt="Emily Selman." className="h-12 w-12 rounded-full" />
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">Emily Selman</h4>
                <div className="mt-1 flex items-center">
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p className="sr-only">5 out of 5 stars</p>
              </div>
            </div>

            <div className="mt-4 space-y-6 text-base italic text-gray-600">
              <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
            </div>
          </div>
		  
		   <div className="py-12">
            <div className="flex items-center">
              <Image src={clientimg} alt="Emily Selman." className="h-12 w-12 rounded-full"/>
              <div className="ml-4">
              <h4 className="text-sm font-bold text-gray-900">Eniya</h4>
                <div className="mt-1 flex items-center">
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p className="sr-only">5 out of 5 stars</p>
              </div>
            </div>

            <div className="mt-4 space-y-6 text-base italic text-gray-600">
              <p>I&apos;ve been using this bag for my weekend hiking trips, and it&apos;s fantastic. It&apos;s spacious enough to carry all my gear, including water bottles, snacks, a first aid kit, and more. The padded straps make it comfortable to wear for long periods, and the rugged construction holds up well to rough terrain. It&apos;s become an essential part of my outdoor adventures.</p>
            </div>
          </div>
		  
		   <div className="py-12">
            <div className="flex items-center">
              <Image src={clientimg} alt="Emily Selman." className="h-12 w-12 rounded-full" />
              <div className="ml-4">
                <h4 className="text-sm font-bold text-gray-900">Jessica Nguyen</h4>
                <div className="mt-1 flex items-center">
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p className="sr-only">5 out of 5 stars</p>
              </div>
            </div>

            <div className="mt-4 space-y-6 text-base italic text-gray-600">
              <p>I purchased this bag for my daily commute, and it&apos;s been a game-changer. Not only does it fit my laptop and all my work essentials, but it&apos;s also surprisingly stylish. The multiple compartments help me stay organized, and the durability is impressive. Definitely worth the investment.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>


<div className="bg-white py-0 sm:py-10">
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-10 sm:py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-20">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Get notified when we’re launching.</h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.</p>
      <form className="mx-auto mt-10 flex max-w-md gap-x-4">
      <label htmlFor="email-address" className="sr-only">Email address</label>
      <input 
        id="email-address" 
        name="email" 
        type="email" 
        autoComplete="email" 
        required 
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" 
        placeholder="Enter your email" 
      />
      <button 
        type="submit" 
        className="btn1 flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold bg-white hover:bg-gray-900 hover:text-white text-black font-bold py-2 px-4"
      >
        Notify me
      </button>
    </form>
      
    </div>
  </div>
</div>

    <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Backpacks R Us. All rights reserved.</p>
        </div>
    </footer>
    </>
  );
}
