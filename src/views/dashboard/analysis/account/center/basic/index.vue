<template>
  <PageWrapper
    title="Add your comments here"
    contentBackground
    content=" You can record the help you provided for Homeless here, in order to help other organizations better serve them."
    contentClass="p-4"
  >
    <BasicForm @register="register" />
    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent } from 'vue';
  import { schemas } from './data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    name: 'FormBasicPage',
    components: { BasicForm, PageWrapper },
    setup() {
      const { createMessage } = useMessage();
      const [register, { validate, setProps }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 15,
        },
        schemas: schemas,
        actionColOptions: {
          offset: 8,
          span: 23,
        },
        submitButtonOptions: {
          text: 'Submit',
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            createMessage.success('submit success！');
          }, 2000);
        } catch (error) {}
      }

      return { register };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>
