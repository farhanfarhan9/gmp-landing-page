import url from 'url';
import querystring from 'query-string';
import English from '../language/english.json';
import Indonesian from '../language/indonesia.json';

class Translator {
    static dictionaries = {
        'en': English,
        'in': Indonesian,
    };

    static t(key, language = 'in') {
        const dict = Translator.dictionaries[language];
        if (!dict) {
            console.warn(`No dictionary for language: ${language}`);
            return key;
        }

        const translation = dict[key];
        if (!translation) {
            console.warn(`No translation found for key: ${key}`);
            return key;
        }

        return translation;
    }

    static getLanguageFromQueryParam() {
        if (typeof window !== 'undefined') {
            const queryParams = new URLSearchParams(window.location.search);
            const langParam = queryParams.get('lang');

            if (langParam) {
                return langParam;
            }
        }

        return 'in'; // Default language is 'in' if langParam is not present
    }

    static generateUrlId(urlId) {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href.replace(/#.*$/, ''));
            return url + urlId;
        } else {
            return urlId;
        }
    }

    // Menggunakan kata kunci "function" untuk mendefinisikan metode static gotoUrl dan menambahkan tipe data pengembalian yang jelas
    static gotoUrl(subUrl, lang) {
        if (subUrl.includes('#')) {
            if (lang) {
                return `/?lang=${lang}${subUrl}`;
            } else {
                return `/${subUrl}`;
            }
        }

        // jika 'lang' tersedia, Anda bisa menggunakannya di sini
        if (lang) {
            subUrl += `?lang=${lang}`;
        }

        return subUrl;
    }

}

export default Translator;
