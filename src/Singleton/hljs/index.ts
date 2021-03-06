import './Style.css';
import 'highlight.js';

// 为了按需加载，使用 require
const hljs: HLJSApi = require('highlight.js/lib/core');

hljs.registerLanguage('actionscript', require(`highlight.js/lib/languages/actionscript.js`));
hljs.registerLanguage('ada', require(`highlight.js/lib/languages/ada.js`));
hljs.registerLanguage('bash', require(`highlight.js/lib/languages/bash.js`));
hljs.registerLanguage('basic', require(`highlight.js/lib/languages/basic.js`));
hljs.registerLanguage('cmake', require(`highlight.js/lib/languages/cmake.js`));
hljs.registerLanguage('c-like', require(`highlight.js/lib/languages/c-like`));
hljs.registerLanguage('c', require(`highlight.js/lib/languages/c`));
hljs.registerLanguage('cpp', require(`highlight.js/lib/languages/cpp.js`));
hljs.registerLanguage('csharp', require(`highlight.js/lib/languages/csharp.js`));
hljs.registerLanguage('css', require(`highlight.js/lib/languages/css.js`));
hljs.registerLanguage('dart', require(`highlight.js/lib/languages/dart.js`));
hljs.registerLanguage('django', require(`highlight.js/lib/languages/django.js`));
hljs.registerLanguage('dockerfile', require(`highlight.js/lib/languages/dockerfile.js`));
hljs.registerLanguage('erlang', require(`highlight.js/lib/languages/erlang.js`));
hljs.registerLanguage('fortran', require(`highlight.js/lib/languages/fortran.js`));
hljs.registerLanguage('go', require(`highlight.js/lib/languages/go.js`));
hljs.registerLanguage('gradle', require(`highlight.js/lib/languages/gradle.js`));
hljs.registerLanguage('http', require(`highlight.js/lib/languages/http.js`));
hljs.registerLanguage('java', require(`highlight.js/lib/languages/java.js`));
hljs.registerLanguage('javascript', require(`highlight.js/lib/languages/javascript.js`));
hljs.registerLanguage('json', require(`highlight.js/lib/languages/json.js`));
hljs.registerLanguage('less', require(`highlight.js/lib/languages/less.js`));
hljs.registerLanguage('lua', require(`highlight.js/lib/languages/lua.js`));
hljs.registerLanguage('makefile', require(`highlight.js/lib/languages/makefile.js`));
hljs.registerLanguage('markdown', require(`highlight.js/lib/languages/markdown.js`));
hljs.registerLanguage('matlab', require(`highlight.js/lib/languages/matlab.js`));
hljs.registerLanguage('nginx', require(`highlight.js/lib/languages/nginx.js`));
hljs.registerLanguage('php', require(`highlight.js/lib/languages/php.js`));
hljs.registerLanguage('plaintext', require(`highlight.js/lib/languages/plaintext`));
hljs.registerLanguage('powershell', require(`highlight.js/lib/languages/powershell.js`));
hljs.registerLanguage('python', require(`highlight.js/lib/languages/python.js`));
hljs.registerLanguage('ruby', require(`highlight.js/lib/languages/ruby.js`));
hljs.registerLanguage('rust', require(`highlight.js/lib/languages/rust.js`));
hljs.registerLanguage('scala', require(`highlight.js/lib/languages/scala.js`));
hljs.registerLanguage('scss', require(`highlight.js/lib/languages/scss.js`));
hljs.registerLanguage('shell', require(`highlight.js/lib/languages/shell.js`));
hljs.registerLanguage('smalltalk', require(`highlight.js/lib/languages/smalltalk.js`));
hljs.registerLanguage('sql', require(`highlight.js/lib/languages/sql.js`));
hljs.registerLanguage('stylus', require(`highlight.js/lib/languages/stylus.js`));
hljs.registerLanguage('swift', require(`highlight.js/lib/languages/swift.js`));
hljs.registerLanguage('latex', require(`highlight.js/lib/languages/latex.js`));
hljs.registerLanguage('typescript', require(`highlight.js/lib/languages/typescript.js`));
hljs.registerLanguage('vbscript', require(`highlight.js/lib/languages/vbscript.js`));
hljs.registerLanguage('verilog', require(`highlight.js/lib/languages/verilog.js`));
hljs.registerLanguage('vim', require(`highlight.js/lib/languages/vim.js`));
hljs.registerLanguage('xml', require(`highlight.js/lib/languages/xml.js`));
hljs.registerLanguage('html', require(`highlight.js/lib/languages/xml.js`));
hljs.registerLanguage('yaml', require(`highlight.js/lib/languages/yaml.js`));

export default hljs;    // 推荐使用 import()