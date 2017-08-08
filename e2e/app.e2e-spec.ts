import { LoginModulePage } from './app.po';

describe('login-module App', () => {
  let page: LoginModulePage;

  beforeEach(() => {
    page = new LoginModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
