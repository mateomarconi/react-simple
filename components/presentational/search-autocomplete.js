const { SearchResultList } = window.App

const addedComponents = [
	{id: 1, text: 'input'},
	{id: 2, text: 'input#text'},
	{id: 3, text: 'input#number'},
	{id: 4, text: 'label'}
]

const SearchAutocomplete = React.createClass({
	render: function() {
		return (
			<div>
				<input type="text" placeholder="search"/>
				<SearchResultList />
			</div>
		)
	}
})

 