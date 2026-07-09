#!/usr/bin/env sh
# Clone the full Patterson design system source.
#
# This skill bundles the tokens, brand guide, component docs, and runtime needed
# for most work. The complete source — UI kits, page and deck templates, specimen
# galleries, brand photography, and component source — lives in the design-system
# repository. Run this to fetch it when a task needs more than the bundled assets.
#
# Usage: sh fetch-full-source.sh [target-dir]   (default: ./patterson-design-system)

set -eu

repo="https://github.com/Patterson-Agents/design-system.git"
target="${1:-./patterson-design-system}"

if [ -d "$target/.git" ]; then
  git -C "$target" pull --ff-only
else
  git clone --depth 1 "$repo" "$target"
fi

echo "Patterson design system source available at: $target"
