import { BASE_URL } from "../constants";

function createPath(path: string): string {
  return `${BASE_URL}${path}`;
}

export { createPath };
