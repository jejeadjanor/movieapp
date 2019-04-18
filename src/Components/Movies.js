import React, {Component} from 'react'
import moviesapifetch from './../apicalls/moviesapifetch'



class Movies extends Component{
   
    constructor(props){
    super(props)

    this.state = {
        search: ''
    }

}

componentDidMount(){
    this.moviesOMovies()
    // this.moviesToBeDisplayed()
    let searchButton = document.getElementById('search')
    searchButton.addEventListener('click', ()=>{this.moviesOMovies()})
}

// moviesToBeDisplayed(){
//     let searchInput = document.getElementById('searchMovie')
//     let title = searchInput.value

//     moviesapifetch.displayMovieDetails(title).then(res => {
//         res.json().then(data => {this.setState({search:data})})
//     })
// }

async moviesOMovies(){
    try {
        let searchInput = document.getElementById('searchMovie')
    let title = searchInput.value

    const m = await moviesapifetch.displayMovieDetails(title)
    const data = await m.json()
    this.setState({search: data})
    } catch (error) {
        console.log(error)
    }
    

}



render(){
    return(
        <div className='container'>
            <div className='searchDiv'>
                <input type='text' id='searchMovie' className='searchBox' placeholder='Search movie...' />
                <button className='searchButton' type='button' id='search'>Search</button>
            </div>
            <div className='movieDisplayInfo'>
                {/* <p>{`Year of Movie Production:${this.state.search.Year}`}</p> */}
                <a target='_blank' href={this.state.search.Website} alt='www.youtube.com'><img src={this.state.search.Poster}/></a>
                <p>{this.state.search.Plot}</p>
                <a target='_blank' href={this.state.search.Website}>{this.state.search.Website}</a>
            </div>
            
        </div>
    )   
}

}    




export default Movies