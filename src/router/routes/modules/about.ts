import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const workbench: AppRouteModule = {
  path: '/the-springboard',
  name: 'springboard',
  component: LAYOUT,
  meta: {
    orderNo: 4,
    icon: 'ion:tv-outline',
    title: t('The-Springboard'),
  },
  children: [
    {
        name: 'contact-us',
          path: 'https://www.the-springboard.org/contact-us/',
          component: IFrame,
    meta: {
      // affix: true,
      title: t('contact-us'),
    },
  },

  ],
};

export default workbench;
