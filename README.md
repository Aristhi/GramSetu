# GramSetu

A web-based rural governance and civic engagement platform built with React and Vite, designed to connect citizens, Gram Sabha members, and local officials.

## Key Features & Dashboards

* **Authentication (`Login.jsx`):** Role-based login interface for different user types.
* **Citizen Dashboard (`CitizenDashboard.jsx`):** Portal for villagers/citizens to submit requests, track grievances, and view updates.
* **Gram Sabha Dashboard (`GramSabhaDashboard.jsx`):** Interface for managing village assembly meetings, resolutions, and community discussions.
* **Official Dashboard (`OfficialDashboard.jsx`):** Administrative panel for government officials to review, verify, and act on citizen submissions.

## Tech Stack

* **Frontend:** React (JSX), CSS3
* **Build Tool:** Vite
* **Linting:** ESLint

## Getting Started (For Team Members)

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd GramSetu

**Install dependencies:**
   npm install

**Start the development server:**
   npm run dev

**Open in browser:**
   Visit http://localhost:5173/ to view the application.

**Project Structure**
GramSetu/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and media files
│   ├── App.jsx             # Main application routing/layout
│   ├── Login.jsx           # Login screen
│   ├── CitizenDashboard.jsx
│   ├── GramSabhaDashboard.jsx
│   ├── OfficialDashboard.jsx
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js