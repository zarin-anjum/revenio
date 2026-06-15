import Link from "next/link";
import { Calendar, MapPin, Star, ArrowRight } from "lucide-react";

const featured = [
  {
    id: "1",
    title: "Tech Summit 2025",
    category: "Technology",
    date: "Sep 10, 2025",
    location: "Dhaka",
    price: 49,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Music & Beats Concert",
    category: "Music",
    date: "Nov 15, 2025",
    location: "Sylhet",
    price: 25,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    category: "Business",
    date: "Aug 22, 2025",
    location: "Dhaka",
    price: 0,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop",
  },
];

export default function FeaturedEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Handpicked for You
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don't miss out on the most anticipated events happening across Bangladesh this season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {event.category}
                </span>
                <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {event.price === 0 ? "Free" : `$${event.price}`}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-indigo-600 transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-1.5 mb-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {event.rating}
                  </div>
                </div>
                <Link
                  href={`/items/${event.id}`}
                  className="block w-full text-center bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/items"
            className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}