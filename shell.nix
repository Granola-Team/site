{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/752c634c09ceb50c45e751f8791cb45cb3d46c9e.tar.gz") {}
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.cacert  # Needed for pnpm to use the network
    pkgs.netlify-cli
    pkgs.nodePackages.pnpm
  ];
}
