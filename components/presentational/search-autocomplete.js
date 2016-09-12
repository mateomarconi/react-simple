const { SearchResultList, SearchInput } = window.App

const SearchAutocomplete = React.createClass({
	getInitialState: function() {
		return { 
			filterList: [],
			searchText: ''
		}
	},
	handleUserKeys: function(key) {
		if (this.state.filterList.length == 0) return;
		switch(key) {
			case 13:
				this.submitResult()
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
	},
	submitResult: function() {
		const selected = this.state.filterList.filter( item => item.active)
		let result = null
		if (selected.length == 0)
			result = this.state.searchText
		else
			result = selected[0].text
		this.props.addComponent(result)

	},
	selectNext: function(direction) {
		let tmp = this.state.filterList

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
		let selectedText = this.state.filterList.filter( item => item.active )[0].text
		this.setState({ searchText: selectedText })
	},
	filterList: function(searchText) {
		return this.props.list.filter( item => {
			if ( item.text.search(searchText) != -1 && searchText.length > 0 )
				return true;
		}).map( item => {
			item.active = item.text == searchText ? true : false
			return item
		})
	},
	handleUserInput: function(searchText) {
		let filterList = this.filterList(searchText)
		this.setState({
			searchText: searchText,
			filterList: filterList
		})
	},
	render: function() {
		return (
			<div>
				<SearchInput
					value={this.state.searchText}
					onUserInput={this.handleUserInput}
					onUserKey={this.handleUserKeys}/>

				<SearchResultList 
					searchText={this.state.searchText}
					list={this.state.filterList}/>
			</div>
		)
	}
})

window.App.SearchAutocomplete = SearchAutocomplete