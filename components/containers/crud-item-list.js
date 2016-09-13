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
		console.log(this.props.list.contains(item))
	},
	addItem: function(item) {
		console.log('CrudItemList', 'addItem', item)
		//if (isNewItem(item, list))
			// updateList with new item
			// updateChilds with new item
		//else
			// updateChilds with new item
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