const { Subtitle, CheckboxLabel, RadioLabel } = window.Dumb

const SetLayout = React.createClass({
	render: function() {
		return(
			<div>
				<Subtitle value="Layout"/>
				<RadioLabel value="Row" name="row-column"/>
				<RadioLabel value="Column" name="row-column"/>
				<CheckboxLabel value="Wrap"/>
			</div>
		)
	}
})

window.Smart.SetLayout = SetLayout