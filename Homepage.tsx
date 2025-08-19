"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-700">FouraEthiopia 🌍📚</h1>
        <nav className="space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="/subjects" className="text-gray-600 hover:text-blue-600">Subjects</a>
          <a href="/quizzes" className="text-gray-600 hover:text-blue-600">Quizzes</a>
          <a href="/payment" className="text-gray-600 hover:text-blue-600">Payment</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Empowering Ethiopian Students Through Learning
        </motion.h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          FouraEthiopia is an all-in-one educational platform for Ethiopian university students.  
          Access study notes, quizzes, past exams, tutorials, and more — verified and updated by your peers and mentors.
        </p>
        <div className="mt-8 space-x-4">
          <Button asChild>
            <a href="/register">Get Started</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/about">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl shadow-lg bg-white">
          <h3 className="text-xl font-semibold text-blue-700">📚 Study Materials</h3>
          <p className="mt-2 text-gray-600">Access notes, PDF resources, and tutorials for all university subjects from first year onwards.</p>
        </div>
        <div className="p-6 rounded-2xl shadow-lg bg-white">
          <h3 className="text-xl font-semibold text-blue-700">📝 Quizzes & Exams</h3>
          <p className="mt-2 text-gray-600">Practice quizzes and past exams to test yourself, track your progress, and climb the leaderboard.</p>
        </div>
        <div className="p-6 rounded-2xl shadow-lg bg-white">
          <h3 className="text-xl font-semibold text-blue-700">🌍 Community</h3>
          <p className="mt-2 text-gray-600">Join forums, discussions, and mentorship programs to collaborate and grow with peers.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} FouraEthiopia | Built by Habtamu Ayele Adane</p>
      </footer>
    </main>
  );
      }
