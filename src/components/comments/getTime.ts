export default function getTime(time: number): string {
  const secs = Math.floor((Date.now() - time) / 1000);
  const min = Math.floor(secs / 60);
  if (min < 1) return "just now";
  const hours = Math.floor(min / 60);
  if (hours < 1) return `${min} min ago`;
  const days = Math.floor(hours / 24);
  if (days < 1) return `${hours} hour ago`;
  return `${days}days ago`;
}
