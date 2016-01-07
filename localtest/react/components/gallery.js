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
	render:function(){
		// console.log(count);
		count++;
		this.maxLen = this.props.imgs.length;
		var that = this,
			opacity,
			className;
		// this.props.imgList[this.state.index]['opacity'] = 'show';
		var lis = this.props.imgs.map(function(item,i){
			if(i === that.props.index){
				className = 'imgBig-show';
			}else{
				className = 'imgBig-hide';
			}
			// if(item['opacity'] === 'show'){
			// 	className = 'imgBig-show';
			// }else{
			// 	className = 'imgBig-hide';
			// }
			// item['opacity'] = opacity;
			return 	<li key={i} className = {className} onClick = {that.mouseover} onDbClick = {that.dbcick}>
						<img src={item.imgsrc} />
					</li>;
		})
		return <ul className="galleryStage">{lis}</ul>;
	},
	mouseover:function(){
	},
	dbcick:function(){
		this.autoRotation();
	},
	autoRotation:function(){
		var that = this;
	}
});
var GalleryControlComponent = React.createClass({
	render:function(){
		return (
			<div className = "GalleryControlDiv">
				<input type="text" onChange={this.setIntervalTime} placeholder="enter your pic rotation time" />
				<button onClick={this.PrePic} className="galleryControlBtn">PRE</button>
				<button onClick={this.NextPic} className="galleryControlBtn">Next</button>
				<button onClick={this.setParent} style={{style:"red"}}> changename </button>
			</div>
		)
	},
	setParent:function(){
		console.log(this);
		this.props.changename(this.val);
	},
	setIntervalTime:function(event){
		this.val = event.target.value;
	},
	NextPic:function(){

	},
	PrePic:function(){

	}
})
var GalleryComponent = React.createClass({
	getInitialState:function(){
		this.maxLen = this.props.imgList.length;
		return {asd:'zhangmingzhi',index:0,pre:0};
	},
	changename:function(val){
		console.log(event);
		var val = val || "undefined";
		this.setState({asd:val});
	},
	componentDidMount:function(){
		this.autoRotation();
	},
	autoRotation:function(){
		var that = this;
		this.timer = setInterval(function(){
			if(that.state.index === that.maxLen - 1){
				that.state.index = 0;
			}else{
				that.state.index++;
			}
			that.setState({index:that.state.index})
		},1000);
	},
	stopRotation:function(){
		clearInterval(this.timer);
	},
	render:function(){
		return (
			<div className="galleryContainer" onClick={this.stopRotation}>
				<div>{this.state.asd}</div>
				<ImgList imgs = {this.props.imgList} index={this.state.index}/>
				<GalleryControlComponent changename={this.changename}/>
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