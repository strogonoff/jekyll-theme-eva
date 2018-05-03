# Eva: Jekyll theme for artist’s portfolio

To start:

- Add "jekyll-theme-eva" gem to your Gemfile
- Specify "jekyll-theme-eva" theme in your site configuration
- Copy theme’s _plugins directory into your site base directory
- Create _data/albums and populate it with album data

Album data structure:

    - albums/
      - <album 1 name>/
        - about.yml
        - artwork/
          - <artwork 1 name>/
            - about.yml
            - <image file name>.svg
          - <artwork 2 name>/
            - about.yml
            - <image file name>.svg

Customization:

- Create _includes/head_symbol_home.html for custom logo/mascot header
- Create assets/css/style.scss with variables and custom styling rules,
  place variables before `@import 'jekyll-theme-eva';` and custom rules after

Note:
uses plugins and Node (Webpack), so not suitable for Github pages auto-build.
