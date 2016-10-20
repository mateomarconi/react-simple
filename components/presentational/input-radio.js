const InputRadio = React.createClass({
	handleChange: function(e) {
		this.props.change(this.props.value)
	},
	render: function() {
		return(
			<input
				type	= "radio"
				name	={ this.props.name }
				onChange={ this.handleChange }
			/>
		)
	}
})

window.Dumb.InputRadio = InputRadio