const { Checkbox, LabelText } = window.Dumb

const CheckboxLabel = React.createClass({
	render: function() {
		return (
			<div>
				<Checkbox/>
				<LabelText value={ this.props.value }/>
			</div>
		)
	}
})

window.Dumb.CheckboxLabel = CheckboxLabel