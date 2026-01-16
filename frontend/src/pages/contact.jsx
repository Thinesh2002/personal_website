import React from "react";

export default function Contact() {
    return (
        <div className="bg-[#0b0f19] text-white min-h-screen">
            <div className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-12">   
                    Get in <span className="text-orange-500">Touch</span>
                </h2>
                <form className="max-w-2xl mx-auto bg-[#121826] p-8 rounded-lg">    
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium" htmlFor="name">
                            Name

                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 rounded-lg bg-[#1e2233] border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 rounded-lg bg-[#1e2233] border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-3 rounded-lg bg-[#1e2233] border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}