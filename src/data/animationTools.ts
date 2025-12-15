
interface AnimationTool {
  name: string;
  href: string;
  isTopRated?: boolean;
  description?: string;
}

interface ToolCategory {
  title: string;
  tools: AnimationTool[];
  isTopRated?: boolean;
}

export const animationToolsData: ToolCategory[] = [
  {
    title: '⭐ Top Rated Video Generation',
    isTopRated: true,
    tools: [
      { 
        name: 'SORA 2', 
        href: 'https://www.sora.com', 
        isTopRated: true,
        description: 'Video + Sound generation in one'
      },
      { 
        name: 'Google Veo 3', 
        href: 'https://aistudio.google.com/generate-video', 
        isTopRated: true,
        description: 'Video + Sound generation in one'
      },
    ]
  },
  {
    title: 'Image to Video Generators',
    tools: [
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
      { name: 'FLEXCLIP - Add Sound Effects To Video', href: 'https://www.flexclip.com/ai/video-to-ai-sfx-generator/' },
    ]
  },
  {
    title: 'Lipsync',
    tools: [
      { name: 'Hedra', href: 'https://www.hedra.com/' },
      { name: 'VEO FLOW', href: 'https://labs.google/fx/tools/flow' },
      { name: '⭐ VEO 3 PROMPT Generator', href: 'https://chatgpt.com/g/g-682faef24c608191808180e89719cb09-veo3-text-to-video-prompt-maker' },
    ]
  },
  {
    title: 'Editing Tools',
    tools: [
      { name: 'Filmora', href: 'https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1' },
      { name: 'Videoleap', href: 'https://www.videoleapapp.com/' },
    ]
  }
];

export type { AnimationTool, ToolCategory };
