function createPath(path: string): string {
  return `${import.meta.env.VITE_APP_BASE_URL}${path}`;
}

export { createPath };
