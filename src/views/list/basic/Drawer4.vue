<template>
  <BasicDrawer v-bind="$attrs" @register="register" title="Assign Origination" width="50%">
    <div>
      <BasicForm @register="registerForm" />
    </div>
    <div>
        <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </div>

  </BasicDrawer>

</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  const schemas: FormSchema[] = [
    {
      field: 'Origination',
      component: 'Select',
      label: 'Origination',
      colProps: {
        span: 24,
      },
      componentProps: {
      mode: 'multiple',
          options: [
            {
              label: 'Citi1',
              value: '1',
            },
            {
              label: 'citi2',
              value: '2',
            },
          ],
        },
    },
    {
      field: 'Services',
      component: 'Select',
      label: 'Services',
      colProps: {
        span: 24,
      },
      componentProps: {
      mode: 'multiple',
          options: [
            {
              label: 'Health',
              value: '1',
            },
            {
              label: 'Job',
              value: '2',
            },
            {
              label: 'Training',
              value: '3',
            },
            {
              label: 'Money',
              value: '4',
            },
            {
              label: 'Others',
              value: '5',
            },
          ],
        },
    },

    {
    field: 'target',
    component: 'InputTextArea',
    label: 'Description',
    colProps: {
        span: 24,
      },
    componentProps: {
      placeholder: 'Navigator Suggestion...',
      rows: 4,
    },
      },

  ];
  export default defineComponent({
    components: { BasicDrawer, BasicForm },
    setup() {
      const [registerForm, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });
      const [register] = useDrawerInner((data) => {
        // 方式1
        setFieldsValue({
          field2: data.data,
          field1: data.info,
        });
      });
      return { register, schemas, registerForm };
    },
  });
</script>
