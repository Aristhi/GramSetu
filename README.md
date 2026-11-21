# GramSetu

A web-based rural governance and civic engagement platform built with React and Vite, designed to connect citizens, Gram Sabha members, and local officials.

## Key Features & Dashboards

* **Authentication (`Login.jsx`):** Role-based login interface for different user types.
* **Citizen Dashboard (`CitizenDashboard.jsx`):** Portal for citizens to submit requests, track grievances, and view updates.
* **Gram Sabha Dashboard (`GramSabhaDashboard.jsx`):** Interface for managing village assembly meetings, resolutions, and community discussions.
* **Official Dashboard (`OfficialDashboard.jsx`):** Administrative panel for officials to review, verify, and act on submissions.

## Project Structure

* `public/` — Static assets
* `src/assets/` — Images and media files
* `src/App.jsx` — Main application layout and routing
* `src/Login.jsx` — Login screen
* `src/CitizenDashboard.jsx` — Citizen portal
* `src/GramSabhaDashboard.jsx` — Gram Sabha portal
* `src/OfficialDashboard.jsx` — Official portal
* `src/main.jsx` — Application entry point
* `package.json` — Dependencies and scripts
* `vite.config.js` — Vite configuration

## How to Run Locally (For Team Members)

GitHub only hosts the source code. To view the running app on your computer:

1. Clone or download this repository and open the `GramSetu` folder in VS Code.
2. Open the terminal and install dependencies:
   ```bash
   npm install
3. Start the local development server:
   ```bash
   npm run dev
4. Open the local URL shown in your terminal (usually port 5173) in your browser.