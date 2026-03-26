#!/bin/bash
declare -A urls
urls[logo.png]="https://framerusercontent.com/images/SxD7v003lemde3MQQtg39KmV1o.png"
urls[hero-banner.png]="https://framerusercontent.com/images/6wmvm0qdNMrw9wFDF0Fxupqvs.png"
urls[hero-element.png]="https://framerusercontent.com/images/AM9jIQhPgeVuwBbZ2ofdqHxBic.png"
urls[camel-1.png]="https://framerusercontent.com/images/XafPeHUyKUixBfnz4pPbu8H0Nq4.png"
urls[camel-2.png]="https://framerusercontent.com/images/JvkBqpIDrJMh7S4fjLx3lFnP4Yc.png"
urls[coin.png]="https://framerusercontent.com/images/u3M34MdzG92nPIdE6TxdJkxE7ng.png"
urls[step1.png]="https://framerusercontent.com/images/mVZbOsEHdfO4Tvtl3gfTRia2nk.png"
urls[step2.png]="https://framerusercontent.com/images/WVxppRZItOq0xtSohAgQPLi3G0.png"
urls[step3.png]="https://framerusercontent.com/images/JqYmDqdBcwK5DhfAP7tLJgwk.png"
urls[lore1.png]="https://framerusercontent.com/images/f2DGjmOIMrKSXrBN8LCHEBcrXg.png"
urls[lore2.png]="https://framerusercontent.com/images/VtlE9cAHtrdUy7Y0LYUZvPZBk.png"
urls[lore3.png]="https://framerusercontent.com/images/XMZ1xwIW4YEGmQyOIimlNZzTsRA.png"
urls[lore4.png]="https://framerusercontent.com/images/DlSWRSDZynjrWz0xlYWE6Y84Ge4.png"
urls[inti-bg.png]="https://framerusercontent.com/images/HGqCYc62M8DJ6WMDS9qBp9uuINU.png"
urls[inti-text-bg.png]="https://framerusercontent.com/images/Qkw0UHh44zjpCKLz6afTDx6Xhs.png"
urls[axo-mama.png]="https://framerusercontent.com/images/6eQMnEm355MguDDQPaRIR23p1Q.png"
urls[footer-logo.png]="https://framerusercontent.com/images/PsOdK7AOoI0i8kUjCmYqJ4mgRo.png"
urls[x-icon.svg]="https://framerusercontent.com/images/C5puiOdwyeNJkW7nltx9Z5An1c.svg"
urls[discord-icon.png]="https://framerusercontent.com/images/J4lRfXFGGpw3dgPsTPA.png"
urls[border-pattern.png]="https://framerusercontent.com/images/H3zHSHYCCZz5OBL85Nx2ygn3Tg.png"
urls[lore-bg.png]="https://framerusercontent.com/images/yzqczvHpaKzouL53bquZW7XHha0.png"
urls[discord-icon2.png]="https://framerusercontent.com/images/J4lRfXZrhgivrXFGGpw3dgPsTPA.png"

for name in "${!urls[@]}"; do
  curl -sL "${urls[$name]}" -o "$name" &
done
wait
