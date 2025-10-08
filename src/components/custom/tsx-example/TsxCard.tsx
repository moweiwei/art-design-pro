import { defineComponent, computed } from 'vue'
import type { CSSProperties } from 'vue'

/**
 * TSX 示例组件 - 卡片组件
 * 演示 TSX 中的条件渲染、样式绑定等特性
 */
export default defineComponent({
  name: 'TsxCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#409EFF'
    },
    shadow: {
      type: String as () => 'always' | 'hover' | 'never',
      default: 'hover'
    }
  },
  setup(props, { slots }) {
    const cardStyle = computed<CSSProperties>(() => ({
      borderLeft: `4px solid ${props.color}`
    }))

    const iconStyle = computed<CSSProperties>(() => ({
      color: props.color
    }))

    return () => (
      <el-card shadow={props.shadow} style={cardStyle.value}>
        <div class="tsx-card-content">
          {props.icon && (
            <div class="tsx-card-icon" style={iconStyle.value}>
              <i class={props.icon} style={{ fontSize: '24px' }} />
            </div>
          )}
          <div class="tsx-card-body">
            <h3 class="tsx-card-title">{props.title}</h3>
            {props.description && <p class="tsx-card-description">{props.description}</p>}
            {slots.default && <div class="tsx-card-slot">{slots.default()}</div>}
          </div>
        </div>
      </el-card>
    )
  }
})
