$LOAD_PATH << File.dirname(__FILE__) + '/../lib'

require 'rspec'
require 'page-object'
require 'page-object/page_factory'
require 'faker'
require 'pages'
require 'watir'

browser = Watir::Browser.new :chrome
browser.window.maximize

RSpec.configure do |config|
  config.include PageObject::PageFactory
  config.before(:all) { @browser = browser }
  config.after(:suite) { browser.close }
end
