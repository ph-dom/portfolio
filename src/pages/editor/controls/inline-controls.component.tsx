
import React from 'react'
import type { IControlProps } from '../../../models/control-props'

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
]

function InlineControls (props: IControlProps): JSX.Element {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  const className = 'RichEditor-styleButton'
  return (
    <div className="RichEditor-controls">
    {INLINE_STYLES.map(type => (
      <button
        key={type.style}
        className={className + (currentStyle.has(type.style) ? ' RichEditor-activeButton' : '')}
        onClick={() => { props.toggleButton(type.style) }}>
        {type.label}
      </button>
    ))}
    </div>
  )
}

export default InlineControls
