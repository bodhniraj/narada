# 🚀 Narada AI – Smart Website Monitoring Platform

**Tagline:**  
*Because downtime should never surprise you.*

---

## 🧠 Product Description

Narada AI is a real-time website and API monitoring platform that proactively detects downtime, latency spikes, and failures before users are affected. It combines DevOps monitoring with AI-powered incident analysis to deliver actionable alerts, detailed logs, and intelligent summaries.

---

## 🔥 Core Features

### Monitoring Engine

- Website uptime monitoring (HTTP/HTTPS)
- API health checks
- Custom intervals (10s, 30s, 1min)

### Alerts System

- Email alerts
- Telegram alerts
- Cooldown system (avoid spam)
- Severity levels

### Dashboard

- Real-time status
- Response time graphs
- Incident timeline

### Logs

- Request history
- Status codes, latency
- Filtering & search

### AI Features

- Incident summaries
- Root cause suggestions
- Weekly reports

---

## 🎨 Frontend Folder Structure

```
frontend/
│
├── public/
│ └── index.html
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ ├── icons/
│ │ └── styles/
│ │ ├── main.scss
│ │ ├── variables.scss
│ │ ├── mixins.scss
│
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button.jsx
│ │ │ ├── Loader.jsx
│ │ │ ├── Modal.jsx
│ │
│ │ ├── dashboard/
│ │ │ ├── StatusCard.jsx
│ │ │ ├── UptimeChart.jsx
│ │ │ ├── IncidentList.jsx
│ │
│ │ ├── monitor/
│ │ │ ├── MonitorCard.jsx
│ │ │ ├── AddMonitorForm.jsx
│
│ ├── pages/
│ │ ├── Auth/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │
│ │ ├── Dashboard/
│ │ │ ├── Dashboard.jsx
│ │
│ │ ├── Monitors/
│ │ │ ├── Monitors.jsx
│ │ │ ├── MonitorDetails.jsx
│ │
│ │ ├── Logs/
│ │ │ ├── Logs.jsx
│ │
│ │ ├── Settings/
│ │ │ ├── Settings.jsx
│
│ ├── layouts/
│ │ ├── DashboardLayout.jsx
│ │ ├── AuthLayout.jsx
│
│ ├── services/
│ │ ├── api.js
│ │ ├── auth.service.js
│ │ ├── monitor.service.js
│
│ ├── store/
│ │ ├── authStore.js
│ │ ├── monitorStore.js
│
│ ├── hooks/
│ │ ├── useAuth.js
│ │ ├── useFetch.js
│
│ ├── utils/
│ │ ├── formatTime.js
│ │ ├── constants.js
│
│ ├── routes/
│ │ ├── AppRoutes.jsx
│
│ ├── App.jsx
│ ├── main.jsx
│
├── .env
├── package.json
```

## Pages

To build a world-class monitoring product that wins hackathons, you need to balance **functional utility** with **visual storytelling**.

Here are the **8 essential pages** you need to build for Narada AI, categorized by their purpose.

---

### 🌐 Part 1: The Public Facing Pages
*These pages are for users who aren't logged in yet. They sell the vision.*

**1. Landing Page (Home)**
*   **Purpose:** High-level overview, "Problem vs. Solution," and the AI "hook."
*   **Killer Feature:** Use your **Narada Red** for a "Live Incident Demo" section showing a site going down and the AI explaining why.

**2. Authentication (Login / Register)**
*   **Purpose:** User entry.
*   **Visual Strategy:** Keep it minimal. Deep black background, a single card in the center with a `border-white/5`, and a high-glow Red "Login" button.

---

### 📊 Part 2: The Dashboard (Post-Login)
*This is where the user spends 90% of their time.*

**3. Main Dashboard (Overview)**
*   **Purpose:** A "bird's-eye view" of all monitored assets.
*   **Content:** Large stat cards showing: Total Monitors, Global Uptime %, Active Incidents, and Average Response Time.
*   **Visual Strategy:** Use a "Grid" of small, pulsing status indicators (Green for up, Narada Red for down).

