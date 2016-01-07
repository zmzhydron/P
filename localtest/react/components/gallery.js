var fake = [
	{
		imgsrc:'../image/1.JPG'
	},
	{
		imgsrc:'../image/2.JPG'
	},
	{
		imgsrc:'../image/3.JPG'
	},
	{
		imgsrc:'../image/4.JPG'
	},
	{
		imgsrc:'../image/5.JPG'
	},
	{
		imgsrc:'../image/6.JPG'
	},
	{
		imgsrc:'../image/7.JPG'
	},
	{
		imgsrc:'../image/8.JPG'
	},
	{
		imgsrc:'../image/9.JPG'
	}
]
var count = 0;
var ImgList = React.createClass({
	getInitialState:function(){
		this.maxLen = this.props.imgs.length;
		return {imgList:this.props.imgs,currentIndex:this.props.currentIndex || 0}
	},
	render:function(){
		// console.log(count);
		count++;
		var that = this,
			opacity,
			className;
		this.state.imgList[this.state.currentIndex]['opacity'] = 'show';
		var lis = this.state.imgList.map(function(item,i){
			if(item['opacity'] === 'show'){
				className = 'imgBig-show';
			}else{
				className = 'imgBig-hide';
			}
			item['opacity'] = opacity;
			return <li key={i} className = {className} onClick = {that.mouseover} onDbClick = {that.dbcick}>
				<img src={item.imgsrc} />
			</li>;
		})
		return <ul className="galleryStage">{lis}</ul>;
	},
	mouseover:function(){
		clearInterval(this.timer);
		fake.map(function(item,i){
			item.name = 'z@'+i;
		})
		var a = fake[0].name;
		a = 'zmz';
		console.log(fake);
	},
	dbcick:function(){
		alert(1);
		this.autoRotation();
	},
	componentDidMount:function(){
		this.autoRotation();
	},
	autoRotation:function(){
		var that = this;
		this.timer = setInterval(function(){
			var	className;
			that.state.imgList[that.state.currentIndex].opacity = 'hide';
			that.state.currentIndex++;
			if(that.state.currentIndex > that.maxLen - 1){
				that.state.currentIndex = 0;
			}
			that.state.imgList[that.state.currentIndex].opacity = 'show';
			that.setState({
				imgList:that.state.imgList,
				
			})
		},2000);
	}
});
var GalleryControlComponent = React.createClass({
	render:function(){
		return (
			<div className = "GalleryControlDiv">
				<input type="text" onChange={this.setIntervalTime} placeholder="enter your pic rotation time" />
				<button onClick={this.PrePic} className="galleryControlBtn">PRE</button>
				<button onClick={this.NextPic} className="galleryControlBtn">Next</button>
			</div>
		)
	},
	setIntervalTime:function(){

	},
	NextPic:function(){

	},
	PrePic:function(){

	}
})
var GalleryComponent = React.createClass({
	render:function(){
		return (
			<div className="galleryContainer">
				<ImgList imgs = {this.props.imgList}/>
				<GalleryControlComponent/>
			</div>
		);
	}
})
var gallery = {
	init:function(){
		ReactDOM.render(<GalleryComponent imgList={fake}/>,document.getElementById('ddd'));
	}
}
gallery.init();
console.log('init');