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
function getDecimals(n) {
  n = n + '';
  var i = n.indexOf('.');
  return (i == -1) ? 0 : n.length - i - 1;
}

function getVF(n, opt_precision) {
  var v = opt_precision;

  if (undefined === v) {
    v = Math.min(getDecimals(n), 3);
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;
  return {v: v, f: f};
}

$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "OD",
      "OT"
    ],
    "DAY": [
      "Jumapil",
      "Wuok Tich",
      "Tich Ariyo",
      "Tich Adek",
      "Tich Ang\u2019wen",
      "Tich Abich",
      "Ngeso"
    ],
    "ERANAMES": [
      "Kapok Kristo obiro",
      "Ka Kristo osebiro"
    ],
    "ERAS": [
      "BC",
      "AD"
    ],
    "FIRSTDAYOFWEEK": 0,
    "MONTH": [
      "Dwe mar Achiel",
      "Dwe mar Ariyo",
      "Dwe mar Adek",
      "Dwe mar Ang\u2019wen",
      "Dwe mar Abich",
      "Dwe mar Auchiel",
      "Dwe mar Abiriyo",
      "Dwe mar Aboro",
      "Dwe mar Ochiko",
      "Dwe mar Apar",
      "Dwe mar gi achiel",
      "Dwe mar Apar gi ariyo"
    ],
    "SHORTDAY": [
      "JMP",
      "WUT",
      "TAR",
      "TAD",
      "TAN",
      "TAB",
      "NGS"
    ],
    "SHORTMONTH": [
      "DAC",
      "DAR",
      "DAD",
      "DAN",
      "DAH",
      "DAU",
      "DAO",
      "DAB",
      "DOC",
      "DAP",
      "DGI",
      "DAG"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/y h:mm a",
    "shortDate": "dd/MM/y",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Ksh",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
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
        "negSuf": "\u00a4",
        "posPre": "",
        "posSuf": "\u00a4"
      }
    ]
  },
  "id": "luo-ke",
  "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
