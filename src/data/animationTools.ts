
interface AnimationTool {
  name: string;
  href: string;
}

interface ToolCategory {
  title: string;
  tools: AnimationTool[];
}

export const animationToolsData: ToolCategory[] = [
  {
    title: 'Image to Video Generators',
    tools: [
      { name: 'Google Veo 2', href: 'https://aistudio.google.com/generate-video' },
      { name: 'SORA', href: 'https://www.sora.com' },
      { name: 'KLING', href: 'https://klingai.com' },
      { name: 'HAILUO', href: 'https://hailuoai.video/' },
      { name: 'HIGGSFIELD', href: 'https://higgsfield.ai/' },
      { name: 'RunwayML', href: 'https://runwayml.com/' },
      { name: 'PIKA LABS', href: 'https://pika.art/' },
      { name: 'Text To Video Prompt Generator GPT', href: 'https://texttovideoprompter.lovable.app/?via=aiwebtools' },
    ]
  },
  {
    title: 'Music & FX Generation',
    tools: [
      { name: 'MUSIC VIDEO MAKER GPT', href: 'https://musicvideomakergpt.lovable.app/?via=aiwebtools' },
      { name: 'UDIO MUSIC GENERATOR', href: 'https://www.udio.com/' },
      { name: 'SUNO Music Generator', href: 'https://suno.com/invite/@aiwebtools' },
      { name: 'Eleven Labs Voice & Sound Generator', href: 'https://elevenlabs.io/?from=kennybastian5304' },
    ]
  },
  {
    title: 'Lipsync',
    tools: [
      { name: 'Hedra', href: 'https://www.hedra.com/' },
    ]
  },
  {
    title: 'Editing Tools',
    tools: [
      { name: 'Filmora', href: 'https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1' },
    ]
  }
];

export type { AnimationTool, ToolCategory };
