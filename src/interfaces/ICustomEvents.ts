export type IQueryEventValues = {
  query: Record<string, string>
}

export type IQueryEvent = CustomEvent<IQueryEventValues>
