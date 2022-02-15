import { mount } from '@vue/test-utils'
import SearchResults from '@/views/SearchResults'

test('display show', async () => {
    const $store = {
        state: {
           searchResult: [{
                name:"Hello!",
                genres:["Drama","Thriller"],
                officialSite:"https://www.hoichoi.tv/shows/watch-hello-bengali-web-series-online",
                image:{medium:"https://static.tvmaze.com/uploads/images/medium_portrait/280/701095.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/280/701095.jpg"},
                summary:"<p>The festival of Durga Puja becomes memorable for Nandita when suddenly she receives an MMS from an unknown number that turns her life upside down.</p>"
            },
            {
                name:"Hello!",
                genres:["Drama","Thriller"],
                officialSite:"https://www.hoichoi.tv/shows/watch-hello-bengali-web-series-online",
                image:{medium:"https://static.tvmaze.com/uploads/images/medium_portrait/280/701095.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/280/701095.jpg"},
                summary:"<p>The festival of Durga Puja becomes memorable for Nandita when suddenly she receives an MMS from an unknown number that turns her life upside down.</p>"
            }] 
        },
        commit: jest.fn(),
        dispatch: jest.fn(),
    }


    const wrapper = mount(SearchResults, {
        global: {
            mocks: {
                $store,
            }
        }
    })
    expect(wrapper.findAll('[data-test="serie-card"]')).toHaveLength(2);
})