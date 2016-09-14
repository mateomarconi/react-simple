const ItemInlineEditor = React.createClass({
	render: function() {
		return (
			<li>{this.props.value}</li>
		)
	}
})

window.Dumb.ItemInlineEditor = ItemInlineEditor