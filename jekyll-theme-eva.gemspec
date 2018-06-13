# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-eva"
  spec.version       = "0.1.9"
  spec.authors       = ["Anton Strogonoff"]
  spec.email         = ["anton@strogonoff.name"]

  spec.summary       = "Artist’s site theme."
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|app|_plugins|)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"
  spec.add_runtime_dependency "jekyll-responsive-image", "~> 1.5"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
