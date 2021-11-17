import { mount } from '@vue/test-utils'
import Categorizer from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Categorizer.vue', () => {
  test('render test', () => {
    const wrapper = mount(Categorizer, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
