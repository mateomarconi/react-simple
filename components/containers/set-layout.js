const { Subtitle, CheckboxLabel, RadioLabel } = window.Dumb

const SetLayout = React.createClass({
	render: function() {
		return(
			<div>
				<Subtitle 
					value	= "Layout"
				/>
				<RadioLabel
					value	= "row"
					name	= "direction"
					change	={ this.props.changeDirection, this.props.changeWrap }
				/>
				<RadioLabel
					value	= "column"
					name	= "direction"
					change	={ this.props.changeDirection }
				/>
				<CheckboxLabel
					value	= "wrap"
				/>
			</div>
		)
	}
})

window.Smart.SetLayout = SetLayout