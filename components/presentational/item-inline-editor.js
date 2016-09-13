const ItemInlineEditor = React.createClass({
	render: function() {
		return (
			<li key={this.props.item.id}>{this.props.item.name}</li>
		)
	}
})

window.Dumb.ItemInlineEditor = ItemInlineEditor