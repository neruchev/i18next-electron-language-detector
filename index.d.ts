interface languageDetector {
    'init': Function,
    'type': Function,
    'detect': string,
    'cacheUserLanguage': Function
}

declare const LanguageDetector: languageDetector;

export { LanguageDetector };
