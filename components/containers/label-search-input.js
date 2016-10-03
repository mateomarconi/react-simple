const { SearchSelect } = window.Smart

const LabelSearchInput = React.createClass({
	render: function() {
		console.log(this.props.list)
		return (
			<div>
				<label>{ this.props.label }</label>

				<SearchSelect 
					list 	={ this.props.list }
					select 	={ this.props.select }/>
			</div>
		)
	}
})

window.Smart.LabelSearchInput = LabelSearchInput