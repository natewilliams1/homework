describe 'Member Login' do
    context 'when member logs in with valid credentials' do
      before(:all) do
        @email = 'nmwilliams87+ca@gmail.com'
        @password = 'Test1234'
  
        visit  CloudAppLoginPage do |page|
          page.email = @email
          page.password = @password
          page.login
        end
      end
  
      after(:all) do
        on CloudAppAccountHomePage do |page|
            page.main_menu_element.wait_until(&:present?).click
            page.logout_element.wait_until(&present?).click
          end
      end
  
      it 'succesfully logs into account' do
        on CloudAppAccountHomePage do |page|
          expect(@browser.url).to include('/dashboard')
          expect(welcome_message_element.text).to eq('Welcome back!')
        end
      end
    end
  
    context 'when logging in with invalid credentials' do
      it 'prevents login and triggers validation' do
  
        visit SCloudAppLoginPage do |page|
          page.email = 'fillthatb@g.up'
          page.password = 'RightMeow!'
          page.login
          expect(@browser.url).to include('/login')
          expect(page.error_message_element.text).to eq('Invalid email / password combination')
        end
      end
    end
  
    context 'clicking forgot password' do
      it 'directs the member to the forgot password page' do
  
        visit CloudAppLoginPage do |page|
          page.forgot_password_element.wait_until(&:present?).click
          expect(@browser.url).to include('/forgot_password')
        end
      end
    end
  end
  