/** /uses page: tools and gear. Moved unchanged from the previous site. */

export const uses = {
  sectionLabel: "→ /uses",
  heading: "What I work with.",
  lead:
    "The tools I reach for every day, and the short version of why. Updated whenever I switch something out.",
  groups: [
    {
      title: "Editor",
      items: [
        { name: "Cursor",            note: "VS Code-derived editor with built-in Claude / GPT pair-programming. My daily driver." },
        { name: "VS Code",           note: "Fallback for when I need an extension Cursor doesn't have yet." },
        { name: "GitHub Copilot",    note: "Inline completions. Pairs with Cursor's chat." },
        { name: "Claude Code",       note: "When I need an agent that can run shell commands and edit files end-to-end." },
      ],
    },
    {
      title: "Terminal",
      items: [
        { name: "iTerm2",  note: "Tabs, split panes, hotkey window. Configured with the Tokyo Night theme." },
        { name: "zsh + Oh My Zsh", note: "Git plugin, autosuggestions, syntax highlighting." },
        { name: "Starship", note: "Cross-shell prompt. Shows git status + the language version of the cwd." },
        { name: "fzf",     note: "Fuzzy file/command finder. `Ctrl+R` history search is non-negotiable." },
      ],
    },
    {
      title: "Hardware",
      items: [
        { name: "MacBook Pro 14\" (M3 Pro)", note: "Primary machine. Quiet, fast, lasts a workday on battery." },
        { name: "External 27\" display",    note: "Vertical pair-up with the laptop screen for code + browser side-by-side." },
        { name: "Logitech MX Master 3S",    note: "Tab switching with the side wheel saves a real number of minutes per day." },
        { name: "Keychron K2 (brown switches)", note: "Compact mechanical board, USB-C, hot-swappable." },
      ],
    },
    {
      title: "Apps",
      items: [
        { name: "Linear",      note: "Issue tracking for personal projects. Loves keyboard shortcuts the way I do." },
        { name: "Notion",      note: "Notes, drafts, second brain. Database views for project planning." },
        { name: "Raycast",     note: "Spotlight replacement. Window management + clipboard history + AI chat." },
        { name: "Arc",         note: "Daily driver browser. Tab groups by project keep context separate." },
        { name: "Postman",     note: "API testing for every project. Saves request collections per project." },
      ],
    },
    {
      title: "Fonts & UI",
      items: [
        { name: "JetBrains Mono",   note: "Editor + terminal. Ligatures on. Variable weight for emphasis." },
        { name: "Inter Variable",   note: "Default for any UI I build." },
        { name: "Tokyo Night",      note: "Editor + terminal theme. Dark, low contrast, easy on the eyes." },
      ],
    },
    {
      title: "CLIs",
      items: [
        { name: "git",          note: "Daily." },
        { name: "gh",           note: "GitHub CLI for `gh pr create` and PR reviews from the terminal." },
        { name: "node + npm",   note: "Volta-managed across multiple Node versions." },
        { name: "go",           note: "Backend services. The url-shortener project lives here." },
        { name: "docker",       note: "Compose for local Postgres + Redis." },
        { name: "lychee",       note: "Broken-link checker. Run before every deploy." },
      ],
    },
  ],
} as const;
