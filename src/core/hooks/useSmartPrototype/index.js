import moment from 'moment'
import React from 'react'

const useSmartPrototype = () => {
  const onImplement = React.useCallback(() => {
    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1)
    }
    String.prototype.utcToLocalDate = function (
      format = 'YYYY-MM-DD HH:mm:ss'
    ) {
      try {
        return moment
          .utc(this, 'YYYY-MM-DD HH:mm:ss UTC')
          .local()
          .format(format)
          .toString()
      } catch (e) {
        return null
      }
    }
    String.prototype.toDate = function () {
      try {
        return moment
          .utc(this, 'YYYY-MM-DD HH:mm:ss UTC')
          .local()
          .format('DD/MM/YYYY')
          .toString()
      } catch (e) {
        return null
      }
    }

    String.prototype.timeAgo = function (lang = 'vi') {
      try {
        return moment(this.utcToLocalDate()).locale(lang).fromNow()
      } catch (e) {
        return ''
      }
    }
    String.prototype.toDateTime = function () {
      try {
        return moment
          .utc(this || moment(), 'YYYY-MM-DD HH:mm:ss UTC')
          .local()
          .format('hh:mm DD/MM/YYYY')
          .toString()
      } catch (e) {
        return null
      }
    }

    String.prototype.isDate = function () {
      return !isNaN(Date.parse(this.toString().replaceAll(' UTC', '').trim()))
    }
    String.prototype.isAfter = function (
      date2 = moment().local().format('DD/MM/YYYY'),
      format = 'DD/MM/YYYY'
    ) {
      try {
        if (format == 'DD/MM/YYYY')
          return (
            moment(this)
              .format(format)
              .toString()
              .split('/')
              .reverse()
              .join('') >= date2.toString().split('/').reverse().join('')
          )
        return moment(this).format(format).isAfter(moment(date2).format(format))
      } catch (e) {
        return false
      }
    }
  }, [])

  React.useEffect(onImplement, [])
}

export default useSmartPrototype
