import { useState } from "react";

export function useOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {showContent ? (
        <div>
          <h1>A random contenct</h1>
          <p> Please </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
