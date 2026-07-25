// Rewrites src="/..." and href="/..." found in raw HTML inside markdown
// content so they resolve correctly under the site's base path.
export default function remarkBasePath(base) {
  return (tree) => {
    const walk = (node) => {
      if (node.type === "html" && typeof node.value === "string") {
        node.value = node.value.replace(/((?:src|href)=")\//g, `$1${base}`);
      }
      if (node.children) node.children.forEach(walk);
    };
    walk(tree);
  };
}
