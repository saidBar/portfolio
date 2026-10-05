const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Formats "2024-07" as "Jul 2024" and 2026 as "2026". */
function formatPart(value: string | number | null | undefined): string | null {
  if (value === null || value === undefined || value === '') return null;
  const text = String(value);
  const match = text.match(/^(\d{4})-(\d{2})/);
  if (match) return `${MONTHS[Number(match[2]) - 1]} ${match[1]}`;
  return text;
}

export function formatTimeline(start?: string | number | null, end?: string | number | null): string | null {
  const from = formatPart(start);
  const to = formatPart(end);
  if (from && to) return from === to ? from : `${from} – ${to}`;
  if (from) return `${from} – Present`;
  return to;
}

/** Removes inline Markdown emphasis so text can be shown as plain copy. */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .trim();
}
