import { bbItem } from "@/types/data";


export function isBidOver(item: bbItem) {
  return item.enddate < new Date();
}
