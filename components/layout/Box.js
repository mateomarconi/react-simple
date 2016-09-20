const Box = React.createClass({
	render: function() {
		console.log(this.props)
		const childs = React.Children.map(this.props.children, (child) => React.cloneElement(child))
		return (
			<div className="react-layout-components--box">{ childs }</div>
		)
	}
})

window.Layout.Box = Box