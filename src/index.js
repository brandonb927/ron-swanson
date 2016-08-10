#!/usr/bin/env node

import quotes from 'ron-swanson-quotes/quotes'

console.log(quotes[Math.floor(Math.random() * quotes.length)])
