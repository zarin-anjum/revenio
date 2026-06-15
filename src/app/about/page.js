import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Calendar, Target, Heart, Globe, Users, Zap } from "lucide-react";

const team = [
  {
    name: "Zarin Ahmed",
    role: "Founder & CEO",
    avatar: "Z",
    bio: "Passionate about connecting people through meaningful experiences.",
  },
  {
    name: "Rafiul Islam",
    role: "Lead Developer",
    avatar: "R",
    bio: "Building the tech that powers Bangladesh's event ecosystem.",
  },
  {
    name: "Nusrat Jahan",
    role: "Head of Operations",
    avatar: "N",
    bio: "Ensuring every event listed on Revenio meets our quality standards.",
  },
];

const values = [
  {
    icon: <Target className="w-6 h-6 text-indigo-600" />,
    title: "Our Mission",
    desc: "To make event discovery effortless and empower organizers to reach their audience across Bangladesh.",
  },
  {
    icon: <Heart className="w-6 h-6 text-indigo-600" />,
    title: "Our Passion",
    desc: "We believe in the power of shared experiences to build stronger, more connected communities.",
  },
  {
    icon: <Globe className="w-6 h-6 text-indigo-600" />,
    title: "Our Reach",
    desc: "From Dhaka to Chittagong, we cover events in all 8 divisions of Bangladesh and growing.",
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
    title: "Our Vision",
    desc: "To become South Asia's most trusted platform for discovering and managing live events.",
  },
];

const stats = [
  { value: "500+", label: "Events Listed" },
  { value: "50K+", label: "Happy Attendees" },
  { value: "8", label: "Divisions Covered" },
  { value: "2025", label: "Founded" },
];

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16 min-h-screen">

        <div className="bg-linear-to-br from-indigo-950 via-indigo-900 to-purple-900 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              About Revenio
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Connecting People Through
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Unforgettable Events
              </span>
            </h1>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl mx-auto">
              Revenio was born out of a simple idea — finding great events in Bangladesh shouldn't be hard. We built a platform that makes discovery, management, and attendance seamless for everyone.
            </p>
          </div>
        </div>

        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-indigo-600 mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  Our Story
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why We Built Revenio
                </h2>
                <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
                  <p>
                    In 2025, our founder Zarin attended a tech conference in Dhaka — but almost missed it because event information was scattered across Facebook groups, WhatsApp messages, and random websites.
                  </p>
                  <p>
                    That frustrating experience sparked an idea: what if there was one place where people could discover, explore, and keep track of every event happening across Bangladesh?
                  </p>
                  <p>
                    Revenio was built to solve exactly that problem. Today we serve tens of thousands of event-goers and hundreds of organizers, making Bangladesh's event scene more accessible than ever.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-600 rounded-2xl p-6 text-white flex flex-col justify-between h-40">
                  <Users className="w-8 h-8 opacity-80" />
                  <div>
                    <p className="text-2xl font-bold">50K+</p>
                    <p className="text-indigo-200 text-sm">Active Users</p>
                  </div>
                </div>
                <div className="bg-purple-600 rounded-2xl p-6 text-white flex flex-col justify-between h-40 mt-6">
                  <Calendar className="w-8 h-8 opacity-80" />
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-purple-200 text-sm">Events Listed</p>
                  </div>
                </div>
                <div className="bg-indigo-100 rounded-2xl p-6 flex flex-col justify-between h-40">
                  <Globe className="w-8 h-8 text-indigo-400" />
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">8</p>
                    <p className="text-indigo-400 text-sm">Divisions</p>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-between h-40 mt-6">
                  <Zap className="w-8 h-8 opacity-80" />
                  <div>
                    <p className="text-2xl font-bold">4.8★</p>
                    <p className="text-gray-400 text-sm">Avg Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                What Drives Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                The People
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A small but passionate team dedicated to making events accessible to everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}