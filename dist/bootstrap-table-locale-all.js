(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * Bootstrap Table Afrikaans translation
   * Author: Phillip Kruger <phillip.kruger@gmail.com>
   */

  $.fn.bootstrapTable.locales['af-ZA'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Besig om te laai, wag asseblief';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rekords per bladsy";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Resultate " + pageFrom + " tot " + pageTo + " van " + totalRows + " rye (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Resultate " + pageFrom + " tot " + pageTo + " van " + totalRows + " rye";
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
      return 'Soek';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Geen rekords gevind nie';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Wys/verberg bladsy nummering';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Herlaai';
    },
    formatToggle: function formatToggle() {
      return 'Wissel';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Kolomme';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA']);

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

  /**
   * Bootstrap Table Catalan translation
   * Authors: Marc Pina<iwalkalone69@gmail.com>
   *          Claudi Martinez<claudix.kernel@gmail.com>
   */

  $.fn.bootstrapTable.locales['ca-ES'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Espereu, si us plau';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " resultats per p\xE0gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrant de " + pageFrom + " fins " + pageTo + " - total " + totalRows + " resultats (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrant de " + pageFrom + " fins " + pageTo + " - total " + totalRows + " resultats";
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
      return 'Cerca';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No s\'han trobat resultats';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Amaga/Mostra paginació';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresca';
    },
    formatToggle: function formatToggle() {
      return 'Alterna formatació';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnes';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Tots';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES']);

  /**
   * Bootstrap Table Czech translation
   * Author: Lukas Kral (monarcha@seznam.cz)
   * Author: Jakub Svestka <svestka1999@gmail.com>
   */

  $.fn.bootstrapTable.locales['cs-CZ'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Čekejte, prosím';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " polo\u017Eek na str\xE1nku";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Zobrazena " + pageFrom + ". - " + pageTo + " . polo\u017Eka z celkov\xFDch " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Zobrazena " + pageFrom + ". - " + pageTo + " . polo\u017Eka z celkov\xFDch " + totalRows;
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
      return 'Vyhledávání';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenalezena žádná vyhovující položka';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skrýt/Zobrazit stránkování';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Aktualizovat';
    },
    formatToggle: function formatToggle() {
      return 'Přepni';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Sloupce';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Vše';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ']);

  /**
   * Bootstrap Table danish translation
   * Author: Your Name Jan Borup Coyle, github@coyle.dk
   */

  $.fn.bootstrapTable.locales['da-DK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Indlæser, vent venligst';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " poster pr side";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Viser " + pageFrom + " til " + pageTo + " af " + totalRows + " r\xE6kke" + (totalRows > 1 ? 'r' : '') + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Viser " + pageFrom + " til " + pageTo + " af " + totalRows + " r\xE6kke" + (totalRows > 1 ? 'r' : '');
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
      return "Viser " + totalRows + " r\xE6kke" + (totalRows > 1 ? 'r' : '');
    },
    formatClearSearch: function formatClearSearch() {
      return 'Ryd filtre';
    },
    formatSearch: function formatSearch() {
      return 'Søg';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ingen poster fundet';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skjul/vis nummerering';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Opdater';
    },
    formatToggle: function formatToggle() {
      return 'Skift';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Kolonner';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Eksporter';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK']);

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

  /**
   * Bootstrap Table Greek translation
   * Author: giannisdallas
   */

  $.fn.bootstrapTable.locales['el-GR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Φορτώνει, παρακαλώ περιμένετε';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B1\u03BD\u03AC \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD " + pageFrom + " \u03C9\u03C2 \u03C4\u03B7\u03BD " + pageTo + " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF " + totalRows + " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD " + pageFrom + " \u03C9\u03C2 \u03C4\u03B7\u03BD " + pageTo + " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF " + totalRows + " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD";
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
      return 'Αναζητήστε';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Δεν βρέθηκαν αποτελέσματα';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatToggle: function formatToggle() {
      return 'Toggle';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR']);

  /**
   * Bootstrap Table English translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.bootstrapTable.locales['en-US'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Loading, please wait';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rows per page";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Showing " + pageFrom + " to " + pageTo + " of " + totalRows + " rows (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Showing " + pageFrom + " to " + pageTo + " of " + totalRows + " rows";
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
      return 'Search';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No matching records found';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatToggle: function formatToggle() {
      return 'Toggle';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US']);

  /**
   * Bootstrap Table Spanish (Argentina) translation
   * Author: Felix Vera (felix.vera@gmail.com)
   */

  $.fn.bootstrapTable.locales['es-AR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, espere por favor';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas";
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
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatToggle: function formatToggle() {
      return 'Toggle';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-AR']);

  /**
   * Traducción de librería Bootstrap Table a Español (Chile)
   * @author Brian Álvarez Azócar
   * email brianalvarezazocar@gmail.com
   */

  $.fn.bootstrapTable.locales['es-CL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, espere por favor';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " filas por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas";
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
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return "Ocultar/Mostrar paginaci\xF3n";
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refrescar';
    },
    formatToggle: function formatToggle() {
      return 'Cambiar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL']);

  /**
   * Bootstrap Table Spanish (Costa Rica) translation
   * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
   */

  $.fn.bootstrapTable.locales['es-CR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, por favor espere';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando de " + pageFrom + " a " + pageTo + " registros de " + totalRows + " registros en total (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrando de " + pageFrom + " a " + pageTo + " registros de " + totalRows + " registros en total";
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
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refrescar';
    },
    formatToggle: function formatToggle() {
      return 'Alternar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR']);

  /**
   * Bootstrap Table Spanish Spain translation
   * Author: Marc Pina<iwalkalone69@gmail.com>
   */

  $.fn.bootstrapTable.locales['es-ES'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Por favor espere';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " resultados por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando desde " + pageFrom + " hasta " + pageTo + " - En total " + totalRows + " resultados (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrando desde " + pageFrom + " hasta " + pageTo + " - En total " + totalRows + " resultados";
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
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron resultados';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ocultar/Mostrar paginación';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refrescar';
    },
    formatToggle: function formatToggle() {
      return 'Ocultar/Mostrar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Todos';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Exportar los datos';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Búsqueda avanzada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Cerrar';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES']);

  /**
   * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
   * Author: Felix Vera (felix.vera@gmail.com)
   * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
   * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
   */

  $.fn.bootstrapTable.locales['es-MX'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, espere por favor';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrando " + pageFrom + " a " + pageTo + " de " + totalRows + " filas";
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
      return "Mostrando " + totalRows + " filas";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros que coincidan';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Mostrar/ocultar paginación';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualizar';
    },
    formatToggle: function formatToggle() {
      return 'Cambiar vista';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Pantalla completa';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX']);

  /**
   * Bootstrap Table Spanish (Nicaragua) translation
   * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
   */

  $.fn.bootstrapTable.locales['es-NI'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, por favor espere';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando de " + pageFrom + " a " + pageTo + " registros de " + totalRows + " registros en total (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Mostrando de " + pageFrom + " a " + pageTo + " registros de " + totalRows + " registros en total";
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
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refrescar';
    },
    formatToggle: function formatToggle() {
      return 'Alternar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-NI']);

  /**
   * Bootstrap Table Spanish (España) translation
   * Author: Antonio Pérez <anpegar@gmail.com>
   */

  $.fn.bootstrapTable.locales['es-SP'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, por favor espera';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p&#225;gina.";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return pageFrom + " - " + pageTo + " de " + totalRows + " registros (filtered from " + totalNotFiltered + " total rows)";
      }

      return pageFrom + " - " + pageTo + " de " + totalRows + " registros.";
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
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se han encontrado registros.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualizar';
    },
    formatToggle: function formatToggle() {
      return 'Alternar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP']);

  /**
   * Bootstrap Table Estonian translation
   * Author: kristjan@logist.it>
   */

  $.fn.bootstrapTable.locales['et-EE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Päring käib, palun oota';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rida lehe kohta";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "N\xE4itan tulemusi " + pageFrom + " kuni " + pageTo + " - kokku " + totalRows + " tulemust (filtered from " + totalNotFiltered + " total rows)";
      }

      return "N\xE4itan tulemusi " + pageFrom + " kuni " + pageTo + " - kokku " + totalRows + " tulemust";
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
      return 'Otsi';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Päringu tingimustele ei vastanud ühtegi tulemust';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Näita/Peida lehtedeks jagamine';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Värskenda';
    },
    formatToggle: function formatToggle() {
      return 'Lülita';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Veerud';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Kõik';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['et-EE']);

  /**
   * Bootstrap Table Basque (Basque Country) translation
   * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
   */

  $.fn.bootstrapTable.locales['eu-EU'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Itxaron mesedez';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " emaitza orriko.";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return totalRows + " erregistroetatik " + pageFrom + "etik " + pageTo + "erakoak erakusten (filtered from " + totalNotFiltered + " total rows)";
      }

      return totalRows + " erregistroetatik " + pageFrom + "etik " + pageTo + "erakoak erakusten.";
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
      return 'Bilatu';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ez da emaitzarik aurkitu';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ezkutatu/Erakutsi orrikatzea';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Eguneratu';
    },
    formatToggle: function formatToggle() {
      return 'Ezkutatu/Erakutsi';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Zutabeak';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Guztiak';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU']);

  /**
   * Bootstrap Table Persian translation
   * Author: MJ Vakili <mjv.1989@Gmail.com>
   */

  $.fn.bootstrapTable.locales['fa-IR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'در حال بارگذاری, لطفا صبر کنید';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0646\u0645\u0627\u06CC\u0634 " + pageFrom + " \u062A\u0627 " + pageTo + " \u0627\u0632 " + totalRows + " \u0631\u062F\u06CC\u0641 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u0646\u0645\u0627\u06CC\u0634 " + pageFrom + " \u062A\u0627 " + pageTo + " \u0627\u0632 " + totalRows + " \u0631\u062F\u06CC\u0641";
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
      return 'جستجو';
    },
    formatNoMatches: function formatNoMatches() {
      return 'رکوردی یافت نشد.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'نمایش/مخفی صفحه بندی';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'به روز رسانی';
    },
    formatToggle: function formatToggle() {
      return 'تغییر نمایش';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'سطر ها';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'همه';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);

  /**
   * Bootstrap Table Finnish translations
   * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
   */

  $.fn.bootstrapTable.locales['fi-FI'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Ladataan, ole hyvä ja odota';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rivi\xE4 sivulla";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "N\xE4ytet\xE4\xE4n rivit " + pageFrom + " - " + pageTo + " / " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "N\xE4ytet\xE4\xE4n rivit " + pageFrom + " - " + pageTo + " / " + totalRows;
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
      return 'Poista suodattimet';
    },
    formatSearch: function formatSearch() {
      return 'Hae';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Näytä/Piilota sivutus';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Päivitä';
    },
    formatToggle: function formatToggle() {
      return 'Valitse';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Sarakkeet';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Kaikki';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Vie tiedot';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);

  /**
   * Bootstrap Table French (Belgium) translation
   * Author: Julien Bisconti (julien.bisconti@gmail.com)
   *         Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['fr-BE'] = {
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE']);

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

  /**
   * Bootstrap Table French (France) translation
   * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
   *         Tidalf (https://github.com/TidalfFR)
   *         Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['fr-FR'] = {
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);

  /**
   * Bootstrap Table French (Luxembourg) translation
   * Author: Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['fr-LU'] = {
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-LU']);

  /**
   * Bootstrap Table Hebrew translation
   * Author: legshooter
   */

  $.fn.bootstrapTable.locales['he-IL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'טוען, נא להמתין';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u05DE\u05E6\u05D9\u05D2 " + pageFrom + " \u05E2\u05D3 " + pageTo + " \u05DE-" + totalRows + "\u05E9\u05D5\u05E8\u05D5\u05EA" + totalNotFiltered + " total rows)";
      }

      return "\u05DE\u05E6\u05D9\u05D2 " + pageFrom + " \u05E2\u05D3 " + pageTo + " \u05DE-" + totalRows + " \u05E9\u05D5\u05E8\u05D5\u05EA";
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
      return 'חיפוש';
    },
    formatNoMatches: function formatNoMatches() {
      return 'לא נמצאו רשומות תואמות';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'הסתר/הצג מספור דפים';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'רענן';
    },
    formatToggle: function formatToggle() {
      return 'החלף תצוגה';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'עמודות';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'הכל';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL']);

  /**
  * Bootstrap Table Croatian translation
  * Author: Petra Štrbenac (petra.strbenac@gmail.com)
  * Author: Petra Štrbenac (petra.strbenac@gmail.com)
  */

  $.fn.bootstrapTable.locales['hr-HR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Molimo pričekajte';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " broj zapisa po stranici";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Prikazujem " + pageFrom + ". - " + pageTo + ". od ukupnog broja zapisa " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Prikazujem " + pageFrom + ". - " + pageTo + ". od ukupnog broja zapisa " + totalRows;
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
      return 'Pretraži';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nije pronađen niti jedan zapis';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Prikaži/sakrij stranice';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Osvježi';
    },
    formatToggle: function formatToggle() {
      return 'Promijeni prikaz';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Kolone';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Sve';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR']);

  /**
   * Bootstrap Table Hungarian translation
   * Author: Nagy Gergely <info@nagygergely.eu>
   */

  $.fn.bootstrapTable.locales['hu-HU'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Betöltés, kérem várjon';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rekord per oldal";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Megjelen\xEDtve " + pageFrom + " - " + pageTo + " / " + totalRows + " \xF6sszesen (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Megjelen\xEDtve " + pageFrom + " - " + pageTo + " / " + totalRows + " \xF6sszesen";
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
      return 'Keresés';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nincs találat';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Lapozó elrejtése/megjelenítése';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Frissítés';
    },
    formatToggle: function formatToggle() {
      return 'Összecsuk/Kinyit';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Oszlopok';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Összes';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU']);

  /**
   * Bootstrap Table Indonesian translation
   * Author: Andre Gardiner<andre@sirdre.com>
   */

  $.fn.bootstrapTable.locales['id-ID'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Memuat, mohon tunggu';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " baris per halaman";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Menampilkan " + pageFrom + " sampai " + pageTo + " dari " + totalRows + " baris (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Menampilkan " + pageFrom + " sampai " + pageTo + " dari " + totalRows + " baris";
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
      return 'Bersihkan filter';
    },
    formatSearch: function formatSearch() {
      return 'Pencarian';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Tidak ditemukan data yang cocok';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Sembunyikan/Tampilkan halaman';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Muat ulang';
    },
    formatToggle: function formatToggle() {
      return 'Beralih';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'kolom';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Semua';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Ekspor data';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID']);

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

  /**
   * Bootstrap Table Japanese translation
   * Author: Azamshul Azizy <azamshul@gmail.com>
   */

  $.fn.bootstrapTable.locales['ja-JP'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '読み込み中です。少々お待ちください。';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\u30DA\u30FC\u30B8\u5F53\u305F\u308A\u6700\u5927" + pageNumber + "\u4EF6";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u5168" + totalRows + "\u4EF6\u304B\u3089\u3001" + pageFrom + "\u304B\u3089" + pageTo + "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u5168" + totalRows + "\u4EF6\u304B\u3089\u3001" + pageFrom + "\u304B\u3089" + pageTo + "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059";
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
      return '検索';
    },
    formatNoMatches: function formatNoMatches() {
      return '該当するレコードが見つかりません';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'ページ数を表示・非表示';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return '更新';
    },
    formatToggle: function formatToggle() {
      return 'トグル';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return '列';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'すべて';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP']);

  /**
   * Bootstrap Table Georgian translation
   * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
   */

  $.fn.bootstrapTable.locales['ka-GE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'იტვირთება, გთხოვთ მოიცადოთ';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10D7\u10D8\u10D7\u10DD \u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 " + pageFrom + "-\u10D3\u10D0\u10DC " + pageTo + "-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 " + totalRows + "-\u10D3\u10D0\u10DC (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 " + pageFrom + "-\u10D3\u10D0\u10DC " + pageTo + "-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 " + totalRows + "-\u10D3\u10D0\u10DC";
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
      return 'ძებნა';
    },
    formatNoMatches: function formatNoMatches() {
      return 'მონაცემები არ არის';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'გვერდების გადამრთველის დამალვა/გამოჩენა';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'განახლება';
    },
    formatToggle: function formatToggle() {
      return 'ჩართვა/გამორთვა';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'სვეტები';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE']);

  /**
   * Bootstrap Table Korean translation
   * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
   */

  $.fn.bootstrapTable.locales['ko-KR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '데이터를 불러오는 중입니다';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\uD398\uC774\uC9C0 \uB2F9 " + pageNumber + "\uAC1C \uB370\uC774\uD130 \uCD9C\uB825";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\uC804\uCCB4 " + totalRows + "\uAC1C \uC911 " + pageFrom + "~" + pageTo + "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825, (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\uC804\uCCB4 " + totalRows + "\uAC1C \uC911 " + pageFrom + "~" + pageTo + "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,";
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
      return '검색';
    },
    formatNoMatches: function formatNoMatches() {
      return '조회된 데이터가 없습니다.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return '새로 고침';
    },
    formatToggle: function formatToggle() {
      return '전환';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return '컬럼 필터링';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);

  /**
   * Bootstrap Table Malay translation
   * Author: Azamshul Azizy <azamshul@gmail.com>
   */

  $.fn.bootstrapTable.locales['ms-MY'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Permintaan sedang dimuatkan. Sila tunggu sebentar';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rekod setiap muka surat";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Sedang memaparkan rekod " + pageFrom + " hingga " + pageTo + " daripada jumlah " + totalRows + " rekod (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Sedang memaparkan rekod " + pageFrom + " hingga " + pageTo + " daripada jumlah " + totalRows + " rekod";
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
      return 'Cari';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Tiada rekod yang menyamai permintaan';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Tunjuk/sembunyi muka surat';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Muatsemula';
    },
    formatToggle: function formatToggle() {
      return 'Tukar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Lajur';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Semua';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY']);

  /**
   * Bootstrap Table norwegian translation
   * Author: Jim Nordbø, jim@nordb.no
   */

  $.fn.bootstrapTable.locales['nb-NO'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Oppdaterer, vennligst vent';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " poster pr side";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Viser " + pageFrom + " til " + pageTo + " av " + totalRows + " rekker (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Viser " + pageFrom + " til " + pageTo + " av " + totalRows + " rekker";
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
      return 'Søk';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ingen poster funnet';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Oppdater';
    },
    formatToggle: function formatToggle() {
      return 'Endre';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Kolonner';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO']);

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

  /**
   * Bootstrap Table Dutch (Nederland) translation
   * Author: Your Name <info@a2hankes.nl>
   *         Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['nl-NL'] = {
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL']);

  /**
   * Bootstrap Table Polish translation
   * Author: zergu <michal.zagdan @ gmail com>
   */

  $.fn.bootstrapTable.locales['pl-PL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Ładowanie, proszę czekać';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rekord\xF3w na stron\u0119";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Wy\u015Bwietlanie rekord\xF3w od " + pageFrom + " do " + pageTo + " z " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Wy\u015Bwietlanie rekord\xF3w od " + pageFrom + " do " + pageTo + " z " + totalRows;
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
      return 'Szukaj';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Niestety, nic nie znaleziono';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Odśwież';
    },
    formatToggle: function formatToggle() {
      return 'Przełącz';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Kolumny';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL']);

  /**
   * Bootstrap Table Brazilian Portuguese Translation
   * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
   * Update: João Mello<jmello@hotmail.com.br>
   * Update: Leandro Felizari<lfelizari@gmail.com>
   */

  $.fn.bootstrapTable.locales['pt-BR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Carregando, aguarde';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registros por p\xE1gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Exibindo " + pageFrom + " at\xE9 " + pageTo + " de " + totalRows + " linhas (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Exibindo " + pageFrom + " at\xE9 " + pageTo + " de " + totalRows + " linhas";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'página anterior';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "Para a p\xE1gina " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'próxima página';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Mostrando " + totalRows + " linhas";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Limpar Pasquisa';
    },
    formatSearch: function formatSearch() {
      return 'Pesquisar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenhum registro encontrado';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ocultar/Exibir paginação';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostrar Paginação';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Esconder Paginação';
    },
    formatRefresh: function formatRefresh() {
      return 'Recarregar';
    },
    formatToggle: function formatToggle() {
      return 'Alternar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Colunas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Tela cheia';
    },
    formatAllRows: function formatAllRows() {
      return 'Tudo';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Atualização Automática';
    },
    formatExport: function formatExport() {
      return 'Exportar dados';
    },
    formatJumpTo: function formatJumpTo() {
      return 'IR';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Pesquisa Avançada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Fechar';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);

  /**
   * Bootstrap Table Portuguese Portugal Translation
   * Author: Burnspirit<burnspirit@gmail.com>
   */

  $.fn.bootstrapTable.locales['pt-PT'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'A carregar, por favor aguarde';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " registos por p&aacute;gina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "A mostrar " + pageFrom + " at&eacute; " + pageTo + " de " + totalRows + " linhas (filtered from " + totalNotFiltered + " total rows)";
      }

      return "A mostrar " + pageFrom + " at&eacute; " + pageTo + " de " + totalRows + " linhas";
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
      return 'Pesquisa';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenhum registo encontrado';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Esconder/Mostrar pagina&ccedil&atilde;o';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Atualizar';
    },
    formatToggle: function formatToggle() {
      return 'Alternar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Colunas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Tudo';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT']);

  /**
   * Bootstrap Table Romanian translation
   * Author: cristake <cristianiosif@me.com>
   */

  $.fn.bootstrapTable.locales['ro-RO'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Se incarca, va rugam asteptati';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " inregistrari pe pagina";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Arata de la " + pageFrom + " pana la " + pageTo + " din " + totalRows + " randuri (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Arata de la " + pageFrom + " pana la " + pageTo + " din " + totalRows + " randuri";
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
      return 'Cauta';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nu au fost gasite inregistrari';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ascunde/Arata paginatia';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Reincarca';
    },
    formatToggle: function formatToggle() {
      return 'Comuta';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Coloane';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Toate';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO']);

  /**
   * Bootstrap Table Russian translation
   * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
   */

  $.fn.bootstrapTable.locales['ru-RU'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Пожалуйста, подождите, идёт загрузка';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 " + pageFrom + " \u043F\u043E " + pageTo + " \u0438\u0437 " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 " + pageFrom + " \u043F\u043E " + pageTo + " \u0438\u0437 " + totalRows;
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
      return 'Очистить фильтры';
    },
    formatSearch: function formatSearch() {
      return 'Поиск';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ничего не найдено';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Обновить';
    },
    formatToggle: function formatToggle() {
      return 'Переключить';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Колонки';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU']);

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

  /**
  * Bootstrap Table Serbian Cyrilic RS translation
  * Author: Vladimir Kanazir (vladimir@kanazir.com)
  */

  $.fn.bootstrapTable.locales['sr-Cyrl-RS'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Молим сачекај';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0440\u0435\u0434\u043E\u0432\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E " + pageFrom + ". - " + pageTo + ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 " + totalRows + " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u043E \u043E\u0434 " + totalNotFiltered + ")";
      }

      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E " + pageFrom + ". - " + pageTo + ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 " + totalRows;
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'претходна страна';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0443 " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'следећа страна';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E " + totalRows + " \u0440\u0435\u0434\u043E\u0432\u0430";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Обриши претрагу';
    },
    formatSearch: function formatSearch() {
      return 'Пронађи';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Није пронађен ни један податак';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Прикажи/сакриј пагинацију';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Прикажи пагинацију';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Сакриј пагинацију';
    },
    formatRefresh: function formatRefresh() {
      return 'Освежи';
    },
    formatToggle: function formatToggle() {
      return 'Промени приказ';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Прикажи картице';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Сакриј картице';
    },
    formatColumns: function formatColumns() {
      return 'Колоне';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Прикажи/сакриј све';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Цео екран';
    },
    formatAllRows: function formatAllRows() {
      return 'Све';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Аутоматско освежавање';
    },
    formatExport: function formatExport() {
      return 'Извези податке';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Иди';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Напредна претрага';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Затвори';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Cyrl-RS']);

  /**
  * Bootstrap Table Serbian Latin RS translation
  * Author: Vladimir Kanazir (vladimir@kanazir.com)
  */

  $.fn.bootstrapTable.locales['sr-Latn-RS'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Molim sačekaj';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " redova po strani";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Prikazano " + pageFrom + ". - " + pageTo + ". od ukupnog broja redova " + totalRows + " (filtrirano od " + totalNotFiltered + ")";
      }

      return "Prikazano " + pageFrom + ". - " + pageTo + ". od ukupnog broja redova " + totalRows;
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'prethodna strana';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "na stranu " + page;
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'sledeća strana';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Prikazano " + totalRows + " redova";
    },
    formatClearSearch: function formatClearSearch() {
      return 'Obriši pretragu';
    },
    formatSearch: function formatSearch() {
      return 'Pronađi';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nije pronađen ni jedan podatak';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Prikaži/sakrij paginaciju';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Prikaži paginaciju';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Sakrij paginaciju';
    },
    formatRefresh: function formatRefresh() {
      return 'Osveži';
    },
    formatToggle: function formatToggle() {
      return 'Promeni prikaz';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Prikaži kartice';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Sakrij kartice';
    },
    formatColumns: function formatColumns() {
      return 'Kolone';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Prikaži/sakrij sve';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Ceo ekran';
    },
    formatAllRows: function formatAllRows() {
      return 'Sve';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatsko osvežavanje';
    },
    formatExport: function formatExport() {
      return 'Izvezi podatke';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Idi';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Napredna pretraga';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zatvori';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Latn-RS']);

  /**
   * Bootstrap Table Swedish translation
   * Author: C Bratt <bratt@inix.se>
   */

  $.fn.bootstrapTable.locales['sv-SE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Laddar, vänligen vänta';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " rader per sida";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Visa " + pageFrom + " till " + pageTo + " av " + totalRows + " rader (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Visa " + pageFrom + " till " + pageTo + " av " + totalRows + " rader";
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
      return 'Sök';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Inga matchande resultat funna.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Uppdatera';
    },
    formatToggle: function formatToggle() {
      return 'Skifta';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'kolumn';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE']);

  /**
   * Bootstrap Table Thai translation
   * Author: Monchai S.<monchais@gmail.com>
   */

  $.fn.bootstrapTable.locales['th-TH'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'กำลังโหลดข้อมูล, กรุณารอสักครู่';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 " + pageFrom + " \u0E16\u0E36\u0E07 " + pageTo + " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 " + totalRows + " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 " + pageFrom + " \u0E16\u0E36\u0E07 " + pageTo + " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 " + totalRows + " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23";
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
      return 'ค้นหา';
    },
    formatNoMatches: function formatNoMatches() {
      return 'ไม่พบรายการที่ค้นหา !';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'รีเฟรส';
    },
    formatToggle: function formatToggle() {
      return 'สลับมุมมอง';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'คอลัมน์';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);

  /**
   * Bootstrap Table Turkish translation
   * Author: Emin Şen
   * Author: Sercan Cakir <srcnckr@gmail.com>
   */

  $.fn.bootstrapTable.locales['tr-TR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Yükleniyor, lütfen bekleyin';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "Sayfa ba\u015F\u0131na " + pageNumber + " kay\u0131t.";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return totalRows + " kay\u0131ttan " + pageFrom + "-" + pageTo + " aras\u0131 g\xF6steriliyor (filtered from " + totalNotFiltered + " total rows).";
      }

      return totalRows + " kay\u0131ttan " + pageFrom + "-" + pageTo + " aras\u0131 g\xF6steriliyor.";
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
      return 'Ara';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Eşleşen kayıt bulunamadı.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Yenile';
    },
    formatToggle: function formatToggle() {
      return 'Değiştir';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Sütunlar';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Tüm Satırlar';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR']);

  /**
   * Bootstrap Table Ukrainian translation
   * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
   */

  $.fn.bootstrapTable.locales['uk-UA'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Завантаження, будь ласка, зачекайте';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 " + pageFrom + " \u043F\u043E " + pageTo + ". \u0412\u0441\u044C\u043E\u0433\u043E: " + totalRows + " (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 " + pageFrom + " \u043F\u043E " + pageTo + ". \u0412\u0441\u044C\u043E\u0433\u043E: " + totalRows;
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
      return 'Очистити фільтри';
    },
    formatSearch: function formatSearch() {
      return 'Пошук';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Не знайдено жодного запису';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Оновити';
    },
    formatToggle: function formatToggle() {
      return 'Змінити';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Стовпці';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA']);

  /**
   * Bootstrap Table Urdu translation
   * Author: Malik <me@malikrizwan.com>
   */

  $.fn.bootstrapTable.locales['ur-PK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'براۓ مہربانی انتظار کیجئے';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA " + pageFrom + " \u0633\u06D2 " + pageTo + " \u06A9\u06D2 " + totalRows + "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 (filtered from " + totalNotFiltered + " total rows)";
      }

      return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA " + pageFrom + " \u0633\u06D2 " + pageTo + " \u06A9\u06D2 " + totalRows + "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632";
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
      return 'تلاش';
    },
    formatNoMatches: function formatNoMatches() {
      return 'کوئی ریکارڈ نہیں ملا';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'تازہ کریں';
    },
    formatToggle: function formatToggle() {
      return 'تبدیل کریں';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'کالم';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK']);

  /**
   * Bootstrap Table Uzbek translation
   * Author: Nabijon Masharipov <mnabijonz@gmail.com>
   */

  $.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Yuklanyapti, iltimos kuting';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " qator har sahifada";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Ko'rsatypati " + pageFrom + " dan " + pageTo + " gacha " + totalRows + " qatorlarni (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Ko'rsatypati " + pageFrom + " dan " + pageTo + " gacha " + totalRows + " qatorlarni";
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
      return 'Filtrlarni tozalash';
    },
    formatSearch: function formatSearch() {
      return 'Qidirish';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Hech narsa topilmadi';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Sahifalashni yashirish/ko\'rsatish';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Yangilash';
    },
    formatToggle: function formatToggle() {
      return 'Ko\'rinish';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Ustunlar';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Hammasi';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Eksport';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ']);

  /**
   * Bootstrap Table Vietnamese translation
   * Author: Duc N. PHAM <pngduc@gmail.com>
   */

  $.fn.bootstrapTable.locales['vi-VN'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Đang tải';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + " b\u1EA3n ghi m\u1ED7i trang";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Hi\u1EC3n th\u1ECB t\u1EEB trang " + pageFrom + " \u0111\u1EBFn " + pageTo + " c\u1EE7a " + totalRows + " b\u1EA3ng ghi (filtered from " + totalNotFiltered + " total rows)";
      }

      return "Hi\u1EC3n th\u1ECB t\u1EEB trang " + pageFrom + " \u0111\u1EBFn " + pageTo + " c\u1EE7a " + totalRows + " b\u1EA3ng ghi";
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
      return 'Tìm kiếm';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Không có dữ liệu';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatToggle: function formatToggle() {
      return 'Toggle';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
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
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);

  /**
   * Bootstrap Table Chinese translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.bootstrapTable.locales['zh-CN'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '正在努力地加载数据中，请稍候';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\u6BCF\u9875\u663E\u793A " + pageNumber + " \u6761\u8BB0\u5F55";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u663E\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 " + totalRows + " \u6761\u8BB0\u5F55\uFF08\u4ECE " + totalNotFiltered + " \u603B\u8BB0\u5F55\u4E2D\u8FC7\u6EE4\uFF09";
      }

      return "\u663E\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 " + totalRows + " \u6761\u8BB0\u5F55";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return '上一页';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u7B2C" + page + "\u9875";
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return '下一页';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u603B\u5171 " + totalRows + " \u6761\u8BB0\u5F55";
    },
    formatClearSearch: function formatClearSearch() {
      return '清空过滤';
    },
    formatSearch: function formatSearch() {
      return '搜索';
    },
    formatNoMatches: function formatNoMatches() {
      return '没有找到匹配的记录';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return '隐藏/显示分页';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return '显示分页';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return '隐藏分页';
    },
    formatRefresh: function formatRefresh() {
      return '刷新';
    },
    formatToggle: function formatToggle() {
      return '切换';
    },
    formatToggleOn: function formatToggleOn() {
      return '显示卡片视图';
    },
    formatToggleOff: function formatToggleOff() {
      return '隐藏卡片视图';
    },
    formatColumns: function formatColumns() {
      return '列';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return '切换所有';
    },
    formatFullscreen: function formatFullscreen() {
      return '全屏';
    },
    formatAllRows: function formatAllRows() {
      return '所有';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return '自动刷新';
    },
    formatExport: function formatExport() {
      return '导出数据';
    },
    formatJumpTo: function formatJumpTo() {
      return '跳转';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return '高级搜索';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return '关闭';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

  /**
   * Bootstrap Table Chinese translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */

  $.fn.bootstrapTable.locales['zh-TW'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return '正在努力地載入資料，請稍候';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\u6BCF\u9801\u986F\u793A " + pageNumber + " \u9805\u8A18\u9304";
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u986F\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 " + totalRows + " \u9805\u8A18\u9304\uFF08\u5F9E " + totalNotFiltered + " \u7E3D\u8A18\u9304\u4E2D\u904E\u6FFE\uFF09";
      }

      return "\u986F\u793A\u7B2C " + pageFrom + " \u5230\u7B2C " + pageTo + " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 " + totalRows + " \u9805\u8A18\u9304";
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return '上一頁';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u7B2C" + page + "\u9801";
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return '下一頁';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u7E3D\u5171 " + totalRows + " \u9805\u8A18\u9304";
    },
    formatClearSearch: function formatClearSearch() {
      return '清空過濾';
    },
    formatSearch: function formatSearch() {
      return '搜尋';
    },
    formatNoMatches: function formatNoMatches() {
      return '沒有找到符合的結果';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return '隱藏/顯示分頁';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return '顯示分頁';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return '隱藏分頁';
    },
    formatRefresh: function formatRefresh() {
      return '重新整理';
    },
    formatToggle: function formatToggle() {
      return '切換';
    },
    formatToggleOn: function formatToggleOn() {
      return '顯示卡片視圖';
    },
    formatToggleOff: function formatToggleOff() {
      return '隱藏卡片視圖';
    },
    formatColumns: function formatColumns() {
      return '列';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return '切換所有';
    },
    formatFullscreen: function formatFullscreen() {
      return '全屏';
    },
    formatAllRows: function formatAllRows() {
      return '所有';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return '自動刷新';
    },
    formatExport: function formatExport() {
      return '導出數據';
    },
    formatJumpTo: function formatJumpTo() {
      return '跳轉';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return '高級搜尋';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return '關閉';
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);

}));
