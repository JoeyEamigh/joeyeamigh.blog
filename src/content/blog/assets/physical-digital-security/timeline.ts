import type { TimelineItem } from '../../../../components/Timeline.astro';

// ## Timeline
// - 24/08/08 3:46 PM ET - Disclosure submitted
// - 24/08/08 8:07 PM ET - Disclosure acknowledged
// - 24/08/09 - Work begins
// - 24/08/24 - Critical problems resolved
// - 24/10/02 - Architectural changes completed
// - 24/10/16 - Approval to publish blog post on condition of anonymity granted

export const timeline: TimelineItem[] = [
  {
    date: '24/08/08',
    event: 'Disclosure submitted',
  },
  {
    date: '24/08/08',
    event: 'Disclosure acknowledged',
  },
  {
    date: '24/08/09',
    event: 'Work begins',
  },
  {
    date: '24/08/24',
    event: 'Critical problems resolved',
  },
  {
    date: '24/10/02',
    event: 'Architectural changes completed',
  },
  {
    date: '24/10/16',
    event: 'Approval to publish blog post on condition of anonymity granted',
  },
];
