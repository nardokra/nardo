import { useRouter } from "next/router";

const useLocalization = <T extends { locale: string }>(
  localizations: Array<T>
): T => {
  let locale = "en";
  const router = useRouter();

  if (router?.locale) {
    locale = router.locale;
  }

  return localizations.filter(
    (language) => locale && language.locale === locale
  )[0];
};

export default useLocalization;
