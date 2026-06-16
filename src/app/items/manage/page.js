"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { events as staticEvents } from "@/lib/events";
import toast from "react-hot-toast";
import { Eye, Trash2, Plus, Calendar, MapPin, Tag } from "lucide-react";

function ManageEventsContent() {
  const router = useRouter();
  const [allEvents, setAllEvents] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const localEvents = JSON.parse(localStorage.getItem("events") || "[]");
    setAllEvents([...staticEvents, ...localEvents]);
  }, []);

  const handleDelete = (id) => {
    if (id.startsWith("local-")) {
      const localEvents = JSON.parse(localStorage.getItem("events") || "[]");
      const updated = localEvents.filter((e) => e.id !== id);
      localStorage.setItem("events", JSON.stringify(updated));
      setAllEvents([...staticEvents, ...updated]);
      toast.success("Event deleted successfully");
    } else {
      toast.error("Static events cannot be deleted");
    }
    setDeleteId(null);
  };

  return (
    <div>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">

        <div className="bg-linear-to-br from-indigo-950 via-indigo-900 to-purple-900 py-14 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Manage Events
              </h1>
              <p className="text-indigo-300">
                View and manage all events on Revenio
              </p>
            </div>
            <button
              onClick={() => router.push("/items/add")}
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 rounded-xl font-semibold transition-colors duration-200 w-fit"
            >
              <Plus className="w-4 h-4" />
              Add New Event
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Events", value: allEvents.length },
              { label: "Static Events", value: staticEvents.length },
              { label: "Your Events", value: allEvents.length - staticEvents.length },
              { label: "Categories", value: [...new Set(allEvents.map((e) => e.category))].length },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">
                All Events ({allEvents.length})
              </h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {allEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&auto=format&fit=crop"}
                            alt={event.title}
                            className="w-10 h-10 rounded-lg object-cover shrink-0"
                          />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{event.title}</p>
                            <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {event.location}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full">
                          <Tag className="w-3 h-3" />
                          {event.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                          <Calendar className="w-4 h-4 text-indigo-400" />
                          {event.date}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-900 text-sm">
                          {event.price === 0 ? "Free" : `$${event.price}`}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          event.id.startsWith("local-")
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {event.id.startsWith("local-") ? "Your Event" : "Static"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => router.push(`/items/${event.id}`)}
                            className="flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            View
                          </button>
                          <button
                            onClick={() => setDeleteId(event.id)}
                            className="flex items-center gap-1.5 bg-red-50 hover:bg-red-600 text-red-500 hover:text-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-100">
              {allEvents.map((event) => (
                <div key={event.id} className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&auto=format&fit=crop"}
                      alt={event.title}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{event.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{event.category} · {event.price === 0 ? "Free" : `$${event.price}`}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${
                      event.id.startsWith("local-")
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {event.id.startsWith("local-") ? "Yours" : "Static"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push(`/items/${event.id}`)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </button>
                    <button
                      onClick={() => setDeleteId(event.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-600 text-red-500 hover:text-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
              Delete Event?
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              {deleteId.startsWith("local-")
                ? "This event will be permanently deleted."
                : "Static events cannot be deleted."}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-xl transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ManageEventsPage() {
  return (
    <ProtectedRoute>
      <ManageEventsContent />
    </ProtectedRoute>
  );
}