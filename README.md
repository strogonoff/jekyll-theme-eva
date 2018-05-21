# Eva: Jekyll theme for artist’s portfolio

To start:

- Add "jekyll-theme-eva" gem to your Gemfile
- Specify "jekyll-theme-eva" theme in your site configuration
- Manual steps:
  - drop theme’s _plugins directory into your site base directory
  - drop theme’s _includes/_responsive_image.html into your site’s _includes
- Add theme configuration to _config.yml
- Create _data/albums and populate it with album data

Note:
uses plugins and Node (Webpack), so not suitable for GitHub Pages auto-build.

See in action: **[Illustrator’s site](https://eval.ee/)** and [its source](https://github.com/strogonoff/eval.ee).

## Configuration (in `_config.yml`)

Set these to your liking:

    # This will be shown everywhere, required
    title_name:

    # This will be included in website data,
    # may be useful for search engines & social sharing
    full_name:
    given_name:
    family_name:
    additional_name:

    # Also useful for search engines & social sites. Keep under 255 characters
    description: Vector ink & illustration
    job_title:

    tagline: artist’s jekyll theme
    # 3-4 words

    url: https://example.com/

    phone_number: +1234567890

    social:
      links:
        - https://www.instagram.com/<your username>/
        - https://<your username>.tumblr.com/
    # Supported social links: Facebook, Instagram, Tumblr, Twitter, Github.

    email: example@example.com
    # Or, for spam protection (TODO: automate email encoding):
    # email_encoded: <encoded string>
    # key: <crypto key>

    # google_site_verification: <string>
    # google_analytics_code: <string with dashes, usually begins with UA>

    # Language in the format outlined here:
    # https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
    language: en

Add these as is:

    plugins:
      - jekyll-responsive-image

    responsive_image:
      template: _includes/_responsive_image.html
      sizes:
        - width: 480
          quality: 80
        - width: 800

## Album data structure (in `_data/`)

    (- albums/)
      - <album 1 name>/
        - about.yml
        - symbol.png
        - artwork/
          - <artwork 1 name>/
            - about.yml
            - <image file name>.svg
          - <artwork 2 name>/
            - about.yml
            - <image file name>.svg

Album symbols should have equal sides (look OK if resized to fit in a square).

Album data expected in its about.yaml:

    # -- This is shown to the visitor:
    title: Album Title
    description: Briefly about this

    # -- This appears in HTML meta,
    #    and may be used & made visible by search engines:
    seo:
      description: Briefly about this, possibly other phrasing than above

    # -- This appears in URLs:
    name: album-name

    # -- This determines appearance of the album on home page:
    priority: 1  # Ordering relative to other album(s)
    home_nav_icon_style: inset  # supported: inset, full-bleed

    # -- This determines how album page is laid out:
    artwork_list_style: inset multi-column
    # supported: inset multi-column, full-bleed one-column

Artwork data expected in its about.yaml is just `name` and `title`, in same YAML format.

## Customization

- Place favicon.svg, favicon.png (64x64px), favicon@4x.png into your site root
- Place custom logo/mascot code into _includes/head_symbol_home.html
- Create assets/css/style.scss with variables and custom styling rules.
  (Place variables before `@import 'jekyll-theme-eva';`, custom rules after)
