import { ShopRecipeListPage } from './app.po';

describe('shop-recipe-list App', () => {
  let page: ShopRecipeListPage;

  beforeEach(() => {
    page = new ShopRecipeListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
