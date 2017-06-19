import { TestWithAotSummaryPage } from './app.po';

describe('test-with-aot-summary App', () => {
  let page: TestWithAotSummaryPage;

  beforeEach(() => {
    page = new TestWithAotSummaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
