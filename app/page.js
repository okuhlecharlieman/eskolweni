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
              <h3 className="text-2xl font-bold mb-4">
                Feature One: Anytime, Anywhere Access
              </h3>
              <p className="text-gray-600">
                At Eskolweni, we understand the importance of flexibility in
                learning. Our mobile-friendly platform ensures that learners can
                access courses and materials anytime, anywhere. Whether you’re
                commuting, at home, or on a break, our dedicated mobile app
                promotes learning on the go, making education accessible to
                everyone.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-8">
                {/* <Image src="/boy.jfif" alt="Feature 3" width={64} height={64} /> */}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Feature Two: Inclusive Learning Options
              </h3>
              <p className="text-gray-600">
                We believe that education should be available to all. That’s why
                Eskolweni offers both free and paid options for our Learning
                Management System (LMS). This approach allows individuals and
                organizations to choose the plan that best fits their needs,
                ensuring that everyone has the opportunity to learn and grow.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-8">
                {/* <Image src="/boy.jfif" alt="Feature 3" width={64} height={64} /> */}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Feature Three: Global Learning Empowerment
              </h3>
              <p className="text-gray-600">
                Education knows no boundaries. Our LMS empowers learners from
                around the world to acquire knowledge and skills at their own
                pace. With a diverse range of courses available, anyone from
                anywhere can engage in meaningful learning experiences,
                regardless of their location. This revised version enhances
                clarity, engagement, and the overall presentation of your LMS
                features. Let me know if you need any further adjustments or
                additional content!
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
