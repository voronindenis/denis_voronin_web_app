export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  SERVICES: '/services',
  CONTACTS: '/contacts',
  ARTICLE: (id: string) => `/blog/${id}`,
};
