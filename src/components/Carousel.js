import React from 'react'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items : [
                {
                    id: 0,
                    title : 'Nag-me',
                    subTitle : 'A nudge theory goal attainment app',
                    imgSrc: 'from git hub',
                    link: 'from git hub',
                    selected: false,
                },
                {
                    id: 1,
                    title : 'Movie-DB',
                    subTitle : 'A React based app the returns info on a movie query',
                    imgSrc: 'from git hub',
                    link: 'from git hub',
                    selected: false,
                },
                {
                    id: 3,
                    title : 'Scheduler',
                    subTitle : 'A React based app for booking appointments ',
                    imgSrc: 'from git hub',
                    link: 'from git hub',
                    selected: false,
                },



            ]
        }
    }
    render() {
        return(
            <p>Carousel here</p>
        )
    }
}

export default Carousel