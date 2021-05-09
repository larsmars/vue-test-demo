/* eslint-disable */
import router from '@/router'
import { createLocalVue, mount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Snapshot views', () => {
  const localVueInst = createLocalVue()

  it('Snapshot: Home view', () => {
    const wrapper = mount(Home, {
      localVueInst,
      router
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
