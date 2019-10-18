(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
  * Bootstrap Table German translation
  * Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
  */

  $.fn.bootstrapTable.locales['de-DE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Lade, bitte warten';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " Zeilen pro Seite.";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Zeige Zeile " + pageFrom + " bis " + pageTo + " von " + totalRows + " Zeile" + (totalRows > 1 ? 'n' : '') + " (Gefiltert von " + totalNotFiltered + " Zeile" + (totalNotFiltered > 1 ? 'n' : '') + ")";
      }

      return "Zeige Zeile " + pageFrom + " bis " + pageTo + " von " + totalRows + " Zeile" + (totalRows > 1 ? 'n' : '') + ".";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'Vorherige Seite';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "Zu Seite " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'Nächste Seite';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Zeige " + totalRows + " Zeile" + (totalRows > 1 ? 'n' : '') + ".";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Lösche Filter';
    },
    formatSearch: function formatSearch() {
      return 'Suchen';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Keine passenden Ergebnisse gefunden';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Verstecke/Zeige Nummerierung';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Zeige Nummerierung';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Verstecke Nummerierung';
    },
    formatRefresh: function formatRefresh() {
      return 'Neu laden';
    },
    formatToggle: function formatToggle() {
      return 'Umschalten';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Normale Ansicht';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Kartenansicht';
    },
    formatColumns: function formatColumns() {
      return 'Spalten';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Alle umschalten';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Vollbild';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatisches Neuladen';
    },
    formatExport: function formatExport() {
      return 'Datenexport';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Erweiterte Suche';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Schließen';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE']);

}));
