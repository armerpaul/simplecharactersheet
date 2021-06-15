import React from 'react'
import ReactMarkdown from 'react-markdown'

const ListBlock = ({ name, pick, items }) => {
	return items.map((item, index) => {
		const key = `${name} ${index}`
		return (
			<label key={key} for={key}>
				<input id={key} name={key} type="checkbox" />
				<ReactMarkdown children={item} />
			</label>
		)
	})
}

export default ListBlock