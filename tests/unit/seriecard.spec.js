import SerieCard from '@/components/SerieCard'
import { mount } from '@vue/test-utils'

test('display show', () => {
    const wrapper = mount(SerieCard, {
    propsData: {
        serie: {
            name:"Hello!",
            genres:["Drama","Thriller"],
            officialSite:"https://www.hoichoi.tv/shows/watch-hello-bengali-web-series-online",
            image:{medium:"https://static.tvmaze.com/uploads/images/medium_portrait/280/701095.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/280/701095.jpg"},
            summary:"<p>The festival of Durga Puja becomes memorable for Nandita when suddenly she receives an MMS from an unknown number that turns her life upside down.</p>"
            }
        }
    })

    expect(wrapper.text()).toContain('Hello!');
})