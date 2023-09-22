<template>
  <Card title="Roadmap" v-bind="$attrs">
    <d-timeline direction="horizontal" center>
      <d-timeline-item
        v-for="(item, index) in timeAxisList"
        :key="index"
        :dot-color="item.dotColor"
        :line-style="item.lineStyle"
        :line-color="item.lineColor"
      >
        <template #time>
          <div>{{ item.time }}</div>
        </template>
        <template #dot v-if="item.dot">
          <!--        <vxe-icon></vxe-icon>-->
          <d-icon name="https://devui.design/components/assets/logo.svg" size="16px"/>
          <!--        <d-icon name="./src/assets/icons/map.svg" size="16px"></d-icon>-->
          <!--        <svg-icon icon-class="icon-download-count"></svg-icon>-->

          <!--        <d-icon :name="item.dot"></d-icon>-->
        </template>
        {{ item.text }}
      </d-timeline-item>
    </d-timeline>
  </Card>
</template>
<script lang="ts">
  import { defineComponent,ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import { groupItems } from './data';

  export default defineComponent({
    components: { Card},
    setup() {
      const timeAxisList = ref([
        {
          text: 'Start',
          time: '2021-10-1',
          lineStyle: 'solid',
          dot: 'cancel-forbidden',
          lineColor: "#118e20",
        },
        {
          text: 'Medical',
          time: '2021-10-2',
          dotColor: 'var(--devui-success)',
          lineStyle: 'dashed',
          lineColor: 'var(--devui-success)',
          dot: 'classroom-approve',
        },
        {
          text: 'Mental',
          time: '',
          dotColor: 'var(--devui-info)',
          lineStyle: 'dotted',
          lineColor: 'var(--devui-info)',
          dot: 'add-bug',
        },
        {
          text: 'Training',
          time: '',
          dotColor: 'var(--devui-warning)',
          lineStyle: 'dotted',
          lineColor: 'var(--devui-warning)',
          dot: 'build-with-tool',
        },
        {
          text: 'Permanent',
          time: '',
          dotColor: 'var(--devui-danger)',
          dot: 'go-chart',
        },
      ]);
      return { items: groupItems,timeAxisList};
    },
  });
</script>
