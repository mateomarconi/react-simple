const List = React.createClass({
	render: function() {
		return (
			<p>{ this.props.list }</p>
		)
	}
})

window.Dumb.List = List