function createPath(path: string): string {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL || '/split-bill-easy/';
  return `${baseUrl}${path}`;
}

export { createPath };
