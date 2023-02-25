import React from 'react'
import { Editor as DraftEditor, EditorState, RichUtils } from 'draft-js'
import type { ContentBlock, DraftHandleValue, DraftEditorCommand } from 'draft-js'
import './editor.styles.scss'
import BlockControls from './controls/block-controls.component'
import InlineControls from './controls/inline-controls.component'

// eslint-disable-next-line @typescript-eslint/ban-types
type SyntheticKeyboardEvent = React.KeyboardEvent<{}>

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
}

function Editor (): JSX.Element {
  const [editorState, setEditorState] = React.useState<EditorState>(EditorState.createEmpty())

  const toggleBlockType = (blockType: string): void => {
    setEditorState(state => RichUtils.toggleBlockType(state, blockType))
  }

  const toggleInlineType = (inlineType: string): void => {
    setEditorState(state => RichUtils.toggleInlineStyle(state, inlineType))
  }

  const getBlockStyle = (block: ContentBlock): string => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote'
      default:
        return ''
    }
  }

  const handleKeyCommand = (command: DraftEditorCommand): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState === null) {
      return 'not-handled'
    }
    setEditorState(newState)
    return 'handled'
  }

  const onTab = (e: SyntheticKeyboardEvent): void => {
    const maxDepth = 4
    setEditorState(state => RichUtils.onTab(e, state, maxDepth))
  }

  return (
    <React.Fragment>
      <BlockControls editorState={editorState} toggleButton={toggleBlockType}/>
      <InlineControls editorState={editorState} toggleButton={toggleInlineType}/>
      <DraftEditor
        editorState={editorState}
        customStyleMap={styleMap}
        onChange={setEditorState}
        blockStyleFn={getBlockStyle}
        handleKeyCommand={handleKeyCommand}
        onTab={onTab}
        spellCheck={true}
      />
    </React.Fragment>
  )
}

export default Editor
