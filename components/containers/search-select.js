const { Button, Input, List } = window.Dumb

const SearchSelect = React.createClass({
	getInitialState: function() {
		return { 
			selected: 'select...',
			list: this.init(this.props.list),
			searchText: '',
			visible: false
		}
	},
	toggleButton: function() {
		this.setState({ visible: !this.state.visible })
	},
	init: function(list) {
		const tmp = list.map( item => { 
			return {
				value: item,
				active:  false
			}
		})
		if (tmp) tmp[0].active = true
		return tmp
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
				this.fillWithSelected()
				break
			case 40:
				this._selectNext('down')
				break
		}
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
	/*
	submit: function() {
		const selected = this.state.filterList.filter( item => item.active)
		let result = null
		if (selected.length == 0)
			result = {id: null, name: this.state.searchText}
		else
			result = selected[0]
		this.setState({ filterList: [], searchText: '' })
		this.props.add( result )

	},
	selectNext: function(direction) {
		if (this.state.filterList.length == 0) return;
		let tmp = [...this.state.filterList]

		if (tmp.filter( item => item.active).length == 0){
			let item = direction == 'up' ? tmp.length - 1 : 0
			tmp[item].active = true
		} else {
			let mod = direction == 'up' ? -1 : 1
			let index = tmp.findIndex( item => item.active )
			tmp[index].active = false
			index += mod
			if (index < 0) index = tmp.length -1
			if (index == tmp.length) index = 0
			tmp[index].active = true
		}

		this.setState({ filterList: tmp })
	},
	fillWithSelected: function() {
		if (this.state.filterList.length == 0) return;
		let selectedText = this.state.filterList.filter( item => item.active )[0].name
		this.setState({ searchText: selectedText })
	},
	// CONTAINS??
	filterList: function(searchText) {
		return this.props.list.filter( item => {
			if ( item.name.search(searchText) != -1 && searchText.length > 0 )
				return true;
		}).map( item => {
			item.active = item.name == searchText ? true : false
			return item
		})
	},
	*/
	_filterList: function(searchText) {
		return this.init(this.props.list)
				.filter( item => item.value.search(searchText) != -1)
				.map( item => {
					item.active = item.value == searchText ? true : false
					return item
		})
	},
	handleInput: function(searchText) {
		let filterList = this._filterList(searchText)
		if (filterList[0]) filterList[0].active = true
		this.setState({ searchText: searchText, list: filterList })
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
	},
	test: function(c) {
		console.log(c)
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
						//ref={this.test}
						/>
				)}

				{ this.state.visible && (
					<List 
						//searchText	={ this.state.searchText }
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