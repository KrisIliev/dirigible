/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "\u06cc\u06a9\u0634\u0646\u0628\u0647",
      "\u062f\u0648\u0634\u0646\u0628\u0647",
      "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
      "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      "\u062c\u0645\u0639\u0647",
      "\u0634\u0646\u0628\u0647"
    ],
    "ERANAMES": [
      "\u0642.\u0645.",
      "\u0645."
    ],
    "ERAS": [
      "\u0642.\u0645.",
      "\u0645."
    ],
    "FIRSTDAYOFWEEK": 5,
    "MONTH": [
      "\u062c\u0646\u0648\u0631\u06cc",
      "\u0641\u0628\u0631\u0648\u0631\u06cc",
      "\u0645\u0627\u0631\u0686",
      "\u0627\u067e\u0631\u06cc\u0644",
      "\u0645\u06cc",
      "\u062c\u0648\u0646",
      "\u062c\u0648\u0644\u0627\u06cc",
      "\u0627\u06af\u0633\u062a",
      "\u0633\u067e\u062a\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0645\u0628\u0631",
      "\u062f\u0633\u0645\u0628\u0631"
    ],
    "SHORTDAY": [
      "\u06cc.",
      "\u062f.",
      "\u0633.",
      "\u0686.",
      "\u067e.",
      "\u062c.",
      "\u0634."
    ],
    "SHORTMONTH": [
      "\u062c\u0646\u0648",
      "\u0641\u0628\u0631",
      "\u0645\u0627\u0631",
      "\u0627\u067e\u0631",
      "\u0645\u0640\u06cc",
      "\u062c\u0648\u0646",
      "\u062c\u0648\u0644",
      "\u0627\u06af\u0633",
      "\u0633\u067e\u062a",
      "\u0627\u06a9\u062a",
      "\u0646\u0648\u0645",
      "\u062f\u0633\u0645"
    ],
    "WEEKENDRANGE": [
      3,
      4
    ],
    "fullDate": "y \u0646\u0686\u06cc \u06cc\u06cc\u0644 d \u0646\u0686\u06cc MMMM EEEE \u06a9\u0648\u0646\u06cc",
    "longDate": "d \u0646\u0686\u06cc MMMM y",
    "medium": "d MMM y H:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "H:mm:ss",
    "short": "y/M/d H:mm",
    "shortDate": "y/M/d",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Af.",
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "uz-arab-af",
  "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
