import Modal from '@/components/Modal'
import { mount } from '@vue/test-utils'
import { createApp }from 'vue'
import Vuex from 'vuex'
import createStore from '@/store/index.js'

const app = createApp(Modal)

app.use(Vuex)
const store = new Vuex.Store(createStore);

test('store is loaded ', () => {
    const wrapper = mount(Modal, { 
        store
    })
    store.state.modalContent = {
        name:"Hello!",
        genres:["Drama","Thriller"],
        officialSite:"https://www.hoichoi.tv/shows/watch-hello-bengali-web-series-online",
        image:{medium:"https://static.tvmaze.com/uploads/images/medium_portrait/280/701095.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/280/701095.jpg"},
        summary:"<p>The festival of Durga Puja becomes memorable for Nandita when suddenly she receives an MMS from an unknown number that turns her life upside down.</p>"
        }
    expect(wrapper.vm.modalContent.name).toEqual("Hello!")

})