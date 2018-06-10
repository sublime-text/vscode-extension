import * as vscode from 'vscode';
import {TextDocumentContentProvider} from './TextDocumentContentProvider';

export function registerPreview(context, window, client) {

  const previewUri = vscode.Uri.parse('aurelia-preview://authority/aurelia-preview');

  const provider = new TextDocumentContentProvider(client);
  const registration = vscode.workspace.registerTextDocumentContentProvider('aurelia-preview', provider);

  vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
    if (e.document === vscode.window.activeTextEditor.document) {
      provider.update(previewUri);
    }
  });

  vscode.window.onDidChangeTextEditorSelection((e: vscode.TextEditorSelectionChangeEvent) => {
    if (e.textEditor === vscode.window.activeTextEditor) {
      provider.update(previewUri);
    }
  });

  context.subscriptions.push(vscode.commands.registerCommand('aurelia.showViewProperties', () => {

    const smartAutocomplete = vscode.workspace.getConfiguration().get('aurelia.featureToggles.smartAutocomplete');
    if (smartAutocomplete) {
      return vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two, 'Aurelia view data')
        .then(
          // tslint:disable-next-line:no-empty
          (success) => {},
          (reason) => {
            window.showErrorMessage(reason);
          });
    } else {
      return vscode.window.showWarningMessage('This command requires the experimental feature "smartAutocomplete" to be enabled');
    }
  }));
}
