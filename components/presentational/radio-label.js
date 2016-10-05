const { InputRadio, LabelText } = window.Dumb

const RadioLabel = React.createClass({

	render: function() {
		return (
			<div>
				<InputRadio name={ this.props.name}/>
				<LabelText value={ this.props.value }/>
			</div>
		)
	}

});

window.Dumb.RadioLabel = RadioLabel