**4. Monitors List (Management)**
*   **Purpose:** A dedicated list view to manage, pause, or add new URLs.
*   **Content:** A table or card list showing the URL, check interval (e.g., 30s), and current status.
*   **Hackathon Tip:** Add a "Quick Add" modal here that feels instant.

**5. Monitor Detail Page (Deep Dive & AI)**
*   **Purpose:** Detailed analytics for **one specific** website or API.
*   **Content:** 
    *   **Charts:** Response time over the last 24 hours (using Recharts).
    *   **AI Insight Section:** This is the "Best of the Best" part. A specific box where Narada AI summarizes recent failures.
    *   **Timeline:** A vertical list of every time the site went down/up.

---

### 📜 Part 3: Operations & History
*The technical "proof" that your system is working.*

**6. Incident Logs (Global History)**
*   **Purpose:** A searchable, filterable master list of every request made.
*   **Content:** Status codes (200, 404, 500), Latency (ms), and Timestamp.
*   **Visual Strategy:** Use a "Monospace" font for the logs to make it look like a developer tool.

**7. Alert & Integration Settings**
*   **Purpose:** Where users connect their "Warning" channels.
*   **Content:** Toggle switches for Email, Telegram, and Discord.
*   **Killer Feature:** A "Test Notification" button that sends a real Telegram message instantly. Judges love seeing hardware/software interact live.

---

### 🏆 Part 4: The "Killer Feature" Page (Optional but Recommended)

**8. Public Status Page**
*   **Purpose:** A "Shareable" link (e.g., `narada.ai/status/my-website`) that the user can show to *their* customers.
*   **Why it wins:** It shows you've thought about the end-user. It’s a classic feature of pro tools like BetterStack or Statuspage.io.

---

### 💡 Summary Table for your Folder Structure:

| Page | Priority | Visual Focus |
| :--- | :--- | :--- |
| **Home** | ⭐⭐⭐ | Marketing / Sales / Animation |
| **Dashboard** | ⭐⭐⭐ | High-level metrics / Speed |
| **Monitor Detail** | ⭐⭐⭐ | **AI Insights** / Complex Charts |
| **Logs** | ⭐⭐ | Data Density / Filtering |
| **Settings** | ⭐⭐ | Integration Logic |
| **Auth** | ⭐ | Cleanliness / Security |

**What is your next move?** I suggest we finalize the **Home Page design specs** (layout and specific sections) so you can get the visuals out of the way!

### Home Page

- [x] Navbar
- [x] Hero Section
- [x] Social Proof 
- [ ] Problem Section (Pain Trigger) #9
- [ ] Solution Section (Detect -> Alert -> Solve) #10
- [ ] Features Section (Bento Grid) (Today) #5
- [ ] How It Works (3 Steps) #11
- [ ] Pricing Section (Today) #4
- [ ] Testimonials Section #12
- [ ] FAQ (Today) #2
- [ ] Final CTA (Today) #3
- [x] Footer

---

## ⚙️ Tech Stack

### Frontend

- React + Vite
- SCSS
- Axios
- Recharts / Chart.js
- Socket.io-client

### Backend

- Node.js + Express
- MongoDB (Mongoose)
- Node-cron / BullMQ
- Redis *(optional)*

### DevOps

- Docker *(bonus)*
- Nginx *(optional)*
- PM2

---

## 🔗 Architecture Flow

1. User creates a monitor (URL/API)
2. Cron job triggers periodic checks
3. Response stored in database
4. If failure detected:
  - Alert triggered (Email/Telegram)
  - AI generates incident summary
5. Frontend receives real-time updates (Socket.io)

---

## 🏆 Hackathon Strategy

- Focus on **3 strong features**:
  - Monitoring + Alerts
  - Dashboard UI
  - AI Summary
- Make UI clean & modern (huge impact)
- Demo failure scenario:
  - Shut down API → show detection → alert → AI summary

---

## 💀 Killer Pitch Line

> “While others react to downtime, Narada predicts and explains it before users even notice.”
