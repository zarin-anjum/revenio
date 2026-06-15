import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-950 via-indigo-900 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Zap className="w-4 h-4" />
          Bangladesh's #1 Event Platform
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Events That
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
            Move You
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-indigo-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          From tech summits to music concerts, find and manage the best events happening across Bangladesh — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/items"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/25"
          >
            Browse Events
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
          >
            Get Started Free
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 pt-16 border-t border-white/10">
          {[
            { value: "500+", label: "Events Listed" },
            { value: "50K+", label: "Happy Attendees" },
            { value: "8", label: "Cities Covered" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-indigo-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
