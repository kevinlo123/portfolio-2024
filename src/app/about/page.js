"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';

export default function About() {
  const [loading, setLoading] = useState(true);
  const imagesRef = useRef([]);
  const soundCloudIframesRef = useRef([]);
  const text = "About Me";

  const images = [
    '/about/international-2690990_640.jpg',
    '/about/e47fd402b110f1aa5633912e5d037171.jpg',
    'about/IMG_0984.jpeg',
    '/about/il_fullxfull.3201439236_f02a.jpg',
    '/about/csm_code_javascript_49d002a67e.webp',
    '/about/300x600.gif',
    '/about/trat39.jpg',
    'about/IMG_0874.jpeg',
    '/about/692b74f0046892a053041dd9423afb01.jpg',
    '/about/trat43.jpg',
    '/about/gamestop-black-friday-deals-lead.jpg',
    '/about/boston-skyline-best-views-socail.jpg',
    '/about/a3cb67ae62a542c43bade861ff106183.jpg',
    '/about/gettyimages-1800093928-3ea884e9fb65ed78aa5a1106a1670342ba8c40cc.jpg',
    '/about/5deea7b9a26726235221933f8348fb4f.jpg',
    '/about/1135135.jpg',
    'about/IMG_0910.jpeg',
    '/about/photo-1518546305927-5a555bb7020d.avif',
    '/about/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    'about/IMG_0983.jpeg',
    '/about/the-many-poses-of-alonsos-post-race-celebrations-during-his-v0-lhl9lg39dk7b1.jpg',
    '/about/2021-08-05.jpg',
    '/about/Stake-com-logo-high-res.jpg',
    '/about/downtown-medellin-colombia.avif',
    '/about/dice-chips-and-playing-cards.webp',
    'about/IMG_0985.jpeg',
    '/about/a16ba0d0dc35df6649fcb42430fb0f9d.jpg',
    'about/IMG_0925.jpeg',
    '/about/air-jordan-logo-667x500.jpg',
    '/about/merlin_138870675_80a610d6-d7a6-4bcc-aa2d-cbe76d7fadf7-articleLarge.webp',
    '/about/5857823720_f4eb48c9a2_b.jpg',
    '/about/2025-porsche-911-turbo-102-668566873f882.avif',
    'about/IMG_0986.jpeg',
    '/about/A-Lagunitas-IPA-at-the-brewery-in-Petaluma-California..jpeg',
    'about/IMG_0913.jpeg',
    '/about/Lewis-Hamilton-Image-Twitter-X-FabrizioRomano.webp',
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

  useEffect(() => {
    const loadTradingViewWidget = () => {
      if (typeof window !== 'undefined') {
        const scriptExists = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"]');
  
        if (!scriptExists) {
          const script = document.createElement('script');
          script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
          script.async = true;
          script.innerHTML = JSON.stringify({
            "symbols": [
              ["MARKETSCOM:ETHEREUM|1D"],
              ["MARKETSCOM:BITCOIN|1D"],
              ["AMEX:VOO|1D"]
            ],
            "chartOnly": false,
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "colorTheme": "dark",
            "autosize": true,
            "showVolume": false,
            "showMA": false,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 9,
            "headerFontSize": "medium",
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
              "1d|1",
              "1m|30",
              "3m|60",
              "12m|1D",
              "60m|1W",
              "all|1M"
            ]
          });
          document.querySelector(".tradingview-widget-container").appendChild(script);
        }
      }
    };
  
    loadTradingViewWidget();
  }, []); 

  return (
    <main className="contact my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
        <div className={`mb-[5rem] ${loading ? 'hidden' : 'block'}`}>
          <h1 className="uppercase font-bold project-name leading-[100%] text-[40px] lg:text-[100px] mb-10 lg:mb-[3.5rem]"><AnimatedText text={text}/></h1>
          <p className="citation font-[300] tracking-wide text-2xl italic">
            Hi, I&rsquo;m Kevin Lopez, a full-stack developer based in Boston, MA. I&rsquo;m passionate about building clean, user-friendly web experiences from the ground up—whether it&rsquo;s crafting sleek front-end designs or working on back-end functionality.
            <br />
            <br />
            Outside of coding, you&rsquo;ll probably catch me gaming, listening to music, keeping up with sports, checking out cars, or trying my luck with a little gambling and investing in stocks & crypto. I&rsquo;m always up for good times and new challenges.
            <br />
            <br />
            Take a look around, and if you&rsquo;re interested in collaborating, let&rsquo;s connect!
          </p>
        </div>
        <div style={{borderRadius: '.5rem', marginBottom: '1rem'}}  className="tradingview-widget-container"></div>
        <div className={`flex justify-center items-center h-[50vh] ${loading ? 'block' : 'hidden'}`}>
          <div className="animate-spin rounded-full h-32 w-32 border-b-4"></div>
        </div>
        {/* <div className={`flex flex-col lg:flex-row justify-between lg:gap-4 ${loading ? 'hidden' : 'block'}`}>
          <iframe className={loading ? "soundcloud-embed mb-5 w-[100%] rounded-lg" : "soundcloud-embed mb-5 w-[100%] rounded-lg fade-in active"}  width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=jo6nZlwAlcZa6U5e&amp;list=PL3ViwmNp6G049Twt9ALIeOq7S17WxA62z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div> */}
        <div className={`flex flex-col lg:flex-row justify-between lg:gap-4 ${loading ? 'hidden' : 'block'}`}>
          <iframe style={{borderRadius: '.5rem', marginBottom: '1rem'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1E4zk5SV0SRQSB?utm_source=generator" width="99%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe style={{borderRadius: '.5rem', marginBottom: '1rem'}} src="https://open.spotify.com/embed/artist/3TVXtAsR1Inumwj472S9r4?utm_source=generator" width="99%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe style={{borderRadius: '.5rem', marginBottom: '1rem'}}   src="https://open.spotify.com/embed/playlist/37i9dQZF1E4zglX5vhD6vJ?utm_source=generator" width="99%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>        </div>
        <div className={`columns-2 gap-4 md:columns-3 ${loading ? 'hidden' : 'block'}`}>
          {images.map((url, index) => 
            url === '/about/Stake-com-logo-high-res.jpg' || url === '/about/300x600.gif' ? 
            <Link key={index} href="https://stake.us/?c=Kevinlo51" target="_blank">
              <img 
                key={index}
                src={url}
                loading="lazy"
                alt="lifestyle picture"
                ref={el => imagesRef.current[index] = el}
                className="w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in"
              />
            </Link>
            :
            <img 
              key={index}
              src={url}
              loading="lazy"
              alt="lifestyle picture"
              ref={el => imagesRef.current[index] = el}
              className="w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in"
            />
          )}
        </div>
    </main>
  );
}