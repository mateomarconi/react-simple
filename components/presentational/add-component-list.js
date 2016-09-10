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
			searchText: '',
			newItem: {id: null, text: null, added: true}
		}
	},
	handleUserInput: function(searchText) {
		this.setState({ searchText: searchText })
	},
	render: function() {
		return (
			<div>
				<h3>Components</h3>

				<ComponentsList list={ this.state.all }/>
				<SearchAutocomplete 
					list={ this.state.all }
					searchText={ this.state.searchText }
					onUserInput={this.handleUserInput}
				/>
			</div>
		)
	}
})

window.App.AddComponentsList = AddComponentsList