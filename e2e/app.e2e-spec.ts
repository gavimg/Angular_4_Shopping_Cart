import { Angular4TutorialApplicationPage } from './app.po';

describe('angular4-tutorial-application App', function() {
  let page: Angular4TutorialApplicationPage;

  beforeEach(() => {
    page = new Angular4TutorialApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
