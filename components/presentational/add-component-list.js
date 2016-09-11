const { ComponentsList, SearchAutocomplete } = window.App

const AddComponentsList = React.createClass({
	getInitialState: function() {
		return {
			all : [
				{id: 1, text: 'input', 			added: false},
				{id: 2, text: 'input#text', 	added: false},
				{id: 3, text: 'input#number', 	added: false},
				{id: 4, text: 'label', 			added: false}
			],
			newItem: {id: null, text: null, added: true}
		}
	},
	
	render: function() {
		return (
			<div>
				<h3>Components</h3>

				<ComponentsList list={ this.state.all }/>
				<SearchAutocomplete 
					list={ this.state.all }
				/>
			</div>
		)
	}
})

window.App.AddComponentsList = AddComponentsList