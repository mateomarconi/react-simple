const List = React.createClass({
	over: function() {
		console.log('ver')
	},
	render: function() {
		const items = this.props.items.map( item => {
			return (
				<li key={this.props.items.indexOf(item)}>
					{ item }
				</li>
			)
		})
		return (
			<ul>
				{ items }
			</ul>
		)
	}
})

window.Dumb.List = List