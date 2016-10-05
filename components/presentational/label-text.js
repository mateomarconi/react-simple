const LabelText = React.createClass({
	render: function() {
		return(
			<label>{ this.props.value }</label>
		)
	}
})

window.Dumb.LabelText = LabelText