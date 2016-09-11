const { SearchResultList, SearchInput } = window.App

const SearchAutocomplete = React.createClass({
	getInitialState: function() {
		//let filterList = this.filterList().map( item => item.active = false)
		return { 
			filterList: [],
			searchText: ''
		}
	},
	handleKeys: function(key) {
		//if (this.filterList.length == 0) return;
		//console.log(key)
	},
	filterList: function(searchText) {
		console.log('filterList')
		return this.props.list.filter( item => {
			if ( item.text.search(searchText) != -1 && searchText.length > 0 )
				return true;
		}).map( item => {
			item.active = false
			return item
		})
	},
	handleUserInput: function(searchText) {
		let filterList = this.filterList(searchText)
		this.setState({
			searchText: searchText,
			filterList: filterList
		})
	},
	render: function() {
		return (
			<div>
				<SearchInput
					value={this.state.searchText}
					onUserInput={this.handleUserInput}
					onUserPress={this.handleKeys}/>

				<SearchResultList 
					searchText={this.state.searchText}
					list={this.state.filterList}/>
			</div>
		)
	}
})

 window.App.SearchAutocomplete = SearchAutocomplete

 /*}
				<input 
					type="text"
					placeholder="search"
					value={this.props.searchText}
					ref="searchTextInput"
					onChange={this.handleChange}
					onKeyDown={this.handleKeys}
				/>
				*/