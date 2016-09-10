const ComponentsListItem = React.createClass({
	render: function() {
		return (
			<li key={this.props.component.id}>{this.props.component.text}</li>
		)
	}
})

window.App.ComponentsListItem = ComponentsListItem