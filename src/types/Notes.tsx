

export type NotesType = {
  Count?: number
  Items?: NoteType[]
  cannedCount?: number
}

export type NoteType = {
  id?: string,
  message?: string,
  title?: string,
}