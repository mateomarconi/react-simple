const SearchResultList = React.createClass({
	render: function() {
		let list = []
		this.props.list.forEach( item => 
			list.push(<li key={item.id}>{item.text}</li>)
		)
		return (
			<ul>{ list }</ul>
		)
	}
})

window.App.SearchResultList = SearchResultList