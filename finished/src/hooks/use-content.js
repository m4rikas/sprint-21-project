import React from "react";

export default function useContent() {
  const [content, setContent] = React.useState([]);

  React.useEffect(() => {
    async function run() {
      const response = await fetch("/api/all");
      const data = await response.json();
      setContent(data);
    }
    run();
  }, []);

  return content;
}
