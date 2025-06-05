import React from "react";
import { Github, BookOpen, Code } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">MemVisual</h2>
              <p className="text-gray-400 text-sm">
                An educational tool for visualizing OS memory allocation
              </p>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <BookOpen size={18} className="mr-2" />
                <span>Learn More</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Code size={18} className="mr-2" />
                <span>Documentation</span>
              </a>
              <a
                href="https://github.com/Kevin-Dobariyaa/MemVisual"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                target="_blank"
              >
                <Github size={18} className="mr-2" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
