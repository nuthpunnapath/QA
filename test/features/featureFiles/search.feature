Feature: search
  search in pantip

  Background:
    Given I open "search" page

  Scenario: S01 – Search Page with one room filter
    When I enter "โรงเรียนมัธยมต้นในกรุงโซล" to "search input" on "search" page
    And I click "room serach button" on "search" page
    And I choose checkbox is "กรุงโซล" on "search" page
    And I click "search button" on "search" page
    Then I will see "โรงเรียนมัธยมต้นในกรุงโซล" in "search result" on "search" page


  Scenario Outline: S01 – User search
    When I enter "<input>" to "search input" on "search" page
    And I click "room serach button" on "search" page
    And I choose checkbox is "<checkbox>" on "search" page
    And I click "search button" on "search" page
    Then I will see "<input>" in "search result" on "search" page

    Examples:
      | input  | checkbox  |
      | ร้านขายรองเท้า | จตุจักร |
      | น้ำหอม dior blooming bouquet  | โต๊ะเครื่องแป้ง |
      | หุ้นการบินไทย  | สินธร |
      | สกินแคร์ตัวไหนที่เปลี่ยนสภาพหนังหน้าของเพื่อนๆให้สวยปังคะ  | โต๊ะเครื่องแป้ง |
      | อาการเบื้องต้น COVID-19 ที่สำคัญ  | สวนลุมพินี |
      | อายุน้อยร้อยล้าน  | ทุกห้อง |
