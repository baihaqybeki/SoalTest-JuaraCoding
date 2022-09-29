Feature: Check text

  Scenario Outline: Validate the text
    Given input text <input>
    When check the text
    Then the text is <isPalindrome>

    Examples: 
    | input 						| isPalindrome  					|
    | "kasur rusak" 		| "Palindrome" 						|
    | "Kasur gak rusak" | "Not Palindrome"    		|
    | "kodok" 					| "Palindrome"		    		|
    | "Kodok mati" 			| "Not Palindrome"		    |
