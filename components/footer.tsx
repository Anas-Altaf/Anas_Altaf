import React from "react";
import { Home, Mail, FileText, Github, Linkedin, Twitter } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Home size={20} />
              <span className="font-semibold">Anas Altaf</span>
            </div>

            <div className="space-y-2 text-sm">
              <p>© o2omation.com. All Rights Reserved</p>
              {/* <p>Faisalabad, Punjab, Pakistan</p> */}
              <p className="mt-4">+92 (310) 4889407 </p>
              <p>anasaltaf35@gmail.com</p>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="space-y-4 md:text-right">
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3 text-sm md:items-end">
              <a
                href="mailto:anasaltaf35@gmail.com"
                className="hover:text-white transition-colors flex items-center gap-2 md:flex-row-reverse"
              >
                <Mail size={16} />
                Contact Us
              </a>
              <a
                href="https://medium.com/@anasaltaf"
                className="hover:text-white transition-colors flex items-center gap-2 md:flex-row-reverse"
              >
                <FileText size={16} />
                Blog
              </a>
            </nav>

            {/* Social Links */}
            <div className="flex gap-4 mt-6 md:justify-end">
              <a
                href="https://github.com/Anas-Altaf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <IconBrandGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/anasaltaf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <IconBrandLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/anas0altaf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <IconBrandX size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="mt-12 flex justify-end">
          <div className="text-gray-600 text-6xl font-bold  tracking-wider opacity-90">
            o<span className="text-7xl">2</span>o
          </div>
        </div>
      </div>
    </footer>
  );
}
