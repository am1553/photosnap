import React from 'react'
import IntroCard from '../Intro/IntroCard'

//images for create and share
import CreateAndShareMobile from '../../../assets/home/mobile/create-and-share.jpg'
import CreateAndShareTablet from '../../../assets/home/tablet/create-and-share.jpg'
import CreateAndShareDesktop from '../../../assets/home/desktop/create-and-share.jpg'

// images for beautiful stories 
import BeautifulStoriesMobile from '../../../assets/home/mobile/beautiful-stories.jpg'
import BeautifulStoriesTablet from '../../../assets/home/tablet/beautiful-stories.jpg'
import BeautifulStoriesDesktop from '../../../assets/home/desktop/beautiful-stories.jpg'


// images for design for everyone
import DesignForEveryoneMobile from '../../../assets/home/mobile/designed-for-everyone.jpg'
import DesignForEveryoneTablet from '../../../assets/home/tablet/designed-for-everyone.jpg'
import DesignForEveryoneDesktop from '../../../assets/home/desktop/designed-for-everyone.jpg'

function IntroContainer() {

    const Data = [
        {
            "id": 1,
            "className": 'create_and_share',
            "title": 'Create and share your photo stories.',
            "description": 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
            "buttonText": 'GET AN INVITE',
            "mobileImage": CreateAndShareMobile,
            "tabletImage": CreateAndShareTablet,
            "desktopImage": CreateAndShareDesktop,
            "line": true,
            "isReversed": true,
            "isArrowFilter": true,
            "cardBackground": '#000',
            "textColor": '#fff',
            "buttonClassname": 'create_invite_button'
        },
        {
            "id": 2,
            "className": 'beautiful_stories',
            "title": 'beautiful stories every time',
            "description": 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
            "buttonText": 'VIEW THE STORIES',
            "mobileImage": BeautifulStoriesMobile,
            "tabletImage": BeautifulStoriesTablet,
            "desktopImage": BeautifulStoriesDesktop,
            "line": false,
            "isReversed": false,
            "isArrowFilter": false,
            "cardBackground": '#fff',
            "textColor": '#000',
            "buttonClassname": 'beautiful_stories_button'
        },
        {
            "id": 3,
            "className": 'designed_for_everyone',
            "title": 'Designed for everyone',
            "description": 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
            "buttonText": 'VIEW THE STORIES',
            "mobileImage": DesignForEveryoneMobile,
            "tabletImage": DesignForEveryoneTablet,
            "desktopImage": DesignForEveryoneDesktop,
            "line": false,
            "isReversed": true,
            "isArrowFilter": false,
            "cardBackground": '#fff',
            "textColor": '#000',
            "buttonClassname": 'designed_for_everyone_button'
        }
    ]


  return (
    <div>
        {
            Data.map((data, key) => {
                return(
                    <IntroCard 
                        key = { data.id }
                        title = { data.title }
                        description = { data.description }
                        button_text = { data.buttonText }
                        mobile_image = { data.mobileImage }
                        tablet_image = { data.tabletImage }
                        desktop_image = { data.desktopImage }
                        line = { data.line }
                        isReversed = { data.isReversed }
                        isArrowFilter = { data.isArrowFilter }
                        cardBackground = { data.cardBackground }
                        textColor = { data.textColor }
                        buttonClassname = { data.buttonClassname }
                        className = { data.className }
                    />
                )
            })
        }
    </div>
  )
}

export default IntroContainer