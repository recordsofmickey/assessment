import {mount} from '@vue/test-utils'
import Search from '@/components/Search'

test('sent form', async () => {
    const $store = {
        state: {
           searchField: 'Hello' 
        },
        commit: jest.fn(),
        dispatch: jest.fn(),
    }
    const $router = {
        push: jest.fn()
      }

    const wrapper = mount(Search, {
        global: {
            mocks: {
                $store,
                $router
            }
        }
    })
    
    const form = wrapper.get('[data-test="form"]')
    expect(form.text()).toBe('Hello')
    await wrapper.find('button').trigger('click')
    expect($router.push).toHaveBeenCalled()
    expect($store.commit).toHaveBeenCalled()
    expect($store.dispatch).toHaveBeenCalled()
})