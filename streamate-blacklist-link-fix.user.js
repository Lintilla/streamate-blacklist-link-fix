// ==UserScript==
// @name         Streamate Model Blacklist Fix
// @version      0.3
// @description  Links to member profiles on Streamate's Blocked Customers admin page for models have been broken long enough! This simple script adds the missing userid back to the broken links so they work as expected again.
// @author       LintillaTaylor
// @namespace    https://github.com/Lintilla/streamate-blacklist-link-fix
// @supportURL   https://github.com/Lintilla/streamate-blacklist-link-fix/issues
// @license      GPL-3.0
// @match        https://legacy.streamatemodels.com/smblock.php*
// @grant        none
// ==/UserScript==
 
var rows = document.querySelectorAll('tbody tr');
for (var i = 0; i < rows.length; i++) {
    rows[i].querySelector('td:nth-child(2) a').href += rows[i].querySelector('td:nth-child(3) input:first-child').name.split(/[\[\]]/)[1];
}