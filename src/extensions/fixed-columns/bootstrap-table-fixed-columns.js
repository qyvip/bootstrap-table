/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 *
 * @author M.J. <michael@qyvip.com>
 *
 * 修改增加左右定位
 */

$.extend($.fn.bootstrapTable.defaults, {
  leftFixedColumns: false,
  leftFixedNumber: 1,
  rightFixedColumns: false,
  rightFixedNumber: 1
})

$.BootstrapTable = class extends $.BootstrapTable {

  fitHeader (...args) {
    super.fitHeader(...args)

    console.log('fitHeader')
    if (!this.options.leftFixedColumns && !this.options.rightFixedColumns) {
      return
    }

    if (this.$el.is(':hidden')) {
      return
    }

    this.initFixedColumns()

    this.initFixedColumnsHeader()

    this.initFixedColumnsBody()
  }

  initBody (...args) {
    super.initBody(...args)

    console.log('initBody', this.options, !this.options.leftFixedColumns && !this.options.rightFixedColumns)
    if (!this.options.leftFixedColumns && !this.options.rightFixedColumns) {
      return
    }

    if (this.options.showHeader && this.options.height) {
      return
    }


  }

  initFixedColumns () {
    console.log('initFixedColumns')
    this.timeoutHeaderColumns_ = 0
    this.timeoutBodyColumns_ = 0
    this.$container.find('.fixed-table-header-columns').remove()
    this.$container.find('.fixed-table-body-columns').remove()
    if (this.options.leftFixedColumns) {
      // var leftWidth = this.getLeftFixedColumnsWidth()
      this.$leftFixedHeader = $([
        '<div class="fixed-table-header-columns fixed-table-header-columns-left">',
        '<table>',
        '<thead></thead>',
        '</table>',
        '</div>'].join(''))
      this.$leftFixedHeader.find('table').attr('class', this.$el.attr('class'))
      this.$leftFixedHeaderColumns = this.$leftFixedHeader.find('thead')

      this.$tableHeader.after(this.$leftFixedHeader)


      const leftWidth = this.getLeftFixedColumnsWidth()

      this.$leftFixedHeader.css({
        top: 0,
        width: leftWidth,
        height: this.$tableHeader.outerHeight(true)
      })


      this.$leftFixedBody = $([
        '<div class="fixed-table-body-columns fixed-table-body-columns-left">',
        '<table>',
        '<tbody></tbody>',
        '</table>',
        '</div>'].join(''))

      this.$leftFixedBody.find('table').attr('class', this.$el.attr('class'))
      this.$leftFixedBodyColumns = this.$leftFixedBody.find('tbody')
      this.$tableBody.after(this.$leftFixedBody)

      this.$leftFixedBody.css({
        top: this.$tableHeader.outerHeight(true),
        width: leftWidth,
        height: this.$tableBody.outerHeight(true) - 1
      })
    }
    if (this.options.rightFixedColumns) {
      // var rightWidth = this.getRightFixedColumnsWidth()
      this.$rightFixedHeader = $([
        '<div class="fixed-table-header-columns fixed-table-header-columns-right" style="z-index:100;background:#fff;">',
        '<table>',
        '<thead></thead>',
        '</table>',
        '</div>'].join(''))

      this.$rightFixedHeader.find('table').attr('class', this.$el.attr('class'))
      this.$rightFixedHeaderColumns = this.$rightFixedHeader.find('thead')
      this.$tableHeader.after(this.$rightFixedHeader)

      const rightWidth = this.getRightFixedColumnsWidth()

      this.$rightFixedHeader.css({
        top: 0,
        right: '14px',
        width: rightWidth,
        height: this.$tableHeader.outerHeight(true)
      })


      this.$rightFixedBody = $([
        '<div class="fixed-table-body-columns fixed-table-body-columns-right" style="z-index:100;background:#fff;">',
        '<table>',
        '<tbody></tbody>',
        '</table>',
        '</div>'].join(''))

      this.$rightFixedBody.find('table').attr('class', this.$el.attr('class'))
      this.$rightFixedBodyColumns = this.$rightFixedBody.find('tbody')
      this.$tableBody.after(this.$rightFixedBody)

      this.$rightFixedBody.css({
        top: this.$tableHeader.outerHeight(true),
        right: '14px',
        width: rightWidth,
        height: this.$tableBody.outerHeight(true) - 1
      })

    }
  }


  initFixedColumnsHeader () {
    console.log('initFixedColumnsHeader', this.$header, this.$tableHeader)
    var $tr = this.$header.find('tr:eq(0)').clone()
    var $ths = $tr.clone().find('th')

    // $tr.html('');
    // 左边列冻结
    if (this.options.leftFixedColumns) {
      var $newtr = $('<tr></tr>')
      $newtr.attr('data-index', $tr.attr('data-index'))
      $newtr.attr('data-uniqueid', $tr.attr('data-uniqueid'))

      for (var i = 0; i < this.options.leftFixedNumber; i++) {
        $newtr.append($ths.eq(i).clone())
      }
      this.$leftFixedHeaderColumns.html('').append($newtr)
    }
    // $tr.html('');
    // 右边列冻结
    if (this.options.rightFixedColumns) {
      var $newtr2 = $('<tr></tr>')
      $newtr2.attr('data-index', $tr.attr('data-index'))
      $newtr2.attr('data-uniqueid', $tr.attr('data-uniqueid'))
      for (var j = 0; j < this.options.rightFixedNumber; j++) {
        $newtr2.append($ths.eq($ths.length - this.options.rightFixedNumber + j).clone())
      }
      this.$rightFixedHeaderColumns.html('').append($newtr2)
    }
  }

  initFixedColumnsBody () {
    const that = this
    console.log('initFixedColumnsBody')

    this.$table = this.$tableBody.find('>table')

    /**
     * 左侧固定列
     */

    if (this.options.leftFixedColumns) {
      // console.log('leftFixedColumnsBody', this.$table.find('tr[data-index]'))
      this.$table.find('tr[data-index]').each(function () {
        var $tr = $(this).clone()
        var $tds = $tr.clone().find('td')

        $tr.html('')
        for (var i = 0; i < that.options.leftFixedNumber; i++) {
          // console.log('leftFixedColumnsBody-tds', i, that.options.leftFixedNumber, $tds, $tds.eq(i))
          $tr.append($tds.eq(i).clone())
        }
        that.$leftFixedBodyColumns.append($tr)
      })
      this.initFixedColumnsEvents(that.$leftFixedBody)
    }

    /**
     * 右侧固定列
     */

    if (this.options.rightFixedColumns) {
      this.$table.find('tr[data-index]').each(function () {
        var $tr = $(this).clone()
        var $tds = $tr.clone().find('td')
        $tr.html('')
        for (var i = 0; i < that.options.rightFixedNumber; i++) {
          var indexTd = $tds.length - that.options.rightFixedNumber + i
          var oldTd = $tds.eq(indexTd)
          var fixTd = oldTd.clone()
          $tr.append(fixTd)
        }
        that.$rightFixedBodyColumns.append($tr)
      })
      this.initFixedColumnsEvents(that.$rightFixedBody)
    }
  }

  getLeftFixedColumnsWidth () {
    console.log('getLeftFixedColumnsWidth')
    const visibleFields = this.getVisibleFields()
    let width = 0

    for (let i = 0; i < this.options.leftFixedNumber; i++) {
      width += this.$header.find(`th[data-field="${visibleFields[i]}"]`).outerWidth(true)
    }

    return width + 1
  }

  getRightFixedColumnsWidth () {
    const visibleFields = this.getVisibleFields()
    let width = 0
    const visibleFieldsLength = visibleFields.length - 1
    for (let i = 0; i < this.options.rightFixedNumber; i++) {

      width += this.$header.find(`th[data-field="${visibleFields[visibleFieldsLength - i]}"]`).outerWidth(true)
      console.log('getRightFixedColumnsWidth', visibleFieldsLength - i, visibleFields[visibleFieldsLength - i], width)
    }

    return width + 1
  }


  initFixedColumnsEvents ($el) {
    // events
    //   this.$tableBody.off('scroll.fixed-columns').on('scroll.fixed-columns', e => {
    //     $el.find('table').css('top', -$(e.currentTarget).scrollTop())
    //   })

    //   this.$body.find('> tr[data-index]').off('hover').hover(e => {
    //     const index = $(e.currentTarget).data('index')
    //     $el.find(`tr[data-index="${index}"]`)
    //       .css('background-color', $(e.currentTarget).css('background-color'))
    //   }, e => {
    //     const index = $(e.currentTarget).data('index')
    //     const $tr = $el.find(`tr[data-index="${index}"]`)
    //     $tr.attr('style', $tr.attr('style').replace(/background-color:.*;/, ''))
    //   })

    //   $el.find('tr[data-index]').off('hover').hover(e => {
    //     const index = $(e.currentTarget).data('index')
    //     this.$body.find(`tr[data-index="${index}"]`)
    //       .css('background-color', $(e.currentTarget).css('background-color'))
    //   }, e => {
    //     const index = $(e.currentTarget).data('index')
    //     const $tr = this.$body.find(`> tr[data-index="${index}"]`)
    //     $tr.attr('style', $tr.attr('style').replace(/background-color:.*;/, ''))
    //   })
    // }
  }

}

