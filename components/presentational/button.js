const Button = React.createClass({
	render: function() {
		return (
			<button onClick={ this.props.submit }>
				{ this.props.value }
			</button>
		)
	}
})

window.Dumb.Button = Button