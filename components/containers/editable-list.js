const { ItemInlineEditor } = window.Dumb

/*
	props: list - update - select
*/
const EditableList = React.createClass({
	handleSelect: function(item) {
		console.log('userClick')
		console.log(item)
		this.props.select(item)
	},
	render:function() {
		return (
			<ul>
				{this.props.list.map( item => 
					<ItemInlineEditor key={ item.id } value={ item.name } userClick={ this.handleSelect.bind(null, item) }/>
				)}
			</ul>
		)
	}
})

window.Smart.EditableList = EditableList