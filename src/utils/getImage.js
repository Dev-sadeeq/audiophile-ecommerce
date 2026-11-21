
export function getImageUrl(path) {
  if (!path) return "";
  return path.replace("./", "/");
}