<template>
  <PageWrapper :class="prefixCls" title="Homeless">
    <template #headerContent>
      A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation      <div :class="`${prefixCls}__link`">
        <a><Icon icon="bx:bx-paper-plane" color="#1890ff" /><span></span></a>
        <a><Icon icon="carbon:warning" color="#1890ff" /><span></span></a>
        <a><Icon icon="ion:document-text-outline" color="#1890ff" /><span></span></a>
      </div>
    </template>

    <div :class="`${prefixCls}__content`">
      <a-list>
        <a-row :gutter="16">
          <template v-for="item in data" :key="item.title">
            <a-col :span="8">
              <a-list-item>
                <a-card :hoverable="true" :class="`${prefixCls}__card`"  @click="details">
                  <div :class="`${prefixCls}__card-title`">
                    <img data-v-79a82383="" width="70" :src="item.img">
                    {{ item.name }}
                  </div>
                  <router-link to="/dashboard/homeless">   {{ item.desc }} </router-link>
                  <div :class="`${prefixCls}__card-detail`">
                  </div>
                </a-card>
              </a-list-item>
            </a-col>
          </template>
        </a-row>
      </a-list>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '@/components/Icon/Icon.vue';
  import { cardList } from './data';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, List } from 'ant-design-vue';
   import axios from 'axios'
  export default defineComponent({
    components: {
      Icon,
      PageWrapper,
      [Card.name]: Card,
      [List.name]: List,
      [List.Item.name]: List.Item,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      function  details(){

         return [ { "name": "Vben Admin", "img": "https://img95.699pic.com/xsj/08/wg/1v.jpg%21/fh/300", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" }, { "name": "Vben Admin", "img": "/src/assets/images/header.jpg", "desc": "A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation" } ];
      }
      return {
        prefixCls: 'list-card',
        list: cardList,
        data : details(),

      };
    },
  });
</script>
<style lang="less" scoped>
  .list-card {
    &__link {
      margin-top: 10px;
      font-size: 14px;

      a {
        margin-right: 30px;
      }

      span {
        margin-left: 5px;
      }
    }

    &__card {
      width: 100%;
      margin-bottom: -8px;

      .ant-card-body {
        padding: 16px;
      }

      &-title {
        margin-bottom: 5px;
        color: @text-color;
        font-size: 16px;
        font-weight: 500;

        .icon {
          margin-top: -5px;
          margin-right: 10px;
          font-size: 38px !important;
        }
      }

      &-detail {
        padding-top: 10px;
        padding-left: 30px;
        color: @text-color-secondary;
        font-size: 14px;
      }
    }
  }
</style>
