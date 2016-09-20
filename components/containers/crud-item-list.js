const { Subtitle } = window.Dumb
const { EditableList, SearchNew } = window.Smart

/*
	props: title - searchList - addNewSearch -childList - addChild
*/
const CrudItemList = React.createClass({
	addItem: function(item) {
		if (item.id == null)
			this.props.addNewSearch(item)
		this.props.addNewChild(item)
	},
	render: function() {
		return (
			<div>
				<Subtitle
					value={this.props.title}/>
				<EditableList
					list={this.props.childList}
					update={this.props.updateChilds}/>
				<SearchNew
					list={this.props.searchList}
					add={this.addItem}
				/>
			</div>
		)
	}
})

window.Smart.CrudItemList = CrudItemList