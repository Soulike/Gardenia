import React from 'react';
import {Controlled, IControlledCodeMirror} from 'react-codemirror2';
import {EditorConfiguration} from 'codemirror';

/**
 * @description 统一在此设置主题
 * */
export interface ICodeMirrorProps extends Omit<IControlledCodeMirror, 'options'>
{
    options?: Omit<EditorConfiguration, 'theme'>
}

function CodeMirror(props: ICodeMirrorProps)
{
    const propsCopy: IControlledCodeMirror = {...props};
    const {options} = propsCopy;
    if (options !== undefined)
    {
        propsCopy.options = {...options, theme: 'material-darker xq-light'};    // 与 css 文件中对应
    }
    return (
        <Controlled {...propsCopy} />
    );
}

export default CodeMirror;

// 动态引入 CodeMirror 的配置文件
require('codemirror/mode/clike/clike');
require('codemirror/mode/cmake/cmake');
require('codemirror/mode/coffeescript/coffeescript');
require('codemirror/mode/css/css');
require('codemirror/mode/dart/dart');
require('codemirror/mode/diff/diff');
require('codemirror/mode/django/django');
require('codemirror/mode/dockerfile/dockerfile');
require('codemirror/mode/erlang/erlang');
require('codemirror/mode/fortran/fortran');
require('codemirror/mode/go/go');
require('codemirror/mode/htmlembedded/htmlembedded');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/http/http');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/lua/lua');
require('codemirror/mode/mathematica/mathematica');
require('codemirror/mode/nginx/nginx');
require('codemirror/mode/pascal/pascal');
require('codemirror/mode/perl/perl');
require('codemirror/mode/php/php');
require('codemirror/mode/powershell/powershell');
require('codemirror/mode/python/python');
require('codemirror/mode/r/r');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/rust/rust');
require('codemirror/mode/sass/sass');
require('codemirror/mode/shell/shell');
require('codemirror/mode/smalltalk/smalltalk');
require('codemirror/mode/sql/sql');
require('codemirror/mode/stylus/stylus');
require('codemirror/mode/swift/swift');
require('codemirror/mode/vb/vb');
require('codemirror/mode/vbscript/vbscript');
require('codemirror/mode/verilog/verilog');
require('codemirror/mode/vue/vue');
require('codemirror/mode/xml/xml');
require('codemirror/mode/yaml/yaml');