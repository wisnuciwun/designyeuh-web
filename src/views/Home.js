import React, { Component } from 'react'
import FileImporter from '../helpers/FileImporter';
import { Pagination } from 'react-bootstrap';
import PictureTableSingle from '../components/PictureTableSingle';
import Axios from '../helpers/axios';
import ContentRow from '../components/ContentRow';
import Executor from '../helpers/Executor';

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

            resumeTimeSorted:{
                ShowImg: [],
                ShowPath: [],
                ShowLink: []
            },
            resumePopularSorted: {
                ShowImg: [],
                ShowPath: [],
                ShowLink: []
            },
            wallpaperTimeSorted: {
                ShowImg: [],
                ShowPath: [],
                ShowLink: []
            },
            wallpaperPopularSorted: {
                ShowImg: [],
                ShowPath: [],
                ShowLink: []
            },
            
            resumeSortByTime: [],
            resumeSortByPopularity: [],
            wallpaperSortByTime: [],
            wallpaperSortByPopularity: []

        }
    }
    
    ImgImporters = async () => {
        let resumeByTime = this.state.resumeSortByTime
        let resumeByPopular = this.state.resumeSortByPopularity
        let wallpaperByTime = this.state.wallpaperSortByTime
        let wallpaperByPopular = this.state.wallpaperSortByPopularity

        let allSorted = [ resumeByTime, resumeByPopular, wallpaperByTime, wallpaperByPopular ]

        for (let i = 0; i < allSorted.length; i++) {
            let extracts = allSorted[i]
            let imgpth = extracts.map(x => {return(x.filename)})
            let imgnm = extracts.map(x => {return(x.title)})
            let imglink = extracts.map(x => {return(x.link)})
            let v = allSorted[i]

            switch (v) {
                case resumeByTime:
                    this.setState({
                        resumeTimeSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink
                        }
                    })
                case resumeByPopular:
                    this.setState({
                        resumePopularSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink                        
                        }
                    })
                case wallpaperByTime:
                    this.setState({
                        wallpaperTimeSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink                        
                        }
                    })
                case wallpaperByPopular:
                    this.setState({
                        wallpaperPopularSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink                        
                        }
                    })        
                default:
                break;
            }
        }
    }

    orderBy = async () => {
        await Axios.get('/Resumes/SortByTime')
        .then(res => this.setState({...this.state, resumeSortByTime: res.data}))
        await Axios.get('/Resumes/SortByPopularity')
        .then(res => this.setState({...this.state, resumeSortByPopularity: res.data}))
        await Axios.get('/Images/SortByTime')
        .then(res => this.setState({...this.state, wallpaperSortByTime: res.data}))
        await Axios.get('/Images/SortByPopularity')
        .then(res => this.setState({...this.state, wallpaperSortByPopularity: res.data}))
        this.ImgImporters()
    }

    componentDidMount = async () =>
    {
        await this.orderBy()
    }

    render() {
        let {template} = this.state
        
        let resumeNew = this.state.resumeTimeSorted
        let resumePopularity = this.state.resumePopularSorted
        let wallpaperNew = this.state.wallpaperTimeSorted
        let wallpaperPopularity = this.state.wallpaperPopularSorted
        
        let contents = []
        let sortArrayResume = [resumeNew, resumePopularity]
        let sortArrayImg = [wallpaperNew, wallpaperPopularity]
        let titleResume = ["New Resume Theme", "Popular Resume Theme"]
        let titleImg = ["New Wallpaper", "Popular Wallpaper"]
        
        for (let z = 0; z < sortArrayResume.length; z++) {
            let x = sortArrayResume[z]
            let val = <ContentRow constanta={template.perPage} imgName={x.ShowImg} imgPath={x.ShowPath} imgLink={x.ShowLink} title={titleResume[z]} icon="fas fa-file-alt" />    
            contents.push(val)
        }

        for (let z = 0; z < sortArrayImg.length; z++) {
            let x = sortArrayImg[z]
            let val = <ContentRow purpose="image" constanta={template.perPage} imgName={x.ShowImg} imgPath={x.ShowPath} imgLink={x.ShowLink} title={titleImg[z]} icon="far fa-images" />    
            contents.push(val)
        }

        return (
            <div style={{textAlign: 'left'}}>
                {contents}
            </div>
        )
    }
}

export default Home
