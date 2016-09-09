const { ComponentsListItem } = window.App

const ComponentsList = React.createClass({
	render: function() {
		let items = []
		
		return (
			<ul>
				{items}
			</ul>
		)
	}
})

window.App.ComponentsList = ComponentsList