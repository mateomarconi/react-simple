const { ComponentsList } = window.App

const dumyData = [
	{id: 1, text: 'input'},
	{id: 2, text: 'input#text'},
	{id: 3, text: 'input#number'},
	{id: 4, text: 'label'}
]

const AddComponentsList = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Components</h3>
				<ComponentsList Components={dummyData}/>
			</div>
		)
	}
})

window.App.AddComponentsList = AddComponentsList