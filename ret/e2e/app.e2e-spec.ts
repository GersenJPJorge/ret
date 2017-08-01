import { RetaguardaPage } from './app.po';

describe('retaguarda App', () => {
  let page: RetaguardaPage;

  beforeEach(() => {
    page = new RetaguardaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
