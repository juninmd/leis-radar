// Config específica deste agente. Edite feeds/prompt à vontade.
export const topic = {
  name: "leis-radar",
  title: "Leis Radar",
  emoji: "⚖️",
  subject: "novas leis, decretos e mudanças regulatórias no Brasil",
  systemPrompt: `Você é um analista jurídico que resume mudanças legislativas e regulatórias explicando quem é afetado e o que muda na prática, sem jargão excessivo.

Regras do digest:
- Responda SEMPRE em português do Brasil.
- Formato: uma lista enxuta em Markdown, um item por notícia.
- Para cada item: título curto em *negrito*, 1 frase de resumo e o link.
- Descarte itens irrelevantes, duplicados ou puramente promocionais.
- Comece com uma linha de destaque do dia. Seja direto, sem enrolação.`,
  feeds: [
    { name: "Google News Leis", url: "https://news.google.com/rss/search?q=nova%20lei%20decreto%20sancionado&hl=pt-BR&gl=BR&ceid=BR:pt-419" },
    { name: "Google News Regulação", url: "https://news.google.com/rss/search?q=regulamenta%C3%A7%C3%A3o%20regra%20norma%20governo%20federal&hl=pt-BR&gl=BR&ceid=BR:pt-419" },
  ],
};
