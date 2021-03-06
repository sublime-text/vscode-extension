import { assert } from 'chai';
import { getTokenOnCharRange, hasScope, tokenizeLine } from './test.utils';

describe(`The Aurelia HTML syntax matcher attribute`, () => {

  it(`must tokenize (matcher).bind attribute on select element with scope "matcher.attribute.html.au"`, () => {

    // arrange
    let scope = 'matcher.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.bind="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 36, 43);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize (matcher).one-way attribute on select element with scope "matcher.attribute.html.au"`, () => {

    // arrange
    let scope = 'matcher.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.one-way="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 36, 43);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize (matcher).two-way attribute on select element with scope "matcher.attribute.html.au"`, () => {

    // arrange
    let scope = 'matcher.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.two-way="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 36, 43);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize (matcher).one-time attribute on select element with scope "matcher.attribute.html.au"`, () => {

    // arrange
    let scope = 'matcher.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.one-time="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 36, 43);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize matcher.(bind) attribute on select element with scope "matcher.attribute.html.au"`, () => {

    // arrange
    let scope = 'databinding.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.bind="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 44, 48);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize matcher.(one-way) attribute on select element with scope "databinding.attribute.html.au"`, () => {

    // arrange
    let scope = 'databinding.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.one-way="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 44, 51);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize matcher.(two-way) attribute on select element with scope "databinding.attribute.html.au"`, () => {

    // arrange
    let scope = 'databinding.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.two-way="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 44, 51);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must tokenize matcher.(one-time) attribute on select element with scope "databinding.attribute.html.au"`, () => {

    // arrange
    let scope = 'databinding.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher.one-time="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 44, 52);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it(`must not tokenize (matcher)="" attribute on select element with scope "databinding.attribute.html.au"`, () => {

    // arrange
    let scope = 'matcher.attribute.html.au';

    // act
    let lineToken = tokenizeLine(`<select value.bind="group.users[0]" matcher="userComparer">`);

    // assert
    let token = getTokenOnCharRange(lineToken, 36, 43);
    assert.isNotOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize matcher.bind part in body of other attribute', () => {

    // arrange
    let scope = 'meta.tag.inline.any.html';

    // act
    let lineToken = tokenizeLine('<select name="matcher.bind">');

    // assert
    let token = getTokenOnCharRange(lineToken, 14, 26);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize matcher.bind* part in body of other attribute', () => {

    // arrange
    let scope = 'meta.tag.inline.any.html';

    // act
    let lineToken = tokenizeLine('<select name="matcher.binding">');

    // assert
    let token = getTokenOnCharRange(lineToken, 14, 29);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize matcher.foo part in body of other attribute', () => {

    // arrange
    let scope = 'meta.tag.inline.any.html';

    // act
    let lineToken = tokenizeLine('<select name="matcher.foo">');

    // assert
    let token = getTokenOnCharRange(lineToken, 14, 25);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize matcher part in body of other attribute', () => {

    // arrange
    let scope = 'meta.tag.inline.any.html';

    // act
    let lineToken = tokenizeLine('<select name="matcher">');

    // assert
    let token = getTokenOnCharRange(lineToken, 14, 21);
    assert.isOk(hasScope(token.scopes, scope));

  });

});
