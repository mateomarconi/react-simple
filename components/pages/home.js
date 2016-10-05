const { CrudItemList, TypographyProperties } = window.Smart
const { Container, Box, DisplayLayer } = window.Layout

const HomePage = React.createClass({
	getInitialState: function() {
		return {
			components: [
				{id: 1, value: 'CrudItemList'},
				{id: 2, value: 'Subtitle'},
				{id: 3, value: 'EditableList'},
				{id: 4, value: 'SearchNew'}
			],
			childComponents: [],
			selectedComponent: null,

			typograhies: [
				{id: 1, value: 'Roboto-header'},
				{id: 2, value: 'Roboto-footer'},
				{id: 3, value: 'Montserrat-titles'},
				{id: 4, value: 'Montserrat-components'}
			],
			childTypographies: [],
			selectedTypography: null,
			fontConfig: {
				fontFamily: 'none'
			}
		}
	},


	addComponent: function(component) {
		const tmp = {
			id: this.state.components.length + 1,
			value: component.value
		}
		this.setState({ components: [...this.state.components, tmp] })
	},
	addNewComponent: function(child) {
		const tmp = {
			id: this.state.childComponents.length + 1,
			value: child.value
		}
		this.setState({ childComponents: [...this.state.childComponents, tmp] })
	},
	updateChilds: function(childs) {
		this.setState({ childComponents: childs })
	},
	selectComponent: function(item) {
		this.setState({ selectedComponent: item })
	},


	addTypography: function(typography) {
		const tmp = {
			id: this.state.typograhies.length + 1,
			value: typography.value
		}
		this.setState({ typograhies: [...this.state.typograhies, tmp] })
	},
	addNewTypography: function(typography) {
		const tmp = {
			id: this.state.childTypographies.length + 1,
			value: typography.value
		}
		this.setState({ childTypographies: [...this.state.childTypographies, tmp] })
	},
	updateTypographies: function(typographies) {
		this.setState({ childTypographies: typographies })
	},
	selectTypography: function(item) {
		this.setState({ selectedTypography: item })
	},


	updateFont: function(value) {
		console.log('updateFont')
		this.setState({ 'fontConfig': {'fontFamily': value }})
	},


	render: function() {

		const styles = {
			middleColumn: {
				border: '1px solid black'
			}
		}

		return (
			<Box fit>
				<Box column flex="0 0 20%">
					<h1>Left</h1>

					<CrudItemList 
						title 		= "Components"
						searchList	={ this.state.components }
						addNewSearch={ this.addComponent }
						childList	={ this.state.childComponents }
						addNewChild	={ this.addNewComponent }
						updateChilds={ this.updateChilds }
						select 		={ this.selectComponent }
					/>

					<CrudItemList 
						title 		= "Typography"
						searchList	={ this.state.typograhies }
						addNewSearch={ this.addTypography }
						childList	={ this.state.childTypographies }
						addNewChild	={ this.addNewTypography }
						updateChilds={ this.updateTypographies }
						select 		={ this.selectTypography }			
					/>

				</Box>

				<Box flex="1 1 auto" style={ styles.middleColumn }>
					<DisplayLayer fontConfig={ this.state.fontConfig }>
						<h1>Middle</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

						<Box>
							<div className="test"></div>
							<div className="test"></div>
						</Box>
					</DisplayLayer>
				</Box>

				<Box column flex="0 0 20%">
					<h1>Right</h1>

					{ this.state.selectedTypography && 
						<TypographyProperties 
							typography={ this.state.selectedTypography }
							updateFont={ this.updateFont }
						/>
					}
				</Box>
			</Box>
		)
	}
})

window.Pages.HomePage = HomePage