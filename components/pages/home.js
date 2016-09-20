const { CrudItemList } = window.Smart
const { Container, Box } = window.Layout

const HomePage = React.createClass({
	getInitialState: function() {
		return {
			components: [
				{id: 1, name: 'CrudItemList'},
				{id: 2, name: 'Subtitle'},
				{id: 3, name: 'EditableList'},
				{id: 4, name: 'SearchNew'}
			],
			typograhies: [
				{id: 1, name: 'Roboto-header'},
				{id: 2, name: 'Roboto-footer'},
				{id: 3, name: 'Montserrat-titles'},
				{id: 4, name: 'Montserrat-components'}
			],
			childComponents: [],
			childTypographies: []
		}
	},


	addComponent: function(component) {
		const tmp = {
			id: this.state.components.length + 1,
			name: component.name
		}
		this.setState({ components: [...this.state.components, tmp] })
	},
	addNewComponent: function(child) {
		const tmp = {
			id: this.state.childComponents.length + 1,
			name: child.name
		}
		this.setState({ childComponents: [...this.state.childComponents, tmp] })
	},
	updateChilds: function(childs) {
		this.setState({ childComponents: childs})
	},


	addTypography: function(typography) {
		const tmp = {
			id: this.state.typograhies.length + 1,
			name: typography.name
		}
		this.setState({ typograhies: [...this.state.typograhies, tmp] })
	},
	addNewTypography: function(typography) {
		const tmp = {
			id: this.state.childTypographies.length + 1,
			name: typography.name
		}
		this.setState({ childTypographies: [...this.state.childTypographies, tmp] })
	},
	updateTypographies: function(typographies) {
		this.setState({ childTypographies: typographies})
	},


	render: function() {
		return (
			<Box>
				<Box flex="0 0 20%">
					<h1>Left</h1>
					<CrudItemList title="Components"
						searchList	={ this.state.components }
						addNewSearch={ this.addComponent }
						childList	={ this.state.childComponents }
						addNewChild	={ this.addNewComponent }
						updateChilds={ this.updateChilds }
					/>

					<CrudItemList title="Typography"
						searchList	={ this.state.typograhies }
						addNewSearch={ this.addTypography }
						childList	={ this.state.childTypographies }
						addNewChild	={ this.addNewTypography }
						updateChilds={ this.updateTypographies }								
					/>

				</Box>

				<Box>
					<h1>Middle</h1>
				</Box>

				<Box flex="0 0 20%">
					<h1>Right</h1>
				</Box>
			</Box>
		)
	}
})

window.Pages.HomePage = HomePage