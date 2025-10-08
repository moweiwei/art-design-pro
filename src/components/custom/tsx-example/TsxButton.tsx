import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

export interface TsxButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'default' | 'small'
  disabled?: boolean
}

/**
 * TSX 示例组件 - 自定义按钮
 * 演示如何在 Vue 3 项目中使用 TSX 语法
 */
export default defineComponent({
  name: 'TsxButton',
  props: {
    type: {
      type: String as PropType<TsxButtonProps['type']>,
      default: 'primary'
    },
    size: {
      type: String as PropType<TsxButtonProps['size']>,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const count = ref(0)

    const handleClick = () => {
      if (!props.disabled) {
        count.value++
      }
    }

    return () => (
      <el-button
        type={props.type}
        size={props.size}
        disabled={props.disabled}
        onClick={handleClick}
      >
        {slots.default ? slots.default() : `点击次数: ${count.value}`}
      </el-button>
    )
  }
})
