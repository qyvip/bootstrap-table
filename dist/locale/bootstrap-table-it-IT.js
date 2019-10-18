(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Italian translation
   * Author: Davide Renzi<davide.renzi@gmail.com>
   * Author: Davide Borsatto <davide.borsatto@gmail.com>
   * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
   */

  $.fn.bootstrapTable.locales['it-IT'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Caricamento in corso';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " elementi per pagina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Visualizzazione da " + pageFrom + " a " + pageTo + " di " + totalRows + " elementi (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Visualizzazione da " + pageFrom + " a " + pageTo + " di " + totalRows + " elementi";
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
      return 'Pulisci filtri';
    },
    formatSearch: function formatSearch() {
      return 'Cerca';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nessun elemento trovato';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Nascondi/Mostra paginazione';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Aggiorna';
    },
    formatToggle: function formatToggle() {
      return 'Attiva/Disattiva';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Colonne';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Tutto';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Esporta dati';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT']);

}));
