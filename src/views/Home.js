import React, { Component } from 'react'
import FileImporter from '../helpers/FileImporter';
import { Pagination } from 'react-bootstrap';
import PictureTableSingle from '../components/PictureTableSingle';
import Axios from '../helpers/axios';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            template: {
                perPage: 10,
                offset: 0,
                allPage: 0,
                activePage: 1,
                imgPath:[],
                imgNames:[],
                imgLinks:[],
            },

            timeSorted:{},
            popularSorted: {},

            timeShowImg: [],
            timeShowPath: [],
            timeShowLink: [],

            popularShowImg: [],
            popularShowPath: [],
            popularShowLink: [],

            sortByTime: [],
            sortByPopularity: [],
        }
    }
    
    ImgImporters = async () => {
        const test = await FileImporter(require.context('../public/ResumeThumbnail', false, /\.(png|jpe?g|svg)$/));

        let { sortByPopularity, sortByTime } = this.state
        let allSorted = [ sortByTime, sortByPopularity ]
        let allSortedRaw = [ "timeSorted", "popularSorted" ]

        for (let i = 0; i < allSorted.length; i++) {
            let extracts = allSorted[i]
            let imgpth = extracts.map(x => {return(x.filename)})
            let imgnm = extracts.map(x => {return(x.title)})
            let imglink = extracts.map(x => {return(x.link)})
            let v = allSortedRaw[i]

            switch (v) {
                case "timeSorted":
                    this.setState({
                        timeSorted:{
                            ...this.state.template,
                            imgPath: imgpth,
                            imgNames: imgnm,
                            imgLinks: imglink,
                            allPage: Math.ceil(imgnm.length / this.state.perPage)
                        }
                    })
                case "popularSorted":
                    this.setState({
                        popularSorted:{
                            ...this.state.template,
                            imgPath: imgpth,
                            imgNames: imgnm,
                            imgLinks: imglink,
                            allPage: Math.ceil(imgnm.length / this.state.perPage)
                        }
                    })            
                default:
                    break;
            }
        }

        this.Paging()

    }

    Paging = () =>
    {
        let { timeSorted, popularSorted } = this.state

        let allSortedRaw = [ timeSorted, popularSorted ]

        for (let i = 0; i < allSortedRaw.length; i++) {
            let v = allSortedRaw[i]
            let {imgNames, imgPath, imgLinks, offset, activePage, perPage} = allSortedRaw[i]

            let imgSlice = imgNames.slice(offset * perPage, (activePage * perPage))
            let pathSlice = imgPath.slice(offset * perPage, (activePage * perPage))
            let linkSlice = imgLinks.slice(offset * perPage, (activePage * perPage))
            
            switch (v) {
                case timeSorted:
                    this.setState({
                        timeShowImg: imgSlice,
                        timeShowPath: pathSlice,
                        timeShowLink: linkSlice
                    })
                case popularSorted:
                    this.setState({
                        popularShowImg: imgSlice,
                        popularShowPath: pathSlice,
                        popularShowLink: linkSlice
                    })            
                default:
                    break;
            }
        }
    }

    orderBy = async () => {
        await Axios.get('/Resumes/SortByTime')
        .then(res => this.setState({...this.state, sortByTime: res.data}))
        await Axios.get('/Resumes/SortByPopularity')
        .then(res => this.setState({...this.state, sortByPopularity: res.data}))
        this.ImgImporters()
    }

    componentDidMount = async () =>
    {
        await this.orderBy()
    }

    render() {
    
    let {timeShowImg, timeShowPath, timeShowLink, popularShowImg, popularShowPath, popularShowLink} = this.state

        return (
            <div style={{textAlign: 'left'}}>
                <span className="input-margin">
                <p className="h4 grey-text"><i className="fas fa-wind"></i>&nbsp;&nbsp;New Resume Theme</p>
                <PictureTableSingle imgname={timeShowImg} imgpath={timeShowPath} imglink={timeShowLink}/>
                <br/>
                </span>

                <span className="input-margin">
                <p className="h4 input-margin grey-text"><i className="far fa-star"></i>&nbsp;&nbsp;Popular Resume Theme</p>
                <PictureTableSingle imgname={popularShowImg} imgpath={popularShowPath} imglink={popularShowLink}/>
                </span>
            </div>
        )
    }
}

export default Home
