const { SearchResultList } = window.App

const SearchAutocomplete = React.createClass({
	handleChange: function() {
		this.props.onUserInput( this.refs.searchTextInput.value )
	},
	render: function() {
		console.log(this.props)
		return (
			<div>
				<input 
					type="text"
					placeholder="search"
					value={this.props.searchText}
					ref="searchTextInput"
					onChange={this.handleChange}
				/>
				<SearchResultList searchText={this.props.searchText} components={this.props.list}/>
			</div>
		)
	}
})

 window.App.SearchAutocomplete = SearchAutocomplete