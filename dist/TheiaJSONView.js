/**
 * Theia JSON View
 * @author: Chris Rowley <clubsidedev@hotmail.com>
 * @link: https://github.com/clubside/TheiaJSONView
 *
 + Part of Project Prometheus
 *
 * All functionality is bundled this one include.
 * Written in strict mode and following JavaScript Standard Style.
 * Non-user-facing routines preceded by underscore.
 *
 */
'use strict'
class TheiaJSONView {
  /**
   * Returns needed SVG assets
   *
   * Note: Original version built using createElement would
   * not render the SVG with the use element forcing a switch to
   * this string.
   *
   */
  _addSVG () {
    return '\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="tjv_svg">\n\t\t\t\t\t\t\t<symbol id="minus-square" viewBox="0 0 448 512">\n\t\t\t\t\t\t\t\t\t<path fill="currentColor" d="M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>\n\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t<symbol id="plus-square" viewBox="0 0 448 512">\n\t\t\t\t\t\t\t\t\t<path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>\n\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t<symbol id="expand-solid" viewBox="0 0 448 512">\n\t\t\t\t\t\t\t\t\t<path fill="currentColor" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path>\n\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t<symbol id="paste-solid" viewBox="0 0 448 512">\n\t\t\t\t\t\t\t\t\t<path fill="currentColor" d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>\n\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t<symbol id="minus-solid" viewBox="0 0 448 512">\n\t\t\t\t\t\t\t\t\t<path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>\n\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t<symbol id="plus-solid" viewBox="0 0 448 512">\n\t\t\t\t\t\t\t\t\t<path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>\n\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t<symbol id="copy-solid" viewBox="0 0 448 512">\n\t\t\t\t\t\t\t\t\t<path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>\n\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t</svg>\n'
  }

