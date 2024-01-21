interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

function isPwaInstalled(): boolean {
  const isStandaloneIOS = 'standalone' in navigator && (navigator as NavigatorWithStandalone).standalone;
  const isStandaloneAndroid = window.matchMedia('(display-mode: standalone)').matches;
  const isAndroidAppReferrer = document.referrer.includes('android-app://');

  return isStandaloneIOS || isStandaloneAndroid || isAndroidAppReferrer;
}

export { isPwaInstalled };
