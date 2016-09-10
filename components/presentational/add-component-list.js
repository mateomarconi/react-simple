const { ComponentsList, SearchAutocomplete } = window.App

const AddComponentsList = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Components</h3>
				<ComponentsList/>
				<SearchAutocomplete/>
			</div>
		)
	}
})

window.App.AddComponentsList = AddComponentsList