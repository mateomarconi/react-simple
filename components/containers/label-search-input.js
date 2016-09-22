const LabelSearchInput = React.createClass({
	render: function() {
		return (
			<div>
				<label>{ this.props.label }</label>
			</div>
		)
	}
})

window.Smart.LabelSearchInput = LabelSearchInput