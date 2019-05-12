class SigninPage
  include PageObject

  page_url 'https://shop.shipt.com/login'

  link(:sign_up, href: '/signup')
  link(:forgot_password, href: 'https://app.shipt.com/password_resets/new')
  text_field(:email, id: 'username')
  text_field(:password, id: 'password')
  button(:login, text: 'Log In')
  div(:error_message, text: 'Invalid Username or Password')
end
