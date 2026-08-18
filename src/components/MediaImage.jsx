import React, { useState } from 'react';

/**
 * Image simple avec fallback propre.
 * `priority` sert au visuel principal : il ne doit pas attendre le lazy-loading.
 */
export default function MediaImage({ src, alt = '', className = '', priority = false }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
