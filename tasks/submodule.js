﻿'use strict';
const fs        = require('fs-extra');
const path      = require('path');
const config    = require('../project.config.js');

function link() {
    const modules = config.submodules.modules;
    const srcLocation = config.submodules.root;
    const dstLocation = 'node_modules';

    modules.forEach((module) => {
        const linkType = 'win32' === process.platform ? 'junction' : 'dir';
        const src = path.join(process.cwd(), srcLocation, module);
        if (fs.existsSync(src)) {
            const dst = path.join(process.cwd(), dstLocation, module);
            console.log('src:' + src);
            console.log('dst:' + dst);
            fs.symlinkSync(src, dst, linkType);
        }
    });
}

function main() {
    link();
}

main();
