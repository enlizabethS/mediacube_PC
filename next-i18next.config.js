module.exports = {
    i18n: {
      locales: ["ru", "en"], // Языки, поддерживаемые сайтом
      defaultLocale: "ru", // Язык по умолчанию
      localeDetection: true, 
    },
    reloadOnPrerender: process.env.NODE_ENV === "development", 
  };
  