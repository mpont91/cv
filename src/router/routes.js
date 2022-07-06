const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: 'experience',
        name: 'experience',
        component: () => import('pages/ExperiencePage.vue'),
      },
      {
        path: 'education',
        name: 'education',
        component: () => import('pages/EducationPage.vue'),
      },
      {
        path: 'skills',
        name: 'skills',
        component: () => import('pages/SkillsPage.vue'),
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import('pages/PortfolioPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
]

export default routes