  /**
   * Returns base CSS assets
   *
   * Note: This could be implemented with a standard CSS include
   * by moving the font settings into variables.
   *
   */
  _stringCSS () {
    return '\t\t\t:root {\n\t\t\t\t--tjv_toolbar: 11,37,69;\n\t\t\t\t--tjv_toolbuttonback: 11,37,69;\n\t\t\t\t--tjv_toolbuttonfore: 238,244,237;\n\t\t\t\t--tjv_toolbuttonhoverback: 141,169,196;\n\t\t\t\t--tjv_toolbuttonhoverfore: 19,49,92;\n\t\t\t}\n\t\t\t.tjv_container {\n\t\t\t\tposition: relative;\n\t\t\t\theight: inherit;\n\t\t\t\twidth: inherit;\n\t\t\t\tdisplay: grid;\n\t\t\t\tgrid-template-rows: auto 1fr;\n\t\t\t\tbackground-color: rgba(var(--tjv_background), 1);\n\t\t\t}\n\n\t\t\t.tjv_float {\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 2rem;\n\t\t\t\tbottom: 1rem;\n\t\t\t\theight: 1.5rem;\n\t\t\t\twidth: 6rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\tz-index: 999;\n\t\t\t}\n\t\t\t.tjv_float button {\n\t\t\t\theight: 1.5rem;\n\t\t\t\twidth: 1.5rem;\n\t\t\t\tbackground: rgba(var(--tjv_toolbuttonback), 1);\n\t\t\t\tcolor: rgba(var(--tjv_toolbuttonfore), 1);\n\t\t\t\tborder: 0;\n\t\t\t\tpadding: .1rem;\n\t\t\t\tmargin: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.tjv_float button:hover,\n\t\t\t.tjv_float button:focus {\n\t\t\t\tbackground: rgba(var(--tjv_toolbuttonhoverback), 1);\n\t\t\t\tcolor: rgba(var(--tjv_toolbuttonhoverfore), 1);\n\t\t\t\toutline: none;\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t\t.tjv_float button svg {\n\t\t\t\theight: 1.3rem;\n\t\t\t\twidth: auto;\n\t\t\t\tshape-rendering: geometricprecision;\n\t\t\t}\n\n\t\t\t.tjv_toolbar {\n\t\t\t\theight: 1.5rem;\n\t\t\t\tdisplay: grid;\n\t\t\t\tgrid-template-columns: 1fr auto;\n\t\t\t\tbackground: rgba(var(--tjv_toolbar), 1);\n\t\t\t}\n\t\t\t.tjv_toolbar section {\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tbackground: transparent;\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.tjv_toolbar button {\n\t\t\t\theight: 1.5rem;\n\t\t\t\twidth: 1.5rem;\n\t\t\t\tbackground: rgba(var(--tjv_toolbuttonback), 1);\n\t\t\t\tcolor: rgba(var(--tjv_toolbuttonfore), 1);\n\t\t\t\tborder: 0;\n\t\t\t\tpadding: .1rem;\n\t\t\t\tmargin: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.tjv_toolbar button:hover,\n\t\t\t.tjv_toolbar button:focus {\n\t\t\t\tbackground: rgba(var(--tjv_toolbuttonhoverback), 1);\n\t\t\t\tcolor: rgba(var(--tjv_toolbuttonhoverfore), 1);\n\t\t\t\toutline: none;\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t\t.tjv_toolbar button svg {\n\t\t\t\theight: 1.3rem;\n\t\t\t\twidth: auto;\n\t\t\t\tshape-rendering: geometricprecision;\n\t\t\t}\n\t\t\t.tjv_host {\n\t\t\t\tbackground-color: rgba(var(--tjv_background), 1);\n\t\t\t\toverflow: auto;\n\t\t\t}\n\t\t\t.tjv * {\n\t\t\t\ttext-align: left;\n\t\t\t\tbackground: transparent;\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t.tjv div {\n\t\t\t\tmargin-left: 1.5rem;\n\t\t\t}\n\t\t\t.tjv header {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.tjv section {\n\t\t\t\tdisplay: grid;\n\t\t\t\tgrid-template-columns: auto 1fr;\n\t\t\t\tgrid-gap: 0;\n\t\t\t\tbackground: transparent;\n\t\t\t}\n\t\t\t.tjv div.tjv_block {\n\t\t\t\tmargin-left: 0;\n\t\t\t}\n\t\t\t.tjv section.tjv_block {\n\t\t\t\tmargin-left: -1.5rem;\n\t\t\t}\n\t\t\t.tjv_button {\n\t\t\t\tcursor: pointer;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tborder-color: transparent;\n\t\t\t\tpadding: .1em;\n\t\t\t\tborder-width: 0;\n\t\t\t\tcolor: rgba(var(--tjv_button), 1);\n\t\t\t\theight: 1em;\n\t\t\t\twidth: 1em;\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tuser-select: none;\n\t\t\t}\n\t\t\t.tjv_button svg {\n\t\t\t\theight: .8em;\n\t\t\t\twidth: .8em;\n\t\t\t\tshape-rendering: geometricprecision;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.tjv_string {\n\t\t\t\tcolor: rgba(var(--tjv_string), 1);\n\t\t\t\twhite-space: pre;\n\t\t\t\tword-wrap: break-word;\n\t\t\t}\n\t\t\t.tjv_number {\n\t\t\t\tcolor: rgba(var(--tjv_number), 1);\n\t\t\t}\n\t\t\t.tjv_boolean {\n\t\t\t\tcolor: rgba(var(--tjv_boolean), 1);\n\t\t\t}\n\t\t\t.tjv_string img {\n\t\t\t\tmax-width: 100%;\n\t\t\t}\n\t\t\t.tjv_null {\n\t\t\t\tcolor: rgba(var(--tjv_null), 1);\n\t\t\t}\n\t\t\t.tjv_undefined {\n\t\t\t\tcolor: rgba(var(--tjv_undefined), 1);\n\t\t\t}\n\t\t\t.tjv_function {\n\t\t\t\tcolor: rgba(var(--tjv_function), 1);\n\t\t\t}\n\t\t\t.tjv_date {\n\t\t\t\tcolor: rgba(var(--tjv_date), 1);\n\t\t\t}\n\t\t\t.tjv_url {\n\t\t\t\ttext-decoration: underline;\n\t\t\t\tcolor: rgba(var(--tjv_url), 1);\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.tjv_url a,\n\t\t\t.tjv_url a:hover {\n\t\t\t\tcolor: inherit;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t.tjv_bracket {\n\t\t\t\tcolor: rgba(var(--tjv_bracket), 1);\n\t\t\t\tmargin-right: .1em;\n\t\t\t}\n\t\t\t.tjv_key {\n\t\t\t\tcolor: rgba(var(--tjv_key), 1);\n\t\t\t\tpadding-right: 0.25rem;\n\t\t\t}\n\t\t\t.tjv_string, .tjv_function, .tjv_url {\n\t\t\t\twhite-space: pre-wrap;\n\t\t\t\tword-break: break-word;\n\t\t\t}\n\t\t\t.tjv_hidden {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t#tjv_svg {\n\t\t\t\tdisplay: none;\n\t\t\t}\n'
  }

