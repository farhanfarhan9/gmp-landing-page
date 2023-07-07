// utils/getServerSideProps.js

import cookie from 'cookie';
import English from '../language/english.json';
import Indonesian from '../language/indonesia.json';

const dictionaries = {
    'en': English,
    'in': Indonesian,
};

export async function getServerSineProps(context) {
  const cookies = cookie.parse(context.req.headers.cookie || '');
  const language = cookies.language || 'in';

  const dict = dictionaries[language];
  if (!dict) {
    console.warn(`No dictionary for language: ${language}`);
    return {props: {translations: {}}};
  }

  return {
    props: {
      translations: dict,
    },
  };
}
