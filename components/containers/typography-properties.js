const { Subtitle, LabelNumber } = window.Dumb
const { LabelSearchInput } = window.Smart

const TypographyProperties = React.createClass({
	render: function() {
		return (
			<div>
				<Subtitle value={ this.props.typography.name }/>

				<LabelSearchInput label="Family"/>

				<LabelNumber
					label="Min size"
					default="16"/>

				<LabelNumber
					label="Max size"
					default="24"/>

				<LabelNumber
					label="Measure"
					default="68"/>

				<LabelNumber
					label="Leading"
					default="1.3"
					step="0.1"/>

				<LabelNumber
					label="Margin"
					default="0"/>

			</div>
		)
	}
})

window.Smart.TypographyProperties = TypographyProperties