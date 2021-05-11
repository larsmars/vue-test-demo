/* eslint-disable */
import router from '@/router'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import About from '@/views/About'
import Home from '@/views/Home'

describe('Snapshot views', () => {
  const localVueInst = createLocalVue()

  it('Snapshot: Home view', () => {
    const wrapper = mount(Home, {
      localVueInst,
      router
    })
    expect(wrapper.html()).toMatchSnapshot()
  }),

  it('Snapshot: About view', () => {
    const wrapper = shallowMount(About, {
      localVueInst,
      router
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
