<template>
  <div class="p-4">
    <BasicTable
      @register="registerTable"
      @edit-end="handleEditEnd"
      @edit-cancel="handleEditCancel"
      :beforeEditSubmit="beforeEditSubmit"
    >
      <template #toolbar>
        <a-button type="primary" @click="handleButton"> Query </a-button>
      </template>

    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { optionsListApi } from '/@/api/demo/select';
import axios from 'axios'

  import { demoListApi } from '/@/api/demo/table';
  import { treeOptionsListApi } from '/@/api/demo/tree';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Progress } from 'ant-design-vue';

  const columns: BasicColumn[] = [
    {
      title: 'ORG Name',
      dataIndex: 'ORG_NAME',
      edit: true,
      editComponentProps: {
        prefix: '',
      },
      width: 200,
    },
    {
      title: 'Join Date',
      dataIndex: 'ENTER_DATE',
      edit: true,
      width: 200,
    },
    {
      title: 'ORG ID',
      dataIndex: 'ORG_ID',
      edit: true,
      editRule: true,
      width: 200,
    },

    {
      title: 'ORG Address',
      dataIndex: 'ADDRESS',
      edit: true,
      editRule: true,
      width: 200,
    },

  ];
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable,methods] = useTable({
        title: 'Navigator Management',
        columns: columns,
        showIndexColumn: false,
        bordered: true,
      });

      const { createMessage } = useMessage();

      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
        return false;
      }

      // 模拟将指定数据保存
      function feakSave({ value, key, id }) {
        createMessage.loading({
          content: `saving ${key}`,
          key: '_save_fake_data',
          duration: 0,
        });
        return new Promise((resolve) => {
          setTimeout(() => {
            if (value === '') {
              createMessage.error({
                content: 'save fail：cannot save empty!',
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(false);
            } else {
              createMessage.success({
                content: `${id} ${key} save success!`,
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(true);
            }
          }, 2000);
        });
      }

      async function beforeEditSubmit({ record, index, key, value }) {
        console.log('单元格数据正在准备提交', { record, index, key, value });
        return await feakSave({ id: record.id, key, value });
      }

      function handleEditCancel() {

        console.log('cancel');
      }

     async function handleButton() {
       await axios.get("http://54.215.68.253:8080/listAllOrg").then((x)=>{
         methods.setLoading(true);
                methods.setColumns(columns);
                methods.setTableData(x.data);
                setTimeout(() => {
                  methods.setLoading(false);
         }, 200);
        });

      }
      return {
        registerTable,
        handleEditEnd,
        handleEditCancel,
        beforeEditSubmit,
      handleButton,

      };
    },
  });
</script>
