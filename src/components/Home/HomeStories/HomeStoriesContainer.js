import React from 'react'
import StoriesCard from '../../Stories/StoriesCard/StoriesCard'

// mountains image 
import MountainsImageMobile from '../../../assets/stories/mobile/mountains.jpg'
import MountainsImageDesktop from '../../../assets/stories/desktop/mountains.jpg'

// cityscapes image 
import CityScapesImageMobile from '../../../assets/stories/mobile/cityscapes.jpg'
import CityScapesImageDesktop from '../../../assets/stories/desktop/cityscapes.jpg'

// voyage image 
import VoyageImageMobile from '../../../assets/stories/mobile/18-days-voyage.jpg'
import VoyageImageDesktop from '../../../assets/stories/desktop/18-days-voyage.jpg'

// architecturals image 
import ArchitecturalsImageMobile from '../../../assets/stories/mobile/architecturals.jpg'
import ArchitecturalsImageDesktop from '../../../assets/stories/desktop/architecturals.jpg'

function HomeStoriesContainer() {

    const Data = [
        {
            "id": 1,
            "mobile_image": MountainsImageMobile,
            "desktop_image": MountainsImageDesktop,
            "title": 'The Mountains',
            "artist": 'John Appleseed',
            "date": null
        },
        {
            "id": 2,
            "mobile_image": CityScapesImageMobile,
            "desktop_image": CityScapesImageDesktop,
            "title": 'Sunset Cityscapes',
            "artist": ' Benjamin Cruz',
            "date": null
        },
        {
            "id": 3,
            "mobile_image": VoyageImageMobile,
            "desktop_image": VoyageImageDesktop,
            "title": '18 Days Voyage',
            "artist": 'Alexei Borodin',
            "date": null
        },
        {
            "id": 4,
            "mobile_image": ArchitecturalsImageMobile,
            "desktop_image": ArchitecturalsImageDesktop,
            "title": 'Architecturals',
            "artist": 'Samantha Brooke',
            "date": null
        },
    ]




  return (
    <div className='home__stories_container'>
        {
            Data.map((data, key) => {
                return(
                    <StoriesCard
                        key={ data.id }
                        mobile_image = { data.mobile_image }
                        desktop_image = { data.desktop_image }
                        title = { data.title }
                        artist = { data.artist }
                        date = { data.date }
                    />
                )
            })
        }
    </div>
  )
}

export default HomeStoriesContainer