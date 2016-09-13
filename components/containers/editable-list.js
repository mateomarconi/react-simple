const { ItemInlineEditor } = window.Dumb

/*
	props: list - update
*/
const EditableList = React.createClass({
	render:function() {
		return (
			<ul>
				{this.props.list.map( item => 
					<ItemInlineEditor item={item} />
				)}
			</ul>
		)
	}
})

window.Smart.EditableList = EditableList