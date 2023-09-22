<template>
  <Card title="Roadmap" v-bind="$attrs">
    <d-timeline direction="horizontal" left>
      <d-timeline direction="horizontal" center>
        <d-timeline-item position="top" dot-color="chocolate">Start</d-timeline-item>
        <d-timeline-item dot-color="var(--devui-success)">Check</d-timeline-item>
        <d-timeline-item position="top" dot-color="var(--devui-danger)">Build</d-timeline-item>
        <d-timeline-item dot-color="var(--devui-warning)">Depoy</d-timeline-item>
        <d-timeline-item position="top" dot-color="var(--devui-waiting)">End</d-timeline-item>
      </d-timeline>
    </d-timeline>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Card, CardGrid } from 'ant-design-vue';
  import Icon from '@/components/Icon/Icon.vue';
  import { groupItems } from './data';

  export default defineComponent({
    components: { Card, CardGrid, Icon },
    setup() {
      return { items: groupItems };
    },
  });
</script>
