<template>
  <div class="tsx-demo-container">
    <el-page-header @back="$router.back()">
      <template #content>
        <div class="page-header-content">
          <span class="text-large font-600 mr-3">TSX 组件示例</span>
          <el-tag>Vue 3 + TypeScript + JSX</el-tag>
        </div>
      </template>
    </el-page-header>

    <div class="demo-content">
      <!-- TSX 按钮示例 -->
      <el-card class="demo-section" shadow="never">
        <template #header>
          <div class="card-header">
            <span>TSX 按钮组件</span>
            <el-tag type="success" size="small">TsxButton.tsx</el-tag>
          </div>
        </template>

        <div class="demo-block">
          <div class="demo-item">
            <TsxButton type="primary" size="large">主要按钮</TsxButton>
            <TsxButton type="success">成功按钮</TsxButton>
            <TsxButton type="warning" size="small">警告按钮</TsxButton>
            <TsxButton type="danger" :disabled="true">禁用按钮</TsxButton>
          </div>

          <div class="demo-item">
            <TsxButton type="info" />
          </div>
        </div>

        <el-alert title="组件说明" type="info" :closable="false" show-icon>
          <p>TsxButton 组件使用 TSX 语法编写，展示了：</p>
          <ul>
            <li>Props 类型定义和验证</li>
            <li>响应式状态管理（点击计数）</li>
            <li>事件处理</li>
            <li>插槽（slots）的使用</li>
          </ul>
        </el-alert>
      </el-card>

      <!-- TSX 卡片示例 -->
      <el-card class="demo-section" shadow="never">
        <template #header>
          <div class="card-header">
            <span>TSX 卡片组件</span>
            <el-tag type="success" size="small">TsxCard.tsx</el-tag>
          </div>
        </template>

        <el-row :gutter="20">
          <el-col :span="8">
            <TsxCard
              title="主题色卡片"
              description="这是一个使用 TSX 语法编写的卡片组件"
              icon="el-icon-star-off"
              color="#409EFF"
              shadow="hover"
            />
          </el-col>

          <el-col :span="8">
            <TsxCard
              title="成功色卡片"
              description="支持自定义颜色、图标和阴影效果"
              icon="el-icon-check"
              color="#67C23A"
              shadow="always"
            />
          </el-col>

          <el-col :span="8">
            <TsxCard title="自定义插槽" icon="el-icon-setting" color="#E6A23C">
              <div style="margin-top: 10px">
                <el-button size="small" type="primary">操作按钮</el-button>
              </div>
            </TsxCard>
          </el-col>
        </el-row>

        <el-alert title="组件说明" type="info" :closable="false" show-icon style="margin-top: 20px">
          <p>TsxCard 组件展示了 TSX 中的：</p>
          <ul>
            <li>条件渲染（v-if 的 JSX 写法）</li>
            <li>计算属性和样式绑定</li>
            <li>命名插槽的使用</li>
            <li>CSS 样式的类型安全</li>
          </ul>
        </el-alert>
      </el-card>

      <!-- 代码示例 -->
      <el-card class="demo-section" shadow="never">
        <template #header>
          <div class="card-header">
            <span>TSX 语法要点</span>
            <el-tag type="warning" size="small">Quick Start</el-tag>
          </div>
        </template>

        <el-collapse>
          <el-collapse-item title="1. 基本组件定义" name="1">
            <pre><code>import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  props: {
    title: String
  },
  setup(props, { slots }) {
    return () => (
      &lt;div&gt;
        &lt;h1&gt;{props.title}&lt;/h1&gt;
        {slots.default?.()}
      &lt;/div&gt;
    )
  }
})</code></pre>
          </el-collapse-item>

          <el-collapse-item title="2. 响应式数据和事件" name="2">
            <pre><code>import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    
    return () => (
      &lt;button onClick={increment}&gt;
        Count: {count.value}
      &lt;/button&gt;
    )
  }
})</code></pre>
          </el-collapse-item>

          <el-collapse-item title="3. 条件渲染和列表" name="3">
            <pre><code>export default defineComponent({
  setup() {
    const show = ref(true)
    const items = ref(['A', 'B', 'C'])
    
    return () => (
      &lt;div&gt;
        {show.value && &lt;p&gt;显示内容&lt;/p&gt;}
        {items.value.map(item => (
          &lt;div key={item}&gt;{item}&lt;/div&gt;
        ))}
      &lt;/div&gt;
    )
  }
})</code></pre>
          </el-collapse-item>

          <el-collapse-item title="4. Props 类型定义" name="4">
            <pre><code>import type { PropType } from 'vue'

interface ButtonProps {
  type: 'primary' | 'success' | 'warning'
  size?: 'large' | 'default' | 'small'
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType&lt;ButtonProps['type']&gt;,
      required: true
    },
    size: {
      type: String as PropType&lt;ButtonProps['size']&gt;,
      default: 'default'
    }
  }
})</code></pre>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { TsxButton, TsxCard } from '@/components/custom/tsx-example'
</script>

<style scoped lang="scss">
  .tsx-demo-container {
    padding: 20px;

    .page-header-content {
      display: flex;
      align-items: center;
    }

    .demo-content {
      margin-top: 20px;
    }

    .demo-section {
      margin-bottom: 20px;

      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .demo-block {
      margin-bottom: 20px;
    }

    .demo-item {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
    }

    pre {
      padding: 16px;
      overflow-x: auto;
      background-color: var(--el-fill-color-light);
      border-radius: 4px;

      code {
        font-family: 'Courier New', Courier, monospace;
        font-size: 14px;
        line-height: 1.6;
      }
    }

    ul {
      padding-left: 24px;
      margin: 8px 0;

      li {
        margin: 4px 0;
      }
    }
  }

  // Dark mode support
  html.dark {
    .tsx-demo-container {
      pre {
        background-color: var(--el-fill-color-darker);
      }
    }
  }
</style>
