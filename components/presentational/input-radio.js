const InputRadio = React.createClass({
	render: function() {
		return(
			<input
				type = "radio"
				name ={ this.props.name }
			/>
		)
	}
})

window.Dumb.InputRadio = InputRadio