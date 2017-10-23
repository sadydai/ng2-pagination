/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
"use strict";
exports.DEFAULT_TEMPLATE = "\n    " +
    "<pagination-template  #p=\"paginationApi\"\n [id]=\"id\"\n  [maxSize]=\"maxSize\"\n  (pageChange)=\"pageChange.emit($event)\">\n   " +
    " <ul class=\"ng2-pagination\" \n role=\"navigation\" \n aria-label=\"Pagination\" \n   *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        " +
    // "<li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\">" +
    // " \n            \n                 " +
    // "<span class=\"show-for-sr\">page</span>\n            \n            " +
    // "<span *ngIf=\"p.isFirstPage()\">" +
    // " <span class=\"show-for-sr\">page</span></span>\n        " +
    // "</li>\n\n        " +
    "<li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            " +
    "<a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                " +
    "<span class=\"show-for-sr\">Page</span>\n                " +
    "<span>{{ page.label }}</span>\n            " +
    "</a>\n            " +
    "<div *ngIf=\"p.getCurrent() === page.value\">\n                " +
    "<span class=\"show-for-sr\">You're on page</span>\n                " +
    "<span>{{ page.label }}</span> \n            </div>\n        " +
    "</li>\n\n       " +
    // " <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            " +
    // " " +
    // "<span class=\"show-for-sr\">page</span>\n           \n           " +
    // " <span><span class=\"show-for-sr\">page</span></span>\n        </li>\n\n    " +
    "</ul>\n    " +
    "</pagination-template>\n    ";
exports.DEFAULT_STYLES = "\n.ng2-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ng2-pagination::before, .ng2-pagination::after {\n    content: ' ';\n    display: table; }\n  .ng2-pagination::after {\n    clear: both; }\n  .ng2-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    font-size: 0.875rem;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ng2-pagination li {\n    display: inline-block; }\n  .ng2-pagination a,\n  .ng2-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ng2-pagination a:hover,\n    .ng2-pagination button:hover {\n      background: #e6e6e6; }\n  .ng2-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ng2-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ng2-pagination .disabled:hover {\n      background: transparent; }\n  .ng2-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n\n.ng2-pagination .pagination-previous a::before,\n.ng2-pagination .pagination-previous.disabled::before { \n  content: '';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ng2-pagination .pagination-next a::after,\n.ng2-pagination .pagination-next.disabled::after {\n  content: '';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ng2-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";
