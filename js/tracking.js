globalThis.dataLayer = [];

const dialog = document.querySelector(".tracking-consent");

function gtag(...args) {
  dataLayer.push(args);
}

function updateTrackingConsent() {
  const trackingConsent = JSON.parse(localStorage.getItem("Tracking consent"));

  if (trackingConsent) {
    gtag("consent", "update", trackingConsent);
  }
}

gtag("consent", "default", {
  ad_storage: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "denied",
});

updateTrackingConsent();

dialog.addEventListener("close", (event) => {
  const currentDate = new Date();
  const todayInSixMonths = new Date(
    currentDate.getUTCFullYear() +
      (currentDate.getUTCMonth() + 1 + 6 > 12 ? 1 : 0),
    currentDate.getUTCMonth() % 6,
    currentDate.getUTCDate(),
    currentDate.getUTCHours(),
    currentDate.getUTCMinutes(),
    currentDate.getUTCSeconds()
  );

  document.cookie = `ask-for-tracking-consent=;expiration=${encodeURIComponent(
    todayInSixMonths.toUTCString()
  )}`;

  localStorage.setItem(
    "Tracking consent",
    JSON.stringify({
      ad_storage: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
      security_storage: "granted",
    })
  );

  updateTrackingConsent();
});

import "https://www.googletagmanager.com/gtag/js?id=G-JJN9Q36MB0";

gtag("js", new Date());
gtag("config", "G-JJN9Q36MB0");