  /**
   * Returns theme CSS assets
   *
   * New Themes are easy to create as they take advantage of CSS
   * variables. There is a background and foreground, a brace,
   * a button, a key and then one for each datatype.
   *
   */
  _stringTheme () {
    let themeColors
    var themeMain = '\t.tjv {\n\t\tfont-family: ' + this._fontfamily + ';\n\t\tfont-size: ' + this._fontsize + ';\n\t\tline-height: 1.5;\n\t\tcolor: rgba(var(--tjv_foreground), 1);\n\t\tbackground-color: rgba(var(--tjv_background), 1);\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tmin-width: 40rem;\n\t\tmin-height: 100%;\n\t\tposition: relative;\n\t\ttext-align: left;\n\t}\n'
    switch (this._theme) {
      case 'light':
        themeColors = ':root {\n\t--tjv_foreground: 0, 0, 0;\n\t--tjv_background: 255, 255, 255;\n\t--tjv_button: 41, 128, 185;\n\t--tjv_string: 0, 128, 0;\n\t--tjv_number: 255, 140, 0;\n\t--tjv_boolean: 255, 0, 0;\n\t--tjv_date: 0, 167, 255;\n\t--tjv_null: 133, 90, 0;\n\t--tjv_undefined: 202, 11, 105;\n\t--tjv_function: 255, 32, 237;\n\t--tjv_url: 0, 0, 255;\n\t--tjv_bracket: 0, 0, 255;\n\t--tjv_key: 0, 0, 139;\n}\n'
        break
      case 'dark':
        themeColors = ':root {\n\t--tjv_foreground: 255, 255, 255;\n\t--tjv_background: 0, 0, 0;\n\t--tjv_button: 197, 197, 197;\n\t--tjv_string: 49, 240, 49;\n\t--tjv_number: 102, 194, 255;\n\t--tjv_boolean: 236, 66, 66;\n\t--tjv_null: 238, 201, 125;\n\t--tjv_date: 78, 154, 255;\n\t--tjv_undefined: 239, 143, 190;\n\t--tjv_function: 253, 72, 203;\n\t--tjv_url: 2, 123, 255;\n\t--tjv_bracket: 148, 148, 255;\n\t--tjv_key: 35, 160, 219;\n}\n'
        break
      case 'material':
        themeColors = ':root {\n\t--tjv_foreground: 238, 255, 255;\n\t--tjv_background: 38, 50, 56;--tjv_button: 197, 197, 197;\n\t\n\t--tjv_string: 195, 232, 141;\n\t--tjv_number: 247, 140, 108;\n\t--tjv_boolean: 247, 140, 108;\n\t--tjv_null: 247, 140, 108;\n\t--tjv_date: 0, 167, 255;\n\t--tjv_undefined: 247, 140, 108;\n\t--tjv_function: 199, 146, 234;\n\t--tjv_url: 195, 232, 141;\n\t--tjv_bracket: 137, 221, 255;\n\t--tjv_key: 238, 255, 255;\n}\n'
        break
      default:
        themeColors = ':root {\n\t--tjv_foreground: 202, 240, 248;\n\t--tjv_background: 19,49,92;\n\t--tjv_button: 197, 197, 197;\n\t--tjv_string: 49, 240, 49;\n\t--tjv_number: 102, 194, 255;\n\t--tjv_boolean: 236, 66, 66;\n\t--tjv_null: 238, 201, 125;\n\t--tjv_date: 78, 154, 255;\n\t--tjv_undefined: 239, 143, 190;\n\t--tjv_function: 253, 72, 203;\n\t--tjv_url: 2, 123, 255;\n\t--tjv_bracket: 148, 148, 255;\n\t--tjv_key: 35, 160, 219;\n}\n'
    }
    return themeColors + themeMain
  }

  /**
   * Add Stylesheet
   *
   * Attach component and Theme CSS to document head, removing previous
   * versions if they exist.
   *
   */
  _addStyle () {
    let cssStyle
    cssStyle = document.getElementById('tjv_css')
    if (cssStyle) {
      cssStyle.remove()
    }
    cssStyle = document.getElementById('tjv_theme')
    if (cssStyle) {
      cssStyle.remove()
    }
    cssStyle = document.createElement('style')
    cssStyle.setAttribute('id', 'tjv_css')
    cssStyle.setAttribute('media', 'screen')
    cssStyle.innerHTML = this._stringCSS()
    document.head.appendChild(cssStyle)
    cssStyle = document.createElement('style')
    cssStyle.setAttribute('id', 'tjv_theme')
    cssStyle.setAttribute('media', 'screen')
    cssStyle.innerHTML = this._stringTheme()
    document.head.appendChild(cssStyle)
  }

  /**
   * Change Theme
   *
   * Remove existing Theme CSS and replace it with new
   * values. Changes the look of output without re-walking
   * the JSON tree.
   *
   */
  _changeTheme () {
    let cssStyle
    cssStyle = document.getElementById('tjv_theme')
    if (cssStyle) {
      cssStyle.remove()
    }
    cssStyle = document.createElement('style')
    cssStyle.setAttribute('id', 'tjv_theme')
    cssStyle.setAttribute('media', 'screen')
    cssStyle.innerHTML = this._stringTheme()
    document.head.appendChild(cssStyle)
  }

  /**
   * Update View
   *
   * When the View has already been rendered this routine
   * will update the contents without reattaching styles.
   *
   */
  _update () {
    var divRoot = document.getElementById('tjv_container').parentNode
    divRoot.innerHTML = ''
    switch (this._rendered) {
      case 'debug':
        this.debug(divRoot.id)
        break
      case 'plain':
        this.plain(divRoot.id)
        break
      default:
        this.html(divRoot.id)
    }
  }

