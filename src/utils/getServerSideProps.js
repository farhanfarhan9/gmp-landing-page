import cookie from 'cookie';

export function getServerSideProps(context) {
  const cookies = cookie.parse(context.req.headers.cookie || '');
  const language = cookies.language || 'en';
  
  return { props: { language } };
}
