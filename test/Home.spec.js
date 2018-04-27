import { shallow } from '@vue/test-utils'
import { expect } from 'chai'
import Home from '_views/Home.vue'

describe('Home.vue', () => {
    it('Home test', () => {
        const wrapper = shallow(Home)
        expect(wrapper.find('div').text()).contains('"O sistema De Olho nas Metas ajudará cidadãos e organizações da sociedade civil a acompanhar e monitorar o cumprimento de metas da prefeitura de São Paulo."')
    })

    it('Home test 2', () => {
        const wrapper = shallow(Home)
        expect(wrapper.find('div').text()).contains('Home')
    })

    it('Home test 3', () => {
        const wrapper = shallow(Home)
        expect(wrapper.find('div').text()).contains('Home')
    })
})
