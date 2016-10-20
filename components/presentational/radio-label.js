const { InputRadio, LabelText } = window.Dumb

const RadioLabel = React.createClass({
	render: function() {
		console.log(this.props)
		return (
			<div>
				<InputRadio 
					name	={ this.props.name}
					change	={ this.props.change }
					value	={ this.props.value }
				/>

				<LabelText
					value	={ this.props.value }
				/>
			</div>
		)
	}

});

window.Dumb.RadioLabel = RadioLabel