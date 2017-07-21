import React,{Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
const API_KEY ='AIzaSyCbr3Phg-UGzZYDCd9yXWv1K_TGLoextas';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
//create a new Componeent This componenet should produce some HTML

//Take this components generated HTM and put it on the page(in the DOM)

//const App =function(){
//return <div>Hi!</div>
//}
//=>is ES6 syntax
/*
//Following paaaaaart is from AJAX  term is search term
YTSearch({key:API_KEY,term:'surfboards'},function(data){
console.log(data);
});
*/
/*
const App = () => {
	return(
		<div>
		<SearchBar />
		</div>
	);
};
*/

//Array bcs data is a list of objects
//THe data that we are passing in VideolIst from paretn App is a prop
//SearchBar and VideolIst are child component of parent App
class App extends Component{
	constructor(props){
		super(props);

		this.state={
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('swim');
	}
	videoSearch(term){
		YTSearch({key:API_KEY,term:term},(data) =>{
		this.setState({videos:data,
		selectedVideo:data[0]});
		});
	}
	render(){
		const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300)
		return(
			<div>

			<SearchBar onSearchTermChange={videoSearch}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList
			onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
			videos={this.state.videos}/>
			</div>
		);
	}
}
ReactDOM.render(<App />,document.querySelector('.container'));
