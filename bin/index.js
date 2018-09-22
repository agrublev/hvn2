#!/usr/bin/env node

const hvn2 = require('hvn2')
const path = require('path')

const NPM_PATH = path.join(__dirname, 'node_modules', 'npm', 'bin', 'npm-cli.js')

const parsed = hvn2.parseArgs(process.argv, NPM_PATH)
parsed.npxPkg = path.join(__dirname, 'package.json')
hvn2(parsed)
