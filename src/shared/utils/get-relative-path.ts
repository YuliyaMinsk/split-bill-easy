import { BASE_URL } from "../constants";

function getRelativePath(fullPath: string): string {
  return fullPath.replace(BASE_URL, '');
}

export { getRelativePath };
