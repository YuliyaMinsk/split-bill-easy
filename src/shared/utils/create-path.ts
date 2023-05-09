function createPath(path: string): string {
  // TODO: delete after debug
  // console.log('createPath', `${import.meta.env.VITE_APP_BASE_URL}${path}`);
  // console.log('createPath', import.meta.env);
  return `${import.meta.env.VITE_APP_BASE_URL}${path}`;
}

export { createPath };
