'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  // FIX: Initialize with an empty string, not a dynamic value.
  const [year, setYear] = useState('');

  // This hook runs only on the client, after the initial render.
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ABC Research</h3>
            <p className="text-gray-400">Your partner in digital transformation. We deliver excellence and innovation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/offerings/cloud-services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: abcresearch@gmail.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>33 Granby st, Toronto, ON</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer" aria-label="Twitter">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          {/* This will render the year only after client-side hydration is complete */}
          <p>&copy; {year} ABC Research. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};