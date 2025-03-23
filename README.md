# Candidate Search

## 📌 Project Overview
Candidate Search is a React-based web application that allows users to discover and manage potential job candidates. It fetches candidate data from the GitHub API, enabling users to browse profiles, save candidates for future reference, and seamlessly navigate between different views.

## 🚀 Features
- **Candidate Discovery:** Fetches random GitHub users as potential candidates.
- **Profile Viewing:** Displays key details such as name, username, location, email, and company.
- **GitHub Integration:** Direct links to candidates' GitHub profiles with authentication support.
- **Save & Skip Candidates:** Users can save interesting profiles to local storage and skip irrelevant ones.
- **Navigation:** A simple navigation system for switching between candidate search and saved candidates.

## 🛠️ Tech Stack
- **Frontend:** React, Next.js, TypeScript, Tailwind CSS
- **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`)
- **Data Fetching:** GitHub API (REST)
- **Storage:** LocalStorage for saving candidates
- **Routing:** React Router

## 📂 Project Structure
```
📦 candidate-search
├── 📂 src
│   ├── 📂 api
│   │   ├── API.tsx  # Handles API requests
│   ├── 📂 components
│   │   ├── Nav.tsx  # Navigation bar
│   ├── 📂 pages
│   │   ├── CandidateSearch.tsx  # Main search page
│   │   ├── PotentialCandidates.tsx  # Saved candidates page
│   │   ├── ErrorPage.tsx  # Handles routing errors
│   ├── App.tsx  # Main application component
│   ├── main.tsx  # Entry point with routing setup
│   ├── index.css  # Global styles
├── .env  # Environment variables (GitHub token)
├── package.json  # Project dependencies
├── README.md  # Project documentation
```

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/candidate-search.git
   cd candidate-search
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your GitHub API token:
   - Create a `.env` file in the root directory.
   - Add your GitHub token:
     ```sh
     VITE_GITHUB_TOKEN=your_github_personal_access_token
     ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## 🔗 API Usage
This project uses the GitHub API to fetch user data. The following endpoints are utilized:
- `https://api.github.com/users?since={number}` → Fetches a list of GitHub users.
- `https://api.github.com/users/{username}` → Fetches details for a specific user.

## 🖥️ Usage Instructions
1. Open the app in your browser (usually `http://localhost:5173`).
2. Browse through randomly fetched GitHub users.
3. Click the **GitHub Profile** link to visit their profile with your authentication token.
4. Click **+** to save a candidate or **-** to skip.
5. Navigate to **Potential Candidates** to view saved profiles.

## 🎯 Future Enhancements
- Implement a backend for persistent storage.
- Add filtering options for candidates.
- Improve UI with animations and additional details.
- Enhance authentication security.

## 🤝 Contributing
Feel free to fork this repository, create a feature branch, and submit a pull request! 🚀


