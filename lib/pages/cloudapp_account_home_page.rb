class CloudAppAccountHomePage
    include PageObject
  
    page_url 'https://share.getcloudapp.com/dashboard'
  
    div(:main_menu, id: 'main-menu')
    link(:settings, data-testid: 'dropdown-link-settings')
    link(:logout, data_testid: 'dropdown-link-sign_out')
    div(:welcome_message, class: 'alert alert-message')
  end