"use client"

import React, { useState, useEffect, useRef } from 'react';

export default function About() {
  const [loading, setLoading] = useState(true);
  const imagesRef = useRef([]);
  const soundCloudIframesRef = useRef([]);

  const images = [
    '/about/international-2690990_640.jpg',
    '/about/e47fd402b110f1aa5633912e5d037171.jpg',
    '/about/il_fullxfull.3201439236_f02a.jpg',
    '/about/csm_code_javascript_49d002a67e.webp',
    '/about/692b74f0046892a053041dd9423afb01.jpg',
    '/about/trat43.jpg',
    '/about/gamestop-black-friday-deals-lead.jpg',
    '/about/boston-skyline-best-views-socail.jpg',
    '/about/gettyimages-1800093928-3ea884e9fb65ed78aa5a1106a1670342ba8c40cc.jpg',
    '/about/a16ba0d0dc35df6649fcb42430fb0f9d.jpg',
    '/about/5deea7b9a26726235221933f8348fb4f.jpg',
    '/about/photo-1518546305927-5a555bb7020d.avif',
    '/about/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    '/about/2021-08-05.jpg',
    '/about/downtown-medellin-colombia.avif',
    '/about/dice-chips-and-playing-cards.webp',
    '/about/merlin_138870675_80a610d6-d7a6-4bcc-aa2d-cbe76d7fadf7-articleLarge.webp'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the image is visible

    imagesRef.current.forEach(image => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const loadedImages = images.map(() => false); // Keep track of loaded state for each image

    const checkIfAllImagesLoaded = () => {
      if (loadedImages.every(imageLoaded => imageLoaded)) {
        setLoading(false);
      }
    };

    const loadImage = (index) => {
      const image = new Image();
      image.onload = () => {
        loadedImages[index] = true;
        checkIfAllImagesLoaded();
      };
      image.src = images[index];
    };

    images.forEach((_, index) => loadImage(index));

  }, [images]);

  useEffect(() => {
    const soundCloudIframes = Array.from(document.querySelectorAll('.soundcloud-embed'));
    soundCloudIframes.forEach((iframe, index) => {
      const loadListener = () => {
        soundCloudIframesRef.current[index] = true;
        setLoading(false);
      };
      iframe.addEventListener('load', loadListener);
      return () => {
        iframe.removeEventListener('load', loadListener);
      };
    });
  }, [])

  return (
    <main className="contact my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
        <div className={`mb-[5rem] ${loading ? 'hidden' : 'block'}`}>
          <h1 className="uppercase font-bold project-name leading-[100%] text-[40px] lg:text-[100px] mb-10 lg:mb-[3.5rem]">About Me</h1>
          <p className="citation font-[300] tracking-wide text-2xl italic">
            Hey there! I'm Kevin Lopez, a 29-year-old front-end developer based in the vibrant city of Boston, MA. Born and raised in the USA, my roots trace back to the beautiful landscapes and rich culture of Colombia, infusing my work with a blend of American innovation and Latin warmth.
            <br />
            <br />
            With a passion for crafting engaging and user-friendly web experiences, I thrive on the creative challenges of front-end development. From sleek designs to seamless functionality, I strive to bring visions to life through clean code and intuitive interfaces.
            <br />
            <br />
            When I'm not immersed in the digital realm, you'll often find me exploring Boston's eclectic neighborhoods, sipping on a freshly brewed beer, or losing track of time while jamming to my favorite tunes. Scroll below to discover some of my favorite music and snapshots.
            <br />
            <br />
            Let's connect and build something incredible!
          </p>
        </div>
        <div className={`flex justify-center items-center h-[50vh] ${loading ? 'block' : 'hidden'}`}>
          <div className="animate-spin rounded-full h-32 w-32 border-b-4"></div>
        </div>
        <div className={`flex flex-col lg:flex-row justify-between lg:gap-4 ${loading ? 'hidden' : 'block'}`}>
          <iframe className={loading ? "soundcloud-embed mb-5 w-[100%] rounded-lg" : "soundcloud-embed mb-5 w-[100%] rounded-lg fade-in active"}  width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=jo6nZlwAlcZa6U5e&amp;list=PL3ViwmNp6G049Twt9ALIeOq7S17WxA62z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className={`flex flex-col lg:flex-row justify-between lg:gap-4 ${loading ? 'hidden' : 'block'}`}>
          <iframe height="275" allow="autoplay" className={loading ? "soundcloud-embed mb-5 w-[100%] rounded-lg" : "soundcloud-embed mb-5 w-[100%] rounded-lg fade-in active"} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/141521022&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"  ></iframe>
          <iframe height="275" allow="autoplay" className={loading ? "soundcloud-embed mb-5 w-[100%] rounded-lg" : "soundcloud-embed mb-5 w-[100%] rounded-lg fade-in active"} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/335930055&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"  ></iframe>
          <iframe height="275" allow="autoplay" className={loading ? "soundcloud-embed mb-5 w-[100%] rounded-lg" : "soundcloud-embed mb-5 w-[100%] rounded-lg fade-in active"} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/346202223&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"  ></iframe>
        </div>
        <div className={`columns-2 gap-4 md:columns-3 ${loading ? 'hidden' : 'block'}`}>
          {images.map((url, index) => 
            <img 
              key={url}
              src={url}
              loading='lazy'
              ref={el => imagesRef.current[index] = el}
              className="w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in"
            />
          )}
        </div>
    </main>
  );
}