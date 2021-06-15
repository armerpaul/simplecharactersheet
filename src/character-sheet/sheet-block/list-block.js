import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Label = styled.label`
	display: flex;
	align-items: flex-start;

	p {
		margin-block-start: 0;
    margin-block-end: 0;
	}
`

const ListBlock = ({ name, pick, items }) => {
	return items.map((item, index) => {
		const key = `${name} ${index}`
		return (
			<Label key={key} for={key}>
				<input id={key} name={key} type="checkbox" />
				<ReactMarkdown children={item} />
			</Label>
		)
	})
}

export default ListBlock