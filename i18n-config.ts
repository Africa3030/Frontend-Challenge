export const i18n = {
  defaultLocale: "en",
  locales: ["en"],
  localeDetection: true,
} as const;

export type Locale = (typeof i18n)["locales"][number];

export function getLocale(locale: string): Locale {
  if (!i18n.locales.includes(locale as Locale)) {
    return i18n.defaultLocale;
  }
  return locale as Locale;
}
