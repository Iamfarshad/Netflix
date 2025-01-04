import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Streaming from "./Screens/Streaming";
const App = () => {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<Streaming />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
