import { LearnAngular1Page } from './app.po';

describe('learn-angular1 App', () => {
  let page: LearnAngular1Page;

  beforeEach(() => {
    page = new LearnAngular1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
