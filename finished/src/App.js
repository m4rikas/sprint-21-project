import React from "react";

import { Routes, Route } from "react-router-dom";

import { MoviesContext } from "./context/movies";
import useContent from "./hooks/use-content";

import Home from "./pages/home";
import Browse from "./pages/browse";

function App() {
  const [content, setContent] = React.useContext(MoviesContext);
  const serverContent = useContent();

  React.useEffect(() => {
    setContent(serverContent);
  }, [serverContent]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
}

export default App;
