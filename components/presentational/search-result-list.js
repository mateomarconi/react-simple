const selected = {
	backgroundColor: '#2196f3' 
}
const SearchResultList = React.createClass({
	render: function() {
		let list = []
		this.props.list.forEach( item => 
			list.push(<li key={item.id} style={ item.active ? selected : null }>{item.text}</li>)
		)
		return (
			<ul>{ list }</ul>
		)
	}
})

window.App.SearchResultList = SearchResultList