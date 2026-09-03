type RichTextNode = {
  nodeType?: string
  value?: string
  content?: RichTextNode[]
}

function collectText(node: RichTextNode): string {
  if (!node) return ""
  if (node.nodeType === "text") return node.value || ""
  if (Array.isArray(node.content)) return node.content.map(collectText).join(" ")
  return ""
}

export function richTextToPlainText(raw?: string, maxLength = 160): string {
  if (!raw) return ""

  let document: RichTextNode
  try {
    document = JSON.parse(raw)
  } catch {
    return ""
  }

  const text = collectText(document).replace(/\s+/g, " ").trim()
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}…` : text
}
