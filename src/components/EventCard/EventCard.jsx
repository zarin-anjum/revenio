import Link from "next/link";
import { Calendar, MapPin, Star } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {event.category}
        </span>
        <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {event.price === 0 ? "Free" : `$${event.price}`}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{event.shortDesc}</p>
        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4 text-indigo-400" />
            {event.date}
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-indigo-400" />
            {event.location}
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
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
  );
}