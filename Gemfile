source "https://rubygems.org"

# Jekyll - GitHub Pages compatible version
# gem "jekyll", "~> 4.3"  # Commented out when using github-pages gem

# GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Theme - using minimal-mistakes for enterprise features
# gem "minimal-mistakes-jekyll", "~> 4.26"  # Commented out when using remote_theme

# Core plugins - only GitHub Pages supported plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-redirect-from"
  gem "jekyll-include-cache"
  gem "jekyll-gist"
  gem "jekyll-relative-links"
  gem "jekyll-optional-front-matter"
  gem "jekyll-titles-from-headings"
  gem "jekyll-default-layout"
  gem "jekyll-remote-theme"
  # Not supported by GitHub Pages:
  # gem "jekyll-paginate-v2", "~> 3.0"
  # gem "jekyll-archives", "~> 2.2"
  # gem "jekyll-compose", "~> 0.12"
  # gem "jekyll-algolia", "~> 1.7"
  # gem "jekyll-toc", "~> 0.19"
  # gem "jekyll-last-modified-at", "~> 1.3"
end

# Development and testing
group :development, :test do
  gem "webrick", "~> 1.8"
  gem "html-proofer", "~> 5.0"
  gem "rake", "~> 13.2"
  # gem "rubocop", "~> 1.57"  # Has conflicts with github-pages dependencies
  # gem "rubocop-jekyll", "~> 0.14"  # Has conflicts with github-pages dependencies
  gem "bundler-audit", "~> 0.9"
end

# Performance and compatibility - removed as github-pages handles these
# gem "kramdown-parser-gfm", "~> 1.1"
# gem "rouge", "~> 4.3"
# gem "liquid", "~> 4.0"

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.2", :install_if => Gem.win_platform?

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]