  /**
   * Block Key/Value Pair Generator
   *
   * Return HTML element with styled spans representing passed
   * key/value pair.
   *
   */
  _blockKeyValue (blockType, blockKey, blockValueType, blockValue) {
    var outElement = document.createElement(blockType)
    var spanKey = document.createElement('span')
    spanKey.classList.add('tjv_key')
    spanKey.innerHTML = blockKey + ':'
    outElement.appendChild(spanKey)
    var spanValue = document.createElement('span')
    spanValue.classList.add('tjv_' + blockValueType)
    spanValue.innerHTML = blockValue
    outElement.appendChild(spanValue)
    return outElement
  }

  /**
   * Option Handlers
   *
   * To allow for quick usage options set at object
   * initialization do not throw errors instead just
   * returning defaults. These routines are also called
   * by the methods to handle empty settings to reset
   * to defaults.
   *
   */
  /**
   * Verify submitted JSON Setting
   *
   * If an object take as is otherwise attempt to parse
   * On error returns a string that will be displayed by either
   * output routine will display.
   *
   */
  _handleJSON (json) {
    if (typeof json === 'undefined') {
      return 'No JSON provided.'
    } else if (typeof json === 'object') {
      return json
    } else {
      try {
        return JSON.parse(json.toString())
      } catch (error) {
        return 'JSON parse error\ninput="' + json + '"\n' + error
      }
    }
  }

  /**
   * Verify submitted Theme Setting
   *
   * Looks for a non-empty string then verifies it is one of
   * the available themes. If not sets the 'default' theme.
   *
   */
  _handleTheme (theme) {
    if (typeof theme !== 'string') {
      return 'default'
    } else {
      if (['default', 'dark', 'light', 'material'].includes(theme)) {
        return theme
      } else {
        return 'default'
      }
    }
  }

  /**
   * Verify submitted Font Family Setting
   *
   * Looks for a non-empty string, otherwise uses default.
   *
   */
  _handleFontFamily (fontfamily) {
    if (typeof fontfamily !== 'string') {
      return '"Fira Code", "Roboto Mono", Consolas, "Courier New", monospace'
    } else if (fontfamily.trim() === '') {
      return '"Fira Code", "Roboto Mono", Consolas, "Courier New", monospace'
    } else {
      return fontfamily + ', monospace'
    }
  }

  /**
   * Verify submitted Font Size Setting
   *
   * Looks for a non-empty string, otherwise uses default.
   *
   */
  _handleFontSize (fontsize) {
    if (typeof fontsize !== 'string') {
      return '1rem'
    } else if (fontsize.trim() === '') {
      return '1rem'
    } else {
      return fontsize
    }
  }

  /**
   * Verify submitted Allow Collapse Setting
   *
   * Looks for a boolean, otherwise uses default.
   *
   */
  _handleAllowCollapse (allowcollapse) {
    if (typeof allowcollapse !== 'boolean') {
      return true
    } else {
      return allowcollapse
    }
  }

  /**
   * Verify submitted Auto Collapse Setting
   *
   * Looks for a non-negative number, otherwise uses default.
   *
   */
  _handleAutoCollapse (autocollapse) {
    if (typeof autocollapse !== 'number') {
      return 0
    } else if (autocollapse < 0) {
      return 0
    } else {
      return autocollapse
    }
  }

  /**
   * Verify submitted Roll-ups Setting
   *
   * Looks for a boolean, otherwise uses default.
   *
   */
  _handleRollUps (rollups) {
    if (typeof rollups !== 'boolean') {
      return false
    } else {
      return rollups
    }
  }

  /**
   * Verify submitted Roll-ups Setting
   *
   * Looks for a boolean, otherwise uses default.
   *
   */
  _handleItemCounts (itemcounts) {
    if (typeof itemcounts !== 'boolean') {
      return false
    } else {
      return itemcounts
    }
  }

  /**
   * Verify submitted Roll-ups Setting
   *
   * Looks for a boolean, otherwise uses default.
   *
   */
  _handleItemNumbers (itemnumbers) {
    if (typeof itemnumbers !== 'boolean') {
      return false
    } else {
      return itemnumbers
    }
  }

  /**
   * Public Options Methods
   *
   * Options can be set using the constructor or individually
   *
   */
  get json () {
    return this._json
  }

  /**
   * Set JSON
   *
   * Throw error if provided data is not an object and cannot
   * be parsed. If the view has already been rendered the new
   * JSON is walked and the view replaced. Unlike other property
   * changes no check for an actual change is made due to the
   * potential size of the JSON and the implicit desire to
   * render a new value.
   *
   */
  set json (json) {
    if (typeof json === 'undefined') {
      throw new Error('no json provided')
    } else if (typeof json !== 'object') {
      try {
        JSON.parse(json.toString())
      } catch (error) {
        throw new Error('json string could not be parsed: ' + error)
      }
    }
    this._json = this._handleJSON(json)
    if (this._rendered !== '') {
      this._update()
    }
  }

  get theme () {
    return this._theme
  }

