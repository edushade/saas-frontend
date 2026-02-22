import type { LucideIcon } from 'lucide-react';
import {
	Asterisk,
	Globe,
	Layers,
	RefreshCw,
	Signal,
	Tornado,
	Zap,
	Cpu,
	Flame,
	Triangle,
} from 'lucide-react';

export interface PlatformItem {
	name: string;
	stat: string;
	icon: LucideIcon;
}

export const PLATFORMS: PlatformItem[] = [
	{ name: 'Stamina',  stat: '8x platform growth',  icon: RefreshCw  },
	{ name: 'Vortex',   stat: '$5M+ funding raised',  icon: Tornado    },
	{ name: 'Velocity', stat: '3x program growth',    icon: Zap        },
	{ name: 'Synergy',  stat: '$2M+ revenue',         icon: Layers     },
	{ name: 'Enigma',   stat: '150+ educators',       icon: Asterisk   },
	{ name: 'Spectrum', stat: '20+ institutions',     icon: Signal     },
	{ name: 'Apex',     stat: '500+ courses live',    icon: Triangle   },
	{ name: 'Nexus',    stat: '12k+ learners',        icon: Globe      },
	{ name: 'Fuse',     stat: '$1M+ in payouts',      icon: Flame      },
	{ name: 'Orion',    stat: '99.9% uptime',         icon: Cpu        },
];
