import { LOGGER } from '~/store/types';

export default async ({ $ua, store }) => {
  const browserName = $ua.browser();
  const deviceTypes = {
    isBot: $ua.isFromCrawler(),
    isDesktop: $ua.isFromPc(),
    isTablet: $ua.isFromTablet(),
    isPhone: $ua.isFromSmartphone() || $ua.isFromMobilephone(),
    isMobile: $ua.isFromTablet() || $ua.isFromSmartphone() || $ua.isFromMobilephone(),
  };
  await store.dispatch(`logger/${LOGGER.SET_DEVICE_TYPES}`, deviceTypes);
  await store.dispatch(`logger/${LOGGER.SET_BROWSER_NAME}`, browserName);
};
