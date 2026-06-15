"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EventCard from "@/components/EventCard/EventCard";
import { events as staticEvents } from "@/lib/events";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  "All",
  "Technology",
  "Music",
  "Business",
  "Arts & Culture",
  "Health",
  "Food",
  "Gaming",
  "Education",
];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Free", min: 0, max: 0 },
  { label: "Under $20", min: 1, max: 20 },
  { label: "$20 - $50", min: 20, max: 50 },
  { label: "Above $50", min: 50, max: Infinity },
];

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(0);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const localEvents = JSON.parse(localStorage.getItem("events") || "[]");
    setAllEvents([...staticEvents, ...localEvents]);
  }, []);

  const filtered = allEvents.filter((event) => {
    const matchSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.shortDesc.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "All" || event.category === category;
    const range = priceRanges[priceRange];
    const matchPrice =
      event.price >= range.min && event.price <= range.max;
    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">

        <div className="bg-linear-to-br from-indigo-950 via-indigo-900 to-purple-900 py-14 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Browse All Events
            </h1>
            <p className="text-indigo-300 text-lg">
              Find the perfect event for you across Bangladesh
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
            <div className="flex flex-col md:flex-row gap-4">

              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div className="relative">
                <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="pl-11 pr-8 py-3 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none bg-white cursor-pointer w-full md:w-auto"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="px-4 py-3 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none bg-white cursor-pointer w-full md:w-auto"
                >
                  {priceRanges.map((range, i) => (
                    <option key={range.label} value={i}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            Showing <span className="font-semibold text-gray-900">{filtered.length}</span> events
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}