const Input = React.createClass({
	componentDidMount: function() {
		console.log('Imput: componentDidMount')
		if (this.props.focusOnMount)
			this.refs.searchTextInput.focus()
	},
	handleChange: function() {
		this.props.onUserInput( this.refs.searchTextInput.value )
	},
	handleKeys: function(e) {
		this.props.onUserKey(e.keyCode)
	},
	render: function() {
		return (
			<input 
				type		="text"
				placeholder	="search"
				value		={ this.props.value }
				ref 		="searchTextInput"
				onChange	={ this.handleChange }
				onKeyDown	={ this.handleKeys }
			/>
		)
	}
})

window.Dumb.Input = Input