/**
 * Parse CSS custom properties (variables) from CSS content
 * @param cssContent - Raw CSS file content
 * @param pattern - Pattern to match in CSS variable names (e.g., 'color-primitive', 'spacing')
 * @returns Array of tokens with name and value, in the order they appear in CSS
 */
export function parseTokens(
  cssContent: string,
  pattern: string | RegExp,
): Array<{ name: string; value: string }> {
  const tokens: Array<{ name: string; value: string }> = [];
  const regex = /--codex-([^:]+):\s*([^;]+);/g;

  let match;
  while ((match = regex.exec(cssContent)) !== null) {
    const name = match[1].trim();
    const value = match[2].trim();

    // Check if the token name matches the pattern
    const patternRegex =
      pattern instanceof RegExp ? pattern : new RegExp(pattern);
    if (patternRegex.test(name)) {
      tokens.push({
        name: `--codex-${name}`,
        value,
      });
    }
  }

  return tokens;
}
