const Input = React.createClass({
	handleChange: function() {
		console.log(this.refs.searchTextInput.value)
		this.props.onUserInput( this.refs.searchTextInput.value )
	},
	handleKeys: function(e) {
		this.props.onUserKey(e.keyCode)
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

window.Dumb.Input = Input