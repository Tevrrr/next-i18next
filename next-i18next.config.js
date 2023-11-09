/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de', 'ru'],

    },
    fallbackLng: {
        default: ['en'],
    },
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',
    // nonExplicitSupportedLngs: true,
}