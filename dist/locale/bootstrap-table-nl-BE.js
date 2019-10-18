(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Dutch (Belgi�) translation
   * Author: Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['nl-BE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Laden, even geduld';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " records per pagina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Toon " + pageFrom + " tot " + pageTo + " van " + totalRows + " record" + (totalRows > 1 ? 's' : '') + " (gefilterd van " + totalNotFiltered + " records in totaal)";
      }

      return "Toon " + pageFrom + " tot " + pageTo + " van " + totalRows + " record" + (totalRows > 1 ? 's' : '');
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'vorige pagina';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "tot pagina " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'volgende pagina';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Toon " + totalRows + " record" + (totalRows > 1 ? 's' : '');
    },
    formatClearSearch: function formatClearSearch() {
      return 'Verwijder filters';
    },
    formatSearch: function formatSearch() {
      return 'Zoeken';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Geen resultaten gevonden';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Verberg/Toon paginering';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Toon paginering';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Verberg paginering';
    },
    formatRefresh: function formatRefresh() {
      return 'Vernieuwen';
    },
    formatToggle: function formatToggle() {
      return 'Omschakelen';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Toon kaartweergave';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Verberg kaartweergave';
    },
    formatColumns: function formatColumns() {
      return 'Kolommen';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Allen omschakelen';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Volledig scherm';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatisch vernieuwen';
    },
    formatExport: function formatExport() {
      return 'Exporteer gegevens';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GA';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Geavanceerd zoeken';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Sluiten';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-BE']);

}));
