Feature: Check stock

  Scenario Outline: print stock
    When navigate to mainpage
    And search <item> and click it
    Then print stock item
    
        Examples: 
    | item 						|
    | "band tees" 		|
