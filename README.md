# 🗓️ Revenio — Event Management Platform

> Discover, manage, and attend the best events happening across Bangladesh — all in one place.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange?style=flat-square&logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

---

## 🌐 Live Demo

**[https://revenio-puce.vercel.app](https://revenio-puce.vercel.app)**

---

## 📌 About The Project

Revenio is a modern event discovery and management platform built as part of a Next.js assessment. It allows users to browse events across Bangladesh, filter by category and price, view detailed event pages, and manage their own events after authenticating with Firebase.

---

## ✨ Key Features

- 🔍 **Search & Filter** — Search events by name, filter by category and price range
- 📋 **Event Details** — Full event info with specs, location, seats, and related events
- 🔐 **Firebase Auth** — Email/Password login and Google OAuth sign-in
- ➕ **Add Events** — Authenticated users can add their own events
- 🗂️ **Manage Events** — Dashboard to view and delete events
- 🛡️ **Protected Routes** — Automatic redirect to login for unauthenticated users
- 🔔 **Toast Notifications** — Instant feedback for all user actions
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Frontend framework & routing |
| Tailwind CSS v4 | Styling & responsive design |
| Firebase Authentication | Login, Register, Google OAuth |
| localStorage | Persisting user-added events |
| lucide-react | Icon library |
| react-hot-toast | Toast notifications |
| Vercel | Deployment & hosting |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                  # Landing page (/)
│   ├── about/
│   │   └── page.js              # About page (/about)
│   ├── login/
│   │   └── page.js              # Login page (/login)
│   ├── register/
│   │   └── page.js              # Register page (/register)
│   └── items/
│       ├── page.js              # Events listing (/items)
│       ├── add/
│       │   └── page.js          # Add event — protected (/items/add)
│       ├── manage/
│       │   └── page.js          # Manage events — protected (/items/manage)
│       └── [id]/
│           └── page.js          # Event detail (/items/[id])
│
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx           # Sticky responsive navbar with auth dropdown
│   ├── Footer/
│   │   └── Footer.jsx           # Site footer
│   ├── EventCard/
│   │   └── EventCard.jsx        # Reusable event card component
│   ├── ProtectedRoute/
│   │   └── ProtectedRoute.jsx   # Auth guard component
│   └── home/
│       ├── Hero.jsx             # Hero section
│       ├── FeaturedEvents.jsx   # Featured events section
│       ├── Categories.jsx       # Event categories section
│       ├── WhyChooseUs.jsx      # Features section
│       ├── Testimonials.jsx     # Testimonials section
│       └── CTABanner.jsx        # Call to action banner
│
├── context/
│   └── AuthContext.js           # Global Firebase auth state
│
└── lib/
    ├── firebase.js              # Firebase app initialization
    └── events.js                # Static event data (8 events)
```

---

## 🗺️ Route Summary

| Route | Access | Description |
|---|---|---|
| `/` | Public | Landing page with hero and 4 content sections |
| `/items` | Public | Browse all events with search and filters |
| `/items/[id]` | Public | Full event detail page with related events |
| `/about` | Public | About Revenio — story, values, team |
| `/login` | Public | Firebase email and Google login |
| `/register` | Public | Firebase registration |
| `/items/add` | 🔒 Protected | Form to add a new event |
| `/items/manage` | 🔒 Protected | Table to view and delete all events |

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+
- A Firebase project with Authentication enabled

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/zarin-anjum/revenio.git
cd revenio
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables**

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**4. Run the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:3000
```

---

## 🔥 Firebase Setup

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project
3. Go to **Authentication → Sign-in method**
4. Enable **Email/Password** and **Google** providers
5. Go to **Project Settings → Your apps** → register a Web app
6. Copy the config values into your `.env.local`
7. After deploying, add your Vercel domain to **Authentication → Authorized domains**

---

## 👩‍💻 Author

**Zarin Anjum**
- GitHub: [@zarin-anjum](https://github.com/zarin-anjum)
- Live Project: [revenio-puce.vercel.app](https://revenio-puce.vercel.app)

---

## 📄 License

This project was built as part of a Next.js assessment task for **Programming Hero**.
