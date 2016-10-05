const { Button, Input, List } = window.Dumb

const SearchSelect = React.createClass({
	getInitialState: function() {
		return { 
			selected: 'select...',
			list: this._init(this.props.list),
			searchText: '',
			visible: false
		}
	},
	toggleButton: function() {
		this.setState({ visible: !this.state.visible })
	},
	handleInput: function(searchText) {
		this.setState({ searchText: searchText})
		this._filterList(searchText)
	},
	handleUserKeys: function(key) {
		switch(key) {
			case 13:
				this.select(this._getSelected())
				break
			case 27:
				this.toggleButton()
				break
			case 38:
				this._selectNext('up')
				break
			case 39:
				//this.fillWithSelected()
				break
			case 40:
				this._selectNext('down')
				break
		}
	},
	active: function(selected) {
		const newList = this.state.list.map( item => {
			(item.value == selected) ? item.active = true : item.active = false
			return item
		})
		this.setState({ list: newList })
	},
	select: function(selected) {
		this.setState({ selected: selected, visible: false})
		this.props.select(selected)
	},
	_init: function(list) {
		const tmp = list.map( item => { 
			return {
				value: item,
				active:  false
			}
		})
		if (tmp) tmp[0].active = true
		return tmp
	},
	_selectNext: function(direction) {
		if (this.state.list.length == 0) return;
		
		let tmp = [...this.state.list]
		let mod = direction == 'up' ? -1 : 1
		let index = tmp.findIndex( item => item.active )

		tmp[index].active = false
		index += mod
		if (index < 0) index = tmp.length -1
		if (index == tmp.length) index = 0
		tmp[index].active = true
	
		this.setState({ list: tmp })
	},
	_getSelected: function () {
		let selected = this.state.list.filter( item => item.active)[0]
		return selected ? selected.value : this.state.selected
	},
	_filterList: function(searchText) {
		let filterList = this._init(this.props.list)
				.filter( item => item.value.search(searchText) != -1)
				.map( item => {
					item.active = item.value == searchText ? true : false
					return item
		})
		if (filterList[0]) filterList[0].active = true
		this.setState({ list: filterList })
	},
	render: function() {
		return (
			<div>
				<Button
					value	={ this.state.selected }
					submit	={ this.toggleButton } />

				{ this.state.visible && (
					<Input
						value		={ this.state.searchText }
						onUserInput	={ this.handleInput }
						onUserKey	={ this.handleUserKeys }
						focusOnMount
						/>
				)}

				{ this.state.visible && (
					<List 
						items		={ this.state.list }
						active 		={ this.active }
						select 		={ this.select }
						/>
				)}
			</div>
		)
	}
})

window.Smart.SearchSelect = SearchSelect