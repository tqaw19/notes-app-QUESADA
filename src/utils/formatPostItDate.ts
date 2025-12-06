import { format, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export function formatPostItDate(createdAt: string | number | Date) {
  const date = new Date(createdAt);
  const now = Date.now();

  const diffInDays = (now - date.getTime()) / (1000 * 60 * 60 * 24);

  const relative = formatDistanceToNow(date, {
    addSuffix: true,
    locale: es,
  });

  return diffInDays < 7
    ? relative
    : format(date, "MMMM d, yyyy", { locale: es });
}
