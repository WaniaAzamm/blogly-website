import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            About{" "}
            <span className="text-xl text-blue-500">
              B<span className="text-xl text-white">logly</span>
            </span>
          </h4>
          <p className="text-gray-400">
            Blogly is your go-to platform for insightful articles, tips, and
            resources. Whether you re looking for lifestyle hacks or tech
            guides, we have it all.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-purple-500 transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-500 transition-all">
                About Us
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-purple-500 transition-all">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-500 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
          <p className="text-gray-400">
            Stay updated with our latest blog posts and news.
          </p>
          <form className="mt-4 flex flex-col space-y-3">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-3 justify-center sm:justify-start">
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white text-2xl transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white text-2xl transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white text-2xl transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white text-2xl transition-all"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500">
          &copy; 2024{" "}
          <span className="text-xl text-blue-500">
            B<span className="text-xl text-white">logly</span>
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
