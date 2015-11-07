var z = {
	init:function(){
		this.head = $("#contentHeader");
		this.ctn = $("#container");
		this.contents = $('.content');
		this.forms = $("#content_forCreateUpdate");
		this.singles = $("#content_forDelteQuery");
		this.state = 'add';
		this.buttons = $(".buttons");

		this.confirm = $("#confirm");
		this.cancel = $("#cancel");

		
		this.refState = {
			add:'新增',
			update:'修改',
			query:'查询',
			remove:'删除'
		}
		//init state;
		this.forms.show();
		this.bind();
		this.changeState('add');
	},
	changeState:function(state){
		if(!state) return;
		this.stateID = state;
		this.head.html("Current State is: " + this.refState[state]);
		if(state === 'add' || state === 'update'){
			this.forms.show();
			this.singles.hide();
			this.currentCotnent = this.forms;
		}else{
			this.forms.hide();
			this.singles.show();
			this.currentCotnent = this.singles;
		}
	},
	bind:function(){
		var self = this;
		this.buttons.click(function(){
			var id = this.id.substring(3);
			self.changeState(id);
		});
		this.cancel.click(function(){
			self.clear();
		})
		this.confirm.click(function(){
			self.ok();
		})
	},
	clear:function(){
		var inputs = this.currentCotnent.find('input[type=text]');
		inputs.each(function(o){
			inputs.eq(o).val('');
		})
	},
	update:function(){
		var str = this.currentCotnent.find("form").serialize();
		str = str.split("&");
		var obj = {};
		for(var s = 0,len = str.length;s<len;s++){
			var attr = str[s].split('=');
			obj[attr[0]] = attr[1];
		}
		$.ajax({
			url:'http://127.0.0.1:8888/poster',
			type:'post',
			data:obj,
			success:function(data){
				console.log('success!');
			}
		})
	},
	ok:function(){
		switch(this.stateID){
			case 'add':
				this.update('add');
				break;
			case 'update':
				this.update('update');
				break;
			case 'delete':
				this.remove();
				break;
			case 'query':
				this.query();
				break;
			default:
				console.log('null function');
				break;
		}
	},
	query:function(){
		$.ajax({
			url:'http://127.0.0.1:8888/getPerson',
			type:'get',
			success:function(data){
				console.log(data);
			}
		})
	}

}
z.init();