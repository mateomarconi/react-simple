const { Subtitle } = window.Dumb

const TypographyProperties = React.createClass({
	render: function() {
		return (
			<div>
			{ this.props.typography &&
				<Subtitle value={ this.props.typography.name }/>
			}
			</div>
		)
	}
})

window.Smart.TypographyProperties = TypographyProperties