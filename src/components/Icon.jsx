import React from 'react';

const paths = {
  home:<><path d="M4 11.5 12 5l8 6.5"/><path d="M6.5 10.5V20h11v-9.5"/><path d="M10 20v-5h4v5"/></>,
  work:<><path d="M4 6.5h16v11H4z"/><path d="M8 6.5V4h8v2.5"/><path d="M4 11h16"/></>,
  expertise:<><path d="M8 4 4 8l4 4"/><path d="m16 12 4-4-4-4"/><path d="m14 3-4 18"/></>,
  vision:<><path d="M4 18c3.2-5.8 7-9.1 16-12"/><path d="M10 6h10v10"/></>,
  contact:<><rect x="3.5" y="5" width="17" height="14" rx="3"/><path d="m5 7 7 6 7-6"/></>,
  arrow:<><path d="M5 19 19 5"/><path d="M10 5h9v9"/></>,
  external:<><path d="M13 5h6v6"/><path d="m11 13 8-8"/><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></>,
  web:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.7 5.8 3.7 9S14.5 18.2 12 21M12 3C9.5 5.8 8.3 8.8 8.3 12S9.5 18.2 12 21"/></>,
  mobile:<><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M10.5 5h3M11 18.5h2"/></>,
  backend:<><ellipse cx="12" cy="5.5" rx="7" ry="3"/><path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
  ux:<><path d="M5 18V9.5A4.5 4.5 0 0 1 9.5 5H15"/><path d="M11 8h8v8h-8z"/><path d="m15 12 5-5"/></>,
  brand:<><path d="M5 4h9l5 5v11H5z"/><path d="M14 4v5h5"/><path d="M8 14h8M8 17h5"/></>,
  hardware:<><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><circle cx="12" cy="12" r="2"/></>,
  seo:<><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/><path d="M8 11h5M10.5 8.5v5"/></>,
  shield:<><path d="M12 3 5 6v5c0 4.8 2.8 8.1 7 10 4.2-1.9 7-5.2 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.7 3.6-4"/></>,
  speed:<><path d="M4.5 17a8 8 0 1 1 15 0"/><path d="m12 13 4-4"/><path d="M6.5 17h11"/></>,
  sitemap:<><path d="M12 5v4M6 13v-2h12v2M6 13v4M12 13v4M18 13v4"/><rect x="4" y="17" width="4" height="3" rx="1"/><rect x="10" y="17" width="4" height="3" rx="1"/><rect x="16" y="17" width="4" height="3" rx="1"/><rect x="10" y="2" width="4" height="3" rx="1"/></>,
  lock:<><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></>,
  git:<><circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M8 7c6 0 3 10 8 10"/></>,
  mail:<><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="m4.5 7 7.5 6 7.5-6"/></>,
  phone:<><path d="M7 3h3l1.3 4-2 1.5a16 16 0 0 0 6.2 6.2l1.5-2L21 14v3c0 2-1.5 4-4 4C9.3 20.5 3.5 14.7 3 7c0-2.5 2-4 4-4Z"/></>,
  instagram:<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".8" fill="currentColor" stroke="none"/></>,
  idea:<><path d="M9 18h6M10 21h4"/><path d="M8.5 15.5C7 14.4 6 12.7 6 10.7A6 6 0 0 1 18 10.7c0 2-1 3.7-2.5 4.8-.8.6-1.1 1.2-1.2 2.5h-4.6c-.1-1.3-.4-1.9-1.2-2.5Z"/></>,
  repeat:<><path d="M20 7h-9a6 6 0 0 0-6 6v1"/><path d="m17 4 3 3-3 3"/><path d="M4 17h9a6 6 0 0 0 6-6v-1"/><path d="m7 20-3-3 3-3"/></>,
  compass:<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/></>,
  check:<><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>
};

export default function Icon({name,size=18,strokeWidth=1.6,className=''}){
 return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.idea}</svg>;
}
