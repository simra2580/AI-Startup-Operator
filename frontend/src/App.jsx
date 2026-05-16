import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Layout from "./layouts/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import IdeaValidation from "./pages/IdeaValidation.jsx";
import MarketAnalysis from "./pages/MarketAnalysis.jsx";
import ProductBuilder from "./pages/ProductBuilder.jsx";
import TaskManager from "./pages/TaskManager.jsx";
import Analytics from "./pages/Analytics.jsx";
import AIAssistant from "./pages/AIAssistant.jsx";
import InvestorHub from "./pages/InvestorHub.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/idea-validation" element={<Layout><IdeaValidation /></Layout>} />
            <Route path="/market-analysis" element={<Layout><MarketAnalysis /></Layout>} />
            <Route path="/product-builder" element={<Layout><ProductBuilder /></Layout>} />
            <Route path="/tasks" element={<Layout><TaskManager /></Layout>} />
            <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
            <Route path="/ai-assistant" element={<Layout><AIAssistant /></Layout>} />
            <Route path="/investors" element={<Layout><InvestorHub /></Layout>} />
            <Route path="/settings" element={<Layout><Settings /></Layout>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;