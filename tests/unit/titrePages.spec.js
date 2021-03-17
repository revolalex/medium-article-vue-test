import { mount } from '@vue/test-utils'
import TitrePage from '@/components/TitrePage.vue'

describe('titrePage.vue', () => {
    let wrapper
    beforeAll(() => {
      wrapper = mount(TitrePage, {
          propsData: { titre: 'titre à tester' }
      })
    })
     describe('Title of page', () => {
       it('should be defined', () => {
          expect(wrapper.exists()).toBeTruthy()
       })
       it('renders props titre when passed', () => {
          expect(wrapper.text()).toMatch('titre à tester')
       })
     })
     afterAll(() => {
       wrapper.destroy()
     })
  })