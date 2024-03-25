{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/e1d501922fd7351da4200e1275dfcf5faaad1220.tar.gz") {}
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.cacert  # Needed for pnpm to use the network
    pkgs.nodePackages.pnpm
    pkgs.netlify-cli
  ];
}
