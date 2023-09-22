<template>
  <PageWrapper
    title="Add your comments here"
    contentBackground
    content=" You can record the help you provided for Homeless here, in order to help other organizations better serve them."
    contentClass="p-4"
  >
      <BasicForm @register="register"

      />

    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> Submit </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import PersonTable from './PersonTable.vue';
  import { PageWrapper } from '/@/components/Page';
  import { schemas, taskSchemas } from './data';
  import { Card } from 'ant-design-vue';

  export default defineComponent({
    name: 'FormHightPage',
    components: { BasicForm, PersonTable, PageWrapper, [Card.name]: Card },
    setup() {
      const tableRef = ref<{ getDataSource: () => any } | null>(null);

      const [register, { validate }] = useForm({
        layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: schemas,
        showActionButtonGroup: false,
      });

      const [registerTask, { validate: validateTaskForm }] = useForm({
        layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: taskSchemas,
        showActionButtonGroup: false,
      });

      async function submitAll() {
        try {
          validate().then((x)=>{
          //submit
           console.log(x)
          });

        } catch (error) {

        }
      }

      return { register, registerTask, submitAll, tableRef };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
