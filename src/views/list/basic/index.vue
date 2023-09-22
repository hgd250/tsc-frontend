<template>
  <PageWrapper :class="prefixCls" >
    <div :class="`${prefixCls}__top`">
      <a-row :gutter="12">
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>Pending</div>
          <p>8</p>
        </a-col>
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>Average Time</div>
          <p>32 Days</p>
        </a-col>
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>Completed</div>
          <p>24</p>
        </a-col>
      </a-row>
    </div>

    <div :class="`${prefixCls}__content`">
      <a-list :pagination="pagination">
        <template v-for="item in list" :key="item.id">
          <a-list-item class="list">
            <a-list-item-meta>
              <template #avatar>
                <Icon class="icon" v-if="item.icon" :icon="item.icon" :color="item.color" />
              </template>
              <template #title>
                <span>{{ item.title }}</span>
                <div class="extra" v-if="item.extra">
                  <a-button type="primary" class="my-4" @click="send"> {{ item.extra }} </a-button>

                </div>
              </template>
              <template #description>
                <div class="description">
                  {{ item.description }}
                </div>
                <div class="info">
                  <div><span>Owner</span>{{ item.author }}</div>
                  <div><span>start date</span>{{ item.datetime }}</div>
                </div>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>

    <Drawer4 @register="register4" />
  </PageWrapper>
</template>
<script lang="ts">
  import { Progress, Row, Col, List } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import Icon from '@/components/Icon/Icon.vue';
  import { cardList } from './data';
  import { PageWrapper } from '/@/components/Page';
   import { Alert } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import Drawer4 from './Drawer4.vue';

  export default defineComponent({
    components: {
      Icon,
      Progress,
      PageWrapper,
      [List.name]: List,
      [List.Item.name]: List.Item,
      AListItemMeta: List.Item.Meta,
      [Row.name]: Row,
      [Col.name]: Col,
      Alert,
      Drawer4,

    },
    setup() {

      const [register4, { openDrawer: openDrawer4 }] = useDrawer();
      function send() {
        openDrawer4(true, {
          data: 'content',
          info: 'Info',
        });
      }
      return {
        prefixCls: 'list-basic',
        list: cardList,
        pagination: {
          show: true,
          pageSize: 3,
        },
        register4,
        send,
      };
    },
  });



</script>
<style lang="less" scoped>
  .list-basic {
    &__top {
      padding: 24px;
      background-color: @component-background;
      text-align: center;

      &-col {
        &:not(:last-child) {
          border-right: 1px dashed @border-color-base;
        }

        div {
          margin-bottom: 12px;
          color: @text-color;
          font-size: 14px;
          line-height: 22px;
        }

        p {
          margin: 0;
          color: @text-color;
          font-size: 24px;
          line-height: 32px;
        }
      }
    }

    &__content {
      margin-top: 12px;
      padding: 24px;
      background-color: @component-background;

      .list {
        position: relative;
      }

      .icon {
        font-size: 40px !important;
      }

      .extra {
        position: absolute;
        top: 20px;
        right: 15px;
        color: @primary-color;
        font-weight: normal;
        cursor: pointer;
      }

      .description {
        display: inline-block;
        width: 40%;
      }

      .info {
        display: inline-block;
        width: 30%;
        text-align: center;

        div {
          display: inline-block;
          padding: 0 20px;

          span {
            display: block;
          }
        }
      }

      .progress {
        display: inline-block;
        width: 15%;
        vertical-align: top;
      }
    }
  }
</style>
