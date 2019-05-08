import React from 'react'
import VideoContainer from './VideoContainer'
import NavBar from './NavBar'


export default class Main extends React.Component {

    // state = {
    //     videos: [],
    //     searchResults: []
    // }
    videos = [{title: "Javascript", language: 'Javascript'},
        {title: "Javascript", language: 'Javascript'},
        {title: "Ruby", language: 'Ruby'},
        {title: "Ruby", language: 'Ruby'},
        {title: "Rails", language: 'Rails'},
        {title: "Rails", language: 'Rails'},
        {title: "React", language: 'React'},
        {title: "React", language: 'React'}]

    state = {
        videos: this.videos,
        filteredVideos: [],
        searchResults: this.videos,
        filter: 'All'
    }

    filterVideos = (value) => {
        this.setState({
            filter: value,
            filteredVideos: this.state.videos.filter((video) => video.language === value)
        })
    }

    handleSubmit = (value) => {
        let original = this.state.videos
        let searchResults = original.filter(video => video.title.toLowerCase().includes(value))
        this.setState({searchResults: searchResults})
        this.loadVideos()
    }

    loadVideos = () => {
        if(this.state.videos == this.state.searchResults){
            return <VideoContainer filterVideos={this.filterVideos} videos={this.state.videos} filteredVideos={this.state.filteredVideos} filter={this.state.filter}/>
        } else {
            return <VideoContainer filterVideos={this.filterVideos} videos={this.state.searchResults} filteredVideos={this.state.filteredVideos} filter={this.state.filter}/>
        }
    }

    render(){
        return(
            <div className="main-page">
                <NavBar handleSubmit={this.handleSubmit}/>
                {this.loadVideos()}
            </div>
        )
    }

    // componentDidMount(){
    //     fetch('localhost:3000/videos')
    //     .then((res) => {return res.json})
    //     .then((videos) => this.setState({videos: videos}))      
    // }
}