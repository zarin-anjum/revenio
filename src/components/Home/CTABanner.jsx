import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-linear-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Find Your Next Event?
        </h2>
        <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
          Join over 50,000 event-goers who use Revenio to discover amazing experiences across Bangladesh.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 shadow-lg"
          >
            Create Free Account
          </Link>
          <Link
            href="/items"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </section>
  );
}