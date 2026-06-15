import Link from "next/link";
import { Zap, Shield, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
    title: "Easy Discovery",
    desc: "Find events by category, location, date, or price in seconds with our powerful search and filter system.",
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    title: "Secure & Trusted",
    desc: "All events are verified. Your data and payments are protected with industry-standard security.",
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: "Real-time Updates",
    desc: "Get instant notifications about event changes, new listings, and exclusive early-bird offers.",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: "Community Driven",
    desc: "Join thousands of event-goers sharing experiences, reviews, and recommendations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Revenio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Smarter Way to
              <span className="text-indigo-600"> Experience Events</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We built Revenio to make discovering and managing events effortless. Whether you're an attendee or an organizer, everything you need is right here.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "No hidden fees or surprise charges",
                "Filter by price, category, location & more",
                "Manage your own events from a dashboard",
                "Works beautifully on mobile & desktop",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/items"
              className="inline-flex items-center gap-2 mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Explore Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}