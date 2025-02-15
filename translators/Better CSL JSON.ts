import { Translation, TranslatorMetadata, collect } from './lib/translator'
declare var ZOTERO_TRANSLATOR_INFO: TranslatorMetadata // eslint-disable-line no-var

export function doExport(): void {
  const translation = Translation.Export(ZOTERO_TRANSLATOR_INFO, collect())
  Zotero.BetterBibTeX.generateCSLJSON(translation)
  Zotero.write(translation.output.body)
}
