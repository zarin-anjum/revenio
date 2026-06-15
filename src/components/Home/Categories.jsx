import Link from "next/link";

const categories = [
  { label: "Technology", icon: "💻", count: 12 },
  { label: "Music", icon: "🎵", count: 8 },
  { label: "Business", icon: "💼", count: 15 },
  { label: "Arts & Culture", icon: "🎨", count: 10 },
  { label: "Health", icon: "🏃", count: 6 },
  { label: "Food", icon: "🍔", count: 9 },
  { label: "Gaming", icon: "🎮", count: 7 },
  { label: "Education", icon: "📚", count: 11 },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Browse by Interest
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Event Categories
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whatever you're passionate about, there's an event waiting for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href="/items"
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl transition-all duration-200 group hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-4xl">{cat.icon}</span>
              <p className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {cat.label}
              </p>
              <p className="text-sm text-gray-400">{cat.count} Events</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}