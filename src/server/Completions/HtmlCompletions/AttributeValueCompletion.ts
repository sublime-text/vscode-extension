import { autoinject } from 'aurelia-dependency-injection';
import {
  CompletionItem,
  CompletionItemKind,
  InsertTextFormat,
  MarkupContent,
  MarkupKind} from 'vscode-languageserver';
import ElementLibrary from './../Library/_elementLibrary';
import { GlobalAttributes } from './../Library/ElementStructure/GlobalAttributes';
import BaseAttributeCompletionFactory from './BaseAttributeCompletion';

@autoinject()
export default class AttributeValueCompletion extends BaseAttributeCompletionFactory {

  constructor(library: ElementLibrary) { super(library); }

  public create(elementName: string, attributeName: string): CompletionItem[] {

    const element = this.getElement(elementName);

    let attribute = element.attributes.get(attributeName);
    if (!attribute) {
      attribute = GlobalAttributes.attributes.get(attributeName);
    }

    const result: CompletionItem[] = [];
    if (attribute && attribute.values) {
      for (const [key, val] of attribute.values.entries()) {
        result.push({
            documentation: {
              kind: MarkupKind.Markdown,
              value: val.documentation,
            } as MarkupContent,
            insertText: key,
            insertTextFormat: InsertTextFormat.Snippet,
            kind: CompletionItemKind.TypeParameter,
            label: key,
          });
      }
    }
    return result.filter((i) => i !== undefined);
  }
}
