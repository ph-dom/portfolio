import type { EditorState } from 'draft-js'

export interface IControlProps {
  editorState: EditorState
  toggleButton: (blockType: string) => void
}
