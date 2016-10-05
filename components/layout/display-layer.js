const DisplayLayer = React.createClass({

	render: function() {
		return (
			<div style={ this.props.fontConfig }>{ this.props.children }</div>
		)
	}
})

window.Layout.DisplayLayer = DisplayLayer