// resetView(...args) {
//   super.resetView(...args)
//   // if (!this.options.leftFixedColumns && !this.options.rightFixedColumns) {
//   //   return
//   // }

//   // clearTimeout(this.timeoutHeaderColumns_)
//   // this.timeoutHeaderColumns_ = setTimeout($.proxy(this.resetViewHeaderColumns, this), this.$el.is(':hidden') ? 100 : 0)

//   // clearTimeout(this.timeoutBodyColumns_)
//   // this.timeoutBodyColumns_ = setTimeout($.proxy(this.resetViewBodyColumns, this), this.$el.is(':hidden') ? 100 : 0)
// }

// resetViewHeaderColumns() {
//   var that = this
//   var visibleFields = this.getVisibleFields()
//   var headerWidth = 0
//   if (that.options.leftFixedColumns) {
//     this.$body.find('tr:first-child:not(.no-records-found) > *').each(function (i) {
//       var $this = $(this)
//       var index = i

//       if (i >= that.options.leftFixedNumber) {
//         return false
//       }

//       if (that.options.detailView && !that.options.cardView) {
//         index = i - 1
//       }

//       that.$leftFixedHeader.find('thead th[data-field="' + visibleFields[index] + '"]')
//         .find('.fht-cell').width($this.outerWidth() - 1)
//       headerWidth += $this.outerWidth() + 1
//     })

