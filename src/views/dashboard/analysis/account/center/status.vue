<template>

  <div class="m-5 result-success">
    <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">

      <a-layout>
        <a-layout>
          <a-layout-sider :style="siderStyle">



                <a-space >
                  <a-avatar :size="150">
                    <template #icon>
                      <a-image
                        :width="150"
                        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.ObctNuzvdhYtLSl6e7OATQAAAA?pid=ImgDet&rs=1"
                      />
                    </template>
                  </a-avatar>
                </a-space>



          </a-layout-sider>

          <a-layout-content :style="contentStyle">

            <a-descriptions>
              <a-descriptions-item label="Name">John</a-descriptions-item>
              <a-descriptions-item label="Telephone">1810000000</a-descriptions-item>

            </a-descriptions>
            <a-descriptions>
              <a-descriptions-item label="UserName">Zhou Maomao</a-descriptions-item>
              <a-descriptions-item label="Telephone">1810000000</a-descriptions-item>
            </a-descriptions>
            <a-descriptions>
              <a-descriptions-item label="Address">

              </a-descriptions-item>
            </a-descriptions>

          </a-layout-content>
          <a-layout-sider :style="siderStyle">
            <a-progress
              type="circle"
              :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
              }"
              :percent="90"
            />
          </a-layout-sider>
        </a-layout>
        <a-layout-footer :style="footerStyle">



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
        </a-layout-footer>
      </a-layout>

    </a-space>






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

const headerStyle: CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'white',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: 'white',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: 'white',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  backgroundColor: 'white',
};


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
