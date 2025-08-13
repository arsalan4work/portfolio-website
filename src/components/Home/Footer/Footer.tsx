import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900/70 p-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <h1 className="text-sm sm:text-base text-white/70">
          © {new Date().getFullYear()} Arsalan Portfolio Website
        </h1>

        <Link
          href="https://github.com/arsalan4work"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/80 hover:text-white transition"
        >
          <FaGithub size={20} />
          <span className="hidden sm:inline">View on GitHub</span>
        </Link>
      </div>
    </footer>
  );
}
