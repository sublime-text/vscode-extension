import { assert } from 'chai';
import { getTokenOnCharRange, hasScope, tokenizeLine } from './test.utils';

describe('The Aurelia HTML syntax replaceable attribute', () => {

  it('must tokenize (replaceable)> attribute with scope "replaceable.attribute.html.au"', () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<template replaceable>');

    // assert
    const token = getTokenOnCharRange(lineToken, 10, 21);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it('must tokenize (replaceable) other> attribute with scope "replaceable.attribute.html.au"', () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<template replaceable other>');

    // assert
    const token = getTokenOnCharRange(lineToken, 10, 21);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it('must tokenize (replaceable)="" attribute with scope "replaceable.attribute.html.au"', () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<template replaceable="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 10, 21);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it('must tokenize (replaceable)="" other=""> attribute with scope "replaceable.attribute.html.au"', () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<template replaceable="" other="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 10, 21);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize (replaceable)='' attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<template replaceable=\'\'>');

    // assert
    const token = getTokenOnCharRange(lineToken, 10, 21);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize (replaceable)='' other=''> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<template replaceable=\'\' other=\'\'>');

    // assert
    const token = getTokenOnCharRange(lineToken, 10, 21);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must not tokenize class="replaceable" attribute body with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div class="replaceable">');

    // assert
    const token = getTokenOnCharRange(lineToken, 12, 23);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize class='replaceable' attribute body with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div class=\'replaceable\'>');

    // assert
    const token = getTokenOnCharRange(lineToken, 12, 23);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  // TODO: fix
  // it(`must not tokenize class=replaceable attribute body with scope "replaceable.attribute.html.au"`, () => {

  //   // arrange
  //   let scope = 'replaceable.attribute.html.au';

  //   // act
  //   let lineToken = tokenizeLine('<div class=replaceable>');

  //   // assert
  //   let token = getTokenOnCharRange(lineToken, 10, 22);
  //   assert.isOk(!hasScope(token.scopes, scope));

  // });

  it(`must not tokenize (replaceable-some)> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div replaceable-some>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 21);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (replaceable-some)=""> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div replaceable-some="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 21);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (replaceable-some)=''> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div replaceable-some=\'\'>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 21);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (some-replaceable)> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div some-replaceable>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 21);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (some-replaceable)=""> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div some-replaceable="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 21);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (some-replaceable)=''> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div some-replaceable=\'\'>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 21);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (somereplaceable)> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div somereplaceable>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 20);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (somereplaceable)=""> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div somereplaceable="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 20);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (somereplaceable)=''> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div somereplaceable=\'\'>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 20);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (replaceablesome)> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div replaceablesome>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 20);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (replaceablesome)=""> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div replaceablesome="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 20);
    assert.isOk(!hasScope(token.scopes, scope));

  });

  it(`must not tokenize (replaceablesome)=''> attribute with scope "replaceable.attribute.html.au"`, () => {

    // arrange
    const scope = 'replaceable.attribute.html.au';

    // act
    const lineToken = tokenizeLine('<div replaceablesome=\'\'>');

    // assert
    const token = getTokenOnCharRange(lineToken, 5, 20);
    assert.isOk(!hasScope(token.scopes, scope));

  });

});
