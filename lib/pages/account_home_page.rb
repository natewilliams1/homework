class AccountHomePage
  include PageObject

  page_url 'https://shop.shipt.com/'

  link(:cart_link, href: '/cart')
  link(:account_link, href: '/account/profile/')
end
