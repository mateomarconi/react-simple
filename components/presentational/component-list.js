const { ComponentsListItem } = window.App

const ComponentsList = React.createClass({
	render: function() {
		let items = []
		this.props.list.forEach( component => 
			items.push(<ComponentsListItem component={component}/>)
		)
		return (
			<ul>
				{items}
			</ul>
		)
	}
})

window.App.ComponentsList = ComponentsList