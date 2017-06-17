import { SolutionSelectionPage } from './app.po';

describe('solution-selection App', () => {
  let page: SolutionSelectionPage;

  beforeEach(() => {
    page = new SolutionSelectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
