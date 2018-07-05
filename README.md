[![Build Status](https://travis-ci.org/IIIF/showcase.iiif.io.svg?branch=master)](https://travis-ci.org/IIIF/showcase.iiif.io)

# IIIF Showcase

Source of the IIIF demos site (showcase.iiif.io)

## To Debug the Site

 1. `bundle install`

 2. Run `$ .bundle exec jekyll serve --watch --drafts` to compile the site and run a dev server on [http://localhost:4000](http://localhost:4000).

## To Publish the Site

This is tied to a commit to the master branch. If travis passes all of its tests it should deploy automatically.

## Some Things to Note

 * Much of the site data is in the YAML files in `_data/` make edits there.
 * Site level variables are set in  `_config.yml`.

## Adding a Tile to the Showcase

1. Add an entry to the YAML file under `source/_data/showcase.yml` with the following format:

  ```ruby
  - name: Example Project
    id: example-project
    img_url: img/showcase/example-project.png
    desc:
    - >
      Brief (max. ~30-50 words) description of your project here.
    url: /showcase/example-project.html

  ```

2. Add a file `example-project.html` to the `source/showcase` directory with the following content (adapted as necessary):

  ```ruby
  ---
  title: "Showcase : Example Project"
  id: example-project
  categories: [pages]
  layout: sub-page
  ---

  <section class="showcase showcase-item wrapper">
    {% include showcase_return.html %}

    <iframe src="https://example-project.com" frameborder="0"></iframe>

    {% assign id = "example-project" %}
    {% include sub-showcase_md.html %}
  </section>

  ```

3. Create a 500 x 500 pixel PNG (or JPEG or GIF) image named `example-project.png` that represents "Example Project" and add it to the `source/img/showcase` directory.
