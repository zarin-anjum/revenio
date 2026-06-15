import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arif Hassan",
    role: "Software Engineer",
    text: "Revenio made it incredibly easy to find tech events in Dhaka. I've attended 3 conferences this year through the platform!",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Nusrat Jahan",
    role: "Event Organizer",
    text: "Managing my events through Revenio's dashboard is a breeze. The interface is clean and everything just works.",
    rating: 5,
    avatar: "N",
  },
  {
    name: "Rafiul Islam",
    role: "University Student",
    text: "Found so many free events to attend near Chittagong. Great platform for students on a budget!",
    rating: 4,
    avatar: "R",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
            What People Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from real attendees and organizers across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}