ReactDOM.render(
	<p>fuck you</p>,
	document.getElementById("bbb")
);

var datas = {
	name:"zhangmingzhi",
	innerData:{
		name:'zmz'
	},
	ary:[
		{index:1,name:'zmz'},
		{index:2,name:'john'},
		{index:3,name:'frankendstein'},
		{index:4,name:'alice'},
		{index:5,name:'verrat'},
		{index:6,name:'mohamond'},
		{index:7,name:'spanw'},
		{index:8,name:'boloe'}
	]
}
var SonWidget = React.createClass({
	render:function(){
		return <span className="appendButtons">SonWidget~~~~ and name is {this.props.inner.name}</span>
	}
})
var LiWidget = React.createClass({
	render:function(){
		var lists = this.props.data.map(function(datas){
			return <li key={datas.index}>name is : {datas.name} current @{datas.index}</li>;
		});
		return <ul>{lists}</ul>;
	}
})
var InputWidget = React.createClass({
	getInitialState:function(){
		return {val:this.props.val};
	},
	onchanges:function(event){
		// this.setState({})
		console.log(this);
		console.log(event);
		this.setState({val:event.target.value});
	},
	rechangeState:function(){
		debugger;
		this.setState({val:'rtlguioetri90gpwetrjgiophjetri9pgjetriopjug'});	
	},
	render:function(){
		return (
			<div>
				<input type="text" onChange = {this.onchanges}  placeholder = "input your throuths here" value={this.state.val}/>	
				<span className="abcd">current Input are : {this.state.val}</span>
				<button onClick = {this.rechangeState}> hahahahaha </button>
			</div>
		)
	}
})
var TestWidget = React.createClass({
	render:function(){
		return (
			<div className="TestWidget">
				<InputWidget val = {this.props.zmz.name}/>
				<span className="result">{this.props.zmz.name}</span>
				<button className="subButtons">click me yeah!!</button>
				<SonWidget inner={this.props.zmz.innerData}/>
				<LiWidget data = {this.props.zmz.ary}/>
			</div>
		);
	}
});
ReactDOM.render(
	<TestWidget zmz={datas}/>,
	document.getElementById('ccc')
)