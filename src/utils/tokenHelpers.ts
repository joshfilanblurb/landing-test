/**
 * Converts a CSS variable name to a human-readable display name.
 * Example: "--codex-color-primitive-blue-600" -> "Color Primitive Blue 600"
 */
export function toDisplayName(cssVar: string): string {
  return cssVar
    .replace("--codex-", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
