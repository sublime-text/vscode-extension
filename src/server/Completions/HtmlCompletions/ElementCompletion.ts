import { autoinject } from 'aurelia-dependency-injection';
import {
  CompletionItem,
  CompletionItemKind,
  InsertTextFormat,
  MarkupContent,
  MarkupKind } from 'vscode-languageserver';
import ElementLibrary from './../Library/_elementLibrary';
import { MozDocElement } from './../Library/ElementStructure/MozDocElement';

@autoinject()
export default class ElementCompletion {

  constructor(private library: ElementLibrary) { }

  public create(parent: string): CompletionItem[] {

    const result: CompletionItem[] = [];

    if (parent) {
      const parentElementDef = this.library.elements[parent] as MozDocElement;
      if (parentElementDef && parentElementDef.permittedChildren && parentElementDef.permittedChildren.length) {
        for (const childName of parentElementDef.permittedChildren) {
          result.push({
            detail: 'HTMLElement',
            documentation: {
              kind: MarkupKind.Markdown,
              value: this.library.elements[childName].documentation,
            } as MarkupContent,
            filterText: `${childName}>`,
            insertText: childName + '>',
            insertTextFormat: InsertTextFormat.PlainText,
            kind: CompletionItemKind.Property,
            label: `<${childName}>`,
          });
        }
        return result;
      }
    }

    for (const name in this.library.elements) {
      if (this.library.elements[name]) {
        const item = this.library.elements[name];
        result.push({
          detail: 'HTMLElement',
          documentation: {
            kind: MarkupKind.Markdown,
            value: item.documentation,
          } as MarkupContent,
          filterText: `${name}>`,
          insertText: name + '>',
          insertTextFormat: InsertTextFormat.PlainText,
          kind: CompletionItemKind.Property,
          label: `<${name}>`,
        });
      }
    }

    return result;
  }
}
