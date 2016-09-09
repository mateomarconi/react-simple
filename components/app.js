const { AddComponentsList } = window.App

const LayoutContainer = React.createClass({
	render: function() {
		return <AddComponentsList/>
	}
})

window.App.LayoutContainer = LayoutContainer
