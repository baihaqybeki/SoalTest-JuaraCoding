$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Palindrome.feature");
formatter.feature({
  "name": "Check text",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the text",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "input text \u003cinput\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "check the text",
  "keyword": "When "
});
formatter.step({
  "name": "the text is \u003cisPalindrome\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input",
        "isPalindrome"
      ]
    },
    {
      "cells": [
        "\"kasur rusak\"",
        "\"Palindrome\""
      ]
    },
    {
      "cells": [
        "\"Kasur gak rusak\"",
        "\"Not Palindrome\""
      ]
    },
    {
      "cells": [
        "\"kodok\"",
        "\"Palindrome\""
      ]
    },
    {
      "cells": [
        "\"Kodok mati\"",
        "\"Not Palindrome\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the text",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "input text \"kasur rusak\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Palindrome.inputText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the text",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Palindrome.checkText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the text is \"Palindrome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Palindrome.result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the text",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "input text \"Kasur gak rusak\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Palindrome.inputText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the text",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Palindrome.checkText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the text is \"Not Palindrome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Palindrome.result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the text",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "input text \"kodok\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Palindrome.inputText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the text",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Palindrome.checkText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the text is \"Palindrome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Palindrome.result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the text",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "input text \"Kodok mati\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Palindrome.inputText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the text",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Palindrome.checkText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the text is \"Not Palindrome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Palindrome.result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});