require "bundler/gem_tasks"
require "rubocop/rake_task"
require "html-proofer"

RuboCop::RakeTask.new

task default: [:rubocop]

desc "Build the Jekyll site"
task :build do
  sh "bundle exec jekyll build"
end

desc "Run HTML Proofer on the built site"
task :htmlproofer => :build do
  options = {
    disable_external: true,
    ignore_urls: [/^http:\/\/127.0.0.1/, /^http:\/\/0.0.0.0/, /^http:\/\/localhost/],
    ignore_files: [/assets/, /js/],
    allow_hash_href: true
  }
  HTMLProofer.check_directory("./_site", options).run
end

desc "Serve the site locally"
task :serve do
  sh "bundle exec jekyll serve --livereload"
end

desc "Run all tests"
task test: [:rubocop, :htmlproofer]