  /**
   * Set Theme
   *
   * Throw error if provided data is not a string or not
   * one of the defined themes. If Theme has changed update CSS.
   *
   */
  set theme (theme) {
    if (typeof theme !== 'string') {
      throw new Error('theme must be a string')
    } else if (!['default', 'light', 'dark', 'material'].includes(theme)) {
      throw new Error('invalid theme')
    }
    var newTheme = this._handleTheme(theme)
    if (newTheme !== this._theme) {
      this._theme = newTheme
      if (this._rendered !== '') {
        this._changeTheme()
      }
    }
  }

  get fontfamily () {
    return this._fontfamily
  }

  /**
   * Set Font Family
   *
   * Throw error if provided data is not a string or empty.
   * If Font Family has changed update CSS.
   *
   */
  set fontfamily (fontfamily) {
    if (typeof fontfamily !== 'string') {
      throw new Error('fontfamily must be a string')
    } else if (fontfamily.trim() === '') {
      throw new Error('fontfamily cannot be empty')
    }
    var newFontFamily = this._handleFontFamily(fontfamily)
    if (newFontFamily !== this._fontfamily) {
      this._fontfamily = newFontFamily
      if (this._rendered !== '') {
        this._changeTheme()
      }
    }
  }

  get fontsize () {
    return this._fontsize
  }

  /**
   * Set Font Size
   *
   * Throw error if provided data is not a string or empty.
   * In the future may try to build a regex to validate.
   * If Font Size has changed update CSS.
   *
   */
  set fontsize (fontsize) {
    if (typeof fontsize !== 'string') {
      throw new Error('fontsize must be a string')
    } else if (fontsize.trim() === '') {
      throw new Error('fontsize cannot be empty')
    }
    var newFontSize = this._handleFontSize(fontsize)
    if (newFontSize !== this._fontsize) {
      this._fontsize = newFontSize
      if (this._rendered !== '') {
        this._changeTheme()
      }
    }
  }

  get allowcollapse () {
    return this._allowcollapse
  }

  /**
   * Set Allow Collapse
   *
   * Throw error if provided data is not a boolean.
   *
   */
  set allowcollapse (allowcollapse) {
    if (typeof allowcollapse !== 'boolean') {
      throw new Error('allowcollapse requires a boolean value')
    }
    this._allowcollapse = this._handleAllowCollapse(allowcollapse)
    if (this._rendered !== '') {
      this._update()
    }
  }

  get autocollapse () {
    return this._autocollapse
  }

  /**
   * Set Auto-Collapse
   *
   * Throw error if provided data is not a number or is negative.
   *
   */
  set autocollapse (autocollapse) {
    if (typeof autocollapse !== 'number') {
      throw new Error('autocollapse must be a number')
    } else if (autocollapse < 0) {
      throw new Error('autocollapse cannot be a negative')
    }
    this._autocollapse = this._handleAutoCollapse(autocollapse)
    if (this._rendered !== '') {
      this._update()
    }
  }

  get rollups () {
    return this._rollups
  }

  /**
   * Set Roll-ups
   *
   * Throw error if provided data is not a boolean.
   *
   */
  set rollups (rollups) {
    if (typeof rollups !== 'boolean') {
      throw new Error('rollups requires a boolean value')
    }
    this._rollups = this._handleRollUps(rollups)
    if (this._rendered !== '') {
      this._update()
    }
  }

  get itemcounts () {
    return this._itemcounts
  }

  /**
   * Set Roll-ups
   *
   * Throw error if provided data is not a boolean.
   *
   */
  set itemcounts (itemcounts) {
    if (typeof itemcounts !== 'boolean') {
      throw new Error('itemcounts requires a boolean value')
    }
    this._itemcounts = this._handleItemCounts(itemcounts)
    if (this._rendered !== '') {
      this._update()
    }
  }

  get itemnumbers () {
    return this._itemnumbers
  }

  /**
   * Set Roll-ups
   *
   * Throw error if provided data is not a boolean.
   *
   */
  set itemnumbers (itemnumbers) {
    if (typeof itemnumbers !== 'boolean') {
      throw new Error('itemnumbers requires a boolean value')
    }
    this._itemnumbers = this._handleItemNumbers(itemnumbers)
    if (this._rendered !== '') {
      this._update()
    }
  }

  /**
   * Constructor
   *
   * Sets starting values and needed properties. All necessary properties
   * to generate output can be set using an options object at initialization
   * without throwing errors.
   *
   *  _date: regex used to test if a string is actually a JSON-encoded date
   * _block: integer used through the html() method to control expand/collapse
   *
   */
  constructor (json, element, obj) {
    this._date = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/
    this._json = this._handleJSON(json)
    this._theme = 'default'
    this._fontfamily = '"Fira Code", "Roboto Mono", Consolas, "Courier New", monospace'
    this._fontsize = '1rem'
    this._allowcollapse = true
    this._autocollapse = 0
    this._rollups = false
    this._itemcounts = false
    this._itemnumbers = false
    this._block = 0
    this._rendered = ''
    let opts
    if (typeof element !== 'string' && element === 'object') {
      opts = element
    } else {
      opts = obj
    }
    if (typeof opts === 'object') {
      this._theme = this._handleTheme(opts.theme)
      this._fontfamily = this._handleFontFamily(opts.fontfamily)
      this._fontsize = this._handleFontSize(opts.fontsize)
      this._allowcollapse = this._handleAllowCollapse(opts.allowcollapse)
      this._autocollapse = this._handleAutoCollapse(opts.autocollapse)
      this._rollups = this._handleRollUps(opts.rollups)
      this._itemcounts = this._handleItemCounts(opts.itemcounts)
      this._itemnumbers = this._handleItemNumbers(opts.itemnumbers)
    }
    this._addStyle()
    if (typeof element === 'string') {
      this.html(element)
    }
  }

