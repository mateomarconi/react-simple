const selected = {
	backgroundColor: '#2196f3' 
}

const List = React.createClass({
	mouseOver: function(e) {
		this.props.active(e.target.textContent)
	},
	mouseClick: function(e) {
		this.props.select(e.target.textContent)
	},
	render: function() {
		const items = this.props.items.map( item => {
			return (
				<li key			={ this.props.items.indexOf(item) }
					onMouseOver	={ this.mouseOver }
					onClick		={ this.mouseClick }
					style		={ item.active ? selected : null }>
					{ item.value }
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