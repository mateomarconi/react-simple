const Box = React.createClass({
	render: function() {

		const props = this.props
		const styles = {}
		const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']

		console.log(props.column)
		if (props.column && props.column == true){
			console.log('entro')
			styles.flexDirection = 'column'
		}

		if (props.fit){
			styles.height = '100%'
			styles.width = '100%'
		}

		flexProps.forEach( prop => {
			if (props.hasOwnProperty(prop))
				styles[prop] = props[prop]
		})

		return (
			<div className="react-layout-components--box" style={ {...styles, ...props.style} }>{ props.children }</div>
		)
	}
})

window.Layout.Box = Box