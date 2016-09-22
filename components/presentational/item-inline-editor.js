const ItemInlineEditor = React.createClass({
	render: function() {
		return (
			<li onClick={ this.props.userClick } >{ this.props.value }</li>
		)
	}
})

window.Dumb.ItemInlineEditor = ItemInlineEditor