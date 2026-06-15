"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EventCard from "@/components/EventCard/EventCard";
import { events as staticEvents } from "@/lib/events";
import { Calendar, MapPin, Star, Users, ArrowLeft, Clock, Tag } from "lucide-react";

export default function ItemDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const localEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const allEvents = [...staticEvents, ...localEvents];
    const found = allEvents.find((e) => e.id === id);
    setEvent(found || null);

    if (found) {
      const relatedEvents = allEvents
        .filter((e) => e.category === found.category && e.id !== found.id)
        .slice(0, 3);
      setRelated(relatedEvents);
    }
  }, [id]);

  if (!event) {
    return (
      <div>
        <Navbar />
        <main className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <p className="text-5xl mb-4">😕</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
            <p className="text-gray-500 mb-6">The event you're looking for doesn't exist.</p>
            <button
              onClick={() => router.push("/items")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Back to Events
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">

        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 max-w-7xl mx-auto">
            <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {event.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-white">{event.title}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <button
            onClick={() => router.push("/items")}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 flex flex-col gap-6">

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-600 leading-relaxed">{event.fullDesc}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Event Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(event.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-indigo-50 rounded-xl p-4 text-center"
                    >
                      <p className="text-xs text-indigo-400 uppercase tracking-wider font-medium mb-1">
                        {key}
                      </p>
                      <p className="text-gray-900 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-20">

                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-indigo-600">
                    {event.price === 0 ? "Free" : `$${event.price}`}
                  </span>
                  <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{event.rating}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Date</p>
                      <p className="text-sm font-medium">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <MapPin className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm font-medium">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Users className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Available Seats</p>
                      <p className="text-sm font-medium">{event.seats}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Clock className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="text-sm font-medium">{event.specs.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Tag className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Category</p>
                      <p className="text-sm font-medium">{event.category}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
                  Register for Event
                </button>
                <p className="text-center text-gray-400 text-xs mt-3">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((e) => (
                  <EventCard key={e.id} event={e} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}