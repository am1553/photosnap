import React from 'react'
import StoriesCard from '../StoriesCard/StoriesCard'
// mountains images
import MountainsImagesMobile from '../../../assets/stories/mobile/mountains.jpg'
import MountainsImagesDesktop from '../../../assets/stories/desktop/mountains.jpg'

// sunset images
import CityScapesImagesMobile from '../../../assets/stories/mobile/cityscapes.jpg'
import CityScapesDesktop from '../../../assets/stories/desktop/cityscapes.jpg'

// voyage images
import VoyageImagesMobile from '../../../assets/stories/mobile/18-days-voyage.jpg'
import VoyageImagesDesktop from '../../../assets/stories/desktop/18-days-voyage.jpg'

// architecturals images
import ArchitecturalsImagesMobile from '../../../assets/stories/mobile/architecturals.jpg'
import ArchitecturalsImagesDesktop from '../../../assets/stories/desktop/architecturals.jpg'

// world tour images
import WorldTourImagesMobile from '../../../assets/stories/mobile/world-tour.jpg'
import WorldTourImagesDesktop from '../../../assets/stories/desktop/world-tour.jpg'

// unforseen images
import UnforSeenImagesMobile from '../../../assets/stories/mobile/unforeseen-corners.jpg'
import UnforSeenImagesDesktop from '../../../assets/stories/desktop/unforeseen-corners.jpg'

//africa king images
import KingOfAfricaImagesMobile from '../../../assets/stories/mobile/king-on-africa.jpg'
import KingOfAfricaImagesDesktop from '../../../assets/stories/desktop/king-on-africa.jpg'

// trip to nowhere images
import NoWhereImagesMobile from '../../../assets/stories/mobile/trip-to-nowhere.jpg'
import NoWhereImagesDesktop from '../../../assets/stories/desktop/trip-to-nowhere.jpg'

// rage of sea images
import RageSeaImagesMobile from '../../../assets/stories/mobile/rage-of-the-sea.jpg'
import RageSeaImagesDesktop from '../../../assets/stories/desktop/rage-of-the-sea.jpg'

// running free images
import RunningFreeImagesMobile from '../../../assets/stories/mobile/running-free.jpg'
import RunningFreeImagesDesktop from '../../../assets/stories/desktop/running-free.jpg'

// behind the waves images
import BehindWavesImagesMobile from '../../../assets/stories/mobile/behind-the-waves.jpg'
import BehindWavesImagesDesktop from '../../../assets/stories/desktop/behind-the-waves.jpg'

// calm waters images
import CalmWatersImagesMobile from '../../../assets/stories/mobile/calm-waters.jpg'
import CalmWatersImagesDesktop from '../../../assets/stories/desktop/calm-waters.jpg'

// milky way images 
import MilkyWayImagesMobile from '../../../assets/stories/mobile/milky-way.jpg'
import MilkyWayImagesDesktop from '../../../assets/stories/desktop/milky-way.jpg'

// dark forest images
import DarkForestImagesMobile from '../../../assets/stories/mobile/dark-forest.jpg'
import DarkForestImagesDesktop from '../../../assets/stories/desktop/dark-forest.jpg'

// somwarpets images
import SomwarpetsImagesMobile from '../../../assets/stories/mobile/somwarpet.jpg'
import SomwarpetsImagesDesktop from '../../../assets/stories/desktop/somwarpet.jpg'

// land of dreams images
import LandOfDreamsImagesMobile from '../../../assets/stories/mobile/land-of-dreams.jpg'
import LandOfDreamsImagesDesktop from '../../../assets/stories/desktop/land-of-dreams.jpg'


// mobile_image, desktop_image, title, artist, date



