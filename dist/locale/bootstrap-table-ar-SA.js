(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table English translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.bootstrapTable.locales['ar-SA'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'جاري التحميل, يرجى الإنتظار';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0633\u062C\u0644 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0627\u0644\u0638\u0627\u0647\u0631 " + pageFrom + " \u0625\u0644\u0649 " + pageTo + " \u0645\u0646 " + totalRows + " \u0633\u062C\u0644 " + totalNotFiltered + " total rows)";
      }

      return "\u0627\u0644\u0638\u0627\u0647\u0631 " + pageFrom + " \u0625\u0644\u0649 " + pageTo + " \u0645\u0646 " + totalRows + " \u0633\u062C\u0644";
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
      return 'Clear Search';
    },
    formatSearch: function formatSearch() {
      return 'بحث';
    },
    formatNoMatches: function formatNoMatches() {
      return 'لا توجد نتائج مطابقة للبحث';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      /* eslint-disable no-useless-escape */
      return 'إخفاء\إظهار ترقيم الصفحات';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'تحديث';
    },
    formatToggle: function formatToggle() {
      return 'تغيير';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'أعمدة';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'All';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Export data';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA']);

}));
