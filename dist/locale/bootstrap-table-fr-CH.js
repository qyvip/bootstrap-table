(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table French (Suisse) translation
   * Author: Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['fr-CH'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Chargement en cours';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " lignes par page";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Affiche de " + pageFrom + " \xE0 " + pageTo + " sur " + totalRows + " lignes (filtr\xE9s \xE0 partir de " + totalNotFiltered + " lignes)";
      }

      return "Affiche de " + pageFrom + " \xE0 " + pageTo + " sur " + totalRows + " lignes";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'page précédente';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "vers la page " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'page suivante';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Affiche " + totalRows + " lignes";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Effacer la recherche';
    },
    formatSearch: function formatSearch() {
      return 'Recherche';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Pas de lignes trouvés';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Cacher/Afficher pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Afficher pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Cacher pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Rafraichir';
    },
    formatToggle: function formatToggle() {
      return 'Basculer';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Afficher vue carte';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Cacher vue carte';
    },
    formatColumns: function formatColumns() {
      return 'Colonnes';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Tout basculer';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Plein écran';
    },
    formatAllRows: function formatAllRows() {
      return 'Tout';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Rafraîchissement automatique';
    },
    formatExport: function formatExport() {
      return 'Exporter les données';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Aller à';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Recherche avancée';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Fermer';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-CH']);

}));
