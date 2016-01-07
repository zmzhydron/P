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
		this.setState({val:event.target.value});
	},
	rechangeState:function(){
		this.setState({asdf:'rtlguioetri90gpwetrjgiophjetri9pgjetriopjug'});	
	},
	render:function(){
		return (
			<div>
				<span className="abcd">current Input are : {this.state.val}</span>
				<InputSonWidget onchange={this.onchanges} val={this.state.val}/>
				<button onClick = {this.rechangeState}> hahahahaha </button>
			</div>
		)
	}
})
var InputSonWidget = React.createClass({
	getInitialState:function(){
		return {val:this.props.val}
	},
	change:function(){
		this.props.onchange();
	},
	render:function(){
		return <input type="text" onChange = {this.props.onchange} defaultValue={this.props.val} placeholder = "input your throuths here"/>	
		// return <input type="text" defaultValue={this.props.val}  placeholder = "input your throuths here"/>	
	}
})
var TestWidget = React.createClass({
	render:function(){
		return (
			<div className="TestWidget">
				<InputWidget val = {this.props.zmz.name}/>
				<LiWidget data = {this.props.zmz.ary} />
			</div>
		);
	}
});
ReactDOM.render(
	<TestWidget zmz={datas}/>,
	document.getElementById('ccc')
)