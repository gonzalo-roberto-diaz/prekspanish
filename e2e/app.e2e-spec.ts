import { PrekspanishPage } from './app.po';

describe('prekspanish App', () => {
  let page: PrekspanishPage;

  beforeEach(() => {
    page = new PrekspanishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
