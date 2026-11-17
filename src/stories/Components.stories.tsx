import type { Meta, StoryObj } from '@storybook/react-vite';
import { KarolButton, KarolImageFeatureCard, KarolImageTextCard, KarolTextCard } from '../components/KarolComponents';

const demoImage='https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85';
const meta={title:'Components/Patterns',component:KarolButton,tags:['autodocs']} satisfies Meta<typeof KarolButton>;
export default meta;
type Story=StoryObj<typeof meta>;

export const Buttons:Story={render:()=> <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))',gap:16,alignItems:'center'}}>{(['filled-j','filled-a','filled-k','tonal-j','tonal-a','tonal-k','elevated','outlined','text'] as const).map(variant=><KarolButton key={variant} variant={variant} fitContent>{variant}</KarolButton>)}</div>};
export const ImageAndTextCard:Story={render:()=> <div style={{padding:32,background:'var(--karol-brand-primary)'}}><KarolImageTextCard image={demoImage} imageAlt="Modern architecture" eyebrow="2026 · Product design" title="A clearer way to discover and access services" description="A large visual pairs with a supporting text panel and a clear next action."/></div>};
export const TextCards:Story={render:()=> <div style={{display:'flex',gap:'2%',padding:32,background:'var(--karol-brand-primary)'}}>{['Discover','Explore','Access'].map(label=><KarolTextCard key={label} align="top"><p className="karol-type-label">Pattern</p><h2 className="karol-type-heading">{label}</h2><p className="karol-type-body">A flexible text panel with content aligned to the top.</p></KarolTextCard>)}</div>};
export const ImageFeature:Story={render:()=> <div style={{display:'flex',gap:16,padding:32,background:'var(--karol-brand-primary)'}}><KarolImageFeatureCard image={demoImage} title="Key outcomes" description="A compact image-led feature card with content anchored at the bottom."/></div>};
export const FullWidthImageFeature:Story={render:()=> <div style={{padding:32,background:'var(--karol-brand-primary)'}}><KarolImageFeatureCard fullWidth image={demoImage} title="A full-width feature" description="A larger visual surface for a featured project or announcement."/></div>};
