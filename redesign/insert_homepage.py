with open('/home/l2euser/canlis-website/redesign/style.css', 'r') as f:
    content = f.read()

# Find the exact position - use the em dash char
idx = content.find("RESPONSIVE — PRIVATE EVENTS ROOM PAGES")
print(f"Found at: {idx}")

if idx >= 0:
    # Find the start of the block (look for double newline before the comment)
    start = content.rfind("\n\n", 0, idx)
    print(f"Start at: {start}")
    print(repr(content[start:idx+100]))

    # Now insert
    new_content = content[:start+2] + """
/* ==========================================
   RESPONSIVE — HOMEPAGE
========================================== */
@media (max-width: 1024px) {
  .hero {
    height: min(700px, calc(100vh - 120px));
    min-height: 500px;
  }

  .hero > img {
    height: calc(100% - 50px);
    margin: 25px auto;
  }

  .hero-copy {
    top: 48%;
    width: min(700px, 90%);
  }

  .hero-copy h1 {
    font-size: clamp(2.4rem, 5vw, 4.2rem);
  }

  .press {
    grid-template-columns: 1fr;
    gap: clamp(3rem, 5vw, 4rem);
    padding: clamp(4rem, 7vw, 5rem) 4vw;
  }

  .press-copy {
    justify-self: center;
    text-align: center;
    max-width: 100%;
  }

  .press video {
    max-width: 100%;
    aspect-ratio: 4/5;
    margin: 0 auto;
  }

  .split-feature {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: clamp(3rem, 5vw, 4rem);
    padding: clamp(4rem, 7vw, 5rem) 4vw;
  }

  .split-feature > img {
    max-width: 700px;
    margin: 0 auto;
    height: auto;
    aspect-ratio: 4/3;
  }

  .split-feature > div {
    text-align: center;
    max-width: 100%;
    justify-self: center;
  }

  .feature-image {
    height: clamp(400px, 60vw, 700px);
  }

  .gallery {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1.5rem 3vw;
  }
}

@media (max-width: 768px) {
  .announcement {
    margin-top: 100px;
    padding: 1.5rem 5vw;
  }

  .announcement__button {
    width: 100%;
    max-width: 280px;
    padding: 1rem 1.5rem;
  }

  .hero {
    height: min(600px, calc(100vh - 100px));
    min-height: 450px;
  }

  .hero-copy {
    top: 50%;
  }

  .hero-copy h1 {
    font-size: clamp(2.2rem, 7vw, 3.5rem);
  }

  .hero-contact {
    bottom: 1.5rem;
    padding: 0.8rem 1.5rem;
    width: 90%;
    max-width: 320px;
  }

  .hero-contact p {
    font-size: 0.7rem;
  }

  .editorial {
    padding: clamp(3rem, 6vw, 4rem) 4vw;
  }

  .editorial-grid {
    grid-template-columns: 1fr;
    gap: clamp(2rem, 4vw, 3rem);
  }

  .editorial-copy {
    max-width: 100%;
    text-align: center;
  }

  .editorial-side {
    justify-content: center;
  }

  .editorial-side p {
    text-align: center;
  }

  .press {
    padding: clamp(3rem, 6vw, 4rem) 3vw;
    border-radius: 12px;
  }

  .press video {
    aspect-ratio: 16/9;
    max-height: 400px;
  }

  .split-feature {
    padding: clamp(3rem, 6vw, 4rem) 3vw;
    border-radius: 12px;
  }

  .split-feature > img {
    aspect-ratio: 16/9;
    border-radius: 12px;
  }

  .feature-image {
    height: clamp(350px, 55vw, 500px);
    border-radius: 12px;
  }

  .gallery {
    grid-template-columns: 1fr;
    padding: 1rem 3vw;
  }

  .gallery video,
  .gallery img {
    aspect-ratio: 16/9;
  }

  .private-events-teaser {
    padding: clamp(2rem, 4vw, 3rem) 3vw 0;
  }

  .reservation {
    padding: clamp(4rem, 8vw, 6rem) 3vw;
  }

  .reservation a.button {
    font-size: clamp(60px, 12vw, 80px);
  }
}

@media (max-width: 600px) {
  .hero {
    height: min(500px, calc(100vh - 90px));
    min-height: 400px;
  }

  .hero-copy h1 {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }

  .hero-contact p {
    font-size: 0.6rem;
  }

  .editorial {
    padding: clamp(2.5rem, 5vw, 3.5rem) 3vw;
  }

  .eyebrow {
    font-size: 0.65rem;
    margin-bottom: 1.5rem;
  }

  .editorial h2 {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
  }

  .editorial p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .press {
    padding: clamp(2.5rem, 5vw, 3.5rem) 3vw;
  }

  .press h2 {
    font-size: clamp(1.8rem, 5vw, 2.4rem);
  }

  .press p {
    font-size: 0.95rem;
  }

  .split-feature {
    padding: clamp(2.5rem, 5vw, 3.5rem) 2vw;
  }

  .split-feature h2 {
    font-size: clamp(1.8rem, 5vw, 2.4rem);
  }

  .split-feature p {
    font-size: 0.95rem;
  }

  .feature-image {
    height: clamp(300px, 50vw, 400px);
    border-radius: 8px;
  }

  .gallery video,
  .gallery img {
    aspect-ratio: 4/3;
    border-radius: 8px;
  }

  .private-events-teaser .text-link {
    font-size: 0.7rem;
  }

  .reservation {
    padding: clamp(3rem, 6vw, 4rem) 2vw;
  }

  .reservation a.button {
    font-size: clamp(45px, 14vw, 60px);
    border-bottom-width: 1.5px;
  }
}

""" + content[start+2:]

    with open('/home/l2euser/canlis-website/redesign/style.css', 'w') as f:
        f.write(new_content)
    print("Done!")
else:
    print("Search string not found")
PYEOF