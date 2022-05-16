import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Painter.vue'),
      },
      {
        path: 'paintings',
        component: () => import('../views/Paintings.vue'),
      },
      {
        path: 'painting/:paintingId',
        component: () => import('../views/Painting.vue'),
      },
      {
        path: 'collections',
        component: () => import('../views/Collections.vue'),
      },
      {
        path: 'checkCollections/:collectionId',
        component: () => import('../views/CheckCollections.vue'),
      },
      {
        path: 'finishCollection/',
        component: () => import('../views/FinishCollection.vue'),
      },
      {
        path: 'enroll',
        component: () => import('../views/Enroll.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/Login.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/Paintings.vue'),
      },
      {
        path: 'collections',
        component: () => import('../views/admin/Collections.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue'),
      },
      {
        path: 'posts',
        component: () => import('../views/admin/Posts.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
