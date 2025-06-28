export type TerminalProps = {
  command: string;
  output: string;
};

export const TerminalCard = ({ command, output }: TerminalProps) => (
  <div className="relative w-full flex-col md:w-auto md:self-start flex aspect-video flex-grow self-start md:max-w-lg">
    <div className="border-foreground border-2 bg-background relative w-full">
      <div className="bg-foreground flex flex-row justify-between px-2 py-1 text-xs text-background">
        <span className="font-bold">Terminal</span>
        <span className="mb-1 h-0.5 w-2 self-end bg-background"></span>
      </div>
      <div className="flex flex-col overflow-auto p-4 font-mono text-sm">
        <pre className="flex flex-col gap-y-2 pb-4">
          <code>$ {command}</code>
          <code className="text-muted-foreground">{output}</code>
        </pre>
      </div>
    </div>
  </div>
);
