(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Slovak translation
   * Author: Jozef Dúc<jozef.d13@gmail.com>
   */

  $.fn.bootstrapTable.locales['sk-SK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Prosím čakajte';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " z\xE1znamov na stranu";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Zobrazen\xE1 " + pageFrom + ". - " + pageTo + ". polo\u017Eka z celkov\xFDch " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Zobrazen\xE1 " + pageFrom + ". - " + pageTo + ". polo\u017Eka z celkov\xFDch " + totalRows;
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'previous page';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "to page " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'next page';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Showing " + totalRows + " rows";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Odstráň filtre';
    },
    formatSearch: function formatSearch() {
      return 'Vyhľadávanie';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenájdená žiadna vyhovujúca položka';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skry/Zobraz stránkovanie';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Obnoviť';
    },
    formatToggle: function formatToggle() {
      return 'Prepni';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Stĺpce';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Všetky';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Exportuj dáta';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Advanced search';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Close';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK']);

}));
