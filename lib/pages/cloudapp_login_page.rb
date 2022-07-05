class CloudAppLoginPage
    include PageObject
  
    page_url 'https://share.getcloudapp.com/login'
  
    link(:sign_up, href: '/signup" class="list-unstyled text-sm text-center')
    link(:forgot_password, href: '/forgot_password')
    text_field(:email, id: 'email')
    text_field(:password, id: 'password')
    button(:login, data-testid: 'regular-login-submit')
    div(:error_message, text: 'Invalid email / password combination')
  end