# homework

## Ruby/Selenium Automation:
- homework > spec folder > login_spec.rb

## Cypress/javascript Automation:
- homework > Cypress folder > integration folder > login folder > shipt_account_login_spec.js


## Ruby

### Quick Start
* Get ruby setup.  
	* Windows: http://railsinstaller.org/en
	* OSX: http://rvm.io/rvm/install
* `gem install bundler` if bundler is not already installed
* `bundle install` to install required gems.  (You need to run this whenever pulling down this repo with new changes)
* `rspec` to run the test and verify it's working

### Use Chrome instead of FireFox
* If you want to use chrome for watir testing (recommended because it's faster), you need to download the chromedriver and put it in your PATH.
	* [Download ChromeDriver](http://chromedriver.storage.googleapis.com/index.html) (choose the latest version)
	* Extract it to some directory, e.g., c:\utils\chromedriver
	* Now go put c:\utils\chromedriver in the PATH (start : edit environment variables for your account : edit the 'Path' variable and append that directory to it)

### Frameworks

##### Page-Object

We're using the [page-object](https://github.com/cheezy/page-object) gem to wrap around watir-webdriver.  You can always drop down and use the watir browser object, but page-object provides some nice abstractions.

* [Elements](https://github.com/cheezy/page-object/wiki/Elements)
* [Simple DSL](https://github.com/cheezy/page-object/wiki/Simple-DSL)
* [Ajax Calls](https://github.com/cheezy/page-object/wiki/Ajax-Calls)

##### faker
The [faker](https://github.com/stympy/faker) can be used to generate random fake data within tests.

##### RSpec
* [RSpec Expecations syntax](https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers)



## Cypress

## Installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

```bash
npm install cypress --save-dev
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)


## To Open and Run Cypress use this command:
```bash
npm i && npm run cypress:open
```
