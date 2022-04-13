import React from "react";

const MoviesContext = React.createContext();

function MovieProvider(props) {
  const [content, setContent] = React.useState({ films: [], series: [] });
  return <MoviesContext.Provider value={[content, setContent]} {...props} />;
}

export { MoviesContext, MovieProvider };
