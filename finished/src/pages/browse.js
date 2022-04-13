import React from "react";
import { BrowseContainer } from "../containers/browse";
import { MoviesContext } from "../context/movies";
import { selectionFilter } from "../utils";

export default function Browse() {
  const [content] = React.useContext(MoviesContext);
  const slides = selectionFilter(content);
  return <BrowseContainer slides={slides} />;
}
