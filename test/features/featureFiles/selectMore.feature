Feature: select more
  search in pantip and select more than one type

  Background:
    Given I open "search" page

  Scenario Outline: S01 – Search Page with two room filter
    When I enter "<input>" to "search input" on "search" page
    And I click "room serach button" on "search" page
    And I choose checkbox is "<checkbox1>" on "search" page
    And I choose checkbox is "<checkbox2>" on "search" page
    And I click "search button" on "search" page
    Then I will <not>see "<input>" in "search result" on "search" page

    Examples:
      | input  | checkbox1  | checkbox2  |  not |
      | เกาหลีใต้ ฉบับฤดูหนาว | กรุงโซล |  บลูแพลนเน็ต   |    |
      | Khao Yai Art Museum  | หอศิลป์ |  ห้องสมุด   |    |
      | หุ้นน่าซื้อช่วง covid-19  | สินธร | สีลม  |  not  |
  
  Scenario Outline: S01 – Search Page with three room filter
    When I enter "<input>" to "search input" on "search" page
    And I click "room serach button" on "search" page
    And I choose checkbox is "<checkbox1>" on "search" page
    And I choose checkbox is "<checkbox2>" on "search" page
    And I choose checkbox is "<checkbox3>" on "search" page
    And I click "search button" on "search" page
    Then I will see "<input>" in "search result" on "search" page

    Examples:
      | input  | checkbox1  | checkbox2  |  checkbox3  |
      | ซื้อบ้านหลังแรกของครอบครัว  | บางรัก |  ชายเรือน   |  ชายคา  |

  Scenario: S02 - Click home menu on menu bar
    When I click "home menu" on "search" page
    Then I will see "Pantip - Learn, Share & Fun" on web title

  Scenario: S02 - Click room menu on menu bar
    When I click "room menu" on "search" page
    And I click "ห้อง ก้นครัว" on "search" page
    Then I will see "ก้นครัว - Pantip" on web title
