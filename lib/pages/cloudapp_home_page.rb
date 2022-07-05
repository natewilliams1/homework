class CloudAppHomePage
    include PageObject
  
    page_url 'https://getcloudapp.com/'
  
    link(:login_button, href: 'https://share.getcloudapp.com/login" class: "jet-menu-title')
  end
  