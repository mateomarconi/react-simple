const SearchInput = React.createClass({
	handleChange: function() {
		this.props.onUserInput( this.refs.searchTextInput.value )
	},
	handleKeys: function(e) {
		this.props.onUserPress(e.keyCode)
	},
	render: function() {
		return (
			<input 
				type="text"
				placeholder="search"
				value={this.props.value}
				ref="searchTextInput"
				onChange={this.handleChange}
				onKeyDown={this.handleKeys}
			/>
		)
	}
})

window.App.SearchInput = SearchInput