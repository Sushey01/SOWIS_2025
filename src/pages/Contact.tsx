import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-brown-800 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-[#f7f3ee] shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-center mb-8">
          Have questions or want to work with us? Get in touch!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-brown-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-brown-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-400"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block mb-1">Your Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-brown-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-400"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className=" bg-[#8B5E3C] w-full py-2 px-6 bg-brown-600 hover:bg-brown-700 text-white font-semibold rounded-xl"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 border-t pt-6 text-sm text-center text-brown-700">
          <p>Manager: Sandip Sijali Magar</p>
          <p>Email: contact.business.demo@gmail.com</p>
          <p>Phone: +977-9876543210</p>
          <div className="flex justify-center mt-4 gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
