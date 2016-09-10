const selected = {
	backgroundColor: '#2196f3' 
}

const SearchAutocomplete = React.createClass({
	getInitialState: function() {
		return {
			searchResult: [],
			searchInput: '',
			components: [],
			newComponent: ''
		}
	},
	search: function(e) {
		// devuelve el resultado de la busqueda en un array
		let value = e.target.value
		let result = []

		if (value.length != 0)
			result = this.props.data
				.filter( item => item.text.search(value) != -1 )
				.map( item => {
					item.active = false
					return item
				})
		
		this.setState({searchResult: result, searchInput: value})
	},
	nextSelect: function(direction) {
		let tmp = this.state.searchResult
		let selected = tmp.filter( item => item.active)

		if(selected.length == 0)
			tmp[0].active = true
		else {
			let index = tmp.findIndex( item => item.active )
			tmp[index].active = false

			if (direction === 'up') 
				index = (index > 0) ? index - 1 : tmp.length - 1
			else 
				index = (index < tmp.length - 1) ? index + 1 : 0
			
			tmp[index].active = true
		}

		this.setState({ searchResult: tmp })
	},
	chooseSelected: function() {
		console.log('enter');

	},
	fillWithSelected: function() {
		if (this.state.searchResult.size == 0) return;
		let selectedText = this.state.searchResult.filter( item => item.active )[0].text
		this.setState({ searchInput: selectedText })
	},
	handleKeyPress: function(e) {
		if (this.state.searchResult.length == 0) return;

		switch(e.keyCode){

			// enter
			case 13:
				this.chooseSelected()

			// escape
			case 27:
				break;

			// arrow up
			case 38:
				this.nextSelect('up')
				break

			// arrow right
			case 39:
				this.fillWithSelected()
				break

			// arrow down
			case 40:
				this.nextSelect('down')
				break
			default:
				return
		}
	},
	submit: function (e) {
		e.preventDefault()

		let element = this.state.searchResult.filter( item => item.text == this.state.searchInput )
		
		if ( element.length == 0) 
			this.setState({ searchInput: '', searchResult: [], newComponent: this.state.searchInput })
		else{
			let components = this.state.components
			console.log(components)
			console.log(components.push({ text: this.state.searchInput}))
			this.setState({ searchInput: '', searchResult: [], components: components })
		}

		return false
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.submit}>
					<input type="text" placeholder="search" onChange={this.search} value={this.state.searchInput} onKeyDown={this.handleKeyPress}/>
					<button>Add</button>

					<ul>
						{this.state.searchResult.map((result) => {
							return <li key={result.id} style={ result.active ? selected : null }>{result.text}</li>
						})}
					</ul>
				</form>
				<div>
					<h5>Added components</h5>
					<ul>
						{this.state.components.map((component) => {
							return <li key={component.id}>{component.text}</li>
						})}
					</ul>
				</div>
				<div>
					<h5>{ this.state.newComponent }</h5>
				</div>
			</div>
		)
	}
})

window.App.SearchAutocomplete = SearchAutocomplete