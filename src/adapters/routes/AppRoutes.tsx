
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "../presentation/pages/countries";
import NotFound from "../presentation/pages/NotFound";

export const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
