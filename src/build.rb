#!/usr/bin/ruby

require 'rubygems'
require 'uglifier'
require 'coffee-script'

File.open("../lib/XTND.js", 'w') { |f| f.write  Uglifier.compile(CoffeeScript.compile(File.read("XTND.js.coffee"))) }
