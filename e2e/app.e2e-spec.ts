import { StarwarsApiPracticeAngular2Page } from './app.po';

describe('starwars-api-practice-angular2 App', () => {
  let page: StarwarsApiPracticeAngular2Page;

  beforeEach(() => {
    page = new StarwarsApiPracticeAngular2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
