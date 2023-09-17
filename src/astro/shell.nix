{ sources ? import ../../nix/sources.nix
, pkgs ? import sources.nixpkgs {}
}:

pkgs.mkShell {
  packages = [
    pkgs.nodePackages.pnpm
    # pkgs.netlify-cli
  ];
}
