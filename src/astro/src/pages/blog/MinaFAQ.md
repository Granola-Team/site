---
layout: '../../layouts/default.astro'
title: Mina FAQ
type: article
date: 2022-09-20
---

# Mina FAQ

Here are answers to frequently asked questions about the [Mina
Protocol](https://minaprotocol.com) and why we at Granola use Mina.


### Q: What is 'zero-knowledge'?

A: Zero-knowledge is crytographic technology that allows one to prove that one
knows something without revealing that something.

For more, see [this Wikipedia entry](https://en.wikipedia.org/wiki/Zero-knowledge_proof).


### Q: What is a 'zkApp'?

A: 'zkApp' is the name for [smart
contracts](https://en.wikipedia.org/wiki/Smart_contract) on the Mina
blockchain.


### Q: In what language are zkApps developed?

A: At present, zkApps are written either with
[SnarkyJS](https://github.com/o1-labs/snarkyjs) (TypeScript/JavaScript) or with
[Snarky](https://github.com/o1-labs/snarky) (OCaml). It is possible to create
new languages for writing zkApps.


### Q: What are the top use cases for zkApps?

A: zkApps on Mina trustlessly verify off-chain computations and data without
disclosing sensitive information. Asking for top use cases is like asking "What
are some top use cases for computers?" No answer will be sufficient because the
possibilities are so vast.


### Q: Is Mina EVM-compatible?

A: No.

The on-chain decentralized apps of the Mina protocol (called "zkApps") are
unlike those of Ethereum dApps, and they are not compatible with the Ethereum
Virtual Machine (EVM).
See [the official Mina Protocol
documentation](https://docs.minaprotocol.com/zkapps/zkapps-for-ethereum-developers)
to understand more about the differences between the Mina and Ethereum.


### Q: Does the Mina community plan to create a 'zkEVM'?

A: Yes.

A 'zkEVM' entry exists on the [the official roadmap published by the Mina
Foundation](https://minaprotocol.com/mina-roadmap), but little else is known.
As yet, there is no exact definition of a 'zkEVM'.


<!--
### Q: Why should developers build on Mina instead of Ethereum?

- Mina Protocol supports zero-knowledge proofs and zero-knowledge applications (zkApps) natively. This put the power of ZK tech in the hands of developers since day one.
- Mina is on the cutting edge of ZK tech, being the first to implement some of the revolutionary cryptographic primitives.
- Mina is quickly gaining market share, but is still comparatively small. The chances of developing a major application on Mina are much higher than on Ethereum.

#### *Why should developers build on Mina and not Aleo?*

#### *Why should developers build on Mina and not Polygon?*

#### *What does it mean when you say Mina is a “succinct blockchain”?*

- The Mina blockchain is considered to be "succinct." this means that a node on the network doesn't need to replay the entire transaction history of the network in order to verify the current state of the chain
- It also means that any member on the network only needs to maintain up to *k* blocks of history in its state at any time, where *k* is currently set to 290
- This is accomplished by using recursive composition of Zero Knowledge proofs that are generated with every block, guaranteeing a constant, size, and hence, a succinct chain.

It's validity can be represented by a 22kB zk-SNARK

#### *How is Mina’s blockchain only 22kB?*

- Mina's blockchain is unique in that it maintains a constant size of 22kB. It accomplishes this by recursively composing Zero Knowledge proofs (TODO: add more // I added the paragraph below and we can work on combining/mixing)
- Mina's blockchain is small in size because it uses a novel consensus mechanism called "Proof of Stake Snapshots" that reduces the amount of data that needs to be stored by each node in the network. Essentially Mina Protocol takes the equivalent of a digital snapshot of the previous blocks and then puts that “photo” of the previous blocks together with the new transaction. This mechanism allows Mina to produce small block sizes and reduce the amount of data that must be stored to maintain the security and integrity of the blockchain. Additionally, Mina uses a compact Merkle tree data structure to store the blockchain state, further reducing the storage requirements for each node.

That's not the whole story. The zk-SNARK which represents the validity of all transitions of the Mina blockchain is 22kB. The totality of blocks on Mina is much larger, but a block producer does not need to retain all the blocks to particiapte in consensus. They only need to the most recent 290 blocks.

-->
