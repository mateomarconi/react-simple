const Container = React.createClass({
	render: function() {
		const childs = React.Children.map(this.props.children, (child) => React.cloneElement(child))
		return (
			<div>{ childs }</div>
		)
	}
})

window.Layout.Container = Container