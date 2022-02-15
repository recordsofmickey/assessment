import { mount } from '@vue/test-utils'
import GenreList from '@/views/GenreList'

test('display show', async () => {
    const $store = {
        state: {
           shows: [{
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

    const $router = {
        currentRoute: {
            fullPath: '/genres/Drama'
        }
    }

    const wrapper = mount(GenreList, {
        global: {
            mocks: {
                $store,
                $router
            }
        }
    })
    const header = wrapper.get('[data-test="header"]');
    expect(header.text().valueOf('Drama'));
    expect(wrapper.findAll('[data-test="serie-card"]')).toHaveLength(2);
})