{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/51d906d2341c9e866e48c2efcaac0f2d70bfd43e.tar.gz") {}
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.netlify-cli
    pkgs.nodePackages.pnpm
  ];
}