function StoriesContainer() {

    const Data = [
        {
            "id": 1,
            "mobile_image": MountainsImagesMobile,
            "desktop_image": MountainsImagesDesktop,
            "title": 'The Mountains',
            "artist": 'John Appleseed',
            "date": 'April 16th 2020'
        },
        {
            "id": 2,
            "mobile_image": CityScapesImagesMobile,
            "desktop_image": CityScapesDesktop,
            "title": 'Sunset Cityscapes',
            "artist": 'Benjamin Cruz',
            "date": 'April 14th 2020'
        },
        {
            "id": 3,
            "mobile_image": VoyageImagesMobile,
            "desktop_image": VoyageImagesDesktop,
            "title": '18 Days Voyage',
            "artist": 'Alexei Borodin',
            "date": 'April 11th 2020'
        },
        {
            "id": 4,
            "mobile_image": ArchitecturalsImagesMobile,
            "desktop_image": ArchitecturalsImagesDesktop,
            "title": 'Architecturals',
            "artist": 'Samantha Brooke',
            "date": 'April 9th 2020'
        },
        {
            "id": 5,
            "mobile_image": WorldTourImagesMobile,
            "desktop_image": WorldTourImagesDesktop,
            "title": 'World Tour 2019',
            "artist": 'Timothy Wagner',
            "date": 'April 7th 2020'
        },
        {
            "id": 6,
            "mobile_image": UnforSeenImagesMobile,
            "desktop_image": UnforSeenImagesDesktop,
            "title": 'Unforeseen Corners',
            "artist": 'William Malcolm',
            "date": 'April 3rd 2020'
        },
        {
            "id": 7,
            "mobile_image": KingOfAfricaImagesMobile,
            "desktop_image": KingOfAfricaImagesDesktop,
            "title": 'King on Africa: Part II',
            "artist": 'Tim Hillenburg',
            "date": 'March 29th 2020'
        },
        {
            "id": 8,
            "mobile_image": NoWhereImagesMobile,
            "desktop_image": NoWhereImagesDesktop,
            "title": 'The Trip to Nowhere',
            "artist": 'Felicia Rourke',
            "date": 'March 21st 2020'
        },
        {
            "id": 9,
            "mobile_image": RageSeaImagesMobile,
            "desktop_image": RageSeaImagesDesktop,
            "title": 'Rage of The Sea',
            "artist": 'Mohammed Abdul',
            "date": 'March 19th 2020'
        },
        {
            "id": 10,
            "mobile_image": RunningFreeImagesMobile,
            "desktop_image": RunningFreeImagesDesktop,
            "title": 'Running Free',
            "artist": 'Michelle',
            "date": 'March 16th 2020'
        },
        {
            "id": 11,
            "mobile_image": BehindWavesImagesMobile,
            "desktop_image": BehindWavesImagesDesktop,
            "title": 'Behind the Waves',
            "artist": 'Lamarr Wilson',
            "date": 'March 11th 2020'
        },
        {
            "id": 12,
            "mobile_image": CalmWatersImagesMobile,
            "desktop_image": CalmWatersImagesDesktop,
            "title": 'Calm Waters',
            "artist": 'Samantha Brooke',
            "date": 'March 9th 2020'
        },
        {
            "id": 13,
            "mobile_image": MilkyWayImagesMobile,
            "desktop_image": MilkyWayImagesDesktop,
            "title": 'The Milky Way',
            "artist": 'Benjamin Cruz',
            "date": 'March 5th 2020'
        },
        {
            "id": 14,
            "mobile_image": DarkForestImagesMobile,
            "desktop_image": DarkForestImagesDesktop,
            "title": 'Night at The Dark Forest',
            "artist": 'Mohammed Abdul',
            "date": 'March 4th 2020'
        },
        {
            "id": 15,
            "mobile_image": SomwarpetsImagesMobile,
            "desktop_image": SomwarpetsImagesDesktop,
            "title": 'Somwarpet’s Beauty',
            "artist": 'Michelle',
            "date": 'March 1st 2020'
        },
        {
            "id": 16,
            "mobile_image": LandOfDreamsImagesMobile,
            "desktop_image": LandOfDreamsImagesDesktop,
            "title": 'Land of Dreams',
            "artist": 'William Malcolm',
            "date": 'February 25th 2020'
        }
    ]





  return (
    <div className='stories__stories_container'>

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

export default StoriesContainer