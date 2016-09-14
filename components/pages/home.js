const { CrudItemList } = window.Smart

const HomePage = React.createClass({
	getInitialState: function() {
		return {
			componentList: [
				{id: 1, name: 'CrudItemList'},
				{id: 2, name: 'Subtitle'},
				{id: 3, name: 'EditableList'},
				{id: 4, name: 'SearchNew'}
			],
			typographyList: [],
			childComponents: [],
			childTypographys: []
		}
	},
	updateComponentsList: function(component) {
		let tmp = this.state.componentList
		tmp.push(component)
		this.setState({ componentList: tmp})
	},
	updateTypographyList: function(typographys) {
		this.setState({ typographyList: typographys})
	},
	updateChildComponents: function(components) {
		this.setState({ childComponents: components})
	},
	updateChildTypography: function(typographys) {
		this.setState({ childTypographys: typographys})
	},
	render: function() {
		return (
			<div>
				<CrudItemList
					title="Components"
					list={this.state.componentList}
					updateList={this.updateComponentsList}
					childList={this.state.childComponents}
					updateChilds={this.updateChildComponents}
				/>

				<CrudItemList
					title="Typography"
					list={this.state.typographyList}
					updateList={this.updateTypographyList}
					childList={this.state.childTypographys}
					updateChilds={this.updateChildTypography}								
				/>

			</div>
		)
	}
})

window.Pages.HomePage = HomePage