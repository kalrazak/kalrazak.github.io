import React from 'react';

const About = () => {
	return (
		<section id="about" className="w-full py-20 px-6 sm:px-12 bg-transparent rounded-2xl shadow-lg mt-16 mb-16 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:bg-gray-100/50 backdrop-blur-md border border-gray-300/50">
			<h2 className="text-4xl font-bold text-gray-700 mb-6">About Me</h2>
			<p className="text-lg text-gray-600 mb-6">
				Hi, I'm <span className="font-semibold text-gray-800">Muhammad Haikal bin Abdul Razak</span>, a fresh graduate passionate about software development, web technologies, and building impactful digital experiences. I am eager to contribute, learn, and grow in a dynamic team environment.
			</p>
			<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
				<a
					href="/Resume.pdf"
					download
					className="inline-block bg-transparent hover:bg-gray-100/50 backdrop-blur-md border border-gray-300/50 text-black hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:-rotate-1 active:scale-95 shadow-lg hover:shadow-xl"
				>
					Download Resume
				</a>
				<span className="text-gray-400 text-sm">PDF, 1 page</span>
			</div>
		</section>
	);
};

export default About;
