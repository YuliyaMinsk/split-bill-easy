function createPath(path: string): string {
  console.log('createPath', `${import.meta.env.VITE_APP_BASE_URL}${path}`);
  console.log('createPath', import.meta.env);
  return `${import.meta.env.VITE_APP_BASE_URL}${path}`;
}

export { createPath };
