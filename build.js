'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Lars Sjögreen'),
  handle: chalk.white('larssjogreen, barse'),
  work: chalk.white('Consulting Detective, Jack of all trades'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('barse'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~barse'),
  github: chalk.gray('https://github.com/') + chalk.green('larssjogreen'),
  gitlab: chalk.gray('https://gitlab.com/') + chalk.green('larssjogreen'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.yellow('larssjogreen'),
  bgg: chalk.gray('https://boardgamegeek.com/collection/user/') + chalk.green('barse'),
  web: chalk.cyan('https://labs.sjögreen.se/'),
  web2: chalk.cyan('https://kodapa.nu'),
  npx: chalk.red('npx') + ' ' + chalk.white('@barse/card'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelBGG: chalk.white.bold('        BGG:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const bgging = `${data.labelBGG} ${data.bgg}`
const webing = `${data.labelWeb}  ${data.web}`
const webing2 = `${data.labelWeb}  ${data.web2}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               bgging + newline +
               webing2 + newline +
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
