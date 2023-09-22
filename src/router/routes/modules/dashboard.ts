import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    },

       {
          path: 'homeless',
          name: 'Homeless',
         component: () => import('/@/views/dashboard/analysis/account/center/status.vue'),
           // component: () => import('/@/views/dashboard/workbench-1/index.vue'),

          meta: {
            // affix: true,
//             title: t('detail'),
          },
        },
  ],
};

export default dashboard;