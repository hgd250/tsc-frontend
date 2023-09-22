import { FormSchema } from '/@/components/Form';

const colProps = {
  span: 8,
};

export const schemas: FormSchema[] = [
  {
    field: 'orgName',
    component: 'Input',
    label: 'ORG Name',
    colProps,
    componentProps: {
      placeholder: 'please enter your organization name',
    },
    required: true,
  },
  {
    field: 'homelessName',
    component: 'Input',
    colProps,
    label: 'Homeless Name',
        required: true,
  },
  {
    field: 'desc',
    component: 'InputTextArea',
    label: 'Comment',
    colProps: {
       offset: 0,
       span: 10,
     },
    componentProps: {
      placeholder: 'please enter you comment',
      rows: 5,
    },
    required: true,
  },
  {
    field: 'inputer',
    component: 'Select',
    label: 'service type',
    colProps: {
      span: 8,
    },
     componentProps: {
          mode: 'multiple',
          options: [
            {
              label: 'Health',
              value: 'Health',
            },
            {
              label: 'Job',
              value: 'Job',
            },
            {
              label: 'Training',
              value: 'Training',
            },
            {
              label: 'Health',
              value: 'Health',
            },
            {
              label: 'Job',
              value: 'Job',
            },
            {
              label: 'Training',
              value: 'Training',
            },
          ],
        },
      },
  {
    field: 'disclosure',
    component: 'Select',
    label: ' ',
    colProps: {
      span: 8,
    },
    show: ({ model }) => {
      return model.disclosure === '2';
    },
    componentProps: {
      placeholder: '公开给',
      mode: 'multiple',
      options: [
        {
          label: '同事1',
          value: '1',
        },
        {
          label: '同事2',
          value: '2',
        },
        {
          label: '同事3',
          value: '3',
        },
      ],
    },
  },
];
