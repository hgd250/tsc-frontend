import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const workbench: AppRouteModule = {
  path: '/workbench',
  name: 'workbench Management',
  component: LAYOUT,
   redirect: '/workbench/origination-workbench',

  meta: {
    orderNo: 2,
    icon: 'ion:tv-outline',
    title: t('routes.demo.workbench.manager'),
  },
  children: [
   {
          path: 'navigator-workbench',
          name: 'Navigator workbench',
          component: () => import('/@/views/dashboard/workbench-Nav/index.vue'),
          meta: {
            // affix: true,
            title: t('routes.demo.workbench.navigator'),
          },
        },
    {
    path: 'origination-workbench',
    name: 'Origination workbench',
    component: () => import('/@/views/dashboard/workbench/index.vue'),
    meta: {
      // affix: true,
      title: t('routes.demo.workbench.origination'),
    },
  },

  ],
};

export default workbench;
