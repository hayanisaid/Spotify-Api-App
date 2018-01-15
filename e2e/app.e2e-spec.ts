import { NgSpotfiyPage } from './app.po';

describe('ng-spotfiy App', function() {
  let page: NgSpotfiyPage;

  beforeEach(() => {
    page = new NgSpotfiyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
