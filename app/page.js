// pages/index.jsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Eskolweni</h1>
          <p className="text-xl mb-8">
            Unlocking Education for Everyone, One Click at a Time.
          </p>
          <Link href="/courses">
            <div className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg uppercase tracking-wider hover:shadow-2xl">
              Get Started
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-8">
                {/* <Image
                  src="/boy.jfif"
                  alt="Feature 3"
                  width={200}
                  height={64}
                /> */}
              </div>
              <h3 className="text-2xl font-bold mb-4">Feature One</h3>
              <p className="text-gray-600">
                A brief description of the first feature of your web app.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-8">
                {/* <Image src="/boy.jfif" alt="Feature 3" width={64} height={64} /> */}
              </div>
              <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
              <p className="text-gray-600">
                A brief description of the second feature of your web app.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-8">
                {/* <Image src="/boy.jfif" alt="Feature 3" width={64} height={64} /> */}
              </div>
              <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
              <p className="text-gray-600">
                A brief description of the third feature of your web app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-6">
                "This web app is amazing! It has really helped me organize my
                work and stay productive."
              </p>
              <h3 className="text-xl font-bold">John Doe</h3>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-6">
                "I can't imagine my life without this app now. It's a game
                changer!"
              </p>
              <h3 className="text-xl font-bold">Jane Smith</h3>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-6">
                "The features are incredibly useful and the interface is very
                user-friendly."
              </p>
              <h3 className="text-xl font-bold">Alice Johnson</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied users who are using our web app to
            improve their productivity.
          </p>
          <Link href="/courses">
            <div className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg uppercase tracking-wider hover:shadow-2xl">
              Sign Up Now
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Eskolweni. All rights reserved.</p>
      </footer>
    </div>
  );
}
