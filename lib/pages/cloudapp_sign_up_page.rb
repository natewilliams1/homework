class CloudAppSignupPage
    include PageObject
  
    page_url 'https://share.getcloudapp.com/signup'
  
    text_field(:email, id: 'email')
    text_field(:password, id: 'password')
    button(:sign_up, data-testid: 'regular-signup-submit')
    div(:error_message, text: 'Invalid Username or Password')
    button(:sign_up_with_google, class: 'btn d-flex justify-content-center align-items-center google-login-button btn-block btn-auth')
    button(:sign_up_with_apple, class: 'btn d-flex justify-content-center align-items-center apple-login-button btn-block btn-auth')
  end