const { Subtitle } = window.Dumb
const { EditableList, SearchNew } = window.Smart

/*
	props: title - list - updateList - childList - updateChilds
*/
const CrudItemList = React.createClass({
	updateList: function(list) {
		console.log('CrudItemList', 'updateList', item)
		this.props.updateList(list);
	},
	isNewItem: function(item) {
		return this.props.list.filter( i => i.name == item.name).length == 0
	},
	addItem: function(item) {
		console.log(this.props.childList.length)
		item.id = this.props.childList.length + 1
		this.props.updateChilds(item)

/*
		if (this.isNewItem(item)){
			let tmp = this.props.list
			item.id = tmp.length + 1
			tmp.push(item)
			this.props.updateList(tmp)
		}*/
	},
	render: function() {
		return (
			<div>
				<Subtitle
					value={this.props.title}/>
				<EditableList
					list={this.props.childList}
					update={this.updateList}/>
				<SearchNew
					list={this.props.list}
					add={this.addItem}
				/>
			</div>
		)
	}
})

window.Smart.CrudItemList = CrudItemList