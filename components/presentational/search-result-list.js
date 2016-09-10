const SearchResultList = React.createClass({
	render: function() {
		let components = []
		this.props.components.forEach( component => {
			if (component.text.search(this.props.searchText) != -1 && this.props.searchText.length > 0)
				components.push(<li key={component.id}>{component.text}</li>)
		})
		return (
			<ul>{ components }</ul>
		)
	}
})

window.App.SearchResultList = SearchResultList