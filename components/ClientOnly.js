'use client';

import { useState, useEffect } from 'react';

// This is a utility component to prevent hydration errors.
// It ensures that its children are only rendered on the client side.
export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If the component has not mounted yet (i.e., we're on the server), render nothing.
  if (!hasMounted) {
    return null;
  }

  // Once mounted on the client, render the children.
  return <>{children}</>;
}
