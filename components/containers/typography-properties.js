const { Subtitle, LabelNumber } = window.Dumb
const { LabelSearchInput } = window.Smart

const fontsFamilys = [
	'Georgia, serif',
	'"Palatino Linotype", "Book Antiqua", Palatino, serif',
	'"Times New Roman", Times, serif',
	'Arial, Helvetica, sans-serif',
	'"Arial Black", Gadget, sans-serif',
	'"Comic Sans MS", cursive, sans-serif',
	'Impact, Charcoal, sans-serif',
	'"Lucida Sans Unicode", "Lucida Grande", sans-serif',
	'Tahoma, Geneva, sans-serif',
	'"Trebuchet MS", Helvetica, sans-serif',
	'Verdana, Geneva, sans-serif',
	'"Courier New", Courier, monospace',
	'"Lucida Console", Monaco, monospace'
]

const TypographyProperties = React.createClass({
	render: function() {
		

		return (
			<div>
				<Subtitle value={ this.props.typography.name }/>

				<LabelSearchInput 
					label="Family"
					list={ fontsFamilys }/>

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