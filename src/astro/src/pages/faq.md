---
title: FAQ
layout: ../layouts/content.astro
draft: false
---

### Mina FAQ

some frequently asked questions about the MINA protocol and why we use it

# *Why should developers build on Mina and not Ethereum?*

- Mina Protocol supports zero-knowledge proofs and zero-knowledge applications (zkApps) natively. This put the power of ZK tech in the hands of developers since day one.
- Mina is a on the cutting edge of ZK tech.
- Mina is quickly gaining market share, but is still comparatively small. The chances of developing a major application on Mina are much higher.

# *Why should developers build on Mina and not Aleo?*

# *Why should developers build on Mina and not Polygon?*

# *Can you provide a very succinct and relatable explanation of zero knowledge?*

# *What is a zkApp?*

- ZkApps have two components: smart contract and UI. The UI can be written in your favorite language, no restrictions. The smart contracts are typically written in TypeScript/JavaScript using [SnarkyJS](https://github.com/o1-labs/snarkyjs), but they can also be written in OCaml using [Snarky](https://github.com/o1-labs/snarky). Writing zkApps on Mina has a very similar feel to writing smart contracts in Solidity.

# *What does it mean when you say Mina is a “succinct blockchain”?*

It's validity can be represented by a 22kB zk-SNARK

# *How is Mina’s blockchain only 22kB?*

That's not the whole story. The zk-SNARK which represents the validity of all transitions of the Mina blockchain is 22kB. The totality of blocks on Mina is much larger, but a block producer does not need to retain all the blocks to particiapte in consensus. They only need to the most recent 290 blocks.

# *What language are zkApps developed in? Is it hard to learn?*
- Ethereum smart contracts are typically written in the programming language Solidity. Solidity has its own unique syntax and features that one needs to learn. Usually programmers and software engineers learn Javascript/TypeScript before moving onto more difficult languages, such as Solidity.
- Mina recognized the challenges with building ZkApps with Solidity and has developed SnarkyJS. With Mina, zkApps are written in TypeScript using SnarkyJS. SnarkyJS is a TypeScript library for writing smart contracts based on zero-knowledge proofs for the Mina Protocol. It is included automatically when creating a new project using the Mina zkApp CLI.
- This link directly from Mina (https://docs.minaprotocol.com/zkapps/how-to-write-a-zkapp) provides a guide on how to write a ZkApp in Mina, including the steps for setting up the development environment, writing and testing the smart contract code, deploying the ZkApp to the Mina network, and using the ZkApp from a client. The guide also provides information on the tools and resources available for building and deploying ZkApps on Mina. Overall, the guide is intended to help developers get started with writing ZkApps on Mina, and to provide a comprehensive introduction to the concepts and tools required for building and deploying ZkApps on the Mina blockchain.

# *Is Mina EVM compatible?*

Pretty sure it's not

# *Does Mina have plans for a zkEVM?*

- `=nil;` foundation has been working on putting Mina blockchain proofs on Ethereum [probably not the best link?](https://minacrypto.com/2021/10/02/bridging-mina-with-ethereum-meet-nil-foundation/) so that one can access info about Mina from Ethereum

# *What are some top use case examples for zkApps?*

- any application which values the privacy of their user's data and wants to harness the power of zero-knowledge proofs
- for example, a zkApp can verify a user's credit score or social security number without forcing the user to ever reveal this info, this is a big deal on a public blockchain
- privacy-preserving teransactions
