import { FormSchema } from '/@/components/Form';


const basicOptions: LabelValueOptions = [
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
];

const storeTypeOptions: LabelValueOptions = [
  {
    label: '私密',
    value: '1',
  },
  {
    label: '公开',
    value: '2',
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'orgName',
    component: 'Input',
    label: 'ORG Name',
    required: true,
  },
  {
    field: 'homelessName',
    component: 'Input',
    label: 'Homeless',
    required: true,
    componentProps: {

    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'ServiceType',
    component: 'Select',
    label: 'Service Type',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
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
];
export const taskSchemas: FormSchema[] = [
  {
    field: 't1',
    component: 'Input',
    label: '任务名',
    required: true,
  },
  {
    field: 't2',
    component: 'Input',
    label: '任务描述',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't3',
    component: 'Select',
    label: '执行人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't4',
    component: 'Select',
    label: '责任人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 't5',
    component: 'TimePicker',
    label: '生效日期',
    required: true,
    componentProps: {
      style: { width: '100%' },
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't6',
    component: 'Select',
    label: '任务类型',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];
