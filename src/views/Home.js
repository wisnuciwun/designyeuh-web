import React, { Component } from 'react'
import FileImporter from '../helpers/FileImporter';
import { Pagination } from 'react-bootstrap';
import PictureTableSingle from '../components/PictureTableSingle';
import Axios from '../helpers/axios';
import ContentRow from '../components/ContentRow';
import Executor from '../helpers/Executor';
import Loading from '../components/Loading';
import { API_URL_SORT_POPULARITY_IMAGES, API_URL_SORT_POPULARITY_RESUMES, API_URL_SORT_TIME_IMAGES, API_URL_SORT_TIME_RESUMES } from '../constants/Constants';

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
                imgId:[],
                imgAuthor:[],
                imgDate: []
            },

            resumeTimeSorted:{
                ShowImg: [],
                ShowPath: [],
                ShowLink: [],
                ShowId:[],
                ShowAuthor:[],
                ShowDate: []
            },
            resumePopularSorted: {
                ShowImg: [],
                ShowPath: [],
                ShowLink: [],
                ShowId:[],
                ShowAuthor:[],
                ShowDate: []
            },
            wallpaperTimeSorted: {
                ShowImg: [],
                ShowPath: [],
                ShowLink: [],
                ShowId:[],
                ShowAuthor:[],
                ShowDate: []
            },
            wallpaperPopularSorted: {
                ShowImg: [],
                ShowPath: [],
                ShowLink: [],
                ShowId:[],
                ShowAuthor:[],
                ShowDate: []
            },
            
            resumeSortByTime: [],
            resumeSortByPopularity: [],
            wallpaperSortByTime: [],
            wallpaperSortByPopularity: []

        }
    }
    
    procImgImporters = async () => {
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
            let imgid = extracts.map(x => {return(x.id)})
            let imgauthor = extracts.map(x => {return(x.author)})
            let imgdate = extracts.map(x => {return(x.uploadDate)})
            
            let v = allSorted[i]

            switch (v) {
                case resumeByTime:
                    this.setState({
                        resumeTimeSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink,
                            ShowId: imgid,
                            ShowAuthor: imgauthor,
                            ShowDate: imgdate
                        }
                    })
                case resumeByPopular:
                    this.setState({
                        resumePopularSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink,
                            ShowId: imgid,
                            ShowAuthor: imgauthor,
                            ShowDate: imgdate
                        }
                    })
                case wallpaperByTime:
                    this.setState({
                        wallpaperTimeSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink,
                            ShowId: imgid,
                            ShowAuthor: imgauthor,
                            ShowDate: imgdate                    
                        }
                    })
                case wallpaperByPopular:
                    this.setState({
                        wallpaperPopularSorted:{
                            ShowImg: imgnm,
                            ShowPath: imgpth,
                            ShowLink: imglink,
                            ShowId: imgid,
                            ShowAuthor: imgauthor,
                            ShowDate: imgdate                  
                        }
                    })        
                default:
                break;
            }
        }
    }

    getOrderBy = async () => {
        await Axios.get(`${API_URL_SORT_TIME_RESUMES}`)
        .then(res => this.setState({...this.state, resumeSortByTime: res.data}))
        await Axios.get(`${API_URL_SORT_POPULARITY_RESUMES}`)
        .then(res => this.setState({...this.state, resumeSortByPopularity: res.data}))
        await Axios.get(`${API_URL_SORT_TIME_IMAGES}`)
        .then(res => this.setState({...this.state, wallpaperSortByTime: res.data}))
        await Axios.get(`${API_URL_SORT_POPULARITY_IMAGES}`)
        .then(res => this.setState({...this.state, wallpaperSortByPopularity: res.data}))
        this.procImgImporters()
    }

    componentDidMount = async () =>
    {
        await this.getOrderBy()
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
            let val = <ContentRow purpose="Resumes" constanta={template.perPage} imgName={x.ShowImg} imgPath={x.ShowPath} imgLink={x.ShowLink} imgId={x.ShowId} imgAuthor={x.ShowAuthor} imgDate={x.ShowDate} title={titleResume[z]}  icon="fas fa-file-alt" />    
            contents.push(val)
        }

        for (let z = 0; z < sortArrayImg.length; z++) {
            let x = sortArrayImg[z]
            let val = <ContentRow purpose="Images" constanta={template.perPage} imgName={x.ShowImg} imgPath={x.ShowPath} imgLink={x.ShowLink} imgId={x.ShowId} imgAuthor={x.ShowAuthor} imgDate={x.ShowDate} title={titleImg[z]} icon="far fa-images" />    
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