//     this.$leftFixedHeader.css({
//       top: 0,
//       width: headerWidth,
//       height: this.$tableHeader.outerHeight(true)
//     }).show()
//   }
//   if (that.options.rightFixedColumns) {
//     this.$body.find('tr:first-child:not(.no-records-found) > *').each(function (i) {
//       var $this = $(this)
//       var index = i

//       if (i >= visibleFields.length - that.options.rightFixedNumber) {
//         that.$rightFixedHeader.find('thead th[data-field="' + visibleFields[index] + '"]')
//           .find('.fht-cell').width($this.outerWidth() - 1)
//         headerWidth += $this.outerWidth() + 1
//       }
//     })
//     this.$rightFixedHeader.css({
//       top: 0,
//       right: '14px',
//       width: headerWidth,
//       height: this.$tableHeader.outerHeight(true)
//     }).show()
//   }
// }

// resetViewBodyColumns() {
//   var that = this
//   var top = this.$tableHeader.outerHeight(true)
//   var height = this.$tableBody.outerHeight(true)

//   if (that.options.leftFixedColumns) {
//     if (!this.$body.find('> tr[data-index]').length) {
//       this.$leftFixedBody.hide()
//       return
//     }
//     if (!this.options.height) {
//       top = this.$leftFixedHeader.height()
//       height -= top
//     }

//     this.$leftFixedBody.css({
//       top: top,
//       width: this.$leftFixedHeader.width(),
//       height: height
//     }).show()


//     // this.$body.find('> tr').each(function (i) {
//     //   that.$leftFixedBody.find('tbody tr:eq(' + i + ')').height($(this).height())
//     // })
//     // // events
//     this.initFixedColumnsEvents(that.$leftFixedBody)

//   }
//   if (that.options.rightFixedColumns) {
//     if (!this.$body.find('> tr[data-index]').length) {
//       this.$rightFixedBody.hide()
//       return
//     }
//     if (!this.options.height) {
//       top = this.$rightFixedHeader.height()
//       height -= top
//     }

//     this.$rightFixedBody.css({
//       top: top,
//       right: '14px',
//       width: this.$rightFixedHeader.width(),
//       height: height - 13
//     }).show()


//     // this.$body.find('> tr').each(function (i) {
//     //   that.$rightFixedBody.find('tbody tr:eq(' + i + ')').height($(this).height())
//     // })

//     // // events
//     this.initFixedColumnsEvents(that.$rightFixedBody)
//   }
// }