  /**
   * Public Output Methods
   *
   * HTML output based on the type of information requested.
   *
   */
  /**
   * Debug
   *
   * Outputs each of the module's settings using the same key/value
   * pair styling as the JSON walk routine.
   *
   */
  debug (obj) {
    var divRoot = document.createElement('div')
    divRoot.classList.add('tjv')
    divRoot.setAttribute('id', 'tjv')
    divRoot.appendChild(this._blockKeyValue('section', 'json', 'string', this._json))
    divRoot.appendChild(this._blockKeyValue('section', 'theme', 'string', this._theme))
    divRoot.appendChild(this._blockKeyValue('section', 'fontfamily', 'string', this._fontfamily))
    divRoot.appendChild(this._blockKeyValue('section', 'fontsize', 'string', this._fontsize))
    divRoot.appendChild(this._blockKeyValue('section', 'autocollapse', 'number', this._autocollapse))
    divRoot.appendChild(this._blockKeyValue('section', 'rollups', 'boolean', this._rollups))
    this._rendered = 'debug'
    var objOutput = document.getElementById(obj)
    objOutput.innerHTML = ''
    objOutput.appendChild(divRoot)
  }

  /**
   * Plain
   *
   * Outputs the raw JSON in a tree view without highlighting,
   * collapsing or other functionality.
   *
   */
  plain (obj) {
    var outPre = document.createElement('pre')
    outPre.classList.add('tjv')
    outPre.setAttribute('id', 'tjv')
    if (typeof this._json === 'string') {
      outPre.innerHTML = this._json
    } else {
      outPre.innerHTML = JSON.stringify(this._json, undefined, 4)
    }
    this._rendered = 'plain'
    var objOutput = document.getElementById(obj)
    objOutput.innerHTML = ''
    objOutput.appendChild(outPre)
  }

