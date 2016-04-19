// Copyright (c) 2016
//   ____        ____       ____             _
//  / ___| ___  / ___| ___ | __ ) _   ___  _(_)
// | |  _ / _ \| |  _ / _ \|  _ \| | | \ \/ / |
// | |_| | (_) | |_| | (_) | |_) | |_| |>  <| |
//  \____|\___/ \____|\___/|____/ \__,_/_/\_\_|
//
// Licensed under MIT.

import * as webpack from 'webpack';
import * as express from 'express';

declare function webpackHotMiddleware(compiler: webpack.compiler.Compiler, options?: webpackHotMiddleware.WebpackHotMiddlewareOptions): express.RequestHandler;

declare namespace webpackHotMiddleware {
    export interface WebpackHotMiddlewareOptions {
        log?: Function;
        path?: string;
        heartbeat?: number;
    }
}

export = webpackHotMiddleware;
