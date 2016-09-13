const Subtitle = React.createClass({
	render: function() {
		return (
			<h2>{ this.props.value }</h2>
		)
	}
})

window.Dumb.Subtitle = Subtitle