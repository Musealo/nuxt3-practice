import { usePageVisitCount } from "~~/composables/states";

export default defineNuxtRouteMiddleware(() => {
  const pageVisitCount = usePageVisitCount();
  pageVisitCount.value++;
});
