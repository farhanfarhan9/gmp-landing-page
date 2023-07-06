import English from '../language/english.json';
import Indonesian from '../language/indonesia.json';

class Translator {
    static dictionaries = {
        'en': English,
        'id': Indonesian,
    };

    static t(key) {
        const language = 'en';
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
}

export default Translator;
