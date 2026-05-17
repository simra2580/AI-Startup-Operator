import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import IdeaValidation from "./pages/IdeaValidation";
import MarketAnalysis from "./pages/MarketAnalysis";
import ProductBuilder from "./pages/ProductBuilder";
import TaskManager from "./pages/TaskManager";
import Analytics from "./pages/Analytics";
import AIAssistant from "./pages/AIAssistant";
import InvestorHub from "./pages/InvestorHub";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route
            path="idea-validation"
            element={<IdeaValidation />}
          />

          <Route
            path="market-analysis"
            element={<MarketAnalysis />}
          />

          <Route
            path="product-builder"
            element={<ProductBuilder />}
          />

          <Route
            path="task-manager"
            element={<TaskManager />}
          />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="ai-assistant"
            element={<AIAssistant />}
          />

          <Route
            path="investor-hub"
            element={<InvestorHub />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;