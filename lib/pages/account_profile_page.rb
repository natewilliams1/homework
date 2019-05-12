class AccountProfilePage
  include PageObject

  page_url 'https://shop.shipt.com'

  link(:profile, href: '/account/profile')
  button(:edit_profile, text: 'Edit')
  text_field(:name_field, id: 'name')
  text_field(:email_field, id: 'email')
  text_field(:phone_field, id: 'phone')
  button(:save_profile_button, text: 'Save')
  div(:logout, text: 'Log Out')
  button(:confirm_logout, text: 'Yes')


  def edit_user_details(params = {})
    self.profile_element.wait_until(&:present?).click
    self.edit_profile_element.wait_until(&:present?).click
    self.name_field = params[:name]
    self.email_field = params[:email]
    self.phone_field = params[:phone]
    save_profile_button
  end

  def logout_user
    self.logout_element.wait_until(&:present?).click
    self.confirm_logout_element.wait_until(&:present?).click
  end
end
