"use client"

import React, { useState, useEffect } from 'react';

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulating a 2-second delay
    };

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <main className="contact my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row justify-between lg:gap-4">
            <iframe height="275" allow="autoplay" className={loading ? "mb-5 w-[100%] rounded-lg" : "mb-5 w-[100%] rounded-lg fade-in active"} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/141521022&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"  ></iframe>
            <iframe height="275" allow="autoplay" className={loading ? "mb-5 w-[100%] rounded-lg" : "mb-5 w-[100%] rounded-lg fade-in active"} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/335930055&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"  ></iframe>
            <iframe height="275" allow="autoplay" className={loading ? "mb-5 w-[100%] rounded-lg" : "mb-5 w-[100%] rounded-lg fade-in active"} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/346202223&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"  ></iframe>
          </div>
          <div className=" columns-2 gap-4 md:columns-3">
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/international-2690990_640.jpg" />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/e47fd402b110f1aa5633912e5d037171.jpg"  />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/il_fullxfull.3201439236_f02a.jpg" />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/csm_code_javascript_49d002a67e.webp" />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/692b74f0046892a053041dd9423afb01.jpg"  />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/trat43.jpg"  />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/gamestop-black-friday-deals-lead.jpg"  />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/boston-skyline-best-views-socail.jpg"  />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/gettyimages-1800093928-3ea884e9fb65ed78aa5a1106a1670342ba8c40cc.jpg"  />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/a16ba0d0dc35df6649fcb42430fb0f9d.jpg"  />
            <img loading="lazy" className={loading ? "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center" : "w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in active"} src="/about/5deea7b9a26726235221933f8348fb4f.jpg"  />
          </div>
        </>
      )}
    </main>
  );
}