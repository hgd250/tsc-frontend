<template>

  <div class="m-5 result-success">
<!--    -->

    <div>
      <a-progress
        type="circle"
        :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
        :percent="90"
      />
    </div>
<!--    -->




<!--    -->
    <div class="result-success__content">
      <Descriptions title="Homeless Status">
        <DescriptionItem label="Name">
          <div>Vben</div>
        </DescriptionItem>

      </Descriptions>

      <Steps :current="1" progress-dot size="large">
        <Step title="Join">
          <template #description>
            <p>2016-12-12 12:32</p>
          </template>
        </Step>
        <Step title="Knowledge Training">
          <template #description>
            <p>2016-12-12 12:32</p>
          </template>
        </Step>
        <Step title="Heath" >
        <template #description>
          <p>In Process</p>
        </template>
        </Step>
        <Step title="Complete" >
        <template #description>
          <p>2018-12-12 12:32</p>
        </template>
        </Step>
      </Steps>

    </div>
    <DynamicInfo :loading="loading" class="!my-4 enter-y" />

  </div>

</template>
<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import { Result, Steps, Descriptions } from 'ant-design-vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  import 'ant-design-vue/dist/reset.css';

  const Step = Steps.Step;
  const Item = Descriptions.Item;

</script>
<style lang="less" scoped>
  .result-success {
    padding: 48px 32px;
    background-color: @component-background;

    &__content {
      padding: 24px 40px;
      background-color: @background-color-light;
    }
  }
</style>
