#!/usr/bin/ruby

require 'rubygems'
require 'uglifier'
require 'coffee-script'

javascript = CoffeeScript.compile(File.read("XTND.js.coffee"))
File.open("../lib/XTND.js",'w') { |f| f.write javascript }
File.open("../lib/XTND.min.js", 'w') { |f| f.write  Uglifier.compile(javascript) }
