const { Button, Input, List } = window.Dumb

const SearchSelect = React.createClass({
	getInitialState: function() {
		return { 
			selected: 'select...',
			filterList: this.formatList(this.props.list),
			searchText: '',
			visible: false
		}
	},
	formatList: function(list) {
		const tmp = list.map( item => { 
			return {
				value: item,
				active:  false
			}
		})
		tmp[0].active = true
		return tmp
	},/*
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
	handleUserKeys: function(key) {
		switch(key) {
			case 13:
				this.submit()
				break
			case 27:
				this.setState({ filterList: [] })
				break
			case 38:
				this.selectNext('up')
				break
			case 39:
				this.fillWithSelected()
				break
			case 40:
				this.selectNext('down')
				break
		}
	},*/
	filterList: function(searchText) {
		console.log(searchText)
		return this.state.filterList.filter( item => {
			if ( item.value.search(searchText) != -1 && searchText.length > 0 )
				return true;
		}).map( item => {
			item.active = item.value == searchText ? true : false
			return item
		})
	},
	handleUserInput: function(searchText) {
		let filterList = this.filterList(searchText)
		if (filterList[0])
			filterList[0].active = true
		this.setState({
			searchText: searchText,
			filterList: filterList
		})
	},
	toggleVisible: function() {
		this.setState({ visible: !this.state.visible })
		if (!this.state.visible)
			console.log(this.refs)
	},
	active: function(selected) {
		const newList = this.state.filterList.map( item => {
			(item.value == selected) ? item.active = true : item.active = false
			return item
		})
		this.setState({ filterList: newList })
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
					submit	={ this.toggleVisible } />

				{ this.state.visible && (
					<Input
						value		={ this.state.searchText }
						onUserInput	={ this.handleUserInput }
						//onUserKey	={ this.handleUserKeys }
						//ref={this.test}
						focusOnMount
						/>
				)}

				{ this.state.visible && (
					<List 
						//searchText	={ this.state.searchText }
						items		={ this.state.filterList }
						active 		={ this.active }
						select 		={ this.select }
						/>
				)}
			</div>
		)
	}
})

window.Smart.SearchSelect = SearchSelect