import { FlickrAppPage } from './app.po';

describe('flickr-app App', () => {
  let page: FlickrAppPage;

  beforeEach(() => {
    page = new FlickrAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
