# FPGA Arcade Website

## Overview

Built using Astro.build and vuejs.

## News Posts

News posts are .md files in the src/content/posts/ directory. Create the post
using [standard markdown](https://www.markdownguide.org/basic-syntax/).

### Images

Images should be copied into the src/assets/images/ directory. They can be used
within a news post with the standard markdown:

```
![](@assets/images/db_io-1024x491.jpg)
```

If you wish to caption an image, wrap the normal image markdown in a "figure" tag.

```
<figure>

![](@assets/images/db_io-1024x491.jpg)

<figcaption>Daughterboard IO shield</figcaption>
</figure>
```

Note the blank line either side of the image markdown is required.

Posts are required to have frontmatter content, between the "---" lines. Refer
to any existing post for an example.

## 👀 Want to learn more?

- [Astro documentation](https://docs.astro.build)
- [Simple Icons](https://vue3-simple-icons.wyatt-herkamp.dev/)
- [Material Design Icons](https://pictogrammers.com/library/mdi/)
