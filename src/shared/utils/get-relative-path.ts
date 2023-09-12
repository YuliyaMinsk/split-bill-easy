function getRelativePath(fullPath: string): string {
  return fullPath.replace(import.meta.env.VITE_APP_BASE_URL, '');
}

export { getRelativePath };
