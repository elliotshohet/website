import type { ComponentProps, CSSProperties } from "react";
import {
  BrainCircuit, Braces, Cable, CodeXml, CreditCard, DatabaseZap, Network,
  ScanSearch, ShieldCheck, Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type SkillBadgeProps = Omit<ComponentProps<typeof Badge>, "children"> & {
  skill: string;
};

// Locally vendored Simple Icons assets; see public/skills/SOURCES.txt.
const brandRules: [RegExp, string][] = [
  [/typescript/i, "typescript"],
  [/javascript/i, "javascript"],
  [/react/i, "react"],
  [/next\.?js/i, "nextdotjs"],
  [/python/i, "python"],
  [/expo/i, "expo"],
  [/tailwind/i, "tailwindcss"],
  [/shadcn/i, "shadcnui"],
  [/node\.?js/i, "nodedotjs"],
  [/graphql/i, "graphql"],
  [/postgres/i, "postgresql"],
  [/prisma/i, "prisma"],
  [/supabase/i, "supabase"],
  [/redis/i, "redis"],
  [/openai/i, "openai"],
  [/model context protocol|\bmcp\b/i, "modelcontextprotocol"],
  [/vercel/i, "vercel"],
  [/aws lambda|\blambda\b/i, "awslambda"],
  [/amazon ec2|\bec2\b/i, "amazonec2"],
  [/amazon s3|\bs3\b/i, "amazons3"],
  [/amazon rds|\brds\b/i, "amazonrds"],
  [/google cloud storage/i, "googlecloudstorage"],
  [/google cloud|\bgcp\b/i, "googlecloud"],
  [/\baws\b/i, "amazonaws"],
  [/docker/i, "docker"],
  [/linux/i, "linux"],
  [/github actions/i, "githubactions"],
  [/playwright/i, "playwright"],
  [/jest/i, "jest"],
  [/mocha/i, "mocha"],
  [/chai/i, "chai"],
  [/solidity/i, "solidity"],
  [/ethereum/i, "ethereum"],
  [/\bipfs\b/i, "ipfs"],
  [/web3/i, "web3dotjs"],
  [/swift/i, "swift"],
  [/kotlin/i, "kotlin"],
  [/terraform/i, "terraform"],
  [/kubernetes/i, "kubernetes"],
  [/redux/i, "redux"],
  [/electron/i, "electron"],
  [/sharp/i, "sharp"],
  [/\bbun\b/i, "bun"],
];

const semanticProps = { "aria-hidden": true, focusable: false, style: { width: 16, height: 16, flex: "0 0 16px" }, strokeWidth: 1.6 } as const;

function semanticIcon(skill: string) {
  if (/rest|api/i.test(skill)) return <Braces {...semanticProps} />;
  if (/oauth|identity|access|authorization/i.test(skill)) return <ShieldCheck {...semanticProps} />;
  if (/websocket/i.test(skill)) return <Cable {...semanticProps} />;
  if (/nosql|data/i.test(skill)) return <DatabaseZap {...semanticProps} />;
  if (/llm|large language model|\bai\b|prompt/i.test(skill)) return <BrainCircuit {...semanticProps} />;
  if (/ci\s*\/\s*cd|workflow|automation|deployment/i.test(skill)) return <Workflow {...semanticProps} />;
  if (/testing|end.to.end|test/i.test(skill)) return <ScanSearch {...semanticProps} />;
  if (/payment|billing|erc20|bonding|token/i.test(skill)) return <CreditCard {...semanticProps} />;
  if (/network|palm|peer|webtorrent/i.test(skill)) return <Network {...semanticProps} />;
  return <CodeXml {...semanticProps} />;
}

export function SkillBadge({ skill, variant = "outline", ...props }: SkillBadgeProps) {
  const brand = brandRules.find(([pattern]) => pattern.test(skill))?.[1];
  const logoStyle: CSSProperties | undefined = brand ? {
    display: "inline-block",
    width: 16,
    height: 16,
    flex: "0 0 16px",
    backgroundColor: "currentColor",
    maskImage: `url("/skills/${brand}.svg")`,
    WebkitMaskImage: `url("/skills/${brand}.svg")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
  } : undefined;

  return (
    <Badge variant={variant} {...props}>
      {brand ? <span aria-hidden="true" data-skill-logo={brand} style={logoStyle} /> : semanticIcon(skill)}
      {skill}
    </Badge>
  );
}
