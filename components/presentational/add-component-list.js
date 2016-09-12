const { ComponentsList, SearchAutocomplete } = window.App

const AddComponentsList = React.createClass({
	getInitialState: function() {
		return {
			all : [
				{ id: 1, text: 'input' },
				{ id: 2, text: 'input#text' },
				{ id: 3, text: 'input#number' },
				{ id: 4, text: 'label' }
			],
			child: []
		}
	},
	addComponent: function(text) {
		const all = this.state.all.filter( item => item.text == text )
		const newList = this.state.child
		
		if (all.length == 0){
			newList.push({ id: this.state.child.length, text: text })
		}
		else 
			newList.push(all[0])
		
		this.setState({ child: newList })
	},
	render: function() {
		return (
			<div>
				<h3>Components</h3>

				<ComponentsList list={ this.state.child }/>
				<SearchAutocomplete 
					list={ this.state.all }
					addComponent={ this.addComponent }
				/>
			</div>
		)
	}
})

window.App.AddComponentsList = AddComponentsList

// SearchAutocomplete -> SearchCreate