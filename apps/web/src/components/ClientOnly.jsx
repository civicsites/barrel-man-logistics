import React, { useEffect, useState } from 'react';

/**
 * Renders children only after mount so browser-only UI (maps, etc.) matches SSR/prerender output.
 */
function ClientOnly({ children, fallback = null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
}

export default ClientOnly;
