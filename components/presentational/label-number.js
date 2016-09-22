const LabelNumber = React.createClass({
	render: function() {
		return (
			<div>
				<label>{ this.props.label }</label>
				<input type="number" defaultValue={ this.props.default } step={ this.props.step || 1 }/>
			</div>
		)
	}
})

window.Dumb.LabelNumber = LabelNumber