Feature: Login page

    Scenario: User enters login credentials
    Given Navigate to the website
    Then Enter login credentials
    | email_address                  | password   |
    | random@random.com              | testAdmin1 |
    Then Click the login button

    Scenario: User enters login credentials and clicks the checkbox to save information
    Given Navigate to the website again
    Then Enter login credentials once more
    | email_address                  | password   |
    | random@random.com              | testAdmin2 |
    Then Click the checkbox
    Then Click the login button for the second time
