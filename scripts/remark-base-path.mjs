export default function remarkBasePath() {
  const base = process.env.BASE_PATH || "/";
  const prefix = base === "/" ? "" : base.replace(/\/$/, "");

  return (tree) => {
    walk(tree, (node) => {
      if ((node.type === "image" || node.type === "link") && node.url?.startsWith("/")) {
        node.url = `${prefix}${node.url}`;
      }
    });
  };
}

function walk(node, visit) {
  visit(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child, visit);
  }
}
