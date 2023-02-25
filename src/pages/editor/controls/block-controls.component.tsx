
import React from 'react'
import type { IControlProps } from '../../../models/control-props'

const BLOCK_TYPES = [
  { label: 'P', style: 'unstyled' },
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' }
]

function BlockControls (props: IControlProps): JSX.Element {
  const selection = props.editorState.getSelection()
  const blockType = props.editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()
  const className = 'RichEditor-styleButton'
  return (
    <div className="RichEditor-controls">
    {BLOCK_TYPES.map(type => (
      <button
        key={type.style}
        className={className + (type.style === blockType ? ' RichEditor-activeButton' : '')}
        onClick={() => { props.toggleButton(type.style) }}
        onFocus={event => { event.preventDefault() }}>
        {type.label}
      </button>
    ))}
    </div>
  )
}

export default BlockControls
