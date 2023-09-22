<template>
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
        <d-icon name="https://devui.design/components/assets/logo.svg" size="16px"></d-icon>
<!--        <d-icon name="./src/assets/icons/map.svg" size="16px"></d-icon>-->
<!--        <svg-icon icon-class="icon-download-count"></svg-icon>-->

        <!--        <d-icon :name="item.dot"></d-icon>-->
      </template>
      {{ item.text }}
    </d-timeline-item>
  </d-timeline>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EditTableHeaderIcon from "@/components/Table/src/components/EditTableHeaderIcon.vue";
import SvgIcon from "@/components/Icon/src/SvgIcon.vue";

export default defineComponent({
  components: { SvgIcon, EditTableHeaderIcon },
  setup() {
    const timeAxisList = ref([
      {
        text: 'Start',
        time: '2021-10-1',
        lineStyle: 'solid',
        dot: 'cancel-forbidden',
        lineColor: "#118e20",
        dotColor: "#118e20"
      },
      {
        text: 'Check',
        time: '2021-10-2',
        dotColor: 'var(--devui-success)',
        lineStyle: 'dashed',
        lineColor: 'var(--devui-success)',
        dot: 'classroom-approve',
      },
      {
        text: 'Debug',
        time: '2021-10-3',
        dotColor: 'var(--devui-info)',
        lineStyle: 'dotted',
        lineColor: 'var(--devui-info)',
        dot: 'add-bug',
      },
      {
        text: 'Build',
        time: '2021-10-4',
        dotColor: 'var(--devui-warning)',
        lineStyle: 'dotted',
        lineColor: 'var(--devui-warning)',
        dot: 'build-with-tool',
      },
      {
        text: 'Display',
        time: '2021-10-5',
        dotColor: 'var(--devui-danger)',
        dot: 'go-chart',
      },
    ]);
    return { timeAxisList };
  },
});
</script>