  /**
   * HTML
   *
   * Walks the JSON Object and styles the keys and values in
   * addition to providing expand/collapse functionality.
   *
   */
  html (obj) {
    if (typeof this._json === 'string') {
      return this.plain()
    }
    var divRoot = document.createElement('div')
    divRoot.classList.add('tjv')
    divRoot.setAttribute('id', 'tjv')
    divRoot.innerHTML = this._addSVG()
    this._block = 0
    this._walkJSON(divRoot, this._json, '', '', '', 1)
    this._rendered = 'html'

    let tjvButton

    var divContainer = document.createElement('div')
    divContainer.setAttribute('id', 'tjv_container')
    divContainer.classList.add('tjv_container')

    var divToolbar = document.createElement('div')
    divToolbar.setAttribute('id', 'tjv_float')
    divToolbar.classList.add('tjv_float')

    var divHost = document.createElement('div')
    divHost.setAttribute('id', 'tjv_host')
    divHost.classList.add('tjv_host')

    tjvButton = document.createElement('button')
    tjvButton.setAttribute('type', 'button')
    tjvButton.setAttribute('title', 'Copy JSON')
    tjvButton.innerHTML = '<svg><use xlink:href="#copy-solid"></use></svg>'
    tjvButton.addEventListener('click', function () {
      var v = document.getElementById('tjv_copy')
      var t = v.value
      if (navigator.clipboard) {
        navigator.clipboard.writeText(t)
      } else {
        v.focus()
        v.select()

        try {
          document.execCommand('copy')
        } catch (e) {
          console.error('Unable to copy', e)
        }
        this.focus()
      }
    })
    divToolbar.appendChild(tjvButton)
    tjvButton = document.createElement('button')
    tjvButton.setAttribute('type', 'button')
    tjvButton.setAttribute('title', 'Shrink View')
    tjvButton.innerHTML = '<svg><use xlink:href="#minus-solid"></use></svg>'
    tjvButton.addEventListener('click', function () {
      var tjvc = document.getElementById('tjv_container')
      try {
        if (tjvc.parentNode.offsetHeight >= 380) {
          tjvc.parentNode.style.height = (tjvc.parentNode.offsetHeight - 80) + 'px'
        }
      } catch (e) {
        console.log(e.message)
      }
    })
    divToolbar.appendChild(tjvButton)
    tjvButton = document.createElement('button')
    tjvButton.setAttribute('type', 'button')
    tjvButton.setAttribute('title', 'Grow View')
    tjvButton.innerHTML = '<svg><use xlink:href="#plus-solid"></use></svg>'
    tjvButton.addEventListener('click', function () {
      var tjvc = document.getElementById('tjv_container')
      try {
        tjvc.parentNode.style.height = (tjvc.parentNode.offsetHeight + 80) + 'px'
      } catch (e) {
        console.log(e.message)
      }
    })
    divToolbar.appendChild(tjvButton)
    tjvButton = document.createElement('button')
    tjvButton.setAttribute('type', 'button')
    tjvButton.setAttribute('title', 'Fullscreen')
    tjvButton.innerHTML = '<svg><use xlink:href="#expand-solid"></use></svg>'
    tjvButton.addEventListener('click', function () {
      var v = document.getElementById('tjv_host')
      var f = document.getElementById('tjv_float')
      if (v.requestFullScreen) {
        f.classList.add('tjv_hidden')
        v.requestFullscreen()
      } else if (v.mozRequestFullScreen) {
        f.classList.add('tjv_hidden')
        v.mozRequestFullScreen()
      } else if (v.webkitRequestFullscreen) {
        f.classList.add('tjv_hidden')
        v.webkitRequestFullscreen()
      }
    })
    divToolbar.appendChild(tjvButton)

    document.addEventListener('fullscreenchange', function () {
      if (document.fullscreenElement === null) {
        var f = document.getElementById('tjv_float')
        f.classList.remove('tjv_hidden')
      }
    }, false)
    document.addEventListener('mozfullscreenchange', function () {
      if (document.mozFullScreenElement === null) {
        var f = document.getElementById('tjv_float')
        f.classList.remove('tjv_hidden')
      }
    }, false)
    document.addEventListener('webkitfullscreenchange', function () {
      if (document.webkitFullscreenElement === null) {
        var f = document.getElementById('tjv_float')
        f.classList.remove('tjv_hidden')
      }
    }, false)

    var textArea = document.createElement('textarea')
    textArea.setAttribute('id', 'tjv_copy')
    textArea.classList.add('tjv_hidden')
    textArea.value = JSON.stringify(this._json)

    divHost.appendChild(textArea)
    divHost.appendChild(divToolbar)
    divHost.appendChild(divRoot)
    divContainer.appendChild(divHost)

    var objOutput = document.getElementById(obj)
    objOutput.innerHTML = ''
    objOutput.appendChild(divContainer)
  }

