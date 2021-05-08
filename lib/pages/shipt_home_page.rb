class ShiptHomePage
  include PageObject

  page_url 'https://www.shipt.com'

  button(:cancel_modal, class: 'fancybox-close-small')
  link(:gift, href: '/gift/')
  link(:login_button, class: 'button-secondary')
  link(:sign_up_button, href: 'https://signup.shipt.com/?referrerUrl=https%3A%2F%2Fwww.shipt.com" class="button-primary signup-cta')
  link(:get_started, href: 'https://signup.shipt.com/?referrerUrl=https%3A%2F%2Fwww.shipt.com')
end
