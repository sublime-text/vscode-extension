import { MozDocElement } from './ElementStructure/MozDocElement';

export default class DdElement extends MozDocElement {

  public documentation = `The HTML <dd> element indicates the description of a term in a description list (<dl>).`;

  constructor() {
    super();
    this.url = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd';
    this.areaRolesAllowed = false;
    this.permittedParents.push('dl');
  }
}