  _walkJSON (divParent, json, jsonkey, rollupkey, itemnum, level) {
    this._block++
    let spanIntro, divBlockControl, rollup
    var isArray = (Array.isArray(json))
    var rollupText = ''

    if (this._block === 1) {
      divBlockControl = document.createElement('header')
      divBlockControl.classList.add('tjv_block')
    } else {
      divBlockControl = document.createElement('header')
      if (jsonkey !== '') {
        spanIntro = document.createElement('span')
        spanIntro.classList.add('tjv_key')
        spanIntro.innerText = jsonkey
        divBlockControl.appendChild(spanIntro)
      }
    }
    if (jsonkey !== '') {
      rollupkey = jsonkey
    }

    var spanCollapseElement = document.createElement('span')
    spanCollapseElement.classList.add('tjv_bracket')
    if (this._rollups) {
      if (rollupkey.length > 0) {
        if (rollupkey.substring(rollupkey.length - 1) === 's') {
          rollup = rollupkey.substring(0, rollupkey.length - 1)
          // console.log( 'checking for roll-up: ' + rollup )
          for (var rollupmatch in json) {
            if (rollupmatch === rollup) {
              // console.log( 'match! ' + json[rollupmatch] )
              rollupText = json[rollupmatch]
            }
          }
        }
      }
    }

    var strCollapse = ''
    if (itemnum !== '' && this._itemnumbers) {
      strCollapse += itemnum + ': '
    }
    strCollapse += this._rollups ? rollupText + (rollupText !== '' ? ' ' : '') + (isArray ? '[' : '{') : (isArray ? '[' : '{')
    if (this._itemcounts) {
      strCollapse += ' ' + (isArray ? json.length : Object.keys(json).length)
    }
    spanCollapseElement.innerText = strCollapse
    divBlockControl.appendChild(spanCollapseElement)

    if (this._allowcollapse) {
      var spanCollapseButton = document.createElement('span')
      spanCollapseButton.classList.add('tjv_button')
      if (this._autocollapse !== 0 && level > this._autocollapse) {
        spanCollapseButton.classList.add('tjv_hidden')
      }
      spanCollapseButton.setAttribute('id', 'tjvc' + this._block)
      spanCollapseButton.innerHTML = '<svg><use xlink:href="#minus-square"></use></svg>'
      spanCollapseButton.addEventListener('click', function () {
        var b = this.id
        var n = b.substring(4)
        console.log('n=' + n)
        var eBlock = document.getElementById('tjvb' + n)
        var eCollapse = document.getElementById('tjvo' + n)
        var eExpand = document.getElementById('tjvc' + n)
        eBlock.classList.add('tjv_hidden')
        eExpand.classList.add('tjv_hidden')
        eCollapse.parentNode.classList.remove('tjv_hidden')
      })
      divBlockControl.appendChild(spanCollapseButton)
    }

    var spanExpandButtonOuter = document.createElement('span')

    if (this._allowcollapse) {
      if (this._autocollapse === 0 || level < (this._autocollapse + 1)) {
        spanExpandButtonOuter.classList.add('tjv_hidden')
      }
      var spanExpandButton = document.createElement('span')
      spanExpandButton.classList.add('tjv_button')
      spanExpandButton.setAttribute('id', 'tjvo' + this._block)
      spanExpandButton.innerHTML = '<svg><use xlink:href="#plus-square"></use></svg>'
      spanExpandButton.addEventListener('click', function () {
        var b = this.id
        var n = b.substring(4)
        console.log('n=' + n)
        var eBlock = document.getElementById('tjvb' + n)
        var eCollapse = document.getElementById('tjvo' + n)
        var eExpand = document.getElementById('tjvc' + n)
        eBlock.classList.remove('tjv_hidden')
        eExpand.classList.remove('tjv_hidden')
        eCollapse.parentNode.classList.add('tjv_hidden')
      })
      spanExpandButtonOuter.appendChild(spanExpandButton)
    }
    var spanExpandElement = document.createElement('span')
    spanExpandElement.classList.add('tjv_bracket')
    spanExpandElement.innerText = (isArray ? ']' : '}')
    spanExpandButtonOuter.appendChild(spanExpandElement)
    divBlockControl.appendChild(spanExpandButtonOuter)

    divParent.appendChild(divBlockControl)

    var divBlockItem = document.createElement('div')
    divBlockItem.setAttribute('id', 'tjvb' + this._block)
    if (this._autocollapse !== 0 && level > this._autocollapse) {
      divBlockItem.classList.add('tjv_hidden')
    }

    let divPair,
      spanKey, classKey, strKey,
      spanValue, classValue, strValue

    for (var key in json) {
      divPair = document.createElement('section')
      spanKey = document.createElement('span')
      classKey = 'key'
      strKey = key + ':'
      spanValue = document.createElement('span')
      classValue = (typeof json[key]).toString()
      strValue = json[key]
      if (typeof json[key] === 'object' && json[key] != null) {
        // console.log('key=' + key + ', num=' +  (Number.isNaN(Number.parseInt(key))))
        this._walkJSON(divBlockItem, json[key], (isArray ? '' : key), rollupkey, (Number.isNaN(Number.parseInt(key)) && this._itemnumbers ? '' : key), level + 1)
      } else {
        switch (typeof json[key]) {
          case 'string':
            if (json[key].match(this._date)) {
              // console.log(key+': '+json[key]+' (date)')
              classValue = 'date'
            } else if (json[key].substring(0, 4) === 'http' && (json[key].includes('.png') || json[key].includes('.jpg'))) {
              // console.log(key+': '+json[key]+' (url)')
              strValue = '<a href="' + json[key] + '"><img src="' + json[key] + '" /></a>'
            } else if (json[key].substring(0, 4) === 'http') {
              // console.log(key+': '+json[key]+' (url)')
              classValue = 'url'
              strValue = '<a href="' + json[key] + '">' + json[key] + '</a>'
            } else {
              if (this._rollups) {
                if (key === rollup) {
                  // console.log('roll-up match! ' + key+'='+ rollup)
                  strKey = ''
                  strValue = ''
                } else {
                  strValue = '&ldquo;' + json[key] + '&rdquo;'
                }
              } else {
                strValue = '&ldquo;' + json[key] + '&rdquo;'
              }
            }
            break
          case 'object':
            if (json[key] == null) {
              // console.log(key+': '+json[key]+' (null)')
              classValue = 'null'
              strValue = 'null'
            } else {
              console.log(key + ': ' + json[key] + ' (object)')
            }
            break
          default:
            // console.log(key+': '+json[key]+' ('+(typeof json[key])+')')
            break
        }
        if (!isArray || this._itemnumbers) {
          spanKey.classList.add('tjv_' + classKey)
          spanKey.innerHTML = strKey
          divPair.appendChild(spanKey)
        }
        if (strKey !== '' && strValue !== '') {
          spanValue.classList.add('tjv_' + classValue)
          spanValue.innerHTML = strValue
          divPair.appendChild(spanValue)
          // console.log( 'output=' + divPair.innerHTML )
          divBlockItem.appendChild(divPair)
        }
      }
    }
    var divCloseElement = document.createElement('section')
    divCloseElement.classList.add('tjv_block')
    divCloseElement.classList.add('tjv_bracket')
    divCloseElement.innerText = (isArray ? ']' : '}')
    divBlockItem.appendChild(divCloseElement)
    divParent.appendChild(divBlockItem)
  }
}
