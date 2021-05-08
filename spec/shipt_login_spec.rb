describe 'Member Login' do
  context 'when member logs in with valid credentials' do
    before(:all) do
      @email = 'nmwilliams87@gmail.com'
      @password = 'Test123'

      visit  ShiptSigninPage do |page|
        page.email = @email
        page.password = @password
        page.login
      end

      on ShiptAccountProfilePage do |page|
        page.profile_element.wait_until(&:present?).click
      end

    end

    after(:all) do
      on ShiptAccountProfilePage do |page|
        page.logout_user
      end
    end

    it 'succesfully logs into account' do
      on ShiptAccountProfilePage do |page|
        expect(@browser.url).to include('account/profile')
      end
    end
  end

  context 'when logging in with invalid credentials' do
    it 'prevents login and triggers validation' do

      visit ShiptSigninPage do |page|
        page.email = 'fillthatb@g.up'
        page.password = 'RightMeow!'
        page.login
        expect(@browser.url).to include('/login')
        expect(page.error_message_element.text).to eq('Invalid Username or Password')
      end
    end
  end

  context 'clicking forgot password' do
    it 'directs the member to the forgot password page' do

      visit ShiptSigninPage do |page|
        page.forgot_password_element.wait_until(&:present?).click
        expect(@browser.url).to include('/password_resets/new')
      end
    end
  end
end
