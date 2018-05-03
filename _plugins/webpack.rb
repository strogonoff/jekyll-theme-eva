Jekyll::Hooks.register :site, :after_init do |site|
  unless (File.file?("package.json") and File.directory?("node_modules"))
    p "-- Eva: Initializing Node package…"

    system("npm init --yes")
    system("npm install webpack webpack-cli jquery")
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  p "-- Eva: Building assets with Webpack…"

  theme_dir = site.config["theme_root"] || site.theme.root
  out_assets_dir = File.join(site.config["destination"], 'assets')
  cfg_path = site.config["webpack_config"] || File.join(theme_dir, 'webpack.config.js')
  system("npx webpack --config #{cfg_path} --context #{theme_dir} --output-path #{out_assets_dir}")

  p "-- Eva: Build complete"
end
