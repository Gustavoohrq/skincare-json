module.exports = function parse(jsonDirty) {
  jsonDirty = JSON.stringify(jsonDirty)
          .replace(/(\".*\":)\"\"(.*)\"\"/g, '$1 ""$2\\""').replace(/\\"/g, '"')
          .replace(/\\"/g, '"')
          .replace(/:",/g, ': "",')
          .replace(/([0-9]+),([0-9]+)/g, '$1$2')
          .replace(/^\"|\"$/g, "")
          .replace(/: ",/g, ': "",')
          .replace(/" ",/g, '",')
          .replace(/([a-zA-Z])\s("+)\s([a-zA-Z])/g, '$1 $3')
          .replace(/([a-zA-Z])("+)\s([a-zA-Z])/g, '$1 $3')
          .replace(/([a-zA-Z])\s("+)([a-zA-Z])/g, '$1 $3')
          .replace(/([a-zA-Z])("")(,)/g, '$1"$3')
          .replace(/[']/g, '')
          .replace(/[\n\r]/g, "")
  var jsonFormatedAndClean = JSON.parse
  return jsonFormatedAndClean        
}
        
