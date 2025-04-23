export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  SERVICES: '/services',
  CONTACTS: '/contacts',
  PORTFOLIO: '/portfolio',
  ARTICLE: (id: string) => `/blog/${id}`,
};
