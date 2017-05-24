import { AngleChessPage } from './app.po';

describe('angle-chess App', () => {
  let page: AngleChessPage;

  beforeEach(() => {
    page = new AngleChessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
