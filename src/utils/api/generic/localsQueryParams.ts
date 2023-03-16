export const localsQueryParams = (locale?: string, locales?: string[]) => {
  const formattedLocale = locale?.split("-")[0] || "";
  const fallBackLocales =
    locales
      ?.map((loc) => loc.split("-")[0])
      ?.filter((loc) => loc !== formattedLocale) || [];

  return [formattedLocale, ...fallBackLocales];
};
