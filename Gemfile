source "https://rubygems.org"

# Jekyll - latest stable version
gem "jekyll", "~> 4.3.3"

# Theme - using minimal-mistakes for enterprise features
gem "minimal-mistakes-jekyll", "~> 4.26"

# Core plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-redirect-from", "~> 0.16"
  gem "jekyll-include-cache", "~> 0.2"
  gem "jekyll-paginate-v2", "~> 3.0"
  gem "jekyll-archives", "~> 2.2"
  gem "jekyll-gist", "~> 1.5"
  gem "jekyll-relative-links", "~> 0.7"
  gem "jekyll-optional-front-matter", "~> 0.3"
  gem "jekyll-titles-from-headings", "~> 0.5"
  gem "jekyll-default-layout", "~> 0.1"
  gem "jekyll-compose", "~> 0.12"
  gem "jekyll-algolia", "~> 1.7"
  gem "jekyll-toc", "~> 0.19"
  gem "jekyll-last-modified-at", "~> 1.3"
  gem "jekyll-minifier", "~> 0.1"
  gem "jekyll-responsive-image", "~> 1.6"
end

# GitHub Pages deployment - commented out for now as it conflicts with Jekyll 4.3
# gem "github-pages", "~> 231", group: :jekyll_plugins

# Development and testing
group :development, :test do
  gem "webrick", "~> 1.8"
  gem "html-proofer", "~> 5.0"
  gem "rake", "~> 13.2"
  gem "rubocop", "~> 1.57.0"
  gem "rubocop-jekyll", "~> 0.14"
  gem "bundler-audit", "~> 0.9"
end

# Performance and compatibility
gem "kramdown-parser-gfm", "~> 1.1"
gem "rouge", "~> 4.3"
gem "liquid", "~> 4.0"

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.2", :install_if => Gem.win_platform?

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]