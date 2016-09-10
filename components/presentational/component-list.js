const { ComponentsListItem } = window.App

const components = [
	{id: 1, text: 'input'},
	{id: 2, text: 'input#text'},
	{id: 3, text: 'input#number'},
	{id: 4, text: 'label'}
]

const ComponentsList = React.createClass({
	render: function() {
		let items = []
		components.forEach( component => items.push(
			<ComponentsListItem component={component}/>
		))
		return (
			<ul>
				{items}
			</ul>
		)
	}
})

window.App.ComponentsList = ComponentsList